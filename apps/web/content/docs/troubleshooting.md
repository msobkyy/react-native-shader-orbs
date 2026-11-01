# Troubleshooting

## "Cannot find native module" (WebGPU or similar)

You're running without the native code. Two common causes:

- **You're in Expo Go.** It can't load the WebGPU module. Use a [development build](/docs/installation/).
- **You installed a native dependency but didn't rebuild.** Adding or upgrading `react-native-webgpu`, Reanimated or
  Worklets needs `npx expo run:android` (or a new EAS build) once.

## The orb area is blank for a moment

The first frame appears after the shader compiles. That's normally well under a second, but it isn't instant. Show your own
placeholder and hide it from `onReady`:

```tsx
const [ready, setReady] = useState(false);
// ...
{!ready && <Placeholder />}
<ShaderOrb orb={orb01} onReady={() => setReady(true)} />
```

Later orbs are faster to appear: the GPU device and compiled pipelines are shared and cached.

## The orb stays blank

Rendering needs a WebGPU adapter from `react-native-webgpu`. If the device can't provide one, nothing is drawn, and the
library doesn't yet include a fallback. Check the logs for `WebGPU adapter unavailable`, and try another device.

## The orb is nearly black, or the shape looks broken

A parameter is outside the range the shader was written for. Several parameters are divisors, exposures or camera
distances, so a few of them change the image a lot. Values you pass are clamped to each parameter's declared range, but
the ranges can still be wide: ORB-01's `exposure` accepts 1.5 to 1500.

- Drop the `params` you passed and add them back one at a time.
- Don't pick values at random across the whole range. Move relative to the default.
- Leave framing parameters (`camDist`, `focal`, `envRadius`, `edge`) at their defaults unless you want a different shape.

## It's slow or the frame rate drops

- Use `quality="auto"` (the default), or set `quality="medium"`.
- Cap the frame rate: `maxFps={30}`.
- Make the orb smaller.
- Pause orbs that aren't visible, and mount only the ones on screen.

See [Performance](/docs/performance/). Heavier parameter settings (high `speed`, `spin` or `turb` on some orbs) cost more.

## Sliders feel laggy

Updating state in a parent on every drag step re-renders everything beneath it, on the same thread that drives the
orb. Put the values in a `live` store and mutate it instead. See [Customizing an orb](/docs/customizing/).

## A vertical swipe over a slider moves the slider instead of scrolling

In your own UI: don't let a control claim the gesture on contact. Claim it only after the finger moves mostly sideways,
and let taps through as plain touch events. The example app's slider does this.

## Metro can't resolve modules in a pnpm monorepo

Use a hoisted install: add `node-linker=hoisted` to `.npmrc` and reinstall. See [Installation](/docs/installation/).

## `react-native-wgpu` prints a deprecation warning

That package was renamed. Remove it and install `react-native-webgpu`.

## Copying text in the example app opens a share sheet

The example app's Copy button uses the clipboard when `expo-clipboard`'s native module is in the build, and the system
share sheet otherwise. Rebuild the development build to get true clipboard copy.

## Does it work on iOS?

It hasn't been tested. `react-native-webgpu` supports iOS, so it may well work, but nothing here claims it does.
