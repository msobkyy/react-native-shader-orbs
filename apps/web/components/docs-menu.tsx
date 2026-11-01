"use client";

import { ListIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SideNav, type NavGroup } from "./side-nav";

/** The docs sidebar as a slide-over, for narrow screens. */
export function DocsMenu({ groups }: { groups: NavGroup[] }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* Utilities, not custom CSS: Tailwind's `inline-flex` on Button would override a plain display rule. */}
        <Button variant="outline" className="mx-5 mt-3 justify-start min-[801px]:hidden">
          <ListIcon data-icon="inline-start" />
          Documentation menu
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="docs-menu-sheet">
        <SheetHeader>
          <SheetTitle>Documentation</SheetTitle>
          <SheetDescription className="sr-only">Browse the docs</SheetDescription>
        </SheetHeader>
        {/* Tapping any link inside closes the sheet: the pathname changes, the click bubbles up here. */}
        <div className="overflow-y-auto px-3 pb-6" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
          <SideNav groups={groups} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
