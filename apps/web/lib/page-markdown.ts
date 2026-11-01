import { orbDetail } from "./llms";
import { loadDocMarkdown } from "./markdown";
import { registryOrbs } from "./registry";
import { abs, allDocs, site } from "./site";

/** File name of a page's Markdown export: "index.md", "installation.md", "orb-05.md". */
export const docMdName = (slug: string) => `${slug || "index"}.md`;
export const orbMdName = (slug: string) => `${slug}.md`;

/** Absolute URL of a page's Markdown export. Agents and the "Open in ..." menu read this. */
export const mdUrl = (name: string) => abs(`/md/${name}`);

/** The Markdown of a docs page, or an orb's reference, with a source line on top. `undefined` if there is no such page. */
export const pageMarkdown = (name: string): string | undefined => {
  const doc = allDocs.find((d) => docMdName(d.slug) === name);
  if (doc) {
    const url = abs(doc.slug ? `/docs/${doc.slug}/` : "/docs/");
    return `<!-- ${site.name}: ${url} -->\n\n${loadDocMarkdown(doc.file).trim()}\n`;
  }
  const orb = registryOrbs().find((o) => orbMdName(o.slug) === name);
  if (orb) {
    return `<!-- ${site.name}: ${abs(`/docs/components/orbs/${orb.slug}/`)} -->\n\n${orbDetail(orb).trim()}\n`;
  }
  return undefined;
};
