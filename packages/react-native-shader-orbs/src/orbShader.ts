import type { OrbDefinition, OrbShader, OrbState } from "./types";

export interface OrbValues {
  state?: OrbState;
  /** Param values by key. Win over the state's preset. */
  params?: Record<string, number>;
  /** Hex colors by key. Win over the state's colors. */
  colors?: Record<string, string>;
  statePresets?: Partial<Record<OrbState, Record<string, number>>>;
  stateColors?: Partial<Record<OrbState, Record<string, string>>>;
  stateVolumes?: Partial<Record<OrbState, { input?: number; output?: number }>>;
  /** Explicit input/output levels, 0..1. Win over the synthesized ones. */
  volumes?: { input?: number; output?: number };
}

// Ported from shadercn's renderer.ts (MIT).
const PARAM_EASE = 4;
const VOLUME_EASE = 12;
const MAX_STEP = 0.05;

// Touch feel, in seconds.
const HOLD_RISE = 0.45;
const HOLD_FALL = 0.7;
const PULSE_FALL = 0.8;

/** Touch state written by the view and consumed once per frame by the shader. */
export interface OrbTouch {
  down: boolean;
  /** Set by a quick press-and-release; the shader clears it after starting the pulse. */
  tap: boolean;
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const targetVolumes = (state: OrbState, t: number): [number, number] => {
  if (state === "speaking") {
    return [clamp01(0.65 + Math.sin(t * 4.8) * 0.22), clamp01(0.75 + Math.sin(t * 3.6) * 0.22)];
  }
  if (state === "thinking") {
    const base = 0.38 + 0.07 * Math.sin(t * 0.7);
    const wander = 0.05 * Math.sin(t * 2.1) * Math.sin(t * 0.37 + 1.2);
    return [clamp01(base + wander), clamp01(0.48 + 0.12 * Math.sin(t * 1.05 + 0.6))];
  }
  return [0, 0.3];
};

const spring = { v: 0, x: 0 };
const springStep = (x: number, v: number, target: number, dt: number) => {
  const f = 1 + 2 * dt * PARAM_EASE;
  const hoo = dt * PARAM_EASE * PARAM_EASE;
  const hhoo = dt * hoo;
  const detInv = 1 / (f + hhoo);
  spring.x = (f * x + dt * v + hhoo * target) * detInv;
  spring.v = (v + hoo * (target - x)) * detInv;
};

const writeHex = (hex: string, out: Float32Array, at: number) => {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const n = Number.parseInt(h, 16);
  if (h.length !== 6 || Number.isNaN(n)) {
    out[at] = 1;
    out[at + 1] = 1;
    out[at + 2] = 1;
    return;
  }
  out[at] = Math.floor(n / 0x1_00_00) / 255;
  out[at + 1] = (Math.floor(n / 0x1_00) % 256) / 255;
  out[at + 2] = (n % 256) / 255;
};

/** Bind a generated definition to live prop values; mirrors shadercn's per-frame drive. */
export const createOrbShader = (
  def: OrbDefinition,
  read: () => OrbValues,
  touch?: OrbTouch
): OrbShader => {
  const paramCur = new Float32Array(def.params.length);
  const paramVel = new Float32Array(def.params.length);
  const paramClock = new Float32Array(def.params.length);
  const colorCur = new Float32Array(def.colors.length * 3);
  const colorVel = new Float32Array(def.colors.length * 3);
  // Parsed target colors, re-parsed only when a color string actually changes (not 60 times a second).
  const colorTarget = new Float32Array(def.colors.length * 3);
  const colorHex: (string | undefined)[] = new Array(def.colors.length);
  const slot = (name: string) => def.offsets[name].offset;
  // Resolved once: building `p_${key}` strings every frame would allocate 60 times a second.
  const paramSlot = def.params.map((p) => slot(`p_${p.key}`));
  const colorSlot = def.colors.map((c) => slot(`c_${c.key}`));
  const timeSlot = slot("time");
  const animSlot = slot("anim");
  const inputSlot = slot("inputVol");
  const outputSlot = slot("outputVol");
  const resSlot = slot("res");

  def.params.forEach((p, i) => {
    paramCur[i] = p.default;
    paramClock[i] = p.integrate ? Math.random() * 100 : 0;
  });
  def.colors.forEach((c, i) => writeHex(c.default, colorCur, i * 3));

  const first = read();
  const [restingIn, restingOut] = targetVolumes(first.state ?? "idle", 0);
  const volume = { in: restingIn, out: restingOut };
  let seconds = 0;
  let anim = Math.random() * 100;
  let speed = 0.1;
  let speedVel = 0;
  let last = -1;
  let hold = 0;
  let pulse = 0;

  return {
    wgsl: def.wgsl,
    entryPoint: def.entryPoint,
    uniformSize: def.uniformSize,
    write: (f32, time, width, height) => {
      const dt = last < 0 ? 0 : Math.min(Math.max(time - last, 0), MAX_STEP);
      last = time;
      seconds += dt;
      const live = read();
      let state = live.state ?? "idle";

      // Touch: holding builds `hold` up and an idle orb takes on its speaking look; a tap kicks `pulse`.
      if (touch) {
        hold = touch.down ? Math.min(1, hold + dt / HOLD_RISE) : Math.max(0, hold - dt / HOLD_FALL);
        if (touch.tap) {
          touch.tap = false;
          pulse = 1;
        }
        pulse = Math.max(0, pulse - dt / PULSE_FALL);
        if (hold > 0.35 && state === "idle") {
          state = "speaking";
        }
      }

      // Volumes and the shared flow clock.
      const [synthIn, synthOut] = targetVolumes(state, seconds);
      const stateVolume = live.stateVolumes?.[state];
      let targetIn = live.volumes?.input ?? stateVolume?.input ?? synthIn;
      let targetOut = live.volumes?.output ?? stateVolume?.output ?? synthOut;
      if (touch) {
        targetIn = Math.max(targetIn, hold * 0.85, pulse * 0.7);
        targetOut = Math.max(targetOut, hold * 0.5, pulse * 0.95);
      }
      const kVol = 1 - Math.exp(-dt * VOLUME_EASE);
      volume.in += (targetIn - volume.in) * kVol;
      volume.out += (targetOut - volume.out) * kVol;
      springStep(speed, speedVel, 0.1 + (1 - (volume.out - 1) ** 2) * 0.9, dt);
      speed = spring.x;
      speedVel = spring.v;
      anim += dt * speed;

      f32[timeSlot] = seconds * 0.5;
      f32[animSlot] = anim;
      f32[inputSlot] = volume.in;
      f32[outputSlot] = volume.out;
      f32[resSlot] = width;
      f32[resSlot + 1] = height;

      // Params.
      const preset = live.statePresets?.[state] ?? def.statePresets?.[state];
      for (let i = 0; i < def.params.length; i += 1) {
        const p = def.params[i];
        const explicit = live.params?.[p.key];
        const target = Math.min(
          p.max,
          Math.max(p.min, typeof explicit === "number" ? explicit : (preset?.[p.key] ?? p.default))
        );
        springStep(paramCur[i], paramVel[i], target, dt);
        paramCur[i] = spring.x;
        paramVel[i] = spring.v;
        if (p.integrate) {
          paramClock[i] += dt * speed * spring.x;
          f32[paramSlot[i]] = paramClock[i];
        } else {
          f32[paramSlot[i]] = spring.x;
        }
      }

      // Colors.
      const stateColor = live.stateColors?.[state] ?? def.stateColors?.[state];
      for (let i = 0; i < def.colors.length; i += 1) {
        const c = def.colors[i];
        const hex = live.colors?.[c.key] ?? stateColor?.[c.key] ?? c.default;
        if (hex !== colorHex[i]) {
          colorHex[i] = hex;
          writeHex(hex, colorTarget, i * 3);
        }
        for (let ch = 0; ch < 3; ch += 1) {
          springStep(colorCur[i * 3 + ch], colorVel[i * 3 + ch], colorTarget[i * 3 + ch], dt);
          colorCur[i * 3 + ch] = spring.x;
          colorVel[i * 3 + ch] = spring.v;
          f32[colorSlot[i] + ch] = spring.x;
        }
      }
    },
  };
};
