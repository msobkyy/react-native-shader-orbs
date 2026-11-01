import type { Metadata } from "next";
import Link from "next/link";
import { OrbCard } from "@/components/orb-card";
import { orbMeta } from "@/lib/orbs";

export const metadata: Metadata = {
  title: "All orbs",
  description: `Browse all ${orbMeta.length} shader orbs with live previews.`,
};

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
