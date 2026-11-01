import type { Metadata } from "next";
import { Suspense } from "react";
import { CaptureView } from "@/components/capture-view";

// The README images are captured from this page. It is not linked anywhere and must not be indexed.
export const metadata: Metadata = { title: "Capture", robots: { index: false, follow: false } };

export default function CapturePage() {
  return (
    <Suspense>
      <CaptureView />
    </Suspense>
  );
}
