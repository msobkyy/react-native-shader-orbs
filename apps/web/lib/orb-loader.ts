"use client";

import { useEffect, useState } from "react";
import type { OrbDefinition } from "@orbs/types";

const cache = new Map<string, Promise<OrbDefinition>>();

/** Loads one orb on demand. The bundler splits this into a small chunk per orb, so a page only downloads what it shows. */
export const loadOrb = (slug: string): Promise<OrbDefinition> => {
  let pending = cache.get(slug);
  if (!pending) {
    pending = import(`../../../packages/react-native-shader-orbs/src/orbs/${slug}.ts`).then(
      (mod) => mod[slug.replace("-", "")] as OrbDefinition
    );
    cache.set(slug, pending);
  }
  return pending;
};

/** The definition for `slug`, or null while it loads (or when `slug` is null). */
export const useOrbDef = (slug: string | null) => {
  const [def, setDef] = useState<OrbDefinition | null>(null);
  useEffect(() => {
    if (!slug) {
      setDef(null);
      return;
    }
    let cancelled = false;
    loadOrb(slug).then((d) => !cancelled && setDef(d));
    return () => {
      cancelled = true;
    };
  }, [slug]);
  return def && def.slug === slug ? def : null;
};
