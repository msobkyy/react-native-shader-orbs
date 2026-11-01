import type { ReactNode } from "react";
import { DocsMenu } from "@/components/docs-menu";
import { SideNav, type NavGroup } from "@/components/side-nav";
import { orbMeta } from "@/lib/orbs";
import { docGroups } from "@/lib/site";

const href = (slug: string) => (slug ? `/docs/${slug}/` : "/docs/");

const toGroup = (g: (typeof docGroups)[number]): NavGroup => ({
  group: g.group,
  items: g.items.map((i) => ({ href: href(i.slug), title: i.title })),
});

// The orbs get a collapsible group between the guides and "More".
const groups: NavGroup[] = [
  ...docGroups.filter((g) => !g.after).map(toGroup),
  {
    group: "Orbs",
    collapsible: true,
    items: [
      { href: "/docs/components/orbs/", title: "Overview" },
      ...orbMeta.map((o) => ({ href: `/docs/components/orbs/${o.slug}/`, title: o.title })),
    ],
  },
  ...docGroups.filter((g) => g.after).map(toGroup),
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DocsMenu groups={groups} />
      <div className="docs-layout">
        <SideNav groups={groups} />
        {children}
      </div>
    </>
  );
}
