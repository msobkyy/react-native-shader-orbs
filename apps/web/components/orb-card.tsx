"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { OrbMeta } from "@/lib/orbs";
import { OrbView } from "./orb-view";

/** A gallery card: a frozen preview that wakes up while you hover or focus it. */
export function OrbCard({ orb }: { orb: OrbMeta }) {
  const [playing, setPlaying] = useState(false);
  const leave = useRef<ReturnType<typeof setTimeout>>(undefined);

  const play = () => {
    clearTimeout(leave.current);
    setPlaying(true);
  };
  // A short grace period, so sliding across the card edge doesn't make the orb flicker between states.
  const stop = () => {
    clearTimeout(leave.current);
    leave.current = setTimeout(() => setPlaying(false), 350);
  };

  return (
    <Link
      href={`/docs/components/orbs/${orb.slug}/`}
      className="orb-card group"
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
    >
      <span className="orb-card-stage dark">
        <OrbView
          slug={orb.slug}
          lazy
          scale={1}
          maxFps={30}
          freezeAfterMs={2200}
          playing={playing}
          className="thumb"
          label={`${orb.title} preview`}
        />
      </span>
      <span className="orb-card-title">{orb.title}</span>
      <span className="orb-card-note">{orb.note}</span>
    </Link>
  );
}
