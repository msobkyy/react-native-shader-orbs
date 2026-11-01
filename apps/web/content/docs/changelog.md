# Changelog

Everything that has been added so far, grouped by area.

> `{{pkg}}` is published as an **alpha**, so expect the API to change.

## 0.1.0-alpha.0

The first release, published to npm on 2026-11-01 under both the `latest` and `next` tags.

### Docs site

- Light and dark themes, a ⌘K search over pages, headings and orbs (including by parameter name), and a theme toggle.
- A single [playground](/playground/) with every control, and a preview-only page for each of the 33 orbs.
- A machine-readable [registry](/docs/registry/), [llms.txt](/llms.txt) and [llms-full.txt](/llms-full.txt).
- An [MCP server](/docs/mcp/) for AI assistants, built on the registry.
- Gallery previews that wake up on hover.

### Touch and interaction

- `interactive` prop: a tap pulses the orb and holding makes it swell and speed up.
- `pressScale` prop, with a spring that scales the orb under the finger, running on the native animation driver.

### Performance

- `quality` (`"auto"`, `"low"`, `"medium"`, `"high"`, or a number) and `maxFps`.
- Auto quality steps the render scale down when the frame rate drops, and climbs back cautiously.
- One shared GPU device and cached pipelines across all orbs; pipelines are created asynchronously.
- The `live` prop, so values that change many times a second (sliders) reach the orb without re-rendering React.
- A per-frame drive path that avoids most allocation.

### Core

- 33 orbs, ported from [shadercn](https://github.com/shadcn-labs/shadercn): shaders resolved to WGSL once by a codegen
  step, then rendered with raw WebGPU through `react-native-webgpu`.
- `ShaderOrb` with `state`, `params`, `colors`, `volumes`, per-mood presets, and spring easing on every value.
- `onReady` and `onStats` callbacks.
- Tested on one Android phone. iOS is untested.
- Expo Go is not supported; a development build is required.

### Known gaps

- On a device where WebGPU can't get an adapter, the orb stays blank. There is no fallback yet.
- It is an alpha: expect the API to change.
- The shaders are licensed for non-commercial use only. See [Licensing and credits](/docs/licensing/).
