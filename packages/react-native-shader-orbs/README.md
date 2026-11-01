# react-native-shader-orbs

**GPU shader orbs for React Native and Expo.** 33 hand-tuned WebGPU shaders as drop-in components, with live parameters,
touch interaction and adaptive quality.

[![npm version](https://img.shields.io/npm/v/react-native-shader-orbs?label=npm&color=7c5cff)](https://www.npmjs.com/package/react-native-shader-orbs)
[![types](https://img.shields.io/npm/types/react-native-shader-orbs?color=3178c6)](#typescript)
[![license](https://img.shields.io/badge/license-MIT%20%2B%20non--commercial%20shaders-orange)](#license)
[![docs](https://img.shields.io/badge/docs-vercel.app-000000)](https://react-native-shader-orbs.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-msobkyy%2Freact--native--shader--orbs-181717?logo=github)](https://github.com/msobkyy/react-native-shader-orbs)
[![platform](https://img.shields.io/badge/Android-tested-3ddc84)](#compatibility)

**[Documentation and live playground](https://react-native-shader-orbs.vercel.app)** · [Source on GitHub](https://github.com/msobkyy/react-native-shader-orbs) · [llms.txt](https://react-native-shader-orbs.vercel.app/llms.txt)

```tsx
import { ShaderOrb, orb01 } from "react-native-shader-orbs";

<ShaderOrb orb={orb01} state="speaking" colors={{ tint: "#66ccff" }} interactive />
```

> **Alpha.** The API may change between releases. **Before you build on it, read [Compatibility](#compatibility) and
> [License](#license):** it needs a development build (not Expo Go), it is tested on Android only, and the shaders are
> licensed for **non-commercial use**.

## Highlights

- **33 orbs**, each with its own typed, range-checked parameters and colors.
- **Three moods** per orb (`idle`, `thinking`, `speaking`) that ease between presets.
- **Live props.** Change anything without re-mounting; every value glides toward its target on a spring.
- **Audio-ready.** `volumes.input` and `volumes.output` (0 to 1) drive the orb from a microphone or a voice level.
- **Touch.** A tap pulses the orb, holding makes it swell, and it scales under your finger.
- **Adaptive quality.** `quality="auto"` trades resolution for frame rate when the device struggles.
- **Light on the JS thread.** One shared GPU device, cached pipelines, and a `live` prop so sliders never re-render React.
- **Typed.** Full TypeScript types, including each orb's definition.
- **Import only what you use.** Import `orb01` by name, or a single orb from `react-native-shader-orbs/orbs/orb-05`.

## Install

```bash
npx expo install react-native-shader-orbs react-native-webgpu react-native-reanimated react-native-worklets
```

Add the config plugin to `app.json`, then rebuild your development build:

```json
{ "expo": { "plugins": ["react-native-webgpu"] } }
```

```bash
npx expo run:android
```

> **Why a development build?** The orbs render through a native WebGPU module (`react-native-webgpu`) that Expo Go does
> not include. After the one-time rebuild, JavaScript changes reload instantly as usual.

## Quick start

```tsx
import { View } from "react-native";
import { ShaderOrb, orb01 } from "react-native-shader-orbs";

export default function Screen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", alignItems: "center", justifyContent: "center" }}>
      <ShaderOrb orb={orb01} size={300} />
    </View>
  );
}
```

The area around the sphere is transparent, so the orb composites over whatever is behind it. Dark backgrounds show the
glow best.

### A voice assistant

```tsx
<ShaderOrb
  orb={orb01}
  state={listening ? "speaking" : "idle"}
  volumes={{ input: micLevel, output: voiceLevel }}   // numbers from 0 to 1
  colors={{ tint: "#66ccff" }}
  interactive
/>
```

Volumes ease toward the value you pass, so you can feed in a raw level every frame without it looking jittery.

### Show a placeholder until the first frame

```tsx
const [ready, setReady] = useState(false);

<View style={{ width: 280, height: 280 }}>
  {!ready && <Placeholder />}
  <ShaderOrb orb={orb01} onReady={() => setReady(true)} />
</View>
```

## The orbs

Every orb is exported by name: `orb01` to `orb33`. Each has its own parameters and colors, and exposes them on the
definition itself:

```ts
orb01.params.map((p) => `${p.key}: ${p.default} (${p.min} to ${p.max})`);
// ["speed: 0.5 (0.015 to 10)", "spin: 0.25 (0 to 5)", ...]
```

<!-- orbs:start -->

All 33 orbs. "Params" and "Colors" are how many you can pass through `params` and `colors`.

| Orb | Import | What it looks like | Params | Colors |
|---|---|---|---:|---:|
| `ORB-01` | `orb01` | Cut-glass orb with a dispersive, turbulent interior | 20 | 1 |
| `ORB-02` | `orb02` | Ornate scrollwork on a rolling dome | 15 | 0 |
| `ORB-03` | `orb03` | A turbulent belt of light girdling the ball, contoured in rainbow | 25 | 1 |
| `ORB-04` | `orb04` | A hollow shell of light, faceted by a voxel lattice | 17 | 1 |
| `ORB-05` | `orb05` | Rainbow rings travelling through a lattice of lenses | 16 | 3 |
| `ORB-06` | `orb06` | A hundred glowing lattices stacked through the ball, interfering | 14 | 2 |
| `ORB-07` | `orb07` | A twist wave travelling out through the ball around a lit column | 23 | 1 |
| `ORB-08` | `orb08` | Mother-of-pearl contour bands, each layer its own hue | 18 | 4 |
| `ORB-09` | `orb09` | Torn rings of rainbow light worn as the ball's latitudes | 18 | 2 |
| `ORB-10` | `orb10` | A lattice of light knitted into the ball's own skin | 24 | 1 |
| `ORB-11` | `orb11` | Quantum orbital, rainbow chroma | 18 | 0 |
| `ORB-12` | `orb12` | A ball of glossy toy bricks, studs up — it rebuilds itself while it thinks | 13 | 5 |
| `ORB-13` | `orb13` | Plasma globe: crawling lightning filaments | 23 | 3 |
| `ORB-14` | `orb14` | A lit plasma dome quantized to chunky two-tone pixels | 11 | 2 |
| `ORB-15` | `orb15` | An iridescent particle-track web worn as the ball's skin | 19 | 1 |
| `ORB-16` | `orb16` | Sunlight through water — a caustic net crawling over the ball, fringing into colour where it moves | 13 | 3 |
| `ORB-17` | `orb17` | A grainy many-coloured storm with band shear and lightning | 18 | 5 |
| `ORB-18` | `orb18` | A crystal folded out of one eighth of space, tumbling | 20 | 1 |
| `ORB-19` | `orb19` | Beads swelling and shrinking in their cells, packed over the ball | 18 | 4 |
| `ORB-20` | `orb20` | A water film rushing down the ball, fountain-style | 21 | 1 |
| `ORB-21` | `orb21` | Light diffusing through a cloud | 18 | 2 |
| `ORB-22` | `orb22` | Field lines swirling around the ball about a wandering axis | 22 | 1 |
| `ORB-23` | `orb23` | An ASCII glyph matrix in CRT green, wrapped on the ball | 14 | 2 |
| `ORB-24` | `orb24` | A Minecraft Earth — a perfect voxel sphere whose seasons cycle it through lush, cherry-grove, ice, mesa and desert worlds | 19 | 8 |
| `ORB-25` | `orb25` | The folds of a warped field, drawn by their own steepness | 18 | 3 |
| `ORB-26` | `orb26` | A crazed web of coloured threads knotted to a cell grid | 18 | 4 |
| `ORB-27` | `orb27` | A weather-radar mosaic, fronts of coloured pixels sweeping the ball | 20 | 8 |
| `ORB-28` | `orb28` | Nested binary grids shuttering on a tumbling bit-sphere | 15 | 4 |
| `ORB-29` | `orb29` | An LED tile wall lighting up in flowing blobs, wrapped on the ball | 14 | 2 |
| `ORB-30` | `orb30` | A meadow folding into itself toward a blue vanishing point | 24 | 7 |
| `ORB-31` | `orb31` | Raymarched shell, volumetric godrays | 20 | 0 |
| `ORB-32` | `orb32` | A galaxy marched as gas and dust inside the ball | 34 | 6 |
| `ORB-33` | `orb33` | A thermal image, risograph-printed on the ball | 24 | 6 |

<!-- orbs:end -->

## `<ShaderOrb />` props

| Prop | Type | Default | |
|---|---|---|---|
| `orb` | `OrbDefinition` | | One of `orb01` to `orb33`. |
| `shader` | `OrbShader` | | A raw shader. Used only when `orb` isn't set. |
| `size` | `number` | `280` | Width and height, in points. |
| `state` | `"idle" \| "thinking" \| "speaking"` | `"idle"` | The mood. Eases the parameters toward its preset. |
| `params` | `Record<string, number>` | | Parameter overrides by key, clamped to each range. |
| `colors` | `Record<string, string>` | | Hex colors by key (`#rgb` or `#rrggbb`). |
| `volumes` | `{ input?: number; output?: number }` | | Levels from 0 to 1. |
| `statePresets` | `Partial<Record<OrbState, Record<string, number>>>` | | Replace an orb's per-mood presets. |
| `stateColors` | `Partial<Record<OrbState, Record<string, string>>>` | | Replace an orb's per-mood colors. |
| `stateVolumes` | `Partial<Record<OrbState, { input?: number; output?: number }>>` | | Per-mood volume levels. |
| `interactive` | `boolean` | `false` | Tap pulses the orb; holding makes it swell. |
| `pressScale` | `number` | `1.08` | How far the orb grows while pressed. `1` disables it. |
| `quality` | `"auto" \| "low" \| "medium" \| "high" \| number` | `"auto"` | Render scale (0.2 to 1). |
| `maxFps` | `number` | `60` | Frame cap. |
| `paused` | `boolean` | `false` | Stop drawing and keep the last frame. |
| `live` | `() => OrbValues` | | Read every frame instead of the value props. See below. |
| `onReady` | `() => void` | | Called once, after the first frame is on screen. |
| `onError` | `(error: Error) => void` | | Called if the orb can't start (no WebGPU adapter, a shader that fails to compile). It stays blank. Without it, the error is logged once. |
| `onStats` | `({ fps, scale }) => void` | | About once a second. |
| `style` | `StyleProp<ViewStyle>` | | Style for the wrapping view. |

Parameters you don't pass fall back to the current mood's preset, then to the orb's default. Values outside a parameter's
range are **clamped**: several shaders use a parameter as a divisor or a camera distance, so an out-of-range value would
break the image, not just change it.

## Customizing

```tsx
<ShaderOrb
  orb={orb01}
  state="thinking"
  params={{ speed: 1.5, turb: 0.6 }}
  colors={{ tint: "#ff6688" }}
  statePresets={{ thinking: { turb: 1.2 } }}   // replace the preset for one mood
/>
```

Some parameter ranges span orders of magnitude (ORB-01's `exposure` runs from 1.5 to 1500). If you build your own
controls, nudge values relative to the current one instead of picking at random across the range, and leave framing
parameters (camera, lens, radius, edges) alone unless you mean to change the shape.

Parameters marked *integrated* in an orb's definition (`speed`, `spin`, ...) are phase clocks: the shader accumulates them
over time, so the value acts as a rate and changing it never makes the animation jump.

## Touch

```tsx
<ShaderOrb orb={orb01} interactive pressScale={1.12} />
```

A **tap** (under 250 ms) sends a pulse through the orb. **Holding** makes it swell and speed up, and an idle orb takes on
its `speaking` look while held. The press animation runs on the native driver. The orb listens with raw touch events, so a
parent `ScrollView` or pager can still take over the gesture; a cancelled press does nothing.

## Performance

These are ray-marched shaders: for every pixel they step through a volume dozens of times, so cost scales with the number
of pixels you draw and how often.

| Lever | Use it for |
|---|---|
| `quality="auto"` (default) | Starts at 0.75x, steps resolution down when the frame rate drops, and climbs back cautiously. |
| `quality="low" \| "medium" \| "high"` | A fixed render scale of 0.5, 0.75 or 1. |
| `maxFps={30}` | Roughly halves GPU load. Good for ambient orbs. |
| `size` | Halving the width quarters the pixels. |
| `paused` | Orbs you can't see. The component also stops when the app is backgrounded. |
| `live` | Values that change many times a second (see below). |

On the one test phone, ORB-01 held about 50 to 58 fps at 0.75x. Other orbs and other phones will differ; use `onStats` to
see what yours does. Only mount orbs that are on screen, and for galleries let each orb draw a moment and then `paused`.

### Sliders and other fast-changing values

Updating state on every drag step re-renders everything beneath it, on the same thread that drives the orb. Pass a `live`
function that returns a long-lived object, and mutate it instead:

```tsx
const store = useRef<OrbValues>({ state: "idle", params: {}, colors: {} }).current;

<ShaderOrb orb={orb01} live={() => store} />

// anywhere, with no re-render:
store.params!.speed = 2;
```

## TypeScript

Everything is typed, and the types ship with the package.

```ts
import type { OrbDefinition, OrbState, OrbQuality, OrbValues } from "react-native-shader-orbs";
import { orb05 } from "react-native-shader-orbs/orbs/orb-05";   // a single orb
import { orbs, ORB_STATES } from "react-native-shader-orbs";    // all 33, and the moods
```

Lower-level pieces are exported for custom renderers: `createOrbShader` (the easing, mood, volume and touch logic, with no
React Native dependency) and `createOrbRenderer`.

## AI agents

The package is built to be used by coding assistants as well as people. It ships the instructions, a per-orb parameter
catalog and a skill inside `agent/`, so an agent never has to guess a parameter name.

```bash
npx react-native-shader-orbs-mcp init
```

One command adds MCP config (Claude Code, Cursor, VS Code), a Claude Code skill, an `AGENTS.md` block and a Cursor rule to
your project. It merges instead of overwriting, is safe to re-run, and supports `--dry-run`. The MCP server
(`react-native-shader-orbs-mcp`) has tools to list orbs, look up parameters, and write a validated `<ShaderOrb />`
snippet. Details in the docs under **MCP server and agent skills**.

## Compatibility

| | |
|---|---|
| React Native | 0.81 or newer (the minimum `react-native-webgpu` supports). Tested on 0.88. |
| Expo | A **development build**. Tested on SDK 58. **Expo Go is not supported.** |
| React | 19 or newer. |
| Android | **Tested**, on one physical mid-range phone. |
| iOS | **Not tested.** `react-native-webgpu` supports it, so it may work, but nothing here claims it does. |
| Peer packages | `react-native-webgpu`, plus its own peers `react-native-reanimated` and `react-native-worklets`. |

If a device can't provide a WebGPU adapter, the orb stays blank. There is no fallback yet.

## Troubleshooting

- **"Cannot find native module"**: you're in Expo Go, or you added a native dependency without rebuilding. Run
  `npx expo run:android` (or a new EAS build).
- **Blank for a moment on first mount**: the first frame appears after the shader compiles. Show a placeholder and hide it
  in `onReady`. Later orbs appear faster, because the GPU device and compiled pipelines are shared.
- **Nearly black, or the shape looks broken**: a parameter is far from its default. Remove your `params` and add them back
  one at a time.
- **Slow**: use `quality="auto"` or `"medium"`, set `maxFps={30}`, make it smaller, and pause orbs you can't see.
- **`react-native-wgpu` warns about a rename**: that package was renamed. Install `react-native-webgpu`.

## License

This package contains material under **two** sets of terms. See [`LICENSE`](./LICENSE) and [`NOTICE.md`](./NOTICE.md).

- **Library code: MIT.**
- **The 33 orb shaders: non-commercial use only, with attribution to [XorDev](https://x.com/XorDev).** Using them in a
  commercial product needs XorDev's permission. Each shader file starts with this notice, and it must stay with the file.

An app that ships the shaders is bound by their terms even though the library around them is MIT. This is a summary of
terms the shader author set, not legal advice; if you're unsure whether your use is allowed, ask the author.

Suggested attribution for a non-commercial app:

```text
Orb shaders by XorDev (https://x.com/XorDev), via shadercn and react-native-shader-orbs.
```

## Credits

- **Shaders:** [XorDev](https://x.com/XorDev), used with permission through
  [shadercn](https://github.com/shadcn-labs/shadercn) (MIT, Copyright (c) 2026 Shadcn Labs).
- **React Native port:** [@msobkyy](https://x.com/msobkyy).
- **WebGPU on React Native:** [`react-native-webgpu`](https://github.com/wcandillon/react-native-webgpu).

Not affiliated with or endorsed by shadercn, Shadcn Labs or XorDev.
