import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Animated, AppState } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { Canvas, useCanvasRef } from "react-native-webgpu";

import { createOrbShader } from "./orbShader";
import type { OrbTouch, OrbValues } from "./orbShader";
import { createOrbRenderer } from "./renderer";
import type { OrbRenderer, OrbShader } from "./renderer";
import type { OrbDefinition } from "./types";

/** Render scale: the orb is drawn at `size * scale` pixels per side and upscaled to `size`. */
export type OrbQuality = "auto" | "low" | "medium" | "high" | number;

const PRESETS = { low: 0.5, medium: 0.75, high: 1 } as const;
const AUTO_START = 0.75;
const AUTO_MIN = 0.35;
const AUTO_STEP = 0.15;
/** A press shorter than this is a tap (pulse); longer is a hold. */
const TAP_MS = 250;

export interface ShaderOrbProps extends OrbValues {
  /** A generated orb (`orb01` ...). */
  orb?: OrbDefinition;
  /** Raw shader, for custom or test shaders. Used when `orb` is not set. */
  shader?: OrbShader;
  size?: number;
  paused?: boolean;
  /** Default "auto": starts at 0.75 and trades resolution for frame rate when the device struggles. */
  quality?: OrbQuality;
  /** Frame cap, default 60. 30 halves GPU load. */
  maxFps?: number;
  /** About once a second: rendered fps and the current render scale. */
  onStats?: (stats: { fps: number; scale: number }) => void;
  /**
   * Read every frame instead of the value props above. Return a long-lived object and mutate it:
   * changes then reach the orb without re-rendering React, which keeps sliders smooth.
   */
  live?: () => OrbValues;
  /**
   * React to touch: a tap pulses the orb, holding makes it swell and speed up, releasing eases it back.
   * Uses raw touch events, so a parent scroll view can still take over the gesture. Default false.
   */
  interactive?: boolean;
  /** How far the orb grows while pressed, as a multiplier (1 = no scale). Default 1.08. Needs `interactive`. */
  pressScale?: number;
  /** Called when the first frame is on screen, e.g. to hide a placeholder. */
  onReady?: () => void;
  style?: StyleProp<ViewStyle>;
}

const even = (n: number) => Math.max(2, Math.round(n / 2) * 2);

