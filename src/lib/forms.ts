import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  demoRequestSchema,
  newsletterSchema,
  type ContactSchema,
  type DemoRequestSchema,
  type NewsletterSchema,
} from "@/lib/validations";

export function useContactForm(defaultValues?: Partial<ContactSchema>) {
  return useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues,
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
