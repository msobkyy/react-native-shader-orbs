import { exportName, orbs } from "./orbs";
import { abs, install, site } from "./site";

/**
 * The orb catalog as plain JSON, for tools and AI assistants. It's the source for /r/registry.json, the per-orb files,
 * llms.txt, and the MCP server. It leaves out the WGSL: that's large, and nothing reading a catalog needs it.
 *
 * This is NOT a shadcn registry: orbs ship inside the npm package, they aren't copied into your project.
 */

export interface RegistryParam {
  key: string;
  label: string;
  default: number;
  min: number;
  max: number;
  step: number;
  integrated: boolean;
}

export interface RegistryOrb {
  slug: string;
  title: string;
  description: string;
  /** The named export: `import { orb01 } from "<package>"`. */
  export: string;
  docs: string;
  json: string;
  playground: string;
  params: RegistryParam[];
  colors: { key: string; label: string; default: string }[];
  moods: string[];
  /** Per-mood parameter presets, for the moods this orb defines. */
  statePresets?: Record<string, Record<string, number>>;
  stateColors?: Record<string, Record<string, string>>;
  usage: string;
}

const license = {
  library: "MIT",
  shaders: "Non-commercial use only, with attribution to XorDev. Commercial use needs XorDev's permission.",
  author: "XorDev (https://x.com/XorDev)",
  port: `${site.author.name} (${site.author.url})`,
  source: "https://github.com/shadcn-labs/shadercn",
  details: abs("/docs/licensing/"),
};

export const usageFor = (slug: string) => {
  const name = exportName(slug);
  return `import { ShaderOrb, ${name} } from "${site.pkg}";\n\n<ShaderOrb orb={${name}} size={280} interactive />`;
};

export const registryOrbs = (): RegistryOrb[] =>
  orbs.map((o) => ({
    slug: o.slug,
    title: o.title,
    description: o.note,
    export: exportName(o.slug),
    docs: abs(`/docs/components/orbs/${o.slug}/`),
    json: abs(`/r/${o.slug}.json`),
    playground: abs(`/playground/?orb=${o.slug}`),
    params: o.params.map((p) => ({
      key: p.key,
      label: p.label,
      default: p.default,
      min: p.min,
      max: p.max,
      step: p.step,
      integrated: p.integrate,
    })),
    colors: o.colors.map((c) => ({ key: c.key, label: c.label, default: c.default })),
    moods: o.statePresets ? Object.keys(o.statePresets) : [],
    statePresets: o.statePresets as Record<string, Record<string, number>> | undefined,
    stateColors: o.stateColors as Record<string, Record<string, string>> | undefined,
    usage: usageFor(o.slug),
  }));

/** The catalog index: every orb with its parameters, but not its per-mood presets (those are in the per-orb files). */
export const buildRegistry = () => ({
  $schema: "registry.schema (none): plain JSON, see the Registry page in the docs",
  name: site.pkg,
  description: site.description,
  status: site.published ? `published (${site.version}, alpha)` : "pre-release",
  install,
  requirements: [
    "A development build. Expo Go is not supported (native WebGPU module).",
    "Peer packages: react-native-webgpu, react-native-reanimated, react-native-worklets.",
    "Tested on Android (one physical device). iOS is untested.",
  ],
  license,
  docs: abs("/docs/"),
  llms: abs("/llms.txt"),
  orbs: registryOrbs().map(({ statePresets: _p, stateColors: _c, ...rest }) => rest),
});
