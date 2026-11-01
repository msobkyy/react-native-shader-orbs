# Introduction

`{{pkg}}` gives React Native and Expo apps 33 GPU shader "orbs": glowing, flowing spheres rendered live with WebGPU.
You import one, render it, and tune it with props.

<!-- prerelease: The package name is a placeholder and it isn't published to npm yet. These docs describe the package as it exists in the repository. -->

```tsx
import { ShaderOrb, orb01 } from "{{pkg}}";

<ShaderOrb orb={orb01} state="speaking" colors={{ tint: "#66ccff" }} interactive />
```

## What you get

- **33 orbs**, each with its own set of typed, range-checked parameters and its own colors.
- **Three moods** per orb (`idle`, `thinking`, `speaking`) that ease between parameter presets.
- **Volume inputs** (`input` and `output`, 0 to 1) so an orb can follow audio or app activity.
- **Touch interaction**: a tap pulses the orb, holding makes it swell, and it scales under your finger.
- **Adaptive quality**: render resolution and frame rate trade off automatically to stay smooth.
- **Props update live**, without re-mounting, so sliders and animations don't rebuild anything.

## What you need to know first

> **Development build required.** The orbs render through a native WebGPU module that Expo Go doesn't include. You'll
> use a development build (`npx expo run:android`, or EAS Build).

- It has been tested on **Android**, on one physical phone. **iOS has not been tested.**
- The shaders are by [XorDev](https://x.com/XorDev) and are licensed for **non-commercial use with attribution**. The
  library code is MIT. Read [Licensing and credits](/docs/licensing/) before shipping.
- These are ray-marched shaders. They look expensive because they are; see [Performance](/docs/performance/).

## Where to go next

- [Installation](/docs/installation/) to add the package and its peers.
- [Quick start](/docs/quick-start/) to render your first orb.
- [All 33 orbs](/docs/components/orbs/) to preview each one live in your browser.
- The [playground](/playground/) to tune any orb with sliders and copy the code.
- [ShaderOrb](/docs/shader-orb/) for the full prop reference.
