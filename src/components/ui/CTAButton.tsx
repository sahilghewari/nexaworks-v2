import { forwardRef } from "react";
import { Loader2, MoveRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "rounded-lg bg-[#10B981] px-6 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-[#059669] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:bg-[#047857]",
        secondary:
          "rounded-lg border border-[#10B981]/30 bg-transparent px-6 text-[#10B981] hover:bg-[#10B981]/10 active:bg-[#10B981]/15",
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
