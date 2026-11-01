# Changelog

Everything that has been added so far, grouped by area.

> `{{pkg}}` is published as an **alpha**, so expect the API to change.

## 0.1.0-alpha.4

The npm page now shows the banner and orb gallery, and the repository gained a contributing guide, security policy and code of conduct. No change to the orbs or the component.

## 0.1.0-alpha.3

Reliability and a little speed.

- Orbs rebuild themselves on a fresh GPU device after it is lost (a driver reset, or the app being backgrounded), instead of staying blank.
- New `onError` prop. If the orb can't start (no WebGPU adapter, a shader that fails to compile) it is reported there, or logged once with `console.warn`, instead of raising an unhandled promise rejection.
- Color strings are parsed once, not every frame.

## 0.1.0-alpha.2

Package metadata and agent files. No change to the orbs or the component.

- npm page: a rewritten README, 17 keywords, and links to the docs and the repository.
- AI agents: `agent/INSTRUCTIONS.md`, a per-orb `agent/catalog.json` and a Claude Code skill ship inside the package. `npx react-native-shader-orbs-mcp init` sets up MCP config, the skill and an `AGENTS.md` block.

## 0.1.0-alpha.1

README and keywords only. Superseded by alpha.2, which adds the docs and repository links.

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
- Tested on one Android phone.
- Expo Go is not supported; a development build is required.

### Known gaps

- On a device where WebGPU can't get an adapter, the orb stays blank. There is no fallback yet.
- It is an alpha: expect the API to change.
- The shaders are licensed for non-commercial use only. See [Licensing and credits](/docs/licensing/).
