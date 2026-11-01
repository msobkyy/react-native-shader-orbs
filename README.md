# react-native-shader-orbs

**GPU shader orbs for React Native and Expo.** 33 WebGPU shaders as drop-in components, with live parameters, touch interaction and adaptive quality. Built to work well with AI coding agents too.

[![npm](https://img.shields.io/npm/v/react-native-shader-orbs?label=npm&color=7c5cff)](https://www.npmjs.com/package/react-native-shader-orbs)
[![mcp](https://img.shields.io/npm/v/react-native-shader-orbs-mcp?label=mcp&color=7c5cff)](https://www.npmjs.com/package/react-native-shader-orbs-mcp)
[![docs](https://img.shields.io/badge/docs-vercel.app-000000)](https://react-native-shader-orbs.vercel.app)
[![platform](https://img.shields.io/badge/Android-tested-3ddc84)](#status)

**[Documentation and live playground](https://react-native-shader-orbs.vercel.app)** · **[npm](https://www.npmjs.com/package/react-native-shader-orbs)** · [llms.txt](https://react-native-shader-orbs.vercel.app/llms.txt)

```bash
npx expo install react-native-shader-orbs react-native-webgpu react-native-reanimated react-native-worklets
```

```tsx
import { ShaderOrb, orb01 } from "react-native-shader-orbs";

<ShaderOrb orb={orb01} state="speaking" colors={{ tint: "#66ccff" }} interactive />
```

## Status

- **Alpha.** The API may change between releases.
- Needs a **development build**. Expo Go is not supported.
- **Tested on Android only.** iOS is untested.
- The orb shaders are by [XorDev](https://x.com/XorDev) and licensed for **non-commercial use with attribution**. The code around them is MIT. See [LICENSE](packages/react-native-shader-orbs/LICENSE) and [NOTICE.md](packages/react-native-shader-orbs/NOTICE.md).

## AI agents

```bash
npx react-native-shader-orbs-mcp init
```

Sets up MCP config, a Claude Code skill, an `AGENTS.md` block and a Cursor rule in your project. See the [MCP docs](https://react-native-shader-orbs.vercel.app/docs/mcp/).

## Repository

| Path | What |
|---|---|
| [`packages/react-native-shader-orbs`](packages/react-native-shader-orbs) | The library, published to npm |
| [`packages/mcp`](packages/mcp) | MCP server and agent setup (`react-native-shader-orbs-mcp`) |
| [`packages/codegen`](packages/codegen) | Generates the orb files from the upstream TypeGPU shaders |
| [`apps/web`](apps/web) | Docs site and playground (Next.js), deployed to Vercel |
| [`apps/example`](apps/example) | Expo showcase app with all 33 orbs |

## Develop

```bash
pnpm install
cd packages/react-native-shader-orbs && npm run verify   # typecheck, test, build, package checks
cd apps/web && npx next build                            # docs site
cd packages/mcp && npm run smoke                         # MCP server
```

## Credits

Shaders by [XorDev](https://x.com/XorDev), from [shadcn-labs/shadercn](https://github.com/shadcn-labs/shadercn). React Native port by [msobkyy](https://x.com/msobkyy).
