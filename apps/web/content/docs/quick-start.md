# Quick start

## Render an orb

Every orb is exported by name: `orb01` through `orb33`.

```tsx
import { View } from "react-native";
import { ShaderOrb, orb01 } from "{{pkg}}";

export default function Screen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", alignItems: "center", justifyContent: "center" }}>
      <ShaderOrb orb={orb01} size={300} />
    </View>
  );
}
```

The orb is transparent around the sphere, so it composites over whatever is behind it. A dark background shows the glow
best.

## Change how it looks

```tsx
<ShaderOrb
  orb={orb01}
  state="speaking"            // idle | thinking | speaking
  colors={{ tint: "#66ccff" }} // each orb lists its own color keys
  params={{ speed: 1.2 }}      // each orb lists its own parameters
/>
```

The keys differ per orb. Each orb's page under [Orbs](/docs/components/orbs/) lists its parameters, and the
[playground](/playground/) lets you try them with sliders and copies the code for you.

## Make it react

```tsx
<ShaderOrb orb={orb01} interactive />
```

Tap for a pulse; press and hold and it swells and speeds up. See [Touch interaction](/docs/interaction/).

## Drive it from your app

`volumes` takes numbers from 0 to 1. Use them to follow a microphone level, a loading state, or anything else:

```tsx
<ShaderOrb orb={orb01} volumes={{ input: micLevel, output: voiceLevel }} />
```

## Keep it smooth

```tsx
<ShaderOrb orb={orb01} quality="auto" maxFps={60} paused={!isFocused} />
```

`quality="auto"` is the default. See [Performance](/docs/performance/) for what each setting costs.

## Tips

- **Render one or two big orbs, not twenty.** Each orb is a full-screen-style shader at its own size. For lists, show a
  frozen preview; the [Performance](/docs/performance/) guide has the pattern.
- **Show a placeholder until `onReady`.** The first frame appears after the shader compiles, which can take a moment.
- **Pause when it's not visible.** Pass `paused` while a screen is in the background or scrolled away.
