"use client";

import { useState } from "react";

import { useNewsletterForm } from "@/lib/forms";
import type { NewsletterSchema } from "@/lib/validations";
import { FormField } from "@/ui/FormField";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { FormError } from "@/ui/form-error";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  defaultValues?: Partial<NewsletterSchema>;
  className?: string;
}

export function NewsletterForm({ defaultValues, className }: NewsletterFormProps) {
  const form = useNewsletterForm(defaultValues);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(values: NewsletterSchema) {
    setStatus("idle");
    setErrorMessage(null);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result?.error || result?.message || "Subscription failed.");
        return;
      }
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Newsletter form error", error);
      setStatus("error");
      setErrorMessage("Unexpected error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-3 rounded-2xl border border-[#0D1015]/10 bg-[#CBC8BA] p-4", className)}
    >
      <FormField
        control={control}
        name="email"
        label="Email"
        required
        render={({ field }) => <Input {...field} type="email" placeholder="you@example.com" />}
      />

      {status === "success" ? (
        <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-xs text-green-200">
          Check your email for confirmation.
        </p>
      ) : null}
      {status === "error" ? (
        <FormError id="newsletter-error" className="block text-xs">
          {errorMessage ?? "We couldn&apos;t subscribe you. Try again."}
        </FormError>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full" size="sm">
        {isSubmitting ? "Submitting..." : "Subscribe"}
      </Button>
    </form>
  );
}
