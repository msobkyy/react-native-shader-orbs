# Installation

<!-- prerelease: `{{pkg}}` is not on npm yet. Until it is, install it from the repository (for example as a workspace package in a monorepo) and follow the rest of this page unchanged. -->

## Requirements

| Area | Requirement |
|---|---|
| Expo / React Native | A **development build**. Expo Go is not supported. |
| React Native | 0.81 or newer (the minimum `react-native-webgpu` supports). Tested on 0.88. |
| Expo SDK | Tested on SDK 58. |
| Platforms | **Android** tested on a physical device. |
| Peer packages | `react-native-webgpu`, `react-native-reanimated`, `react-native-worklets` |

## Install

```bash
{{install}}
```

`expo install` picks the versions that match your Expo SDK. Reanimated and Worklets are required by
`react-native-webgpu`, not by the orbs themselves.

> **Use `react-native-webgpu`, not `react-native-wgpu`.** The old name still exists on npm as a deprecated shim that
> re-exports the new package. Install the new one directly.

## Add the config plugin

`react-native-webgpu` ships an Expo config plugin. `npx expo install` normally adds it for you; check that
`app.json` (or `app.config.js`) contains it:

```json
{
  "expo": {
    "plugins": ["react-native-webgpu"]
  }
}
```

## Build a development build

Native code changed, so the app has to be rebuilt once:

```bash
npx expo run:android
```

or, with EAS Build:

```bash
eas build --profile development --platform android
```

Afterwards, JavaScript changes reload instantly through Metro as usual. You only rebuild when you add or upgrade a
native dependency.

> **Why not Expo Go?** Expo Go is a fixed binary with a fixed set of native modules. The WebGPU engine is native code
> that isn't in it, so there's nothing for the orbs to render with.

## Monorepos with pnpm

Metro can't follow pnpm's default symlinked `node_modules` layout reliably. If you see modules that can't be resolved,
add this to `.npmrc` and reinstall:

```ini
node-linker=hoisted
```

## Check that it works

Render the built-in test shader. It's a simple hand-written orb, so if it shows up your WebGPU setup is fine:

```tsx
import { ShaderOrb, testOrb } from "{{pkg}}";

export default function Smoke() {
  return <ShaderOrb shader={testOrb} size={240} />;
}
```

If you see a swirling blue and pink circle, continue to the [Quick start](/docs/quick-start/). If not, see
[Troubleshooting](/docs/troubleshooting/).
