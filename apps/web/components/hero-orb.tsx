"use client";

import { useRef, useState, type CSSProperties } from "react";
import type { OrbValues } from "@orbs/orbShader";
import { ORB_STATES, type OrbState } from "@orbs/types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SWATCHES } from "@/lib/snippet";
import { OrbView } from "./orb-view";

/** The landing page's live orb on its stage, with a mood picker and tint swatches. The glow follows the tint. */
export function HeroOrb({ slug = "orb-01", tintKey = "tint" }: { slug?: string; tintKey?: string }) {
  const values = useRef<OrbValues>({ state: "idle", params: {}, colors: {} }).current;
  const [state, setState] = useState<OrbState>("idle");
  const [tint, setTint] = useState<string | null>(null);

  return (
    <div className="hero-stage orb-stage dark" style={{ "--glow": tint && tint !== "#ffffff" ? tint : "#7c5cff" } as CSSProperties}>
      <OrbView slug={slug} values={values} interactive className="hero-orb" label="Interactive shader orb" />
      <p className="hint">This is live: tap it, or press and hold.</p>
      <ToggleGroup
        type="single"
        variant="outline"
        value={state}
        onValueChange={(v) => {
          if (v) {
            values.state = v as OrbState;
            values.params = {};
            setState(v as OrbState);
          }
        }}
        aria-label="Mood"
      >
        {ORB_STATES.map((s) => (
          <ToggleGroupItem key={s} value={s} className="capitalize">
            {s}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="swatches" aria-label="Tint">
        {SWATCHES.map((hex) => (
          <button
            key={hex}
            type="button"
            className={`swatch ${hex === tint ? "on" : ""}`}
            style={{ background: hex }}
            aria-label={`Tint ${hex}`}
            onClick={() => {
              values.colors![tintKey] = hex;
              setTint(hex);
            }}
          />
        ))}
      </div>
    </div>
  );
}
