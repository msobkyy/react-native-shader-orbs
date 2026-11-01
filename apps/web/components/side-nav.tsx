"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface NavGroup {
  group: string;
  items: { href: string; title: string }[];
  /** Long list: shows a faded preview of the first items and expands on demand. Open while the current page is inside. */
  collapsible?: boolean;
}

const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/** A long group (the orbs): a faded preview of the first few links, then a toggle to show all of them. */
function FoldGroup({ group, items, path }: { group: string; items: NavGroup["items"]; path: string }) {
  const inside = items.some((i) => norm(i.href) === path);
  // Opens by itself when you land on a page inside it; after that the toggle is yours.
  const [open, setOpen] = useState(inside);
  const [seen, setSeen] = useState(inside);
  if (inside && !seen) {
    setSeen(true);
    setOpen(true);
  }
  const id = `fold-${group.toLowerCase().replace(/\W+/g, "-")}`;

  return (
    <div className={`side-group side-fold ${open ? "is-open" : ""}`}>
      <p>{group}</p>
      <div id={id} className="side-fold-body">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className={norm(i.href) === path ? "on" : undefined} aria-current={norm(i.href) === path ? "page" : undefined} tabIndex={open || items.indexOf(i) < 4 ? undefined : -1}>
            {i.title}
          </Link>
        ))}
      </div>
      <button type="button" className="side-fold-toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        {open ? "Show fewer" : `Show all ${items.length - 1} orbs`}
        <ChevronDownIcon aria-hidden="true" />
      </button>
    </div>
  );
}

/** The docs sidebar. Client-side only to know which page is current. */
export function SideNav({ groups }: { groups: NavGroup[] }) {
  const path = norm(usePathname());
  return (
    <nav className="side" aria-label="Documentation">
      {groups.map((g) => {
        if (g.collapsible) {
          return <FoldGroup key={g.group} group={g.group} items={g.items} path={path} />;
        }
        return (
          <div key={g.group} className="side-group">
            <p>{g.group}</p>
            {g.items.map((i) => (
              <Link key={i.href} href={i.href} className={norm(i.href) === path ? "on" : undefined} aria-current={norm(i.href) === path ? "page" : undefined}>
                {i.title}
              </Link>
            ))}
          </div>
        );
      })}
    </nav>
  );
}
