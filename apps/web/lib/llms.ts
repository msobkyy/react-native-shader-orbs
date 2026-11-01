import { loadDocMarkdown, renderDoc } from "./markdown";
import { registryOrbs } from "./registry";
import { abs, allDocs, site } from "./site";

const docHref = (slug: string) => abs(slug ? `/docs/${slug}/` : "/docs/");

const keyFacts = [
  "Development build required: it relies on a native WebGPU module that Expo Go does not include.",
  "Peer packages: react-native-webgpu, react-native-reanimated, react-native-worklets.",
  "Tested on Android (one physical device). iOS is untested.",
  "The library is MIT. The shaders are by XorDev and are licensed for NON-COMMERCIAL use with attribution; commercial use needs XorDev's permission.",
  "AI agents: run `npx react-native-shader-orbs-mcp init` in an app to set up the MCP server, a skill and AGENTS.md. Parameter and color keys differ per orb, so look them up instead of guessing.",
  site.published ? `Published on npm as ${site.pkg}@${site.version} (alpha: the API may change).` : `Pre-release: the package name "${site.pkg}" is a placeholder and is not on npm yet.`,
].filter(Boolean);

/** llms.txt: a short index, in the llmstxt.org format, pointing at the docs and the orb catalog. */
export const buildLlmsTxt = () => {
  const orbs = registryOrbs();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    ...keyFacts.map((f) => `- ${f}`),
    "",
    "## Docs",
    "",
    ...allDocs.map((d) => `- [${d.title}](${docHref(d.slug)}): ${renderDoc(d.file).description}`),
    "",
    "## Orbs",
    "",
    ...orbs.map((o) => `- [${o.title}](${o.docs}): ${o.description}`),
    "",
    "## Machine-readable",
    "",
    `- [Orb catalog (JSON)](${abs("/r/registry.json")}): every orb with its parameters, ranges, defaults, colors and moods.`,
    `- [Full documentation as one text file](${abs("/llms-full.txt")}): all docs and orb details, for loading into a context window.`,
    `- [Playground](${abs("/playground/")}): tune any orb live; supports ?orb=orb-05&state=speaking.`,
    "",
  ];
  return lines.join("\n");
};

export const orbDetail = (o: ReturnType<typeof registryOrbs>[number]) =>
  [
    `### ${o.title}`,
    "",
    o.description,
    "",
    `Import: \`import { ${o.export} } from "${site.pkg}"\`. Moods: ${o.moods.join(", ") || "none defined"}. Docs: ${o.docs}`,
    "",
    "Parameters (pass through `params`; values are clamped to the range):",
    "",
    ...o.params.map(
      (p) => `- \`${p.key}\` (${p.label}): ${p.min} to ${p.max}, default ${p.default}, step ${p.step}${p.integrated ? ", integrated phase clock" : ""}`
    ),
    ...(o.colors.length
      ? ["", "Colors (pass through `colors` as hex):", "", ...o.colors.map((c) => `- \`${c.key}\` (${c.label}): default ${c.default}`)]
      : []),
    "",
  ].join("\n");

/** llms-full.txt: all the docs plus every orb's parameters, as one document. */
export const buildLlmsFull = () => {
  const parts = [`# ${site.name}: full documentation`, "", `> ${site.description}`, "", ...keyFacts.map((f) => `- ${f}`), ""];
  for (const d of allDocs) {
    parts.push("---", "", loadDocMarkdown(d.file).trim(), "");
  }
  parts.push("---", "", "# Orb reference", "");
  for (const o of registryOrbs()) {
    parts.push(orbDetail(o));
  }
  return parts.join("\n");
};
