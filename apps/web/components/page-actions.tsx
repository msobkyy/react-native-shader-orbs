"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BotIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ExternalLinkIcon,
  FileTextIcon,
  LinkIcon,
  MessageCircleIcon,
  SearchIcon,
  SparklesIcon,
  TerminalIcon,
  WandSparklesIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface Neighbor {
  href: string;
  title: string;
}

/** Where the "Open in ..." menu sends the prompt. `{q}` is the URL-encoded prompt. */
const targets: { label: string; icon: ReactNode; url: string }[] = [
  { label: "Open in ChatGPT", icon: <MessageCircleIcon />, url: "https://chatgpt.com/?hints=search&q={q}" },
  { label: "Open in Claude", icon: <SparklesIcon />, url: "https://claude.ai/new?q={q}" },
  { label: "Open in Cursor", icon: <TerminalIcon />, url: "https://cursor.com/link/prompt?text={q}" },
  { label: "Open in v0", icon: <WandSparklesIcon />, url: "https://v0.dev/?q={q}" },
  { label: "Open in Perplexity", icon: <SearchIcon />, url: "https://www.perplexity.ai/search?q={q}" },
  { label: "Open in Grok", icon: <BotIcon />, url: "https://grok.com/?q={q}" },
];

/**
 * The row on the right of a page title: copy the page as Markdown, open it in an assistant, copy the link, and
 * step to the neighbouring pages. `mdUrl` and `pageUrl` are absolute so the prompt makes sense away from the site.
 */
export function PageActions({ mdUrl, pageUrl, prev, next }: { mdUrl: string; pageUrl: string; prev?: Neighbor; next?: Neighbor }) {
  const [copied, setCopied] = useState<"page" | "link" | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const flash = (what: "page" | "link") => {
    setCopied(what);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1600);
  };

  const copyPage = async () => {
    try {
      const res = await fetch(mdUrl);
      if (!res.ok) {
        throw new Error(String(res.status));
      }
      await navigator.clipboard.writeText(await res.text());
      flash("page");
      toast.success("Page copied as Markdown");
    } catch {
      toast.error("Couldn't copy the page. Use View as Markdown instead.");
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      flash("link");
      toast.success("Link copied");
    } catch {
      toast.error("Couldn't copy the link.");
    }
  };

  const prompt = encodeURIComponent(`Read ${mdUrl} so I can ask questions about it.`);

  return (
    <div className="page-actions">
      <div className="page-actions-split">
        <Button type="button" variant="ghost" size="default" className="page-actions-main" onClick={copyPage}>
          {copied === "page" ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
          {copied === "page" ? "Copied" : "Copy Page"}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="ghost" size="icon" className="page-actions-more" aria-label="More ways to use this page">
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-52">
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <a href={mdUrl} target="_blank" rel="noreferrer">
                  <FileTextIcon />
                  View as Markdown
                </a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {targets.map((t) => (
                <DropdownMenuItem key={t.label} asChild>
                  <a href={t.url.replace("{q}", prompt)} target="_blank" rel="noreferrer">
                    {t.icon}
                    {t.label}
                    <ExternalLinkIcon className="ml-auto opacity-50" />
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button type="button" variant="outline" size="icon" onClick={copyLink} aria-label="Copy link to this page">
            {copied === "link" ? <CheckIcon /> : <LinkIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copy link</TooltipContent>
      </Tooltip>

      {prev && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant="outline" size="icon">
              <Link href={prev.href} aria-label={`Previous: ${prev.title}`}>
                <ArrowLeftIcon />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{prev.title}</TooltipContent>
        </Tooltip>
      )}
      {next && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant="outline" size="icon">
              <Link href={next.href} aria-label={`Next: ${next.title}`}>
                <ArrowRightIcon />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{next.title}</TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}
