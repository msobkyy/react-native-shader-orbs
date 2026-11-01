export type OrbState = "idle" | "thinking" | "speaking";

export const ORB_STATES = ["idle", "thinking", "speaking"] as const;

export interface OrbParam {
  key: string;
  label: string;
  default: number;
  min: number;
  max: number;
  step: number;
  /** Phase clock: the uniform holds the time integral of the value. */
  integrate: boolean;
}

export interface OrbColor {
  key: string;
  label: string;
  default: string;
}

export interface UniformField {
  /** Offset in floats. */
  offset: number;
  size: number;
}

/** A shader ready to render: WGSL plus the per-frame writer that fills its uniform buffer. */
export interface OrbShader {
  /** WGSL containing a fragment entry taking `@location(0) uv: vec2f` and `@group(0) @binding(0) var<uniform> params`. */
  wgsl: string;
  entryPoint: string;
  /** Uniform buffer size in bytes: the WGSL struct size, a multiple of the struct's alignment (4, 8 or 16). */
  uniformSize: number;
  /** Fill the uniform floats for this frame. `time` is seconds since start. */
  write: (f32: Float32Array, time: number, width: number, height: number) => void;
}

/** A shader generated from upstream shadercn by `packages/codegen`. */
export interface OrbDefinition {
  slug: string;
  title: string;
  note: string;
  entryPoint: string;
  /** Bytes. */
  uniformSize: number;
  offsets: Record<string, UniformField>;
  params: OrbParam[];
  colors: OrbColor[];
  statePresets?: Partial<Record<OrbState, Record<string, number>>>;
  stateColors?: Partial<Record<OrbState, Record<string, string>>>;
  wgsl: string;
}
