"use client";

import { useState } from "react";

import { useDemoRequestForm } from "@/lib/forms";
import type { DemoRequestSchema } from "@/lib/validations";
import { FormField } from "@/ui/FormField";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";
import { FormError } from "@/ui/form-error";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";
import { cn } from "@/lib/utils";

const industries = ["HR Tech", "Operations", "Legal", "E-commerce", "Finance", "SaaS", "Other"];
const timelines = ["ASAP", "1-2 weeks", "1 month", "Not sure"];

interface DemoRequestFormProps {
  defaultValues?: Partial<DemoRequestSchema>;
  className?: string;
  onSuccess?: () => void;
}

export function DemoRequestForm({ defaultValues, className, onSuccess }: DemoRequestFormProps) {
  const form = useDemoRequestForm(defaultValues);
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = form;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(values: DemoRequestSchema) {
    setStatus("idle");
    setErrorMessage(null);
    try {
      const response = await fetch("/api/demo-request", {
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
      reset(defaultValues);
      onSuccess?.();
    } catch (error) {
      console.error("Demo request form error", error);
      setStatus("error");
      setErrorMessage("Unexpected error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5 rounded-3xl border border-white/10 bg-[#0D1015] p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.75)]", className)}
    >
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-[#CBC8BA]">Request a live demo</h3>
        <p className="text-sm text-[#9CA3AF]">We&apos;ll respond within 24 hours with a time slot.</p>
      </div>

      <FormField
        control={control}
        name="name"
        label="Name"
        required
        render={({ field }) => <Input {...field} placeholder="Your name" />}
      />

      <FormField
        control={control}
        name="email"
        label="Email"
        required
        render={({ field }) => <Input {...field} type="email" placeholder="you@example.com" />}
      />

      <FormField
        control={control}
        name="company"
        label="Company"
        required
        render={({ field }) => <Input {...field} placeholder="Company name" />}
      />

      <FormField
        control={control}
        name="industry"
        label="Industry"
        required
        render={({ field }) => (
          <Select value={field.value || ""} onValueChange={(value: string) => setValue("industry", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <FormField
        control={control}
        name="challenge"
        label="Describe your challenge"
        required
        render={({ field }) => (
          <Textarea
            {...field}
            rows={4}
            placeholder="What are you trying to achieve? Include context, systems, and blockers."
          />
        )}
      />

      <FormField
        control={control}
        name="timeline"
        label="Preferred timeline"
        required
        render={({ field }) => (
          <Select value={field.value || ""} onValueChange={(value: string) => setValue("timeline", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((timeline) => (
                <SelectItem key={timeline} value={timeline}>
                  {timeline}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {status === "success" ? (
        <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm text-green-200">
          Thanks! We&apos;ll reach out within 24 hours.
        </p>
      ) : null}
      {status === "error" ? (
        <FormError id="demo-error" className="block text-sm">
          {errorMessage ?? "We could not submit your request. Please try again."}
        </FormError>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? "Submitting..." : "Request Demo"}
      </Button>
    </form>
  );
}
