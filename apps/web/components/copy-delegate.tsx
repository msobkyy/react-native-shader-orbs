"use client";

import { useEffect } from "react";
import { toast } from "sonner";

/**
 * Copy buttons inside Markdown-rendered code blocks are plain HTML (they come from a string), so they get one
 * delegated click listener instead of a React handler each.
 */
export function CopyDelegate() {
  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      const button = (e.target as HTMLElement).closest<HTMLButtonElement>(".copy-code");
      if (!button || button.dataset.react !== undefined) {
        return;
      }
      const code = button.parentElement?.querySelector("code")?.textContent ?? "";
      try {
        await navigator.clipboard.writeText(code);
        const label = button.textContent;
        button.textContent = "Copied";
        toast.success("Copied to clipboard");
        setTimeout(() => {
          button.textContent = label;
        }, 1600);
      } catch {
        toast.error("Couldn't copy. Select the text and copy it manually.");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
