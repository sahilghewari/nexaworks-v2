import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-[#374151] bg-[#A79F90] px-3 py-2 text-sm ring-offset-[#CBC8BA] transition duration-200 placeholder:text-[#3F3A32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3542B] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#1F2933] dark:border-[#4B5563] dark:text-white dark:placeholder:text-white/60 dark:ring-offset-[#0D1015]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
