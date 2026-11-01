# react-native-shader-orbs-mcp

MCP server and one-command agent setup for [`react-native-shader-orbs`](https://www.npmjs.com/package/react-native-shader-orbs): 33 WebGPU shader orbs for React Native and Expo.

Assistants guess parameter names, and a wrong guess gives a black orb. This server lets them look keys up, check values against the real ranges, and write valid `<ShaderOrb />` code.

Docs: https://react-native-shader-orbs.vercel.app/docs/mcp/ · Source: https://github.com/msobkyy/react-native-shader-orbs

## Set up everything

In your app's folder:

```bash
npx react-native-shader-orbs-mcp init
```

Adds MCP config (Claude Code `.mcp.json`, Cursor, VS Code), a Claude Code skill, an `AGENTS.md` block, your `CLAUDE.md` if present, and a Cursor rule. Safe to re-run; configs are merged, never replaced.

Flags: `--dry-run` (show changes, write nothing), `--only=mcp,skill,rules`, `--force` (replace a differing entry).

## Or add the server by hand

```bash
claude mcp add shader-orbs -- npx -y react-native-shader-orbs-mcp
```

```json
{ "mcpServers": { "shader-orbs": { "command": "npx", "args": ["-y", "react-native-shader-orbs-mcp"] } } }
```

## Tools

`get_guide`, `list_orbs`, `get_orb`, `find_by_parameter`, `build_snippet`, `get_install`. The guide is also the resource `shader-orbs://guide`.

## License

Server: MIT. The orb shaders it describes are by XorDev and are **non-commercial, with attribution**; the server says so in its output.
