import type { ReactNode } from "react";

// A template (unlike a layout) is re-created on every navigation, so the page content eases in each time you move
// between docs pages while the sidebar and header stay put.
export default function DocsTemplate({ children }: { children: ReactNode }) {
  return <div className="doc-transition">{children}</div>;
}
