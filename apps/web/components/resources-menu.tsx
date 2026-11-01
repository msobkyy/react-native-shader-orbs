"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export interface ResourceLink {
  label: string;
  href: string;
  hint: string;
  /** A plain file (llms.txt, JSON) rather than a page: opened with a normal link, not client-side navigation. */
  file?: boolean;
}

/** Registry, MCP, llms.txt and the changelog, behind one nav item. */
export function ResourcesMenu({ items }: { items: ResourceLink[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground max-[800px]:hidden">
          Resources
          <ChevronDownIcon data-icon="inline-end" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64">
        <DropdownMenuGroup>
          {items.map((i) => (
            <DropdownMenuItem key={i.label} asChild className="flex-col items-start gap-0">
              {i.file ? (
                <a href={i.href} className="text-foreground hover:no-underline">
                  <span className="font-medium">{i.label}</span>
                  <span className="text-xs text-muted-foreground">{i.hint}</span>
                </a>
              ) : (
                <Link href={i.href} className="text-foreground hover:no-underline">
                  <span className="font-medium">{i.label}</span>
                  <span className="text-xs text-muted-foreground">{i.hint}</span>
                </Link>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
