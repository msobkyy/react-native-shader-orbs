// Compile upstream shadercn TypeGPU shaders to WGSL + TS definitions.
// usage: node generate.mjs <upstream-root> <out-dir> [orb-01 ...]
import { build } from "esbuild";
import typegpu from "unplugin-typegpu/esbuild";
import { mkdirSync, writeFileSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [upstream, out, ...only] = process.argv.slice(2);
const registry = resolve(upstream, "registry");
const orbs = readdirSync(join(registry, "components/orbs"))
  .filter((n) => /^orb-\d+$/.test(n))
  .filter((n) => !only.length || only.includes(n));

mkdirSync(out, { recursive: true });
const tmp = resolve(".tmp");
mkdirSync(tmp, { recursive: true });

const TYPES = {
  f32: { size: 4, align: 4 },
  u32: { size: 4, align: 4 },
  i32: { size: 4, align: 4 },
  vec2f: { size: 8, align: 8 },
  vec3f: { size: 12, align: 16 },
  vec4f: { size: 16, align: 16 },
};
const roundUp = (n, a) => Math.ceil(n / a) * a;

/** Byte offsets (in floats) of each field of the uniform struct, WGSL layout rules. */
const layout = (wgsl) => {
  const body = wgsl.match(/@group\(0\) @binding\(0\) var<uniform> params: (\w+);/);
  const struct = wgsl.match(new RegExp(`struct ${body[1]} \\{([\\s\\S]*?)\\}`))[1];
  const offsets = {};
  let at = 0;
  let maxAlign = 4;
  for (const [, name, type] of struct.matchAll(/(\w+):\s*(\w+),/g)) {
    const t = TYPES[type];
    if (!t) throw new Error(`unsupported uniform field type ${type} (${name})`);
    at = roundUp(at, t.align);
    offsets[name] = { offset: at / 4, size: t.size / 4 };
    at += t.size;
    maxAlign = Math.max(maxAlign, t.align);
  }
  return { offsets, uniformSize: roundUp(at, maxAlign) };
};

const bundleAndLoad = async (entry, name, registryAliases) => {
  const outfile = join(tmp, name);
  await build({
    entryPoints: [entry],
    bundle: true,
    format: "esm",
    platform: "node",
    outfile,
    alias: registryAliases,
    external: ["typegpu"],
    plugins: [typegpu({})],
    nodePaths: [resolve("node_modules"), resolve("../../node_modules")],
    logLevel: "error",
  });
  // Executes the bundled upstream module to read its resolved values.
  return import(pathToFileURL(outfile).href);
};

const aliases = {
  "@/lib": join(registry, "lib"),
  "@/components": join(registry, "components"),
};

const generated = [];
for (const orb of orbs) {
  const dir = join(registry, "components/orbs", orb);
  const gpu = await bundleAndLoad(join(dir, "gpu.ts"), `${orb}-gpu.mjs`, aliases);
  const meta = await bundleAndLoad(join(dir, "meta.ts"), `${orb}-meta.mjs`, aliases);

  const wgsl = gpu[Object.keys(gpu).find((k) => k.endsWith("Shader"))];
  const variant = meta[Object.keys(meta).find((k) => k.endsWith("Orb"))];
  const entryPoint = wgsl.match(/@fragment fn (\w+)\(/)[1];
  const { offsets, uniformSize } = layout(wgsl);
  const header = readFileSync(join(dir, "gpu.ts"), "utf8").match(/\/\*[\s\S]*?\*\//)?.[0] ?? "";

  const params = variant.params.map(({ key, label, default: def, min, max, step, integrate }) => ({
    key, label, default: def, min, max, step, integrate: !!integrate,
  }));
  const colors = variant.colors.map(({ key, label, default: def }) => ({ key, label, default: def }));

  const camel = orb.replace(/-(\d+)/, (_, n) => n);
  // The import goes FIRST and the notice sits on the export. TypeScript erases `import type` and takes the comment
  // attached to it, so a notice written above the import would vanish from the compiled lib/ copy. The notice has to
  // travel with every copy of the shader (see LICENSE).
  const file = `import type { OrbDefinition } from "../types";

${header}
export const ${camel}: OrbDefinition = ${JSON.stringify(
    {
      slug: orb,
      title: meta.meta?.title ?? orb.toUpperCase(),
      note: meta.meta?.description ?? variant.note ?? "",
      entryPoint,
      uniformSize,
      offsets,
      params,
      colors,
      statePresets: variant.statePresets,
      stateColors: variant.stateColors,
      wgsl,
    },
    null,
    2
  )};
`;
  writeFileSync(join(out, `${orb}.ts`), file);
  generated.push({ orb, camel });
  console.log(orb, "->", `${wgsl.length} chars WGSL, ${params.length} params, uniform ${uniformSize}B`);
}

const all = readdirSync(out)
  .filter((n) => /^orb-\d+\.ts$/.test(n))
  .map((n) => n.replace(".ts", ""))
  .sort();
const camelOf = (orb) => orb.replace(/-(\d+)/, (_, n) => n);
writeFileSync(
  join(out, "index.ts"),
  `${all.map((o) => `import { ${camelOf(o)} } from "./${o}";`).join("\n")}
import type { OrbDefinition } from "../types";

export { ${all.map(camelOf).join(", ")} };

export const orbs: OrbDefinition[] = [${all.map(camelOf).join(", ")}];
`
);
console.log("index.ts ->", all.length, "orbs");
