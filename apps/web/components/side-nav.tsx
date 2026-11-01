"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavGroup {
  group: string;
  items: { href: string; title: string }[];
  /** Collapsible, and open only while the current page is inside it. */
  collapsible?: boolean;
}

const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/** The docs sidebar. Client-side only to know which page is current. */
export function SideNav({ groups }: { groups: NavGroup[] }) {
  const path = norm(usePathname());
  return (
    <nav className="side" aria-label="Documentation">
      {groups.map((g) => {
        const links = g.items.map((i) => (
          <Link key={i.href} href={i.href} className={norm(i.href) === path ? "on" : undefined} aria-current={norm(i.href) === path ? "page" : undefined}>
            {i.title}
          </Link>
        ));
        if (g.collapsible) {
          const inside = g.items.some((i) => norm(i.href) === path);
          return (
            <details key={g.group} className="side-group side-fold" open={inside || undefined}>
              <summary>{g.group}</summary>
              {links}
            </details>
          );
        }
        return (
          <div key={g.group} className="side-group">
            <p>{g.group}</p>
            {links}
          </div>
        );
      })}
    </nav>
  );
}
