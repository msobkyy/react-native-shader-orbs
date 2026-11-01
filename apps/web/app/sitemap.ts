import type { MetadataRoute } from "next";
import { orbMeta } from "@/lib/orbs";
import { abs, allDocs } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: abs("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...allDocs.map((d) => ({
      url: abs(d.slug ? `/docs/${d.slug}/` : "/docs/"),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: d.slug === "" || d.slug === "installation" || d.slug === "quick-start" ? 0.9 : 0.7,
    })),
    { url: abs("/docs/components/orbs/"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...orbMeta.map((o) => ({ url: abs(`/docs/components/orbs/${o.slug}/`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    { url: abs("/playground/"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
