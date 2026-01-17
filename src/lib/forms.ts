import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  contactSchema,
  demoRequestSchema,
  newsletterSchema,
  type ContactSchema,
  type DemoRequestSchema,
  type NewsletterSchema,
} from "@/lib/validations";

type ContactFormInput = z.input<typeof contactSchema>;
type ContactFormOutput = z.output<typeof contactSchema>;

export function useContactForm(defaultValues?: Partial<ContactFormInput>) {
  return useForm<ContactFormInput, any, ContactFormOutput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      kpi: "",
      stack: "",
      role: "",
      ...defaultValues,
    },
    mode: "onBlur",
  });
}

export function useDemoRequestForm(defaultValues?: Partial<DemoRequestSchema>) {
  return useForm<DemoRequestSchema>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues,
    mode: "onBlur",
  });
}

export function useNewsletterForm(defaultValues?: Partial<NewsletterSchema>) {
  return useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
    defaultValues,
    mode: "onChange",
  });
}
