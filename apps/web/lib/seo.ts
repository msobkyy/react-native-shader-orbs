import type { Metadata } from "next";
import { abs, site } from "./site";

/** Search keywords, most specific first. Also used for the OG/JSON-LD descriptions. */
export const keywords = [
  "react native shader",
  "expo shader",
  "react native webgpu",
  "expo webgpu",
  "react native orb",
  "ai voice orb",
  "animated orb react native",
  "gpu shader components",
  "wgsl shaders",
  "react native animation",
  "expo development build",
  "react-native-shader-orbs",
  "shader orbs",
  "react-native-webgpu",
  "react native ai assistant ui",
  "mcp server react native",
];

export const ogImage = (name = "default") => ({
  url: abs(`/og/${name}.png`),
  width: 1200,
  height: 630,
  alt: `${site.name}: ${site.tagline}`,
});

interface PageMetaInput {
  title: string;
  description: string;
  /** Path with a leading and trailing slash, e.g. "/docs/installation/". */
  path: string;
  /** Name of a generated OG image (/og/<name>.png). */
  image?: string;
  keywords?: string[];
}

/**
 * Per-page metadata with the canonical URL, Open Graph and Twitter tags filled in. Next doesn't merge `openGraph`
 * from the layout into a page that sets its own, so every page goes through this.
 */
export const pageMeta = ({ title, description, path, image = "default", keywords: extra = [] }: PageMetaInput): Metadata => ({
  title,
  description,
  keywords: [...extra, ...keywords],
  alternates: { canonical: abs(path) },
  openGraph: {
    type: "article",
    siteName: site.name,
    title: `${title} · ${site.name}`,
    description,
    url: abs(path),
    locale: "en_US",
    images: [ogImage(image)],
  },
  twitter: {
    card: "summary_large_image",
    site: site.author.handle,
    creator: site.author.handle,
    title: `${title} · ${site.name}`,
    description,
    images: [ogImage(image).url],
  },
});
