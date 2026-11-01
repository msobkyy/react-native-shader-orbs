"use client";

import { usePathname } from "next/navigation";
import { useRef, type ReactNode } from "react";

const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/**
 * Wraps the docs content so each navigation animates in from the side you are heading towards: forward in the
 * sidebar order slides in from the right, back from the left. `order` is the sidebar order of every docs path.
 * Keyed on the path so the animation restarts; the first page load does not animate.
 */
export function DocsTransition({ order, children }: { order: string[]; children: ReactNode }) {
  const path = norm(usePathname());
  const last = useRef(path);
  const dir = useRef<"none" | "fwd" | "back">("none");

  if (last.current !== path) {
    const from = order.indexOf(last.current);
    const to = order.indexOf(path);
    // Pages outside the list (or a jump we can't place) just slide forward.
    dir.current = from < 0 || to < 0 || to > from ? "fwd" : "back";
    last.current = path;
  }

  return (
    <div key={path} className="doc-transition" data-dir={dir.current}>
      {children}
    </div>
  );
}