export const ShaderOrb = ({
  orb,
  shader: rawShader,
  state,
  params,
  colors,
  statePresets,
  stateColors,
  stateVolumes,
  volumes,
  size = 280,
  paused = false,
  quality = "auto",
  maxFps = 60,
  onStats,
  onReady,
  live,
  interactive = false,
  pressScale = 1.08,
  style,
}: ShaderOrbProps) => {
  const ref = useCanvasRef();
  const rendererRef = useRef<OrbRenderer | null>(null);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const values = useRef<OrbValues>({});
  values.current = { state, params, colors, statePresets, stateColors, stateVolumes, volumes };
  const liveRef = useRef(live);
  liveRef.current = live;

  const touch = useRef<OrbTouch>({ down: false, tap: false });
  const downAt = useRef(0);

  const shader = useMemo(() => {
    if (orb) {
      return createOrbShader(
        orb,
        () => (liveRef.current ? liveRef.current() : values.current),
        interactive ? touch.current : undefined
      );
    }
    if (!rawShader) {
      throw new Error("ShaderOrb needs `orb` or `shader`");
    }
    return rawShader;
  }, [orb, rawShader, interactive]);

  // Press feedback runs on the native driver, so it costs the JS thread (and the render loop) nothing.
  const pop = useRef(new Animated.Value(1)).current;
  const pressScaleRef = useRef(pressScale);
  pressScaleRef.current = pressScale;

  const press = useCallback(() => {
    touch.current.down = true;
    downAt.current = Date.now();
    // Soft and slightly damped: eases up without snapping.
    Animated.spring(pop, {
      toValue: pressScaleRef.current,
      stiffness: 190,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [pop]);
  // A quick press that ends normally is a tap; a cancelled one (the pager took the swipe) is not.
  const release = useCallback(
    (completed: boolean) => {
      if (!touch.current.down) {
        return;
      }
      touch.current.down = false;
      if (completed && Date.now() - downAt.current < TAP_MS) {
        touch.current.tap = true;
      }
      // Underdamped on the way back: a small, smooth overshoot reads as a bounce.
      Animated.spring(pop, {
        toValue: 1,
        stiffness: 170,
        damping: 13,
        mass: 1,
        useNativeDriver: true,
      }).start();
    },
    [pop]
  );

  /* ----------------------------- render scale ----------------------------- */

  const fixed = quality === "auto" ? null : typeof quality === "number" ? quality : PRESETS[quality];
  const [autoScale, setAutoScale] = useState(AUTO_START);
  const scale = Math.min(1, Math.max(0.2, fixed ?? autoScale));

  const auto = useRef({ bad: 0, good: 0, warmup: 3, ceiling: 1 });
  const cb = useRef({ onStats, onReady, maxFps, scale, fixed });
  cb.current = { onStats, onReady, maxFps, scale, fixed };

  const onFps = useCallback((fps: number) => {
    const { onStats: report, maxFps: cap, scale: s, fixed: pinned } = cb.current;
    report?.({ fps, scale: s });
    if (pinned !== null) {
      return;
    }
    const a = auto.current;
    if (a.warmup > 0) {
      a.warmup -= 1;
      return;
    }
    if (fps < cap * 0.8) {
      a.bad += 1;
      a.good = 0;
    } else if (fps >= cap * 0.95) {
      a.good += 1;
      a.bad = 0;
    } else {
      a.bad = 0;
    }
    if (a.bad >= 2 && s > AUTO_MIN) {
      // Never climb back to a scale that just failed.
      a.ceiling = Math.max(AUTO_MIN, s - 0.05);
      a.bad = 0;
      a.warmup = 3;
      setAutoScale(Math.max(AUTO_MIN, s - AUTO_STEP));
    } else if (a.good >= 10 && s + 0.1 <= a.ceiling) {
      a.good = 0;
      a.warmup = 3;
      setAutoScale(s + 0.1);
    }
  }, []);

  /* ------------------------------- lifecycle ------------------------------ */

  useEffect(() => {
    let cancelled = false;
    const context = ref.current?.getContext("webgpu");
    if (!context) {
      return;
    }
    const native = ref.current!.getNativeSurface();
    createOrbRenderer(
      context,
      shader,
      () => ({ width: native.width, height: native.height }),
      { maxFps: cb.current.maxFps, onFps, onFirstFrame: () => cb.current.onReady?.() }
    ).then((r) => {
      if (cancelled) {
        r.destroy();
        return;
      }
      rendererRef.current = r;
      if (!pausedRef.current) {
        r.start();
      }
    });

    const sub = AppState.addEventListener("change", (s) => {
      if (s === "active" && !pausedRef.current) {
        rendererRef.current?.start();
      } else {
        rendererRef.current?.stop();
      }
    });

    return () => {
      cancelled = true;
      sub.remove();
      rendererRef.current?.destroy();
      rendererRef.current = null;
    };
    // `scale` remounts the canvas (see `key` below), so the surface is re-acquired here.
  }, [ref, shader, onFps, scale]);

  useEffect(() => {
    if (paused) {
      rendererRef.current?.stop();
    } else {
      rendererRef.current?.start();
    }
  }, [paused]);

  useEffect(() => {
    rendererRef.current?.setMaxFps(maxFps);
  }, [maxFps]);

  /* -------------------------------- layout -------------------------------- */

  // Draw small, scale up: the canvas is `scale` of the size and magnified back around its center.
  const inner = even(size * scale);

  return (
    <Animated.View
      style={[{ width: size, height: size, overflow: "hidden", transform: [{ scale: pop }] }, style]}
      onTouchStart={interactive ? press : undefined}
      onTouchEnd={interactive ? () => release(true) : undefined}
      onTouchCancel={interactive ? () => release(false) : undefined}
    >
      <Canvas
        key={inner}
        ref={ref}
        style={{
          position: "absolute",
          width: inner,
          height: inner,
          left: (size - inner) / 2,
          top: (size - inner) / 2,
          transform: [{ scale: size / inner }],
        }}
      />
    </Animated.View>
  );
};
