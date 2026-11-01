import { notFound } from "next/navigation";
import { orbs } from "@/lib/orbs";
import { docMdName, orbMdName, pageMarkdown } from "@/lib/page-markdown";
import { allDocs } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

// One Markdown file per docs page and per orb: /md/installation.md, /md/orb-05.md
export const generateStaticParams = () => [
  ...allDocs.map((d) => ({ name: docMdName(d.slug) })),
  ...orbs.map((o) => ({ name: orbMdName(o.slug) })),
];

export async function GET(_req: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const md = pageMarkdown(name);
  if (md === undefined) {
    notFound();
  }
  return new Response(md, { headers: { "content-type": "text/markdown; charset=utf-8" } });
}
