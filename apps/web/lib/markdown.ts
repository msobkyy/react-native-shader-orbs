import hljs from "highlight.js";
import { marked } from "marked";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { basePath, install, site } from "./site";

export interface TocItem {
  depth: number;
  id: string;
  text: string;
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Syntax-highlighted HTML for a code string. Unknown languages are just escaped. */
export const highlight = (code: string, lang?: string) =>
  lang && hljs.getLanguage(lang) ? hljs.highlight(code, { language: lang }).value : esc(code);

// Collected while one document renders; rendering is synchronous, so a module-level list is safe.
let toc: TocItem[] = [];

marked.use({
  renderer: {
    heading({ tokens, depth, text }) {
      const html = this.parser.parseInline(tokens);
      const id = slugify(text);
      if (depth === 2 || depth === 3) {
        toc.push({ depth, id, text: text.replace(/`/g, "") });
      }
      return `<h${depth} id="${id}">${html}<a class="anchor" href="#${id}" aria-label="Link to this section">#</a></h${depth}>\n`;
    },
    code({ text, lang }) {
      const label = lang ? `<span class="code-lang">${esc(lang)}</span>` : "";
      return `<div class="code">${label}<button type="button" class="copy-code">Copy</button><pre><code class="hljs">${highlight(text, lang)}</code></pre></div>\n`;
    },
    blockquote({ tokens }) {
      return `<blockquote class="callout">${this.parser.parse(tokens)}</blockquote>\n`;
    },
  },
});

/** A one-line summary: the first prose paragraph (not a heading, quote, table, list or code), cut at a sentence end. */
const describe = (md: string) => {
  const prose = md
    .replace(/```[\s\S]*?```/g, "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p.length > 30 && !/^[#>|\-*<!\d]/.test(p));
  if (!prose) {
    return site.description;
  }
  const flat = prose
    .replace(/\s*\n\s*/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*|`/g, "");
  // Keep whole sentences, up to ~190 characters.
  let out = "";
  for (const sentence of flat.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [flat]) {
    if (out && (out + sentence).length > 190) {
      break;
    }
    out += sentence;
  }
  return out.trim().slice(0, 220);
};

/** The Markdown source of a doc with its {{placeholders}} filled in. Also what the llms files are made from. */
export const loadDocMarkdown = (file: string) => {
  let md = readFileSync(join(process.cwd(), "content/docs", file), "utf8");

  // <!-- prerelease: text --> becomes a callout until the package is published.
  md = md.replace(/<!--\s*prerelease:(.*?)-->/gs, (_, text: string) =>
    site.published ? "" : `> **Pre-release.** ${text.trim()}\n`
  );
  return md.replaceAll("{{pkg}}", site.pkg).replaceAll("{{install}}", install);
};

/** Reads content/docs/<file>, fills the {{placeholders}}, and renders it. */
export const renderDoc = (file: string) => {
  const md = loadDocMarkdown(file);

  toc = [];
  let html = marked.parse(md, { async: false });
  // Tables sit in a bordered, scrollable card, so they fill the column and scroll sideways on narrow screens.
  html = html.replaceAll("<table>", '<div class="table-card"><table>').replaceAll("</table>", "</table></div>");
  // Docs link to "/docs/..." so the source reads naturally; point them under the configured base path.
  if (basePath) {
    html = html.replace(/href="\/(?!\/)/g, `href="${basePath}/`);
  }
  return { html, toc, description: describe(md) };
};
