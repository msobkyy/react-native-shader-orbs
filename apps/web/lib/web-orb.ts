import { createOrbShader } from "@orbs/orbShader";
import type { OrbTouch, OrbValues } from "@orbs/orbShader";
import type { OrbDefinition } from "@orbs/types";

// The same drive logic the React Native component uses (springs, moods, volumes, touch), rendered through the
// browser's own WebGPU. Only the canvas plumbing differs from the native renderer.

const VERTEX = /* wgsl */ `
struct VOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs(@builtin(vertex_index) i: u32) -> VOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var o: VOut;
  o.pos = vec4f(p[i], 0, 1);
  o.uv = vec2f(p[i].x * 0.5 + 0.5, 0.5 - p[i].y * 0.5);
  return o;
}`;

export const webgpuSupported = () => typeof navigator !== "undefined" && "gpu" in navigator;

interface Shared {
  device: GPUDevice;
  format: GPUTextureFormat;
  pipelines: Map<string, Promise<GPURenderPipeline>>;
}

let shared: Promise<Shared | null> | null = null;

const getShared = (): Promise<Shared | null> => {
  shared ??= (async () => {
    // Some browsers and drivers never settle this promise; don't leave the page waiting on it forever.
    const adapter = await Promise.race([
      navigator.gpu.requestAdapter(),
      new Promise<null>((done) => setTimeout(() => done(null), 6000)),
    ]);
    if (!adapter) {
      return null;
    }
    const device = await adapter.requestDevice();
    device.lost.then(() => {
      shared = null;
    });
    return { device, format: navigator.gpu.getPreferredCanvasFormat(), pipelines: new Map() };
  })().catch(() => null);
  return shared;
};

const getPipeline = (gpu: Shared, def: OrbDefinition): Promise<GPURenderPipeline> => {
  let pipeline = gpu.pipelines.get(def.slug);
  if (!pipeline) {
    const module = gpu.device.createShaderModule({ code: VERTEX + def.wgsl });
    pipeline = gpu.device.createRenderPipelineAsync({
      layout: "auto",
      vertex: { module, entryPoint: "vs" },
      fragment: {
        module,
        entryPoint: def.entryPoint,
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
    });
    gpu.pipelines.set(def.slug, pipeline);
  }
  return pipeline;
};

export interface MountOptions {
  /** Live values, read every frame. Mutate the object to drive the orb; no re-render needed. */
  values?: OrbValues;
  /** Frame cap. Default 60. */
  maxFps?: number;
  /** Fraction of the canvas' CSS size actually rendered. Default 1; lower is cheaper. */
  scale?: number;
  /** Cap on devicePixelRatio. Default 2. */
  maxDpr?: number;
  /** Tap pulses the orb, holding swells it. */
  interactive?: boolean;
  /** Stop rendering this long after the first frame, leaving a still. For thumbnails. */
  freezeAfterMs?: number;
  /** Start paused. */
  paused?: boolean;
  /** Called after the first frame is on screen. */
  onReady?: () => void;
}

export interface MountedOrb {
  setPaused: (paused: boolean) => void;
  /** Freeze on the current frame (stops the render loop), or wake it again. Waking cancels the `freezeAfterMs` timer. */
  setFrozen: (frozen: boolean) => void;
  destroy: () => void;
}

/** Renders `def` into `canvas`. Resolves null when WebGPU isn't available, so callers can fall back. */
export const mountOrb = async (
  canvas: HTMLCanvasElement,
  def: OrbDefinition,
  options: MountOptions = {}
): Promise<MountedOrb | null> => {
  if (!webgpuSupported()) {
    return null;
  }
  const gpu = await getShared();
  const context = canvas.getContext("webgpu");
  if (!gpu || !context) {
    return null;
  }
  const { device, format } = gpu;
  context.configure({ device, format, alphaMode: "premultiplied" });
  const pipeline = await getPipeline(gpu, def);

  const values: OrbValues = options.values ?? {};
  const touch: OrbTouch = { down: false, tap: false };
  const shader = createOrbShader(def, () => values, options.interactive ? touch : undefined);

  const uniform = device.createBuffer({
    size: shader.uniformSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [{ binding: 0, resource: { buffer: uniform } }],
  });
  const floats = new Float32Array(shader.uniformSize / 4);

  const scale = options.scale ?? 1;
  const maxDpr = options.maxDpr ?? 2;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr) * scale;
    const w = Math.max(2, Math.round(canvas.clientWidth * dpr));
    const h = Math.max(2, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  };
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);

  const interval = 1000 / (options.maxFps ?? 60);
  let raf = 0;
  let destroyed = false;
  let visible = true;
  let paused = options.paused ?? false;
  let t0 = 0;
  let lastRender = 0;
  let frozen = false;
  // The initial "draw for a moment, then freeze" only applies until someone takes manual control.
  let autoFreeze = true;
  let firstAt = 0;
  let announced = false;
  // While paused the clock must not keep running, or the orb would jump forward on resume.
  let pausedAt = 0;
  let pausedTotal = 0;

  const frame = (now: number) => {
    if (destroyed || frozen) {
      return;
    }
    raf = requestAnimationFrame(frame);
    if (!visible || paused || document.hidden || now - lastRender < interval - 2) {
      return;
    }
    lastRender = now;
    t0 ||= now;
    firstAt ||= now;

    shader.write(floats, (now - t0 - pausedTotal) / 1000, canvas.width, canvas.height);
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

    if (!announced) {
      announced = true;
      options.onReady?.();
    }
    if (autoFreeze && options.freezeAfterMs !== undefined && now - firstAt > options.freezeAfterMs) {
      frozen = true;
    }
  };
  raf = requestAnimationFrame(frame);

  // Offscreen orbs cost nothing.
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  io.observe(canvas);

  // Touch: a quick press is a tap (pulse); holding swells the orb.
  let downAt = 0;
  const down = (e: PointerEvent) => {
    touch.down = true;
    downAt = performance.now();
    canvas.setPointerCapture(e.pointerId);
  };
  const up = (completed: boolean) => {
    if (!touch.down) {
      return;
    }
    touch.down = false;
    if (completed && performance.now() - downAt < 250) {
      touch.tap = true;
    }
  };
  const onUp = () => up(true);
  const onCancel = () => up(false);
  if (options.interactive) {
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onCancel);
  }

  return {
    setFrozen: (next) => {
      autoFreeze = false;
      if (next === frozen || destroyed) {
        return;
      }
      frozen = next;
      if (next) {
        cancelAnimationFrame(raf);
      } else {
        lastRender = 0;
        raf = requestAnimationFrame(frame);
      }
    },
    setPaused: (next) => {
      if (next === paused) {
        return;
      }
      paused = next;
      if (next) {
        pausedAt = performance.now();
      } else if (pausedAt) {
        pausedTotal += performance.now() - pausedAt;
        pausedAt = 0;
      }
    },
    destroy: () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onCancel);
      uniform.destroy();
    },
  };
};
