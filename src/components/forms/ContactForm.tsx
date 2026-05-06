"use client";

import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";

import { useContactForm } from "@/lib/forms";
import type { ContactSchema } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { FormField } from "@/ui/FormField";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";
import { FormError } from "@/ui/form-error";

interface ContactFormProps {
  defaultValues?: Partial<ContactSchema>;
  className?: string;
  onSuccess?: () => void;
  ctaLabel?: string;
}

export function ContactForm({ defaultValues, className, onSuccess, ctaLabel }: ContactFormProps) {
  const form = useContactForm(defaultValues);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactSchema> = async (values) => {
    setStatus("idle");
    setErrorMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result?.error || result?.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      reset(defaultValues ?? undefined);
      onSuccess?.();
    } catch (error) {
      console.error("Contact form error", error);
      setStatus("error");
      setErrorMessage("Unexpected error. Please try again.");
    }
  };

  const submitHandler = handleSubmit((values) => onSubmit(values as unknown as ContactSchema));

  return (
    <form
      onSubmit={submitHandler}
      className={cn(
        "space-y-5 rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-5 shadow-[0_24px_60px_-32px_rgba(13,16,21,0.75)] md:space-y-6 md:p-6",
        className
      )}
    >
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#A3542B]/30 bg-[#A3542B]/10 px-3 py-1 text-[0.75rem] font-semibold text-[#A3542B]">
          <span aria-hidden>•</span> Live response in &lt; 1 business day
        </div>
        <h3 className="text-xl font-semibold text-[#0D1015]">Tell us about your challenge</h3>
        <p className="text-sm text-[#3F3A32]">We read every note ourselves. The more specific, the faster the demo.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={control}
          name="email"
          label="Email"
          required
          className="md:col-span-1"
          render={({ field }) => <Input {...field} type="email" placeholder="you@example.com" />}
        />

        <FormField
          control={control}
          name="phone"
          label="Phone"
          required
          className="md:col-span-1"
          render={({ field }) => <Input {...field} placeholder="+91-98765-43210" />}
        />

        <FormField
          control={control}
          name="name"
          label="Name"
          required
          className="md:col-span-1"
          render={({ field }) => <Input {...field} placeholder="Your name" />}
        />

        <FormField
          control={control}
          name="company"
          label="Company"
          className="md:col-span-1"
          render={({ field }) => <Input {...field} placeholder="Company (optional)" />}
        />

        <FormField
          control={control}
          name="message"
          label="Message / Challenge"
          required
          className="md:col-span-2"
          render={({ field }) => (
            <Textarea
              {...field}
              rows={4}
              placeholder="Problem, desired outcomes, timeline, and your stack."
            />
          )}
        />
      </div>

      {status === "success" ? (
        <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm text-green-200">
          Thanks! We received your message and will reach out shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <FormError id="contact-error" className="block text-sm">
          {errorMessage ?? "We could not send your message. Please try again."}
        </FormError>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? "Sending..." : ctaLabel ?? "Send Message"}
      </Button>
    </form>
  );
}
