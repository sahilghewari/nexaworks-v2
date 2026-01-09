import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest",
  {
    variants: {
      variant: {
        default: "border-[#FF2003]/40 bg-[#FF2003]/10 text-[#FF2003]",
        success: "border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981]",
        error: "border-[#EF4444]/30 bg-[#EF4444]/10 text-[#EF4444]",
        warning: "border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F59E0B]",
        info: "border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { badgeVariants };
