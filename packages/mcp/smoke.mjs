// Starts the server the way a client would (stdio), lists its tools, and calls each one. Exits non-zero on any failure.
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const client = new Client({ name: "smoke", version: "0.0.0" });
await client.connect(new StdioClientTransport({ command: process.execPath, args: [join(here, "server.mjs")] }));

let failed = 0;
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "ok  " : "FAIL"} ${name}${detail ? `  ${detail}` : ""}`);
  if (!ok) failed += 1;
};
const call = async (name, args = {}) => {
  const r = await client.callTool({ name, arguments: args });
  return { error: !!r.isError, text: r.content?.[0]?.text ?? "" };
};

const { tools } = await client.listTools();
const names = tools.map((t) => t.name).sort();
check("lists 6 tools", names.length === 6, names.join(", "));

let r = await call("list_orbs");
check("list_orbs returns every orb", JSON.parse(r.text).length === 33, `${JSON.parse(r.text).length} orbs`);

r = await call("list_orbs", { query: "bricks" });
check("list_orbs filters by description", !r.error && /ORB-12/.test(r.text));

r = await call("find_by_parameter", { query: "exposure" });
const hits = JSON.parse(r.text);
check("find_by_parameter finds orbs by parameter", hits.length > 3 && hits.some((h) => h.slug === "orb-01"), `${hits.length} orbs have exposure`);

r = await call("get_orb", { slug: "ORB-01" });
const orb = JSON.parse(r.text);
check("get_orb accepts ORB-01 and returns presets", orb.slug === "orb-01" && !!orb.presets?.speaking && orb.params.length === 20);

r = await call("get_orb", { slug: "orb99" });
check("get_orb rejects an unknown orb with a helpful error", r.error && /ORB-33/.test(r.text));

r = await call("build_snippet", { slug: "orb01", state: "speaking", params: { speed: 1.2 }, colors: { tint: "#66ccff" } });
check("build_snippet writes valid code", !r.error && r.text.includes('state="speaking"') && r.text.includes("speed: 1.2") && r.text.includes("#66ccff"));

r = await call("build_snippet", { slug: "orb01", params: { exposure: 99999 } });
check("build_snippet clamps out-of-range values and says so", !r.error && r.text.includes("exposure: 1500") && /clamped/.test(r.text));

r = await call("build_snippet", { slug: "orb01", params: { nonsense: 1 } });
check("build_snippet rejects an unknown parameter", r.error && /no parameter "nonsense"/.test(r.text));

r = await call("build_snippet", { slug: "orb01", colors: { tint: "blue" } });
check("build_snippet rejects a non-hex color", r.error && /hex/.test(r.text));

r = await call("get_install");
check("get_install states the license caveat", /Non-commercial/i.test(r.text));

r = await call("get_guide");
check("get_guide returns the instructions", !r.error && /non-commercial/i.test(r.text) && /Expo Go/.test(r.text));

await client.close();
console.log(failed ? `\n${failed} check(s) failed` : "\nall checks passed");
process.exit(failed ? 1 : 0);
