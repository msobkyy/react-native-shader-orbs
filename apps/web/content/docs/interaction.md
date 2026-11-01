# Touch interaction

Add `interactive` and the orb responds to touch. It's off by default.

```tsx
<ShaderOrb orb={orb01} interactive />
```

## What it does

| Gesture | Response |
|---|---|
| **Tap** (press and release in under 250 ms) | A pulse: turbulence and flow spike, then fade over about 0.8 seconds. |
| **Hold** | The orb swells and speeds up over about 0.45 seconds. An orb in `idle` takes on its `speaking` look while held. |
| **Release** | It eases back over about 0.7 seconds. |
| **Any press** | The whole orb scales up slightly and springs back with a small bounce when you let go. |

The scale animation runs on the native animation driver, so it doesn't compete with the render loop.

## Props

| Prop | Default | |
|---|---|---|
| `interactive` | `false` | Turns touch handling on. |
| `pressScale` | `1.08` | How far the orb grows while pressed, as a multiplier. `1` disables the scale. |

```tsx
<ShaderOrb orb={orb01} interactive pressScale={1.12} />
```

## Inside scroll views and pagers

The orb listens with raw touch events rather than claiming the gesture, so a parent `ScrollView` or `FlatList` can still
take over. If you start a swipe on the orb and the pager scrolls, the press is treated as cancelled: no pulse fires and
the orb settles back.

## Build your own reaction

`interactive` changes what the orb does on touch. To react to something else, such as a button press or an audio level,
drive the volumes yourself:

```tsx
<ShaderOrb orb={orb01} volumes={{ output: isSpeaking ? 0.9 : undefined }} />
```

Leaving a volume `undefined` lets the mood's own motion run.
