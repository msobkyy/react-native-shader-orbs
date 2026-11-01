import type { TocItem } from "@/lib/markdown";

export function Toc({ items }: { items: TocItem[] }) {
  if (items.length < 2) {
    return null;
  }
  return (
    <aside className="toc" aria-label="On this page">
      <p>On this page</p>
      {items.map((t) => (
        <a key={t.id} className={`d${t.depth}`} href={`#${t.id}`}>
          {t.text}
        </a>
      ))}
    </aside>
  );
}
