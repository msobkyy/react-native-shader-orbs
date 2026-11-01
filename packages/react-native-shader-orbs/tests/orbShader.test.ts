import { describe, expect, it } from "vitest";
import { orb01, orb05 } from "../src/orbs";
import { createOrbShader, type OrbTouch, type OrbValues } from "../src/orbShader";
import type { OrbDefinition } from "../src/types";

/** Runs the shader for `seconds` of simulated 60 fps frames and returns the uniform buffer after the last one. */
const run = (def: OrbDefinition, values: OrbValues, seconds: number, touch?: OrbTouch, size = [800, 600]) => {
  const shader = createOrbShader(def, () => values, touch);
  const f32 = new Float32Array(def.uniformSize / 4);
  const frames = Math.round(seconds * 60);
  for (let i = 0; i <= frames; i += 1) {
    shader.write(f32, i / 60, size[0], size[1]);
  }
  return { f32, shader };
};

const slot = (def: OrbDefinition, name: string) => def.offsets[name].offset;

describe("createOrbShader: uniforms", () => {
  it("hands back the WGSL and layout of the definition", () => {
    const shader = createOrbShader(orb01, () => ({}));
    expect(shader.wgsl).toBe(orb01.wgsl);
    expect(shader.entryPoint).toBe(orb01.entryPoint);
    expect(shader.uniformSize).toBe(orb01.uniformSize);
  });

  it("writes the resolution it is given", () => {
    const { f32 } = run(orb01, {}, 0.1, undefined, [1080, 720]);
    expect(f32[slot(orb01, "res")]).toBe(1080);
    expect(f32[slot(orb01, "res") + 1]).toBe(720);
  });

  it("writes parameter defaults on the first frame, before any easing", () => {
    const shader = createOrbShader(orb01, () => ({}));
    const f32 = new Float32Array(orb01.uniformSize / 4);
    shader.write(f32, 0, 100, 100);
    const camDist = orb01.params.find((p) => p.key === "camDist")!;
    expect(f32[slot(orb01, "p_camDist")]).toBeCloseTo(camDist.default, 5);
  });

  it("advances time as frames pass", () => {
    const { f32 } = run(orb01, {}, 1);
    expect(f32[slot(orb01, "time")]).toBeGreaterThan(0.2);
  });
});

describe("createOrbShader: parameters", () => {
  it("eases toward an explicit value instead of jumping to it", () => {
    const shader = createOrbShader(orb01, () => ({ params: { turb: 4 } }));
    const f32 = new Float32Array(orb01.uniformSize / 4);
    shader.write(f32, 0, 100, 100);
    shader.write(f32, 1 / 60, 100, 100);
    const early = f32[slot(orb01, "p_turb")];
    expect(early).toBeGreaterThan(0.3);
    expect(early).toBeLessThan(4);
  });

  it("settles on an explicit value", () => {
    const { f32 } = run(orb01, { params: { turb: 4 } }, 6);
    expect(f32[slot(orb01, "p_turb")]).toBeCloseTo(4, 1);
  });

  it("clamps values to the range the shader was written for", () => {
    const { f32 } = run(orb01, { params: { exposure: 1e9, turb: -50 } }, 8);
    expect(f32[slot(orb01, "p_exposure")]).toBeLessThanOrEqual(1500 + 0.01);
    expect(f32[slot(orb01, "p_exposure")]).toBeGreaterThan(1400);
    expect(f32[slot(orb01, "p_turb")]).toBeGreaterThanOrEqual(0);
    expect(f32[slot(orb01, "p_turb")]).toBeLessThan(0.1);
  });

  it("ignores keys the orb doesn't have", () => {
    expect(() => run(orb01, { params: { notAParam: 3 } }, 0.2)).not.toThrow();
  });

  it("follows a mood's preset, and explicit params beat the preset", () => {
    const speakingTurb = orb01.statePresets!.speaking!.turb;
    const fromPreset = run(orb01, { state: "speaking" }, 6).f32;
    expect(fromPreset[slot(orb01, "p_turb")]).toBeCloseTo(speakingTurb, 1);

    const overridden = run(orb01, { state: "speaking", params: { turb: 3 } }, 6).f32;
    expect(overridden[slot(orb01, "p_turb")]).toBeCloseTo(3, 1);
  });

  it("accumulates integrated parameters over time, so they act as a rate", () => {
    const integrated = orb01.params.find((p) => p.integrate)!;
    const at1 = run(orb01, { params: { [integrated.key]: 2 } }, 1).f32[slot(orb01, `p_${integrated.key}`)];
    const at3 = run(orb01, { params: { [integrated.key]: 2 } }, 3).f32[slot(orb01, `p_${integrated.key}`)];
    expect(at3).not.toBe(at1);
  });
});

