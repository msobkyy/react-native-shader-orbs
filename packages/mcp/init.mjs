// Sets up AI-agent support for react-native-shader-orbs in the current project. Safe to re-run:
//   - MCP configs are merged, never replaced; an existing "shader-orbs" entry that differs is left alone unless --force
//   - the instructions block in AGENTS.md / CLAUDE.md lives between markers and is updated in place
//   - nothing outside the current directory is touched
//   --dry-run   print what would change, write nothing
//   --force     replace a differing "shader-orbs" MCP entry or a modified skill file
//   --only=mcp,skill,rules   limit what is set up (default: all)
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(3);
const dry = args.includes("--dry-run");
const force = args.includes("--force");
const only = (args.find((a) => a.startsWith("--only="))?.slice(7) ?? "mcp,skill,rules").split(",");
const cwd = process.cwd();

const data = (name) => readFileSync(join(here, "data", name), "utf8");
const server = { command: "npx", args: ["-y", "react-native-shader-orbs-mcp"] };
const START = "<!-- react-native-shader-orbs:start -->";
const END = "<!-- react-native-shader-orbs:end -->";

let changed = 0;
const log = (status, file, note = "") => console.log(`${status.padEnd(9)} ${file}${note ? `  (${note})` : ""}`);
const write = (rel, text) => {
  if (!dry) {
    mkdirSync(dirname(join(cwd, rel)), { recursive: true });
    writeFileSync(join(cwd, rel), text);
  }
  changed += 1;
};
const read = (rel) => (existsSync(join(cwd, rel)) ? readFileSync(join(cwd, rel), "utf8") : null);

/** Merge the server into an MCP config. `key` is "mcpServers" (Claude Code, Cursor) or "servers" (VS Code). */
const mcpConfig = (rel, key, entry) => {
  const existing = read(rel);
  let json = {};
  if (existing !== null) {
    try {
      json = JSON.parse(existing);
    } catch {
      return log("skipped", rel, "not plain JSON (comments?); add the server by hand");
    }
  }
  const current = json[key]?.["shader-orbs"];
  if (current && JSON.stringify(current) === JSON.stringify(entry)) return log("ok", rel, "already set up");
  if (current && !force) return log("skipped", rel, 'a different "shader-orbs" entry exists; use --force to replace');
  json[key] = { ...json[key], "shader-orbs": entry };
  write(rel, `${JSON.stringify(json, null, 2)}\n`);
  log(dry ? "would add" : current ? "replaced" : existing === null ? "created" : "updated", rel);
};

/** Put the instructions block between markers, so re-running updates it instead of duplicating it. */
const instructionsBlock = (rel, create) => {
  const existing = read(rel);
  if (existing === null && !create) return;
  const block = `${START}\n${data("AGENTS.snippet.md").trim()}\n${END}\n`;
  let next;
  if (existing === null) next = block;
  else if (existing.includes(START) && existing.includes(END)) {
    next = existing.slice(0, existing.indexOf(START)) + block + existing.slice(existing.indexOf(END) + END.length).replace(/^\n/, "");
  } else next = `${existing.replace(/\s*$/, "")}\n\n${block}`;
  if (next === existing) return log("ok", rel, "already up to date");
  write(rel, next);
  log(dry ? "would add" : existing === null ? "created" : "updated", rel);
};

const file = (rel, text, label) => {
  const existing = read(rel);
  if (existing === text) return log("ok", rel, "already up to date");
  if (existing !== null && !force && !existing.includes("name: shader-orbs")) return log("skipped", rel, `exists and is not ours; use --force to replace`);
  write(rel, text);
  log(dry ? "would add" : existing === null ? "created" : "updated", rel, label);
};

console.log(`${dry ? "Dry run: " : ""}setting up AI-agent support in ${cwd}\n`);

if (only.includes("mcp")) {
  mcpConfig(".mcp.json", "mcpServers", server); // Claude Code (project scope)
  mcpConfig(".cursor/mcp.json", "mcpServers", server); // Cursor
  mcpConfig(".vscode/mcp.json", "servers", { type: "stdio", ...server }); // VS Code / Copilot
}
if (only.includes("skill")) {
  file(".claude/skills/shader-orbs/SKILL.md", data("SKILL.md"), "Claude Code skill");
}
if (only.includes("rules")) {
  instructionsBlock("AGENTS.md", true); // Codex, Cursor, Copilot, Windsurf, Zed and others read this
  instructionsBlock("CLAUDE.md", false); // only if the project already has one
  file(
    ".cursor/rules/shader-orbs.mdc",
    `---\ndescription: Use when adding or editing react-native-shader-orbs ShaderOrb components\nglobs: ["**/*.tsx", "**/*.ts"]\nalwaysApply: false\n---\n\n${data("SKILL.md").replace(/^---[\s\S]*?---\n+/, "").replace(/^# .*\n+/, "")}`,
    "Cursor rule"
  );
}

console.log(changed ? `\n${dry ? "Would change" : "Changed"} ${changed} file(s).${dry ? " Run again without --dry-run to apply." : " Restart your agent so it picks up the MCP server."}` : "\nNothing to change.");
