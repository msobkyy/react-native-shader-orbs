import type { Metadata } from "next";
import { Playground } from "@/components/playground";
import { orbMeta } from "@/lib/orbs";

export const metadata: Metadata = {
  title: "Playground",
  description: "Pick any orb, change its mood, colors, volumes and every parameter, and copy the JSX.",
};

export default function PlaygroundPage() {
  return <Playground orbs={orbMeta} />;
}
