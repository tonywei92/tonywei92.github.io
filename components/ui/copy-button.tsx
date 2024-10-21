"use client";

import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={cn("", className)}
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
    >
      <Copy className="w-4 h-4" />
    </button>
  );
}
