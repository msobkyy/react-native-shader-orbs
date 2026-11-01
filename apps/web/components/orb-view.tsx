"use client";

import { useEffect, useRef, useState } from "react";
import type { OrbValues } from "@orbs/orbShader";
import type { OrbDefinition } from "@orbs/types";
import { useOrbDef } from "@/lib/orb-loader";
import { mountOrb } from "@/lib/web-orb";

interface CanvasProps {
  def: OrbDefinition;
  values?: OrbValues;
  interactive?: boolean;
  scale?: number;
  maxFps?: number;
  freezeAfterMs?: number;
  paused?: boolean;
  /** For a frozen thumbnail: true wakes it, false freezes it again. Leave undefined to ignore. */
  playing?: boolean;
  label: string;
  onReady: () => void;
  onFail: (error?: unknown) => void;
}

/** The canvas itself: mounts the shader on it and tears it down again. */
function OrbCanvas({ def, values, interactive, scale, maxFps, freezeAfterMs, paused, playing, label, onReady, onFail }: CanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const handle = useRef<Awaited<ReturnType<typeof mountOrb>>>(null);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  // Callbacks come from the parent's render; reading them through a ref keeps the mount effect from re-running.
  const callbacks = useRef({ onReady, onFail });
  callbacks.current = { onReady, onFail };

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) {
      return;
    }
    let cancelled = false;
    mountOrb(canvas, def, {
      values,
      interactive,
      scale,
      maxFps,
      freezeAfterMs,
      paused: pausedRef.current,
      onReady: () => callbacks.current.onReady(),
    }).then(
      (mounted) => {
        if (cancelled) {
          mounted?.destroy();
        } else if (mounted) {
          handle.current = mounted;
        } else {
          callbacks.current.onFail();
        }
      },
      (error) => !cancelled && callbacks.current.onFail(error)
    );
    return () => {
      cancelled = true;
      handle.current?.destroy();
      handle.current = null;
    };
    // `values` is a long-lived mutable object; a different one means a different orb setup.
  }, [def, values, interactive, scale, maxFps, freezeAfterMs]);

  useEffect(() => {
    handle.current?.setPaused(!!paused);
  }, [paused]);

  useEffect(() => {
    if (playing !== undefined) {
      handle.current?.setFrozen(!playing);
    }
  }, [playing]);

  return <canvas ref={ref} aria-label={label} />;
}

export interface OrbViewProps {
  slug: string;
  /** Mutate this object to drive the orb live, with no React re-render. */
  values?: OrbValues;
  interactive?: boolean;
  scale?: number;
  maxFps?: number;
  /** Draw for this many ms, then freeze on that frame. For thumbnails. */
  freezeAfterMs?: number;
  paused?: boolean;
  /** For a thumbnail frozen after `freezeAfterMs`: true wakes it (e.g. on hover), false freezes it again. */
  playing?: boolean;
  /** Don't load or render until the orb scrolls into view. */
  lazy?: boolean;
  /** Extra class on the frame, e.g. "thumb" or "big". */
  className?: string;
  label?: string;
}

/** A square orb frame: a placeholder disc until the first frame, a still glow when WebGPU isn't available. */
export function OrbView({ slug, lazy, className = "", label, ...rest }: OrbViewProps) {
  const frame = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(!lazy);
  const [ready, setReady] = useState(false);
  const [failure, setFailure] = useState<{ error?: unknown } | null>(null);

  useEffect(() => {
    if (!lazy || near || !frame.current) {
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(frame.current);
    return () => io.disconnect();
  }, [lazy, near]);

  const def = useOrbDef(near ? slug : null);

  const message = failure?.error
    ? `Couldn't render: ${failure.error instanceof Error ? failure.error.message : String(failure.error)}`.slice(0, 160)
    : "WebGPU isn't available in this browser";

  return (
    <div ref={frame} className={`orb-frame ${className} ${ready ? "ready" : ""} ${failure ? "nogpu" : ""}`}>
      {def && !failure && (
        <OrbCanvas
          def={def}
          label={label ?? `${def.title} preview`}
          onReady={() => setReady(true)}
          onFail={(error) => {
            if (error) {
              console.error("orb failed to render:", error);
            }
            setFailure({ error });
          }}
          {...rest}
        />
      )}
      <div className="nogpu-note">{message}</div>
    </div>
  );
}
