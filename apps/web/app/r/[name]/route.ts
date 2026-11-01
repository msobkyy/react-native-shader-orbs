import { notFound } from "next/navigation";
import { orbs } from "@/lib/orbs";
import { registryOrbs } from "@/lib/registry";

export const dynamic = "force-static";
export const dynamicParams = false;

// One file per orb, with its per-mood presets: /r/orb-01.json
export const generateStaticParams = () => orbs.map((o) => ({ name: `${o.slug}.json` }));

export async function GET(_req: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const orb = registryOrbs().find((o) => `${o.slug}.json` === name);
  if (!orb) {
    notFound();
  }
  return Response.json(orb);
}
