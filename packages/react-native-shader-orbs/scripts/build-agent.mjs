// Builds the agent-facing files shipped in the package, from the orb sources and agent/INSTRUCTIONS.md,
// so none of them can drift from the code or from each other.
//   node scripts/build-agent.mjs           write the files
//   node scripts/build-agent.mjs --check   exit 1 if any file is out of date (used by `npm run verify` and CI)
//
// Writes:  agent/catalog.json                       every orb: params, ranges, colors, moods, usage snippet
//          agent/skills/shader-orbs/SKILL.md        INSTRUCTIONS.md + skill frontmatter (Claude Code / agent skills)
//          agent/AGENTS.snippet.md                  short block to paste into AGENTS.md / CLAUDE.md / rules files
import { mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const orbsDir = join(root, "src/orbs");
const agentDir = join(root, "agent");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

/** The generated files are `export const orb01: OrbDefinition = { ...JSON... };`, so the definition can be read as JSON. */
const readOrb = (file) => {
  const text = readFileSync(join(orbsDir, file), "utf8");
  const head = text.match(/export const (\w+): OrbDefinition = /);
  const body = text.slice(text.indexOf("{", head.index + head[0].length), text.lastIndexOf("}") + 1);
  return { export: head[1], ...JSON.parse(body) };
};

const orbs = readdirSync(orbsDir)
  .filter((f) => /^orb-\d+\.ts$/.test(f))
  .sort()
  .map(readOrb);

const snippet = (o) =>
  [
    `import { ShaderOrb, ${o.export} } from "${pkg.name}";`,
    "",
    `<ShaderOrb orb={${o.export}} size={300} state="idle" />`,
  ].join("\n");

const catalog = {
  package: pkg.name,
  version: pkg.version,
  note: "Generated from the orb sources. Parameter and color keys differ per orb: never guess them. Values are clamped to [min, max].",
  license: {
    library: "MIT",
    shaders: "Non-commercial use only, with attribution to XorDev (https://x.com/XorDev). Commercial use needs XorDev's permission.",
  },
  requirements: ["Development build (Expo Go is not supported)", "react-native-webgpu, react-native-reanimated, react-native-worklets", "Tested on Android only"],
  orbs: orbs.map((o) => ({
    slug: o.slug,
    title: o.title,
    export: o.export,
    description: o.note,
    import: `import { ${o.export} } from "${pkg.name}"`,
    moods: Object.keys(o.statePresets ?? {}),
    params: o.params.map((p) => ({
      key: p.key,
      label: p.label,
      default: p.default,
      min: p.min,
      max: p.max,
      step: p.step,
      ...(p.integrate ? { integrated: true } : {}),
    })),
    colors: o.colors.map((c) => ({ key: c.key, label: c.label, default: c.default })),
    presets: o.statePresets ?? {},
    snippet: snippet(o),
  })),
};

const instructions = readFileSync(join(agentDir, "INSTRUCTIONS.md"), "utf8");
const body = instructions.replace(/^# .*\n+/, "");

const skill = `---
name: shader-orbs
description: Add, tune or debug GPU shader orbs in a React Native or Expo app with react-native-shader-orbs. Use when the user mentions shader orbs, ShaderOrb, WebGPU orbs, an animated AI/voice orb, or imports from react-native-shader-orbs. Covers install, the per-orb parameter catalog, performance and the non-commercial license of the shaders.
---

# react-native-shader-orbs

${body}`;

const agentsSnippet = `## react-native-shader-orbs

This project uses \`react-native-shader-orbs\` (WebGPU shader orbs). Before adding or editing a \`<ShaderOrb />\`:

- Read \`node_modules/${pkg.name}/agent/INSTRUCTIONS.md\` and follow it.
- Look up parameter and color keys in \`node_modules/${pkg.name}/agent/catalog.json\` (or the \`shader-orbs\` MCP server). They differ per orb; never guess.
- The shaders are by XorDev: **non-commercial use with attribution**. Tell the user before using them in a commercial app.
- Needs a development build: Expo Go is not supported. Tested on Android only.
`;

const outputs = {
  [join(agentDir, "catalog.json")]: `${JSON.stringify(catalog, null, 2)}\n`,
  [join(agentDir, "skills/shader-orbs/SKILL.md")]: skill,
  [join(agentDir, "AGENTS.snippet.md")]: agentsSnippet,
};

if (process.argv.includes("--check")) {
  const stale = Object.entries(outputs).filter(([file, text]) => !existsSync(file) || readFileSync(file, "utf8") !== text);
  if (stale.length) {
    console.error(`Agent files are out of date: ${stale.map(([f]) => f.slice(root.length + 1)).join(", ")}. Run \`npm run agent\` and commit the result.`);
    process.exit(1);
  }
  console.log(`ok   agent files are up to date (${orbs.length} orbs)`);
} else {
  for (const [file, text] of Object.entries(outputs)) {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, text);
  }
  console.log(`agent files written (${orbs.length} orbs)`);
}
