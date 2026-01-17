import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3542B] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#A3542B] text-white shadow-lg shadow-[#A3542B]/20 hover:bg-[#A3542B]/90",
        primary: "bg-[#A3542B] text-white shadow-lg shadow-[#A3542B]/20 hover:bg-[#A3542B]/90",
        secondary:
          "bg-[#A79F90] text-[#0D1015] border border-[#374151] hover:border-[#A3542B]/50 hover:text-white",
        outline:
          "border border-[#A3542B]/60 bg-transparent text-[#A3542B] hover:bg-[#A3542B]/10 hover:text-[#A3542B]",
        ghost: "hover:bg-[#A79F90] hover:text-[#0D1015]",
        link: "text-[#A3542B] underline-offset-4 hover:underline",
        destructive: "bg-[#EF4444] text-white hover:bg-[#EF4444]/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
