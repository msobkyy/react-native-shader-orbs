# Registry

A machine-readable catalog of every orb, as plain JSON. Tools, scripts and AI assistants can read it to learn what orbs
exist and what each one accepts, without scraping the docs.

> **This is not a shadcn registry.** shadcn registries copy component source into your project. These orbs ship inside the
> `{{pkg}}` npm package and you import them, so there is nothing to install from here. The catalog describes them.

## Endpoints

| URL | What it is |
|---|---|
| `/r/registry.json` | The catalog: every orb with its parameters, colors and moods. |
| `/r/orb-01.json` | One orb, including its per-mood parameter presets. Also `orb-02` to `orb-33`. |
| `/llms.txt` | A short index in the [llms.txt](https://llmstxt.org) format, for AI assistants. |
| `/llms-full.txt` | All the docs and every orb's parameters, as one text file. |

The shader source (WGSL) is deliberately left out: it's large, and nothing that reads a catalog needs it.

## The catalog

```json
{
  "name": "{{pkg}}",
  "status": "pre-release",
  "install": "{{install}}",
  "requirements": ["A development build. Expo Go is not supported (native WebGPU module)."],
  "license": {
    "library": "MIT",
    "shaders": "Non-commercial use only, with attribution to XorDev. Commercial use needs XorDev's permission.",
    "author": "XorDev (https://x.com/XorDev)"
  },
  "orbs": [
    {
      "slug": "orb-01",
      "title": "ORB-01",
      "description": "cut-glass orb with a dispersive, turbulent interior",
      "export": "orb01",
      "docs": "/docs/components/orbs/orb-01/",
      "json": "/r/orb-01.json",
      "playground": "/playground/?orb=orb-01",
      "params": [
        { "key": "speed", "label": "Anim speed", "default": 0.5, "min": 0.015, "max": 10, "step": 0.05, "integrated": true }
      ],
      "colors": [{ "key": "tint", "label": "Tint", "default": "#ffffff" }],
      "moods": ["idle", "speaking", "thinking"],
      "usage": "import { ShaderOrb, orb01 } from \"{{pkg}}\";\n\n<ShaderOrb orb={orb01} size={280} interactive />"
    }
  ]
}
```

A per-orb file has the same shape plus `statePresets` (and `stateColors`, for orbs that define them): the parameter values
each mood eases toward.

## Fields

- **`params`**: what you can pass through `params`. Values outside `min` and `max` are clamped by the component.
  `integrated` marks a phase clock, where the value acts as a rate.
- **`colors`**: what you can pass through `colors`, as hex strings.
- **`moods`**: the values `state` accepts for this orb.
- **`usage`**: a minimal, correct snippet.

## Absolute URLs

The links in the files are relative to the site root until the site is given a public address. Set `url` in
`lib/site.ts` and every link in the catalog, `llms.txt` and `llms-full.txt` becomes absolute.

## Using it

```ts
const res = await fetch("/r/registry.json");
const { orbs } = await res.json();

// Which orbs have an "exposure" parameter?
orbs.filter((o) => o.params.some((p) => p.key === "exposure")).map((o) => o.title);
```

The [MCP server](/docs/mcp/) is built on this same data.
