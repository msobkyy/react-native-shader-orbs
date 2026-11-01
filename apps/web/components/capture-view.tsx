"use client";

import { useSearchParams } from "next/navigation";
import { OrbView } from "./orb-view";

const BANNER_LEFT = ["orb-03", "orb-05"];
const BANNER_RIGHT = ["orb-08", "orb-02"];
const GRID = ["orb-01", "orb-02", "orb-03", "orb-05", "orb-06", "orb-07", "orb-08", "orb-10", "orb-12", "orb-23", "orb-30", "orb-33"];

/**
 * Not linked from anywhere and kept out of search engines: the page the README images are captured from, so they
 * show the real shaders. `?v=banner` (1600x500) or `?v=grid` (1400x960).
 */
export function CaptureView() {
  const view = useSearchParams().get("v") ?? "banner";

  if (view === "grid") {
    return (
      <div className="capture capture-grid dark">
        {GRID.map((slug) => (
          <OrbView key={slug} slug={slug} className="capture-orb" label={slug} />
        ))}
      </div>
    );
  }

  return (
    <div className="capture capture-banner dark">
      <div className="capture-side">
        {BANNER_LEFT.map((slug) => (
          <OrbView key={slug} slug={slug} className="capture-orb" label={slug} />
        ))}
      </div>
      <div className="capture-copy">
        <p className="capture-kicker">GPU shader orbs</p>
        <h1>react-native-shader-orbs</h1>
        <p className="capture-sub">33 WebGPU shaders for React Native and Expo</p>
      </div>
      <div className="capture-side">
        {BANNER_RIGHT.map((slug) => (
          <OrbView key={slug} slug={slug} className="capture-orb" label={slug} />
        ))}
      </div>
    </div>
  );
}
