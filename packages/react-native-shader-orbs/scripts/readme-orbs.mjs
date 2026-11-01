// Fills the orb table in README.md from the generated orb files, so the README can't drift from the code.
//   node scripts/readme-orbs.mjs           rewrite the table between the <!-- orbs:start --> and <!-- orbs:end --> markers
//   node scripts/readme-orbs.mjs --check   exit 1 if the table is out of date (used by `npm run verify` and CI)
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const orbsDir = join(root, "src/orbs");
const readme = join(root, "README.md");
const START = "<!-- orbs:start -->";
const END = "<!-- orbs:end -->";

/** The generated files are `export const orb01: OrbDefinition = { ...JSON... };`, so the definition can be read as JSON. */
const readOrb = (file) => {
  const text = readFileSync(join(orbsDir, file), "utf8");
  const head = text.match(/export const (\w+): OrbDefinition = /);
  const body = text.slice(text.indexOf("{", head.index + head[0].length), text.lastIndexOf("}") + 1);
  return { name: head[1], ...JSON.parse(body) };
};

const upper = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const cell = (s) => s.replace(/\|/g, "\\|");

const orbs = readdirSync(orbsDir)
  .filter((f) => /^orb-\d+\.ts$/.test(f))
  .sort()
  .map(readOrb);

const table = [
  `All ${orbs.length} orbs. "Params" and "Colors" are how many you can pass through \`params\` and \`colors\`.`,
  "",
  "| Orb | Import | What it looks like | Params | Colors |",
  "|---|---|---|---:|---:|",
  ...orbs.map((o) => `| \`${o.title}\` | \`${o.name}\` | ${cell(upper(o.note))} | ${o.params.length} | ${o.colors.length} |`),
].join("\n");

const current = readFileSync(readme, "utf8");
const a = current.indexOf(START);
const b = current.indexOf(END);
if (a < 0 || b < 0) {
  console.error(`README.md is missing the ${START} / ${END} markers.`);
  process.exit(1);
}
const next = `${current.slice(0, a + START.length)}\n\n${table}\n\n${current.slice(b)}`;

if (process.argv.includes("--check")) {
  if (next !== current) {
    console.error("README.md's orb table is out of date. Run `npm run readme` and commit the result.");
    process.exit(1);
  }
  console.log(`ok   README orb table is up to date (${orbs.length} orbs)`);
} else {
  writeFileSync(readme, next);
  console.log(`README.md orb table written (${orbs.length} orbs)`);
}
