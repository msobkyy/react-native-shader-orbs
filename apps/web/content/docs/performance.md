# Performance

These orbs are ray-marched: for every pixel, the shader steps through a volume dozens of times. Cost grows with the
number of pixels, so the biggest levers are **how many pixels you draw** and **how often**.

> **What was measured.** On one mid-range Android phone, ORB-01 held about 50 to 58 fps at a 0.75x render scale, and
> auto quality settled around 0.6x for harder parameter settings. Other orbs and other phones will differ. Use the
> `onStats` callback to see what yours does.

## Quality

`quality` sets the render scale: the orb is drawn at `size * scale` pixels per side and upscaled to `size`.

| Value | Scale |
|---|---|
| `"low"` | 0.5 |
| `"medium"` | 0.75 |
| `"high"` | 1 |
| a number | that scale, clamped to 0.2 to 1 |
| `"auto"` (default) | starts at 0.75 and adapts, see below |

```tsx
<ShaderOrb orb={orb01} quality="medium" />
```

Changing the scale re-creates the canvas, so avoid animating it. Pick a value, or use `"auto"`.

### How auto works

Once a second the renderer reports the frame rate it actually achieved. In auto mode:

1. If two seconds in a row come in under **80%** of `maxFps`, the scale drops by **0.15** (not below **0.35**).
2. The scale that just failed becomes a ceiling, so it never climbs back to it.
3. If ten seconds in a row reach **95%** of `maxFps`, it climbs by **0.1**, up to that ceiling.
4. After every change, the next three readings are ignored while the new canvas warms up.

## Frame cap

`maxFps` defaults to **60**. Set it to **30** to roughly halve GPU load and save battery, which suits an ambient orb:

```tsx
<ShaderOrb orb={orb01} maxFps={30} />
```

On a 120 Hz display the cap still holds you at 60 by skipping alternate frames.

## Size

Smaller orbs are cheaper: halving the width quarters the pixels. If an orb is decoration, give it the smallest `size`
that looks right.

## Pause what you can't see

```tsx
<ShaderOrb orb={orb01} paused={!isFocused} />
```

`paused` stops drawing and leaves the last frame on screen. The component also stops by itself when the app goes to the
background and resumes when it returns.

Only mount orbs that are on screen. Mounting is cheap (see below), but a mounted, running orb costs GPU time every frame.

## Lists and galleries: freeze a frame

For a grid of previews, let each orb draw for a moment and then pause, so a preview costs nothing afterwards:

```tsx
function Thumb({ orb }: { orb: OrbDefinition }) {
  const [frozen, setFrozen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFrozen(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return <ShaderOrb orb={orb} size={60} quality="low" maxFps={30} paused={frozen} />;
}
```

Use a virtualized list so only visible rows mount. The example app's sidebar works this way.

## What's already optimized

- **One GPU device** is shared by every orb, and **compiled pipelines are cached** per shader, so mounting a second orb
  doesn't request a device or recompile.
- Pipelines are created **asynchronously**, so compiling doesn't block the JS thread.
- The per-frame drive code **avoids most allocation**: uniform offsets are resolved once up front instead of building
  key strings every frame, and the loops don't create closures.
- Touch scaling uses the **native animation driver**.

## Measure it

```tsx
<ShaderOrb
  orb={orb01}
  onStats={({ fps, scale }) => console.log(fps.toFixed(0), "fps at", scale.toFixed(2), "x")}
/>
```

`onStats` fires about once a second. Don't store it in state at that rate if the owning component is expensive to render;
the example app throttles its badge for that reason.

If a screen with sliders feels laggy, move the slider values into a `live` store. See
[Customizing an orb](/docs/customizing/).
