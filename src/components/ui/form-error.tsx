import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface FormErrorProps {
  id?: string;
  children?: ReactNode;
  className?: string;
}

export function FormError({ id, children, className }: FormErrorProps) {
  if (!children) {
    return null;
  }

  return (
    <p
      id={id}
      className={cn("text-sm text-[#F59E0B]", className)}
      role="alert"
    >
      {children}
    </p>
  );
}
