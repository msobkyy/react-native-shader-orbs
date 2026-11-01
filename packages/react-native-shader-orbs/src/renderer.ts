import { GPUBufferUsage } from "react-native-webgpu";
import type { RNCanvasContext } from "react-native-webgpu";

import type { OrbShader } from "./types";

export type { OrbShader };

export interface OrbRendererOptions {
  /** Frame cap. Default 60. */
  maxFps?: number;
  /** Called about once a second with the rendered frames per second. */
  onFps?: (fps: number) => void;
  /** Called once, after the first frame has been presented. */
  onFirstFrame?: () => void;
  /** The GPU device was lost (driver reset, backgrounding). Drawing has stopped; create a new renderer to recover. */
  onLost?: () => void;
}

export interface OrbRenderer {
  start: () => void;
  stop: () => void;
  setMaxFps: (fps: number) => void;
  destroy: () => void;
}

const VERTEX = /* wgsl */ `
struct VOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var o: VOut;
  o.pos = vec4f(p[i], 0, 1);
  o.uv = vec2f(p[i].x * 0.5 + 0.5, 0.5 - p[i].y * 0.5);
  return o;
}`;

/* One device for every orb: requesting a device per orb is the slowest part of mounting. */
interface Shared {
  device: GPUDevice;
  format: GPUTextureFormat;
  pipelines: Map<string, Promise<GPURenderPipeline>>;
}

let shared: Promise<Shared> | null = null;

const getShared = (): Promise<Shared> => {
  if (!shared) {
    shared = (async () => {
      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        throw new Error("WebGPU adapter unavailable");
      }
      const device = await adapter.requestDevice();
      const entry: Shared = {
        device,
        format: navigator.gpu.getPreferredCanvasFormat(),
        pipelines: new Map(),
      };
      // Lost device (backgrounding, driver reset): next orb requests a fresh one.
      device.lost.then(() => {
        shared = null;
      });
      return entry;
    })();
    shared.catch(() => {
      shared = null;
    });
  }
  return shared;
};

const getPipeline = (gpu: Shared, shader: OrbShader): Promise<GPURenderPipeline> => {
  const key = `${shader.entryPoint}:${shader.wgsl.length}:${shader.wgsl.slice(0, 200)}`;
  let pipeline = gpu.pipelines.get(key);
  if (!pipeline) {
    const module = gpu.device.createShaderModule({ code: VERTEX + shader.wgsl });
    const descriptor: GPURenderPipelineDescriptor = {
      layout: "auto",
      vertex: { module, entryPoint: "vs" },
      fragment: {
        module,
        entryPoint: shader.entryPoint,
        targets: [
          {
            format: gpu.format,
            blend: {
              color: { srcFactor: "one", dstFactor: "one-minus-src-alpha" },
              alpha: { srcFactor: "one", dstFactor: "one-minus-src-alpha" },
            },
          },
        ],
      },
      primitive: { topology: "triangle-list" },
    };
    // Async creation keeps shader compilation off the JS thread.
    pipeline = gpu.device.createRenderPipelineAsync
      ? gpu.device.createRenderPipelineAsync(descriptor)
      : Promise.resolve(gpu.device.createRenderPipeline(descriptor));
    pipeline.catch(() => gpu.pipelines.delete(key));
    gpu.pipelines.set(key, pipeline);
  }
  return pipeline;
};

export const createOrbRenderer = async (
  context: RNCanvasContext,
  shader: OrbShader,
  size: () => { width: number; height: number },
  options: OrbRendererOptions = {}
): Promise<OrbRenderer> => {
  const gpu = await getShared();
  const { device, format } = gpu;
  context.configure({ device, format, alphaMode: "premultiplied" });

  const pipeline = await getPipeline(gpu, shader);

  const uniform = device.createBuffer({
    size: shader.uniformSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: uniform } }],
  });
  const floats = new Float32Array(shader.uniformSize / 4);

  let raf = 0;
  let running = false;
  let interval = 1000 / (options.maxFps ?? 60);
  let t0 = 0;
  let lastRender = 0;
  let windowStart = 0;
  let windowFrames = 0;
  const onFps = options.onFps;
  let onFirstFrame = options.onFirstFrame;

  const frame = (now: number) => {
    if (!running) {
      return;
    }
    raf = requestAnimationFrame(frame);

    // Everything keys off the rAF timestamp: its clock may differ from performance.now().
    if (!t0) {
      t0 = now;
    }
    if (!windowStart) {
      windowStart = now;
    }

    // Cap: skip display frames that arrive before the next slot (2ms of jitter tolerance).
    if (now - lastRender < interval - 2) {
      return;
    }
    lastRender = now;

    const { width, height } = size();
    shader.write(floats, (now - t0) / 1000, width, height);
    device.queue.writeBuffer(uniform, 0, floats);

    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: context.getCurrentTexture().createView(),
          clearValue: { r: 0, g: 0, b: 0, a: 0 },
          loadOp: "clear",
          storeOp: "store",
        },
      ],
    });
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    device.queue.submit([encoder.finish()]);
    context.present();

    if (onFirstFrame) {
      onFirstFrame();
      onFirstFrame = undefined;
    }

    windowFrames += 1;
    if (now - windowStart >= 1000) {
      onFps?.((windowFrames * 1000) / (now - windowStart));
      windowStart = now;
      windowFrames = 0;
    }
  };

  const halt = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  // A lost device would make every frame throw; stop drawing and let the owner build a new renderer.
  let destroyed = false;
  device.lost.then(() => {
    halt();
    if (!destroyed) {
      options.onLost?.();
    }
  });

  return {
    start: () => {
      if (!running) {
        running = true;
        lastRender = 0;
        windowStart = 0;
        windowFrames = 0;
        raf = requestAnimationFrame(frame);
      }
    },
    stop: halt,
    setMaxFps: (fps) => {
      interval = 1000 / Math.max(1, fps);
    },
    destroy: () => {
      destroyed = true;
      halt();
      uniform.destroy();
    },
  };
};
