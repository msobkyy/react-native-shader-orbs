// One place for everything that changes when the package is named, published or hosted.
export const site = {
  /** Display name in the nav and titles. */
  name: "shader orbs",
  /** npm package name. Placeholder until the package is published. */
  pkg: "react-native-shader-orbs",
  /** Flip to true once the package is on npm: removes the pre-release notices. */
  published: true,
  /** The version on npm. The first release is an alpha, tagged `next` and `latest`. */
  version: "0.1.0-alpha.0",
  tagline: "GPU shader orbs for React Native and Expo",
  description:
    "33 WebGPU shader orbs as drop-in React Native components. Live parameters, tap and hold interaction, adaptive quality.",
  /** Repository URL. Leave empty to hide GitHub links. */
  repo: "https://github.com/msobkyy/react-native-shader-orbs",
  /** Who made the React Native port. Shown in the footer, on orb pages, and in the licensing credits. */
  author: { name: "msobkyy", handle: "@msobkyy", url: "https://x.com/msobkyy" },
  /** Public origin, e.g. "https://orbs.example.com". Empty keeps machine-readable files (llms.txt, registry) on relative URLs. */
  url: "https://react-native-shader-orbs.vercel.app",
};

/** Path prefix the site is hosted under ("" at a domain root). Used for links inside rendered Markdown. */
export const basePath = (process.env.BASE ?? "").replace(/\/+$/, "");

/** A URL for machine-readable files: absolute when `site.url` is set, otherwise relative to the site root. */
export const abs = (path: string) => `${site.url.replace(/\/+$/, "")}${basePath}${path}`;

export const peers = "react-native-webgpu react-native-reanimated react-native-worklets";
export const install = `npx expo install ${site.pkg} ${peers}`;

export interface DocItem {
  slug: string;
  title: string;
  /** Markdown file in content/docs. */
  file: string;
}

/**
 * Markdown docs, grouped for the sidebar. The orbs group is built from the orb list and sits between the groups
 * without `after` and the groups with it.
 */
export const docGroups: { group: string; items: DocItem[]; after?: boolean }[] = [
  {
    group: "Getting started",
    items: [
      { slug: "", title: "Introduction", file: "index.md" },
      { slug: "installation", title: "Installation", file: "installation.md" },
      { slug: "quick-start", title: "Quick start", file: "quick-start.md" },
    ],
  },
  {
    group: "Guides",
    items: [
      { slug: "customizing", title: "Customizing an orb", file: "customizing.md" },
      { slug: "interaction", title: "Touch interaction", file: "interaction.md" },
      { slug: "performance", title: "Performance", file: "performance.md" },
      { slug: "troubleshooting", title: "Troubleshooting", file: "troubleshooting.md" },
    ],
  },
  // "Orbs" sits here in the sidebar.
  {
    group: "API reference",
    after: true,
    items: [
      { slug: "shader-orb", title: "ShaderOrb", file: "shader-orb.md" },
      { slug: "types", title: "Types and exports", file: "types.md" },
    ],
  },
  {
    group: "AI and tooling",
    after: true,
    items: [
      { slug: "mcp", title: "MCP server and skills", file: "mcp.md" },
      { slug: "registry", title: "Registry (JSON)", file: "registry.md" },
    ],
  },
  {
    group: "About",
    after: true,
    items: [
      { slug: "how-it-works", title: "How it works", file: "how-it-works.md" },
      { slug: "licensing", title: "Licensing and credits", file: "licensing.md" },
      { slug: "changelog", title: "Changelog", file: "changelog.md" },
    ],
  },
];

export const allDocs = docGroups.flatMap((g) => g.items);
