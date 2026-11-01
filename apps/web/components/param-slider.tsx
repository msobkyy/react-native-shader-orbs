"use client";

import { memo, useState, type CSSProperties } from "react";

interface Props {
  label: string;
  /** Initial value. The slider owns its value afterwards; remount (change `key`) to reset it. */
  initial: number;
  min: number;
  max: number;
  step: number;
  /** Where "untouched" sits: draws a tick, and enables the per-slider reset once the value moves off it. */
  base: number;
  onChange: (value: number) => void;
  /** Called when reset puts the value back on `base`. */
  onReset?: () => void;
}

const decimals = (step: number) => (String(step).split(".")[1] ?? "").length;

/** A range input that reports changes without re-rendering its parent, so dragging stays smooth. */
export const ParamSlider = memo(function ParamSlider({ label, initial, min, max, step, base, onChange, onReset }: Props) {
  const [value, setValue] = useState(initial);
  const span = max - min || 1;
  const modified = Math.abs(value - base) > step / 2;
  const style = { "--pct": (value - min) / span, "--tick": (base - min) / span } as CSSProperties;

  return (
    <label className={`slider ${modified ? "modified" : ""}`} style={style}>
      <span className="slider-head">
        <span className="slider-label">{label}</span>
        {modified && (
          <button
            type="button"
            className="slider-reset"
            title="Reset"
            onClick={(e) => {
              e.preventDefault();
              setValue(base);
              onChange(base);
              onReset?.();
            }}
          >
            ↺
          </button>
        )}
        <output>{value.toFixed(decimals(step))}</output>
      </span>
      <span className="track">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            const v = Number(e.target.value);
            setValue(v);
            onChange(v);
          }}
        />
        <i className="tick" />
      </span>
    </label>
  );
});
