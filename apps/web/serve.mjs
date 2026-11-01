// Minimal static server for previewing the exported site in out/. Not for production.
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.env.DIR ?? "out");
const port = Number(process.env.PORT ?? 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
};

createServer((req, res) => {
  const path = decodeURIComponent((req.url ?? "/").split("?")[0]);
  let file = normalize(join(root, path));
  if (!file.startsWith(root)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) {
    file = join(file, "index.html");
  }
  // Next requests prefetch payloads as "__next.docs.$oc$slug.__PAGE__.txt"; an export built on Windows stores them as
  // "__next.docs/$oc$slug/__PAGE__.txt". Map one to the other so link prefetching works in this preview.
  if (!existsSync(file)) {
    const name = file.split(/[\\/]/).pop() ?? "";
    if (/^__next\..+\.txt$/.test(name)) {
      const [head, first, ...rest] = name.slice(0, -4).split(".");
      const alt = join(file.slice(0, file.length - name.length), `${head}.${first}`, ...rest) + ".txt";
      if (existsSync(alt)) {
        file = alt;
      }
    }
  }
  if (!existsSync(file)) {
    res.writeHead(404, { "content-type": "text/html" });
    createReadStream(join(root, "404.html")).on("error", () => res.end("Not found")).pipe(res);
    return;
  }
  res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`http://localhost:${port}`));
