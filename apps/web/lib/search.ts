import { renderDoc } from "./markdown";
import { orbs } from "./orbs";
import { allDocs } from "./site";

export interface SearchEntry {
  title: string;
  href: string;
  group: "Pages" | "Sections" | "Orbs";
  /** Shown dimmed beside the title. */
  hint?: string;
  /** Extra words that should match, but aren't shown. */
  keywords?: string[];
}

const docHref = (slug: string) => (slug ? `/docs/${slug}/` : "/docs/");

/** Everything the command palette can jump to. Built once at build time, from the same sources as the pages. */
export const buildSearchIndex = (): SearchEntry[] => {
  const entries: SearchEntry[] = [];

  for (const doc of allDocs) {
    entries.push({ title: doc.title, href: docHref(doc.slug), group: "Pages" });
    // Each heading is its own result, so "exposure" or "frame cap" lands on the right section.
    for (const h of renderDoc(doc.file).toc) {
      entries.push({ title: h.text, href: `${docHref(doc.slug)}#${h.id}`, group: "Sections", hint: doc.title });
    }
  }

  entries.push({ title: "All orbs", href: "/docs/components/orbs/", group: "Pages" });

  for (const o of orbs) {
    entries.push({
      title: o.title,
      href: `/docs/components/orbs/${o.slug}/`,
      group: "Orbs",
      hint: o.note,
      // Searching a parameter name ("exposure", "Lattice scale") finds the orbs that have it.
      keywords: [o.slug, ...o.params.flatMap((p) => [p.key, p.label]), ...o.colors.map((c) => c.label)],
    });
  }
  return entries;
};
