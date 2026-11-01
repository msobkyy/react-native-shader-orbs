import type { OrbValues } from "@orbs/orbShader";
import type { OrbDefinition } from "@orbs/types";
import { site } from "./site";

const fmt = (n: number) => String(Number(n.toFixed(3)));

/** A paste-ready snippet of what the orb currently renders, listing only the values that were changed. */
export const buildSnippet = (def: OrbDefinition, values: OrbValues, extra: { size?: number } = {}) => {
  const name = def.slug.replace("-", "");
  const lines = [`import { ShaderOrb, ${name} } from "${site.pkg}";`, "", "<ShaderOrb", `  orb={${name}}`];
  if (extra.size && extra.size !== 280) {
    lines.push(`  size={${extra.size}}`);
  }
  if (values.state && values.state !== "idle") {
    lines.push(`  state="${values.state}"`);
  }
  const params = Object.entries(values.params ?? {});
  if (params.length) {
    lines.push("  params={{", ...params.map(([k, v]) => `    ${k}: ${fmt(v)},`), "  }}");
  }
  const colors = Object.entries(values.colors ?? {});
  if (colors.length) {
    lines.push("  colors={{", ...colors.map(([k, v]) => `    ${k}: "${v}",`), "  }}");
  }
  const { input, output } = values.volumes ?? {};
  if (input !== undefined || output !== undefined) {
    const v = [input !== undefined && `input: ${fmt(input)}`, output !== undefined && `output: ${fmt(output)}`]
      .filter(Boolean)
      .join(", ");
    lines.push(`  volumes={{ ${v} }}`);
  }
  lines.push("  interactive", "/>");
  return lines.join("\n");
};

export const SWATCHES = [
  "#ffffff",
  "#66ccff",
  "#4d7dff",
  "#b388ff",
  "#ff4dd8",
  "#ff6688",
  "#ff9d4d",
  "#ffcc44",
  "#88ff99",
  "#4dffd2",
];
