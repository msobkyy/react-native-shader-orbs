import type { Metadata } from "next";
import { Suspense } from "react";
import { Playground } from "@/components/playground";
import { orbMeta } from "@/lib/orbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Playground",
  description: "Pick any of the 33 shader orbs, change its mood, colors, volumes and every parameter live in WebGPU, then copy the React Native JSX.",
  path: "/playground/",
});

export default function PlaygroundPage() {
  // useSearchParams needs a Suspense boundary in a static export.
  return (
    <Suspense>
      <Playground orbs={orbMeta} />
    </Suspense>
  );
}
