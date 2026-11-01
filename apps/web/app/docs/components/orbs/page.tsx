import type { Metadata } from "next";
import Link from "next/link";
import { OrbCard } from "@/components/orb-card";
import { orbMeta } from "@/lib/orbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "All shader orbs",
  description: `Browse all ${orbMeta.length} WebGPU shader orbs for React Native and Expo with live previews, from cut-glass spheres to voxel lattices.`,
  path: "/docs/components/orbs/",
});

export default function OrbsIndex() {
  return (
    <div className="docs-content no-toc">
      <main className="doc">
        <article>
          <h1>All {orbMeta.length} orbs</h1>
          <p>
            Each preview below renders live in your browser with WebGPU, then freezes on a frame. Hover one to wake it up. Open
            an orb for its parameters and usage, or jump straight into the <Link href="/playground/">playground</Link> to tune one.
          </p>
          <div className="grid">
            {orbMeta.map((o) => (
              <OrbCard key={o.slug} orb={o} />
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
