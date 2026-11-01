"use client";

import { FileJsonIcon, FileTextIcon, HashIcon, MonitorIcon, MoonIcon, PlayIcon, SearchIcon, SunIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";
import type { SearchEntry } from "@/lib/search";

const groupIcon = { Pages: FileTextIcon, Sections: HashIcon, Orbs: null } as const;

/** The ⌘K palette: pages, sections, orbs (also by parameter name), and a few actions. */
export function SearchDialog({ entries, files = [] }: { entries: SearchEntry[]; files?: { title: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // The target can be `document` itself (no closest()), so guard before asking whether we're in a text field.
      const target = e.target as HTMLElement | null;
      const typing = target?.closest?.("input, textarea, select, [contenteditable]");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const groups = (["Pages", "Sections", "Orbs"] as const).map((g) => ({ g, items: entries.filter((e) => e.group === g) }));

  return (
    <>
      <Button
        variant="outline"
        className="h-9 w-9 justify-center px-0 text-muted-foreground sm:w-64 sm:justify-between sm:px-3"
        onClick={() => setOpen(true)}
        aria-label="Search the docs"
      >
        <span className="flex items-center gap-2">
          <SearchIcon />
          <span className="hidden sm:inline">Search…</span>
        </span>
        <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search"
        description="Jump to a page, a section or an orb."
        className="sm:max-w-xl"
      >
        {/* CommandDialog doesn't provide the cmdk root itself in this version; input and items need it above them. */}
        {/* The dialog is a grid that sizes its column to the content, so give the palette a real width. */}
        <Command className="w-full sm:w-xl">
        <CommandInput placeholder="Search pages, sections, orbs, parameters…" />
        <CommandList className="max-h-88">
          <CommandEmpty>No results.</CommandEmpty>

          <CommandGroup heading="Go to">
            <CommandItem value="playground open playground" onSelect={() => go("/playground/")}>
              <PlayIcon />
              Playground
            </CommandItem>
            {/* Plain files (llms.txt, JSON) aren't app routes, so open them with a normal navigation. */}
            {files.map((f) => (
              <CommandItem key={f.href} value={`${f.title} file`} onSelect={() => window.location.assign(f.href)}>
                <FileJsonIcon />
                {f.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Theme">
            <CommandItem value="theme light" onSelect={() => { setTheme("light"); setOpen(false); }}>
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem value="theme dark" onSelect={() => { setTheme("dark"); setOpen(false); }}>
              <MoonIcon />
              Dark
            </CommandItem>
            <CommandItem value="theme system" onSelect={() => { setTheme("system"); setOpen(false); }}>
              <MonitorIcon />
              System
            </CommandItem>
          </CommandGroup>

          {groups.map(({ g, items }) => {
            const Icon = groupIcon[g];
            return (
              <div key={g}>
                <CommandSeparator />
                <CommandGroup heading={g}>
                  {items.map((e) => (
                    <CommandItem
                      key={e.href}
                      value={`${e.title} ${e.hint ?? ""}`}
                      keywords={e.keywords}
                      onSelect={() => go(e.href)}
                    >
                      {Icon && <Icon />}
                      <span className="shrink-0 whitespace-nowrap">{e.title}</span>
                      {e.hint && <span className="ml-2 truncate text-xs text-muted-foreground">{e.hint}</span>}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            );
          })}
        </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
