// Copies the agent catalog and instructions from the library (packages/react-native-shader-orbs/agent) into ./data.
//   node sync.mjs [path-to-the-library's-agent-folder]
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const from = resolve(process.argv[2] ?? join(here, "../react-native-shader-orbs/agent"));
const to = join(here, "data");

if (!existsSync(join(from, "catalog.json"))) {
  console.error(`No catalog.json in ${from}. Run "npm run agent" in the library, or pass the folder.`);
  process.exit(1);
}

rmSync(to, { recursive: true, force: true });
mkdirSync(to, { recursive: true });
copyFileSync(join(from, "catalog.json"), join(to, "catalog.json"));
copyFileSync(join(from, "INSTRUCTIONS.md"), join(to, "instructions.md"));
copyFileSync(join(from, "AGENTS.snippet.md"), join(to, "AGENTS.snippet.md"));
copyFileSync(join(from, "skills/shader-orbs/SKILL.md"), join(to, "SKILL.md"));
console.log(`Synced ${readdirSync(to).length} files from ${from}`);
