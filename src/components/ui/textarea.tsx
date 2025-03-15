import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-foreground/50 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/5 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/10 bg-secondary flex field-sizing-content min-h-16 w-full resize-none rounded-md border p-4 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-xl",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

