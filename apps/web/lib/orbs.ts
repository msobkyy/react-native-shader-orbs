// Server-side view of the orb definitions. Only server components import this: the full definitions carry each
// shader's WGSL, and client code loads one orb at a time through lib/orb-loader.ts instead.
import { orbs } from "@orbs/orbs";
import type { OrbDefinition } from "@orbs/types";

export { orbs };

export interface OrbMeta {
  slug: string;
  title: string;
  note: string;
}

/** Everything a picker or card needs, without the shader source. Safe to pass to client components. */
export const orbMeta: OrbMeta[] = orbs.map(({ slug, title, note }) => ({ slug, title, note }));

export const getOrb = (slug: string): OrbDefinition | undefined => orbs.find((o) => o.slug === slug);

/** The exported name for a slug: "orb-01" -> "orb01". */
export const exportName = (slug: string) => slug.replace("-", "");

export const maxParams = Math.max(...orbs.map((o) => o.params.length));

/** Compact number for tables: 0.5, 60, 0.015. */
export const num = (n: number) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(3))));
