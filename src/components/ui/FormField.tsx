"use client";

import type { ReactNode } from "react";
import {
  type Control,
  type FieldPath,
  type FieldValues,
  type UseControllerReturn,
  useController,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/ui/label";
import { FormError } from "@/ui/form-error";

interface FormFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: ReactNode;
  description?: ReactNode;
  className?: string;
  required?: boolean;
  render: (params: UseControllerReturn<TFieldValues>) => ReactNode;
}

export function FormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  className,
  required = false,
  render,
}: FormFieldProps<TFieldValues>) {
  const controller = useController({ control, name });
  const {
    field,
    fieldState: { error },
  } = controller;

  const fieldId = field.name;
  const fieldProps = {
    ...field,
    id: fieldId,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${fieldId}-error` : undefined,
  } as typeof field & { id: string; "aria-invalid"?: boolean; "aria-describedby"?: string };

  const controllerWithProps = {
    ...controller,
    field: fieldProps,
  } as UseControllerReturn<TFieldValues>;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between">
        <Label htmlFor={fieldId}>
          {label}
          {required ? <span className="ml-1 text-[#FF2003]">*</span> : null}
        </Label>
        {description ? (
          <span className="text-xs text-[#9CA3AF]">{description}</span>
        ) : null}
      </div>
      {render(controllerWithProps)}
      <FormError id={`${fieldId}-error`}>{error?.message}</FormError>
    </div>
  );
}
