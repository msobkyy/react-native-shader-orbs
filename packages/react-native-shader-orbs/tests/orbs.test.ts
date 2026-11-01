import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { WgslReflect } from "wgsl_reflect/wgsl_reflect.module.js";
import { orbs } from "../src/orbs";

const orbsDir = fileURLToPath(new URL("../src/orbs", import.meta.url));
const BASE_FIELDS = ["time", "anim", "inputVol", "outputVol", "res"];

describe("generated orbs", () => {
  it("has 33 orbs with unique, ordered slugs", () => {
    expect(orbs).toHaveLength(33);
    expect(orbs.map((o) => o.slug)).toEqual(Array.from({ length: 33 }, (_, i) => `orb-${String(i + 1).padStart(2, "0")}`));
  });

  describe.each(orbs.map((o) => [o.slug, o] as const))("%s", (_slug, orb) => {
    it("lays out a valid uniform buffer", () => {
      // A WGSL struct's size is a multiple of its own alignment (16 with a vec3/vec4, else 8 or 4), not always 16.
      expect(orb.uniformSize % 4).toBe(0);
      const names = Object.keys(orb.offsets);
      for (const field of BASE_FIELDS) {
        expect(names, `missing base field ${field}`).toContain(field);
      }
      for (const p of orb.params) {
        expect(names, `no uniform for param ${p.key}`).toContain(`p_${p.key}`);
      }
      for (const c of orb.colors) {
        expect(names, `no uniform for color ${c.key}`).toContain(`c_${c.key}`);
      }
      for (const [name, f] of Object.entries(orb.offsets)) {
        expect((f.offset + f.size) * 4, `${name} runs past the buffer`).toBeLessThanOrEqual(orb.uniformSize);
      }
    });

    it("has sane parameter ranges", () => {
      for (const p of orb.params) {
        expect(p.min, p.key).toBeLessThanOrEqual(p.default);
        expect(p.default, p.key).toBeLessThanOrEqual(p.max);
        expect(p.step, p.key).toBeGreaterThan(0);
      }
    });

    it("only presets parameters it has", () => {
      const keys = new Set(orb.params.map((p) => p.key));
      for (const preset of Object.values(orb.statePresets ?? {})) {
        for (const key of Object.keys(preset ?? {})) {
          expect(keys.has(key), `preset references unknown param ${key}`).toBe(true);
        }
      }
    });

    it("has a fragment entry point that exists in the WGSL", () => {
      expect(orb.wgsl).toMatch(new RegExp(`@fragment fn ${orb.entryPoint}\\(`));
    });

    it("parses as WGSL", () => {
      expect(() => new WgslReflect(orb.wgsl)).not.toThrow();
    });

    it("keeps XorDev's license notice at the top of its file", () => {
      // The notice is word-wrapped across comment lines, so compare with comment markers and line breaks flattened.
      const head = readFileSync(join(orbsDir, `${orb.slug}.ts`), "utf8").slice(0, 600).replace(/[\s*/]+/g, " ");
      expect(head).toContain("XorDev");
      expect(head).toContain("Non-commercial use only");
      expect(head).toContain("keep this notice with the file");
    });
  });
});
