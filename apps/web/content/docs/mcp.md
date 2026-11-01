# MCP server and agent skills

Everything an AI coding assistant needs to use `{{pkg}}` correctly: an [MCP](https://modelcontextprotocol.io) server, a
skill, and instruction files. One command sets them all up in your project.

```bash
npx react-native-shader-orbs-mcp init
```

It writes MCP config for Claude Code, Cursor and VS Code, a Claude Code skill, an `AGENTS.md` block (read by Codex, Cursor,
Copilot, Windsurf and others), your `CLAUDE.md` if you have one, and a Cursor rule. It is safe to re-run: configs are
merged, never replaced, and the instructions block updates in place. Add `--dry-run` to see what it would change,
`--only=mcp,skill,rules` to pick parts, and `--force` to replace an entry that differs.

## Why

Assistants guess at parameter names. `exposure` exists on some orbs and not others, and its range runs from 1.5 to 1500, so a
confident guess gives you a black orb. With these files the assistant looks keys up instead of guessing, checks the
license, and writes code with keys that exist and values that are in range.

## What ships where

| Where | What | For |
|---|---|---|
| `node_modules/{{pkg}}/agent/INSTRUCTIONS.md` | How to use the library correctly | any agent that reads files |
| `node_modules/{{pkg}}/agent/catalog.json` | Every orb: parameters, ranges, defaults, colors, presets | any agent, offline |
| `node_modules/{{pkg}}/agent/skills/shader-orbs/SKILL.md` | The same guidance as an agent skill | Claude Code and other skill-aware agents |
| `react-native-shader-orbs-mcp` (npm) | The MCP server | MCP clients |
| [`/llms.txt`](/llms.txt), [`/llms-full.txt`](/llms-full.txt) | Docs index and full text | agents browsing the web |

All of it is generated from the orb sources, so it can't drift from the code.

## Tools

| Tool | What it does |
|---|---|
| `get_guide` | The full usage instructions. Read before writing orb code. |
| `list_orbs` | Lists orbs, optionally filtered by a search word that matches the title, description, or parameter names. |
| `get_orb` | Everything about one orb: parameters with ranges and defaults, colors, moods, per-mood presets, and a usage snippet. |
| `find_by_parameter` | Finds the orbs that have a parameter matching a name, such as `exposure` or `lattice`, with its range on each. |
| `build_snippet` | Writes a `<ShaderOrb />` snippet from a state, params, colors and volumes. It rejects unknown keys and flags out-of-range values instead of passing them through. |
| `get_install` | The install steps, the requirements, and the licensing caveat. |

The guide is also exposed as the resource `shader-orbs://guide`.

## Set it up by hand

The server runs locally over stdio and needs no network.

```bash
# Claude Code
claude mcp add shader-orbs -- npx -y react-native-shader-orbs-mcp
```

```json
{
  "mcpServers": {
    "shader-orbs": { "command": "npx", "args": ["-y", "react-native-shader-orbs-mcp"] }
  }
}
```

That block works in Claude Desktop, Cursor (`.cursor/mcp.json`) and Claude Code (`.mcp.json`). VS Code uses `"servers"` with
`"type": "stdio"` in `.vscode/mcp.json`.

## Try it

Once connected, ask the assistant something it would otherwise guess at:

- "Which orbs have an exposure parameter, and what range does it take?"
- "Make ORB-12 look like it's thinking, tinted green, and give me the code."
- "I want a slow, calm orb with low turbulence. Which one fits?"

## What it won't do

- It doesn't render anything. It describes orbs and writes code.
- It reads the catalog shipped with the version you installed. Update `react-native-shader-orbs-mcp` when the library changes.
- It carries the same licence caveat as the shaders: they are non-commercial unless you have XorDev's permission.
  `get_install` says so.
