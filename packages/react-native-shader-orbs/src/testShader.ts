import type { OrbShader } from "./renderer";

/** Hand-written spike shader (not from shadercn): proves the pipeline end to end. */
export const testOrb: OrbShader = {
  entryPoint: "fs",
  uniformSize: 16,
  write: (f, time, width, height) => {
    f[0] = time;
    f[2] = width;
    f[3] = height;
  },
  wgsl: /* wgsl */ `
struct Params { time: f32, pad: f32, res: vec2f };
@group(0) @binding(0) var<uniform> params: Params;

@fragment fn fs(@location(0) uv: vec2f) -> @location(0) vec4f {
  let p = uv * 2.0 - 1.0;
  let r = length(p);
  let a = atan2(p.y, p.x);
  let wave = 0.5 + 0.5 * sin(a * 6.0 + params.time * 2.0 + r * 8.0);
  let mask = 1.0 - smoothstep(0.85, 0.9, r);
  let col = mix(vec3f(0.1, 0.3, 1.0), vec3f(1.0, 0.3, 0.8), wave) * (1.0 - r * 0.5);
  return vec4f(col * mask, mask);
}`,
};
