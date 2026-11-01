"use client";

import { useSearchParams } from "next/navigation";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { useCallback, useEffect, useReducer, useRef, useState, type CSSProperties } from "react";
import type { OrbValues } from "@orbs/orbShader";
import { ORB_STATES, type OrbState } from "@orbs/types";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { highlightTs } from "@/lib/highlight-client";
import { useOrbDef } from "@/lib/orb-loader";
import type { OrbMeta } from "@/lib/orbs";
import { buildSnippet } from "@/lib/snippet";
import { CopyButton } from "./copy-button";
import { OrbView } from "./orb-view";
import { ParamSlider } from "./param-slider";

type Draft = { params: Record<string, number>; colors: Record<string, string> };

const emptyDrafts = (): Record<OrbState, Draft> => ({
  idle: { params: {}, colors: {} },
  thinking: { params: {}, colors: {} },
  speaking: { params: {}, colors: {} },
});

/**
 * The one place with every control. Each orb's docs page only previews; "Open in playground" lands here with
 * `?orb=` and `?state=`. Values live in a mutable store the orb reads every frame, so dragging a slider never
 * re-renders the page.
 */
export function Playground({ orbs }: { orbs: OrbMeta[] }) {
  const values = useRef<OrbValues>({ state: "idle", params: {}, colors: {}, volumes: {} }).current;
  // Slider values per mood, so switching moods and back keeps what you set.
  const drafts = useRef(emptyDrafts()).current;

  const [slug, setSlug] = useState(orbs[0].slug);
  const [state, setState] = useState<OrbState>("idle");
  const [epoch, setEpoch] = useState(0);
  const [size, setSize] = useState(360);
  const [paused, setPaused] = useState(false);
  const [drive, setDrive] = useState<"auto" | "manual">("auto");
  // The snippet reads the mutable store, so it's refreshed on a short debounce while sliders move.
  const [, refreshSnippet] = useReducer((n: number) => n + 1, 0);
  const debounce = useRef<ReturnType<typeof setTimeout>>(undefined);
  const touched = useCallback(() => {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(refreshSnippet, 120);
  }, []);
  useEffect(() => () => clearTimeout(debounce.current), []);

  const def = useOrbDef(slug);

  const apply = useCallback(
    (nextState: OrbState) => {
      values.state = nextState;
      values.params = drafts[nextState].params;
      values.colors = drafts[nextState].colors;
      setState(nextState);
      setEpoch((e) => e + 1);
    },
    [values, drafts]
  );

  const chooseOrb = useCallback(
    (next: string) => {
      for (const s of ORB_STATES) {
        drafts[s] = { params: {}, colors: {} };
      }
      values.volumes = {};
      setDrive("auto");
      setSlug(next);
      apply(values.state ?? "idle");
    },
    [values, drafts, apply]
  );

  // Arrive from an orb page: ?orb=orb-05&state=speaking. useSearchParams, not window.location: on a client-side
  // navigation Next updates the address bar after this component has mounted, so window.location is still stale.
  const search = useSearchParams().toString();
  const written = useRef("");
  useEffect(() => {
    if (search === written.current) {
      return; // our own URL update below, not an arrival
    }
    const q = new URLSearchParams(search);
    const orb = q.get("orb");
    const s = q.get("state") as OrbState | null;
    if (orb && orbs.some((o) => o.slug === orb)) {
      setSlug(orb);
    }
    if (s && (ORB_STATES as readonly string[]).includes(s)) {
      apply(s);
    }
  }, [search, orbs, apply]);

  // Keep the URL shareable as the choice changes.
  useEffect(() => {
    const next = `orb=${slug}&state=${state}`;
    if (new URLSearchParams(window.location.search).toString() === next) {
      return;
    }
    written.current = next;
    window.history.replaceState(null, "", `?${next}`);
  }, [slug, state]);

  const reset = () => {
    drafts[state] = { params: {}, colors: {} };
    values.params = drafts[state].params;
    values.colors = drafts[state].colors;
    values.volumes = {};
    setDrive("auto");
    setEpoch((e) => e + 1);
    touched();
  };

  const preset = def?.statePresets?.[state];
  const stateColors = def?.stateColors?.[state];
  const snippet = def ? buildSnippet(def, values, { size }) : "";
  const glow = values.colors && def?.colors[0] ? (values.colors[def.colors[0].key] ?? undefined) : undefined;

  return (
    <div className="pg">
      <div className="pg-stage">
        <div className="pg-stage-card orb-stage dark" style={{ "--glow": glow ?? "#7c5cff" } as CSSProperties}>
          <div className="pg-canvas" style={{ width: size }}>
            <OrbView slug={slug} values={values} interactive paused={paused} className="big" label={def?.title ?? "Orb"} />
          </div>
          <p className="hint">Tap the orb, or press and hold.</p>
        </div>

        <div className="pg-toolbar">
          <label className="field">
            <span>Orb</span>
            <Select value={slug} onValueChange={chooseOrb}>
              <SelectTrigger aria-label="Orb" className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-72">
                <SelectGroup>
                  {orbs.map((o) => (
                    <SelectItem key={o.slug} value={o.slug}>
                      {o.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>
          <label className="field">
            <span>State</span>
            <Select value={state} onValueChange={(v) => apply(v as OrbState)}>
              <SelectTrigger aria-label="Orb state" className="w-32 capitalize">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ORB_STATES.map((s) => (
                    <SelectItem key={s} value={s} className="capitalize">
                      {s}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>
          <Button variant="outline" onClick={() => setPaused((p) => !p)}>
            {paused ? <PlayIcon data-icon="inline-start" /> : <PauseIcon data-icon="inline-start" />}
            {paused ? "Play" : "Pause"}
          </Button>
        </div>

        <div className="code pg-code">
          <span className="code-lang">typescript</span>
          <CopyButton text={snippet} className="copy-code" size="xs" data-react="" toastText="JSX copied">
            Copy JSX
          </CopyButton>
          <pre>
            <code className="hljs" dangerouslySetInnerHTML={{ __html: highlightTs(snippet) }} />
          </pre>
        </div>
      </div>

      <aside className="pg-panel" aria-label="Customize">
        <div className="pg-panel-head">
          <h2>Customize</h2>
          <Button variant="outline" size="sm" onClick={reset}>
            <RotateCcwIcon data-icon="inline-start" />
            Reset
          </Button>
        </div>
        {def && <p className="pg-note">{def.note}</p>}

        <h3>Size</h3>
        <ParamSlider
          key={`size-${slug}`}
          label="Size"
          initial={size}
          min={120}
          max={720}
          step={10}
          base={360}
          onChange={(v) => {
            setSize(v);
            touched();
          }}
        />

        {def && def.colors.length > 0 && (
          <>
            <h3>Colors</h3>
            <div key={`c-${slug}-${state}-${epoch}`}>
              {def.colors.map((c) => (
                <label key={c.key} className="color-row">
                  <span>{c.label}</span>
                  <input
                    type="color"
                    defaultValue={values.colors?.[c.key] ?? stateColors?.[c.key] ?? c.default}
                    onChange={(e) => {
                      values.colors![c.key] = e.target.value;
                      touched();
                    }}
                  />
                </label>
              ))}
            </div>
          </>
        )}

        <h3>Drive</h3>
        <ToggleGroup
          type="single"
          variant="outline"
          className="mb-3 w-full"
          value={drive}
          onValueChange={(v) => {
            if (!v) {
              return;
            }
            setDrive(v as "auto" | "manual");
            values.volumes = v === "auto" ? {} : { input: 0, output: 0.3 };
            setEpoch((e) => e + 1);
            touched();
          }}
          aria-label="Volume source"
        >
          <ToggleGroupItem value="auto" className="flex-1">
            Auto
          </ToggleGroupItem>
          <ToggleGroupItem value="manual" className="flex-1">
            Manual
          </ToggleGroupItem>
        </ToggleGroup>
        {drive === "manual" && (
          <>
            <ParamSlider
              key={`vin-${epoch}`}
              label="Input volume"
              initial={values.volumes?.input ?? 0}
              min={0}
              max={1}
              step={0.01}
              base={0}
              onChange={(v) => {
                values.volumes!.input = v;
                touched();
              }}
            />
            <ParamSlider
              key={`vout-${epoch}`}
              label="Output volume"
              initial={values.volumes?.output ?? 0.3}
              min={0}
              max={1}
              step={0.01}
              base={0.3}
              onChange={(v) => {
                values.volumes!.output = v;
                touched();
              }}
            />
          </>
        )}

        <h3>Parameters</h3>
        {def?.params.map((p) => {
          const base = preset?.[p.key] ?? p.default;
          return (
            <ParamSlider
              key={`${slug}-${p.key}-${state}-${epoch}`}
              label={p.label}
              initial={values.params?.[p.key] ?? base}
              min={p.min}
              max={p.max}
              step={p.step}
              base={base}
              onChange={(v) => {
                values.params![p.key] = v;
                touched();
              }}
              onReset={() => {
                delete values.params![p.key];
                touched();
              }}
            />
          );
        })}
      </aside>
    </div>
  );
}
