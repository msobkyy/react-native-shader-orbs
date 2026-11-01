# How it works

The shaders come from [shadercn](https://github.com/shadcn-labs/shadercn), a web component library built on vgpu and
TypeGPU. This package takes the same shaders to React Native. Here's the path from there to your screen.

## 1. Compile the shaders once

shadercn writes each orb in **TypeGPU**: TypeScript functions with a `"use gpu"` directive that a build plugin turns into
WGSL. TypeGPU needs that plugin at build time, and it expects to run in a browser.

Rather than ask every app to set up the plugin, a codegen step does it once, in this repository:

```bash
cd packages/codegen
node generate.mjs <path-to-shadercn-clone> <out-dir>
```

For each orb it:

1. bundles the orb's `gpu.ts` and `meta.ts` with the TypeGPU plugin,
2. runs the bundle to read the resolved **WGSL string** and the parameter metadata,
3. computes the **uniform buffer layout** (byte offsets, with WGSL's alignment rules) from the shader's `params` struct,
4. writes `orb-NN.ts`: a plain data object with the WGSL, the offsets, the parameters, colors and mood presets.

Those generated files are what you import. They contain no TypeGPU and need no plugin.

## 2. Render with raw WebGPU

At runtime, `react-native-webgpu` provides a `Canvas` and the standard WebGPU API. The renderer:

- requests **one GPU device**, shared by every orb in the app,
- builds a **render pipeline** per shader (cached, created asynchronously),
- draws a single **fullscreen triangle**; the fragment shader does all the work,
- uploads **one uniform buffer** per frame,
- calls `context.present()` after submitting.

shadercn uses vgpu for this part on the web. vgpu documents browser and Node runtimes only, so this package uses the
WebGPU API directly instead, in a couple of hundred lines.

## 3. Drive it from props

Each shader reads a uniform struct: time, an animation clock, input and output volume, the resolution, one float per
parameter (`p_speed`, `p_turb`, ...) and one `vec3` per color (`c_tint`).

`createOrbShader` fills that struct every frame:

- **Springs** ease every parameter and color toward its target, so a prop change glides.
- **Moods** select a preset as the target for each parameter.
- **Volumes** ease toward their targets, or toward a gentle synthesized motion per mood.
- A shared **flow clock** speeds up when output volume is high, and **integrated** parameters accumulate against it.
- **Touch** adds a hold level and a pulse on top.

This code is plain TypeScript with no React Native imports. The docs site runs the same file in the browser, so the
orbs on these pages behave exactly like the app.

## 4. Draw small, scale up

The cost of a ray-marched shader is the pixel count. `ShaderOrb` draws into a canvas that is `size * scale` pixels per side
and upscales it with a transform. [Auto quality](/docs/performance/) adjusts that scale from the measured frame rate.

## Repository layout

| Path | What's in it |
|---|---|
| `packages/react-native-shader-orbs` | The library: `ShaderOrb`, the renderer, the drive logic, generated orbs. |
| `packages/codegen` | The TypeGPU-to-WGSL generator. |
| `apps/example` | The Expo showcase app. |
| `apps/web` | This site. |
