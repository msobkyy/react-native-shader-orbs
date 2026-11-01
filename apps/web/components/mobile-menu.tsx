"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const itemClass = "rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:no-underline";

/** The primary links, for screens too narrow for the nav bar. `file` links are plain files, not pages. */
export function MobileMenu({ links }: { links: { href: string; label: string; file?: boolean }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="min-[801px]:hidden" aria-label="Open menu">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
          {links.map((l) =>
            l.file ? (
              <a key={l.label} href={l.href} className={itemClass}>
                {l.label}
              </a>
            ) : (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className={itemClass}>
                {l.label}
              </Link>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
