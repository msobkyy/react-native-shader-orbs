# ShaderOrb

The component that renders an orb.

```tsx
import { ShaderOrb, orb01 } from "{{pkg}}";

<ShaderOrb orb={orb01} size={300} state="idle" interactive />
```

## What to render

| Prop | Type | Default | |
|---|---|---|---|
| `orb` | `OrbDefinition` | | An orb: `orb01` to `orb33`. |
| `shader` | `OrbShader` | | A raw shader, for custom or test shaders. Used only when `orb` isn't set. One of `orb` or `shader` is required. |
| `size` | `number` | `280` | Width and height in points. |
| `style` | `StyleProp<ViewStyle>` | | Style for the wrapping view. |

## Appearance

| Prop | Type | Default | |
|---|---|---|---|
| `state` | `"idle" \| "thinking" \| "speaking"` | `"idle"` | The mood. Eases the parameters toward that preset. |
| `params` | `Record<string, number>` | | Parameter overrides by key. Clamped to each parameter's range. Win over the mood's preset. |
| `colors` | `Record<string, string>` | | Hex colors by key. Win over the mood's colors. |
| `volumes` | `{ input?: number; output?: number }` | | Levels from 0 to 1. Win over the synthesized and per-mood levels. |
| `statePresets` | `Partial<Record<OrbState, Record<string, number>>>` | | Replaces the orb's presets for the moods you list. |
| `stateColors` | `Partial<Record<OrbState, Record<string, string>>>` | | Replaces the orb's per-mood colors. |
| `stateVolumes` | `Partial<Record<OrbState, { input?: number; output?: number }>>` | | Per-mood volume levels. |
| `live` | `() => OrbValues` | | Read every frame instead of the props above. See [Customizing](/docs/customizing/). |

## Interaction

| Prop | Type | Default | |
|---|---|---|---|
| `interactive` | `boolean` | `false` | Tap pulses the orb; holding makes it swell. |
| `pressScale` | `number` | `1.08` | Growth while pressed. `1` disables it. Needs `interactive`. |

See [Touch interaction](/docs/interaction/).

## Performance

| Prop | Type | Default | |
|---|---|---|---|
| `quality` | `"auto" \| "low" \| "medium" \| "high" \| number` | `"auto"` | Render scale. See [Performance](/docs/performance/). |
| `maxFps` | `number` | `60` | Frame cap. Can be changed while mounted. |
| `paused` | `boolean` | `false` | Stops drawing and keeps the last frame. |

## Callbacks

| Prop | Type | |
|---|---|---|
| `onReady` | `() => void` | Once, after the first frame is on screen. Use it to hide a placeholder. |
| `onStats` | `({ fps, scale }) => void` | About once a second: the achieved frame rate and the current render scale. |

## Behavior notes

- **Props update live.** Changing `state`, `params`, `colors` or `volumes` doesn't recreate the orb or its GPU resources.
  Values ease toward the new target with a spring.
- **Changing `orb`, `shader`, `interactive` or the render scale does.** Those rebuild the shader or the canvas.
- **Lifecycle.** The orb stops when the app is backgrounded and resumes when it returns, unless `paused`.
- **Sizing.** The canvas is drawn at `size * scale` and scaled up to `size`, so a lower quality looks softer, not smaller.
- **Transparency.** Pixels outside the sphere are transparent.
- **Errors.** Rendering needs a WebGPU adapter. If the device can't provide one the orb stays blank.

## Example

```tsx
function Assistant({ listening, level }: { listening: boolean; level: number }) {
  const [ready, setReady] = useState(false);
  return (
    <View style={{ width: 280, height: 280 }}>
      {!ready && <Placeholder />}
      <ShaderOrb
        orb={orb01}
        state={listening ? "speaking" : "idle"}
        volumes={{ input: level }}
        colors={{ tint: "#66ccff" }}
        interactive
        onReady={() => setReady(true)}
      />
    </View>
  );
}
```
