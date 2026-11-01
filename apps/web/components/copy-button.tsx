"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useRef, useState, type ComponentProps } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

/** Copies `text`, flips to a check for a moment, and confirms with a toast. */
export function CopyButton({
  text,
  children = "Copy",
  toastText = "Copied to clipboard",
  ...props
}: { text: string; children?: string; toastText?: string } & Omit<ComponentProps<typeof Button>, "onClick" | "children">) {
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      {...props}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          toast.success(toastText);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setDone(false), 1600);
        } catch {
          toast.error("Couldn't copy. Select the text and copy it manually.");
        }
      }}
    >
      {done ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
      {done ? "Copied" : children}
    </Button>
  );
}
