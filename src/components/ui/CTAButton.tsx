"use client";

import { forwardRef } from "react";
import { Loader2, MoveRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3542B] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "rounded-full bg-[#A3542B] px-6 text-white shadow-lg shadow-[#A3542B]/20 hover:bg-[#A3542B]/90 active:bg-[#A3542B]/95",
        secondary:
          "rounded-full border border-[#A3542B]/60 bg-transparent px-6 text-[#A3542B] hover:bg-[#A3542B]/10 active:bg-[#A3542B]/15",
        tertiary:
          "rounded-none border-b border-transparent px-0 text-[#0D1015] hover:border-[#A3542B] hover:text-[#A3542B]",
      },
      size: {
        sm: "h-9 text-sm",
        md: "h-11 text-base",
        lg: "h-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  loading?: boolean;
  showArrow?: boolean;
}

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>((props, ref) => {
  const {
    className,
    children,
    variant,
    size,
    loading = false,
    showArrow = true,
    type = "button",
    disabled,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      className={cn(ctaButtonVariants({ variant, size, className }))}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : null}
      <span className="whitespace-nowrap">{children}</span>
      {showArrow && !loading ? <MoveRight className="h-4 w-4" aria-hidden="true" /> : null}
    </button>
  );
});

CTAButton.displayName = "CTAButton";

export { ctaButtonVariants };
