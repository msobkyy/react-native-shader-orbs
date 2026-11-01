// Checks a built or installed copy of the package: manifest targets exist, imports resolve, and every shader keeps its
// license notice.
//   node scripts/check-package.mjs [path-to-package]   (defaults to the current directory)
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = resolve(process.argv[2] ?? ".");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
let bad = 0;
const fail = (m) => { console.log("FAIL", m); bad += 1; };
const ok = (m) => console.log("ok  ", m);

// 1. Every concrete target in the manifest exists. Wildcard targets are checked with a real orb.
const targets = new Set([pkg.main, pkg.module, pkg.types, pkg["react-native"], pkg.source]);
for (const [key, val] of Object.entries(pkg.exports)) {
  for (const t of typeof val === "string" ? [val] : Object.values(val)) targets.add(key.includes("*") ? t.replace("*", "orb-01") : t);
}
for (const t of [...targets].filter(Boolean)) existsSync(join(root, t)) ? ok(`manifest target ${t}`) : fail(`manifest target missing: ${t}`);
existsSync(join(root, "lib/module/orbs/orb-33.js")) && existsSync(join(root, "lib/typescript/orbs/orb-33.d.ts")) ? ok("orb-33 resolves through ./orbs/*") : fail("orb-33 files");

// 2. Every relative import (static or re-export) in shipped JS and TS resolves to a shipped file.
const files = [];
const walk = (d) => { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : files.push(p); } };
walk(join(root, "lib")); walk(join(root, "src"));
const exts = ["", ".js", ".ts", ".tsx", ".d.ts", "/index.js", "/index.ts", "/index.d.ts"];
let checked = 0;
for (const f of files.filter((f) => /\.(js|ts|tsx)$/.test(f))) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/(?:from|import)\s*["'](\.{1,2}\/[^"']+)["']/g)) {
    checked += 1;
    const base = resolve(dirname(f), m[1]);
    if (!exts.some((e) => existsSync(base + e) && statSync(base + e).isFile())) fail(`unresolved import ${m[1]} in ${f.replace(root, "")}`);
  }
}
ok(`${checked} relative imports checked across ${files.length} files`);

// 3. The license notice must travel with EVERY copy of every shader, including the compiled lib/ files. TypeScript drops a
// comment attached to an `import type` it erases, so this has failed before: check all of them, not a sample.
let withNotice = 0;
for (let i = 1; i <= 33; i += 1) {
  const name = `orb-${String(i).padStart(2, "0")}`;
  for (const rel of [`src/orbs/${name}.ts`, `lib/module/orbs/${name}.js`]) {
    const text = readFileSync(join(root, rel), "utf8").replace(/[\s*/]+/g, " ");
    if (/XorDev/.test(text) && /Non-commercial use only/.test(text) && /keep this notice with the file/.test(text)) {
      withNotice += 1;
    } else {
      fail(`license notice missing from ${rel}`);
    }
  }
}
if (withNotice === 66) ok("license notice present in all 66 shader files (33 source + 33 compiled)");

// 4. The license files themselves ship.
for (const f of ["LICENSE", "NOTICE.md", "README.md", "agent/INSTRUCTIONS.md", "agent/catalog.json", "agent/AGENTS.snippet.md", "agent/skills/shader-orbs/SKILL.md"]) existsSync(join(root, f)) ? ok(`${f} shipped`) : fail(`${f} missing`);

process.exit(bad ? 1 : 0);
