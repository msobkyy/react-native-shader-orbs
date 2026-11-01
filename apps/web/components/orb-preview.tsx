"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import type { OrbValues } from "@orbs/orbShader";
import { ORB_STATES, type OrbState } from "@orbs/types";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OrbView } from "./orb-view";

/**
 * The preview on an orb's docs page: the live orb, a mood picker, and a link into the playground.
 * The sliders live only in the playground, so every orb page stays light.
 */
export function OrbPreview({ slug }: { slug: string }) {
  const values = useRef<OrbValues>({ state: "idle", params: {}, colors: {} }).current;
  const [state, setState] = useState<OrbState>("idle");

  return (
    <div className="preview-card orb-stage dark">
      <OrbView slug={slug} values={values} interactive className="preview-orb" />
      <div className="preview-bar">
        <Select
          value={state}
          onValueChange={(v) => {
            values.state = v as OrbState;
            setState(v as OrbState);
          }}
        >
          <SelectTrigger aria-label="Orb state" className="w-32 capitalize">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {ORB_STATES.map((s) => (
                <SelectItem key={s} value={s} className="capitalize">
                  {s}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button asChild variant="secondary">
          <Link href={`/playground/?orb=${slug}&state=${state}`}>
            Open in playground
            <ArrowUpRightIcon data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
