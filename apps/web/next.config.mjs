import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
// The orb definitions and drive logic live in the library package, two levels up.
const monorepoRoot = path.resolve(here, "../..");

// "" for a domain root, "/repo-name" when hosted under a sub-path (e.g. GitHub Pages).
const base = (process.env.BASE ?? "").replace(/\/+$/, "");

/** @type {import('next').NextConfig} */
export default {
  // Plain static files in out/: host it anywhere, no Node server needed.
  output: "export",
  trailingSlash: true,
  basePath: base || undefined,
  images: { unoptimized: true },
  // Allow importing the library sources from outside this app's directory.
  turbopack: { root: monorepoRoot },
  outputFileTracingRoot: monorepoRoot,
  experimental: { externalDir: true },
};
