import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPager } from "@/components/doc-pager";
import { Toc } from "@/components/toc";
import { renderDoc } from "@/lib/markdown";
import { pageMeta } from "@/lib/seo";
import { abs, allDocs, site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

export const dynamicParams = false;

export const generateStaticParams = () => allDocs.map((d) => ({ slug: d.slug ? [d.slug] : [] }));

const find = (slug?: string[]) => allDocs.findIndex((d) => d.slug === (slug?.[0] ?? ""));

type Props = { params: Promise<{ slug?: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = allDocs[find(slug)];
  if (!doc) {
    return {};
  }
  return pageMeta({ title: doc.title, description: renderDoc(doc.file).description, path: href(doc.slug) });
}

const href = (slug: string) => (slug ? `/docs/${slug}/` : "/docs/");

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const i = find(slug);
  if (i < 0 || (slug?.length ?? 0) > 1) {
    notFound();
  }
  const doc = allDocs[i];
  const { html, toc } = renderDoc(doc.file);
  const prev = allDocs[i - 1];
  const next = allDocs[i + 1];

  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
    { "@type": "ListItem", position: 2, name: "Docs", item: abs("/docs/") },
    ...(doc.slug ? [{ "@type": "ListItem", position: 3, name: doc.title, item: abs(href(doc.slug)) }] : []),
  ];

  return (
    <div className={`docs-content ${toc.length < 2 ? "no-toc" : ""}`}>
      <main className="doc">
        <JsonLd
          data={[
            { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs },
            {
              "@context": "https://schema.org",
              "@type": "TechArticle",
              headline: doc.title,
              description: renderDoc(doc.file).description,
              url: abs(href(doc.slug)),
              inLanguage: "en",
              author: { "@type": "Person", name: site.author.name, url: site.author.url },
              isPartOf: { "@type": "WebSite", name: site.name, url: abs("/") },
            },
          ]}
        />
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <DocPager
          prev={prev && { href: href(prev.slug), title: prev.title }}
          next={next && { href: href(next.slug), title: next.title }}
        />
      </main>
      <Toc items={toc} />
    </div>
  );
}
