---
name: shader-orbs
description: Add, tune or debug GPU shader orbs in a React Native or Expo app with react-native-shader-orbs. Use when the user mentions shader orbs, ShaderOrb, WebGPU orbs, an animated AI/voice orb, or imports from react-native-shader-orbs. Covers install, the per-orb parameter catalog, performance and the non-commercial license of the shaders.
---

# react-native-shader-orbs

`react-native-shader-orbs` renders 33 GPU shader "orbs" in React Native and Expo apps with WebGPU. Each orb is a
`<ShaderOrb orb={orbNN} />`. Follow this file when you add, change or debug one.

## Before you write any code

1. **Check the license situation and tell the user.** The 33 shaders are by XorDev and are licensed for **non-commercial
   use only, with attribution**. The library code around them is MIT. If the app is, or may become, commercial, say so
   plainly *before* adding an orb, and don't present the package as freely usable. Suggest asking XorDev for permission.
   Attribution line: `Orb shaders by XorDev (https://x.com/XorDev), via shadercn and react-native-shader-orbs.`
2. **Check the platform.** It needs a **development build**; **Expo Go is not supported** (native WebGPU module). It is
   **tested on Android only**; iOS is untested, so don't promise it works there.
3. **Never guess parameter or color names.** They differ per orb. Look them up (see "Finding the right orb").

## Install

```bash
npx expo install react-native-shader-orbs react-native-webgpu react-native-reanimated react-native-worklets
```

Add the config plugin to `app.json` (`"plugins": ["react-native-webgpu"]`), then rebuild the development build
(`npx expo run:android` or a new EAS build). Adding or upgrading these native packages always needs a rebuild.

## Finding the right orb

Use the first of these that is available. Do **not** invent keys.

1. **MCP server** (`shader-orbs`), if connected: `list_orbs`, `get_orb`, `find_by_parameter`, `build_snippet`, `get_install`,
   `get_guide`.
2. **The catalog file:** `node_modules/react-native-shader-orbs/agent/catalog.json`: every orb with its parameters (key,
   label, min, max, default, step), colors, moods and a usage snippet.
3. **The orb's own definition,** in code: `orb01.params` and `orb01.colors`.

## Using an orb

```tsx
import { ShaderOrb, orb01 } from "react-native-shader-orbs";

<ShaderOrb
  orb={orb01}                      // orb01 to orb33, imported by name
  size={300}                       // points; default 280
  state="speaking"                 // "idle" | "thinking" | "speaking"
  params={{ speed: 1.2 }}          // keys from THIS orb's params, nothing else
  colors={{ tint: "#66ccff" }}     // keys from THIS orb's colors; hex only
  volumes={{ input: 0.4 }}         // 0 to 1, e.g. a microphone level
  interactive                      // tap pulses, hold swells
/>
```

Rules that prevent the common failures:

- **Import orbs by name** (`orb01`), or a single orb from `react-native-shader-orbs/orbs/orb-05`. Never import from `lib/` or `src/`.
- **Values are clamped** to each parameter's range, but ranges can be huge (ORB-01's `exposure` is 1.5 to 1500, default 60).
  A value far from the default usually gives a black or broken orb. To tweak, change a few parameters by a modest factor
  (about 0.7x to 1.5x of the default or current value). Don't randomize across a whole range.
- **Leave framing parameters alone** unless the user asks to change the shape: camera and lens (`camDist`, `focal`), radius
  (`envRadius`), and edges (`edge`, `edgeFade`, `envCore`).
- **Colors are hex strings** (`#rgb` or `#rrggbb`). An invalid color becomes white. Some orbs have no colors at all
  (ORB-02, ORB-11, ORB-31): don't pass `colors` to those.
- **Moods** (`state`) ease every parameter toward a preset. Explicit `params` still win over the preset.
- **Parameters marked `integrated`** (`speed`, `spin`, ...) are rates: changing them never makes the animation jump.
- **The area around the sphere is transparent.** It works best on a dark background.
- **Show a placeholder until `onReady`** if the first-frame delay would look broken.

## Performance

These are ray-marched shaders; cost grows with pixel count.

- Leave `quality="auto"` (default). Use `maxFps={30}` for ambient orbs, `size` as small as looks right.
- **Mount only orbs that are on screen**, and use `paused` for orbs that are hidden or in the background.
- For galleries, render each orb briefly then set `paused`, instead of running many live orbs.
- **Never drive sliders through React state.** Pass a `live` function that returns a long-lived object and mutate it;
  otherwise every drag step re-renders the tree on the thread that draws the orb:

  ```tsx
  const store = useRef<OrbValues>({ state: "idle", params: {}, colors: {} }).current;
  <ShaderOrb orb={orb01} live={() => store} />
  // later, no re-render: store.params!.speed = 2;
  ```

## Troubleshooting

| Symptom | Cause and fix |
|---|---|
| `Cannot find native module` | Running in Expo Go, or a native package was added without rebuilding. Use a dev build and rebuild. |
| Blank for a moment, then appears | The shader compiles on first use. Show a placeholder and hide it in `onReady`. |
| Stays blank | The device gave no WebGPU adapter. There is no fallback yet. |
| Nearly black, or the shape is broken | A parameter is far from its default or a framing parameter was changed. Remove `params` and add back one at a time. |
| Slow or janky | Use `quality="auto"` or `"medium"`, `maxFps={30}`, a smaller `size`; pause hidden orbs; use `live` for sliders. |
| Warning about `react-native-wgpu` | That package was renamed. Install `react-native-webgpu`. |

## Things not to do

- Don't claim iOS works, or that it works in Expo Go.
- Don't remove the license notice at the top of any shader file.
- Don't invent a fallback for devices without WebGPU and present it as part of the library.
- Don't use `react-native-wgpu`; use `react-native-webgpu`.