describe("createOrbShader: colors", () => {
  const tint = (f32: Float32Array) => [0, 1, 2].map((i) => f32[slot(orb01, "c_tint") + i]);

  it("settles on a hex color", () => {
    const [r, g, b] = tint(run(orb01, { colors: { tint: "#ff0000" } }, 6).f32);
    expect(r).toBeCloseTo(1, 1);
    expect(g).toBeCloseTo(0, 1);
    expect(b).toBeCloseTo(0, 1);
  });

  it("accepts the short #rgb form", () => {
    const [r, g, b] = tint(run(orb01, { colors: { tint: "#0f0" } }, 6).f32);
    expect([r, g, b].map((n) => Math.round(n))).toEqual([0, 1, 0]);
  });

  it("follows a color that changes while it runs (the parsed color is cached, not frozen)", () => {
    const live: OrbValues = { colors: { tint: "#ff0000" } };
    const shader = createOrbShader(orb01, () => live);
    const f32 = new Float32Array(orb01.uniformSize / 4);
    for (let i = 0; i <= 360; i += 1) shader.write(f32, i / 60, 800, 600);
    expect(tint(f32)[0]).toBeCloseTo(1, 1);

    live.colors = { tint: "#0000ff" };
    for (let i = 361; i <= 720; i += 1) shader.write(f32, i / 60, 800, 600);
    const [r, g, b] = tint(f32);
    expect([r, g, b].map((n) => Math.round(n))).toEqual([0, 0, 1]);
  });

  it("falls back to white for an invalid color", () => {
    const [r, g, b] = tint(run(orb01, { colors: { tint: "not-a-color" } }, 6).f32);
    expect([r, g, b].map((n) => Math.round(n * 10) / 10)).toEqual([1, 1, 1]);
  });
});

describe("createOrbShader: volumes", () => {
  it("follows explicit volumes", () => {
    const { f32 } = run(orb01, { volumes: { input: 1, output: 0.2 } }, 3);
    expect(f32[slot(orb01, "inputVol")]).toBeCloseTo(1, 1);
    expect(f32[slot(orb01, "outputVol")]).toBeCloseTo(0.2, 1);
  });

  it("rests quietly when idle and moves when speaking", () => {
    const idle = run(orb01, { state: "idle" }, 3).f32;
    const speaking = run(orb01, { state: "speaking" }, 3).f32;
    expect(idle[slot(orb01, "inputVol")]).toBeLessThan(0.05);
    expect(speaking[slot(orb01, "inputVol")]).toBeGreaterThan(0.3);
  });
});

describe("createOrbShader: touch", () => {
  it("swells while held", () => {
    const touch: OrbTouch = { down: true, tap: false };
    const held = run(orb01, {}, 2, touch).f32;
    const idle = run(orb01, {}, 2).f32;
    expect(held[slot(orb01, "inputVol")]).toBeGreaterThan(idle[slot(orb01, "inputVol")] + 0.4);
  });

  it("starts a pulse on a tap, and consumes the tap flag", () => {
    const touch: OrbTouch = { down: false, tap: true };
    const shader = createOrbShader(orb01, () => ({}), touch);
    const f32 = new Float32Array(orb01.uniformSize / 4);
    shader.write(f32, 0, 100, 100);
    for (let i = 1; i <= 6; i += 1) {
      shader.write(f32, i / 60, 100, 100);
    }
    expect(touch.tap).toBe(false);
    expect(f32[slot(orb01, "outputVol")]).toBeGreaterThan(0.5);
  });

  it("lets the pulse fade away", () => {
    const touch: OrbTouch = { down: false, tap: true };
    const { f32 } = run(orb01, {}, 4, touch);
    expect(f32[slot(orb01, "outputVol")]).toBeLessThan(0.4);
  });

  it("does nothing without touch state", () => {
    const { f32 } = run(orb01, {}, 2);
    expect(f32[slot(orb01, "inputVol")]).toBeLessThan(0.05);
  });
});

describe("createOrbShader: orbs with extra colors", () => {
  it("writes every color an orb defines", () => {
    expect(orb05.colors.length).toBeGreaterThan(1);
    expect(() => run(orb05, { colors: { [orb05.colors[1].key]: "#123456" } }, 0.5)).not.toThrow();
  });
});
