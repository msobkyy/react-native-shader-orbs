# Customizing an orb

An orb is driven by four kinds of input: **parameters**, **colors**, a **mood** (state), and two **volumes**. All of them
update live, and all of them ease toward their new value instead of jumping.

## Parameters

Each orb defines its own parameters. ORB-01, for example, has `speed`, `spin`, `turb`, `exposure` and about fifteen more.
You pass the ones you want to change:

```tsx
<ShaderOrb orb={orb01} params={{ speed: 1.5, turb: 0.6 }} />
```

- Anything you don't pass falls back to the current mood's preset, then to the orb's default.
- Values are **clamped** to the range the orb declares. Many shaders use a parameter as a divisor or a camera distance, so
  an out-of-range value would break the image rather than just look different.
- Every orb's keys, defaults and ranges are listed on its [page](/docs/components/orbs/), and are also on the definition itself:

```tsx
orb01.params.map((p) => `${p.key}: ${p.default} (${p.min} to ${p.max})`);
```

### Ranges are not linear

Some ranges span orders of magnitude (ORB-01's `exposure` runs from 1.5 to 1500, with a default of 60). If you build your
own sliders, don't pick random values across the whole range: moving `exposure` from 60 to 900 turns the orb nearly
black. Nudge relative to the current value instead, and leave camera and framing parameters (`camDist`, `focal`,
`envRadius` and similar) alone unless you mean to change the shape.

### Integrated parameters

Parameters marked **integrated** on an orb's page, such as `speed` and `spin`, are phase clocks. The shader doesn't read
the value directly; it accumulates it over time. That means changing `speed` changes how fast things move without making
the animation jump.

## Colors

```tsx
<ShaderOrb orb={orb01} colors={{ tint: "#ff6688" }} />
```

Colors are hex strings (`#rgb` or `#rrggbb`). An invalid value falls back to white. Each orb lists its color keys.

## Moods

```tsx
<ShaderOrb orb={orb01} state="thinking" />
```

`state` is one of `idle`, `thinking` or `speaking`. Choosing one eases every parameter (and the colors, for orbs that
define state colors) toward that mood's preset. Parameters you pass explicitly still win over the preset.

You can replace an orb's presets entirely:

```tsx
<ShaderOrb
  orb={orb01}
  state="speaking"
  statePresets={{ speaking: { turb: 1.2, speed: 2 } }}
  stateColors={{ speaking: { tint: "#88ff99" } }}
/>
```

## Volumes

```tsx
<ShaderOrb orb={orb01} volumes={{ input: 0.4, output: 0.8 }} />
```

Two numbers from 0 to 1 that the shaders read as "how loud is the input" and "how loud is the output". Most orbs use
`input` to stir the interior and `output` to brighten and speed the flow. They ease toward the value you give them, so you
can feed them a raw level every frame without it looking jittery.

If you don't pass volumes, each mood synthesizes its own gentle motion (speaking pulses, thinking drifts, idle rests).
`stateVolumes` lets you set per-mood levels:

```tsx
<ShaderOrb orb={orb01} state="speaking" stateVolumes={{ speaking: { input: 0.2, output: 0.9 } }} />
```

## Updating without re-rendering: `live`

Props flow through React, so changing them re-renders the component that owns them. For values that change many times per
second, such as a slider being dragged, pass a `live` function instead. The orb calls it every frame and reads from
whatever it returns:

```tsx
const store = useRef<OrbValues>({ state: "idle", params: {}, colors: {} }).current;

<ShaderOrb orb={orb01} live={() => store} />

// anywhere, no re-render:
store.params!.speed = 2;
```

The example app uses this for every slider; it kept drags smooth when the same updates through `setState` did not.
