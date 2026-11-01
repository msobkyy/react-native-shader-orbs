# Types and exports

Everything is exported from `{{pkg}}`.

## Orbs

```ts
import { orb01, orb02, /* ... */ orb33, orbs } from "{{pkg}}";
```

- `orb01` to `orb33` are `OrbDefinition` objects.
- `orbs` is an array of all of them, in order. Handy for galleries.
- `testOrb` is a small hand-written shader, useful as a smoke test.

## OrbDefinition

What an orb is. You rarely build one by hand: they're generated. See [How it works](/docs/how-it-works/).

```ts
interface OrbDefinition {
  slug: string;           // "orb-01"
  title: string;          // "ORB-01"
  note: string;           // one-line description
  entryPoint: string;     // WGSL fragment entry
  uniformSize: number;    // bytes
  offsets: Record<string, { offset: number; size: number }>; // in floats
  params: OrbParam[];
  colors: OrbColor[];
  statePresets?: Partial<Record<OrbState, Record<string, number>>>;
  stateColors?: Partial<Record<OrbState, Record<string, string>>>;
  wgsl: string;
}

interface OrbParam {
  key: string;
  label: string;
  default: number;
  min: number;
  max: number;
  step: number;
  integrate: boolean;     // a phase clock: the shader accumulates it over time
}

interface OrbColor {
  key: string;
  label: string;
  default: string;        // hex
}
```

## OrbState

```ts
type OrbState = "idle" | "thinking" | "speaking";
const ORB_STATES: readonly ["idle", "thinking", "speaking"];
```

## OrbValues

The shape `live` returns, and the value props of `ShaderOrb`:

```ts
interface OrbValues {
  state?: OrbState;
  params?: Record<string, number>;
  colors?: Record<string, string>;
  statePresets?: Partial<Record<OrbState, Record<string, number>>>;
  stateColors?: Partial<Record<OrbState, Record<string, string>>>;
  stateVolumes?: Partial<Record<OrbState, { input?: number; output?: number }>>;
  volumes?: { input?: number; output?: number };
}
```

## OrbQuality

```ts
type OrbQuality = "auto" | "low" | "medium" | "high" | number;
```

## Lower-level functions

For custom renderers. Most apps never need these.

### createOrbShader

```ts
createOrbShader(def: OrbDefinition, read: () => OrbValues, touch?: OrbTouch): OrbShader
```

Binds a definition to a function that returns the current values, and returns an `OrbShader`: the WGSL plus a `write`
function that fills the uniform buffer for a frame. It holds all the easing, mood, volume and touch logic and has no
React Native dependency, which is why the docs site runs the same code in the browser.

### OrbShader

```ts
interface OrbShader {
  wgsl: string;
  entryPoint: string;
  uniformSize: number;
  write: (f32: Float32Array, time: number, width: number, height: number) => void;
}
```

### createOrbRenderer

```ts
createOrbRenderer(
  context: RNCanvasContext,
  shader: OrbShader,
  size: () => { width: number; height: number },
  options?: { maxFps?: number; onFps?: (fps: number) => void; onFirstFrame?: () => void }
): Promise<{ start(): void; stop(): void; setMaxFps(fps: number): void; destroy(): void }>
```

Draws an `OrbShader` into a `react-native-webgpu` canvas context with a fullscreen triangle. This is what `ShaderOrb`
uses.
