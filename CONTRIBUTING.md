# Contributing

Thanks for helping. This is a small alpha project, so the process is light.

## Before you start

- **Open an issue first** for anything bigger than a typo or a one-line fix, so we can agree on the approach.
- **The shaders are not ours to change freely.** The 33 orbs are by [XorDev](https://x.com/XorDev) and are licensed for non-commercial use with attribution. The license notice at the top of every shader file must stay. See [NOTICE.md](packages/react-native-shader-orbs/NOTICE.md).
- **Generated files:** `packages/react-native-shader-orbs/src/orbs/*`, the README orb table and `agent/catalog.json` are generated. Change the source, not the output (see below).

## Setup

```bash
pnpm install
```

| Area | Where | Check it with |
|---|---|---|
| Library | `packages/react-native-shader-orbs` | `npm run verify` (typecheck, tests, build, package checks) |
| MCP server | `packages/mcp` | `npm run smoke` |
| Docs site | `apps/web` | `npx tsc --noEmit && npx next build` |
| Showcase app | `apps/example` | `npx expo run:android` (needs a development build, not Expo Go) |

## Generated files

- `npm run readme` rewrites the orb table in the README. `npm run readme -- --check` fails if it is stale.
- `npm run agent` rewrites `agent/catalog.json`, the skill and the AGENTS snippet from the orb sources and `agent/INSTRUCTIONS.md`. Edit `INSTRUCTIONS.md`, then run it.
- In `packages/mcp`, `npm run sync` copies those into the MCP package.

CI fails if any of these are out of date.

## Pull requests

- Keep changes focused, and say what you tested and on what device. The library is tested on Android only.
- Add or update a test when you change behaviour (`packages/react-native-shader-orbs/tests`).
- Don't claim iOS or Expo Go support in docs unless you have tested it.
- Docs live in `apps/web/content/docs/*.md`.

## Conduct

Be kind. See the [Code of Conduct](CODE_OF_CONDUCT.md).
