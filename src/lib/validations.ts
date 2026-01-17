import { z } from "zod";

const phoneRegex = /^\+?[0-9\s().-]{7,20}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Please provide a valid email address."),
  company: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || value.length >= 2, "Company must be at least 2 characters."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || phoneRegex.test(value), "Please provide a valid phone number.")
    .transform((value) => (value ? value : undefined)),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
  kpi: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || value.length >= 6, "Please add a bit more detail.")
    .transform((value) => (value ? value : undefined)),
  stack: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || value.length >= 3, "Stack must be at least 3 characters.")
    .transform((value) => (value ? value : undefined)),
  role: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || value.length >= 2, "Role must be at least 2 characters.")
    .transform((value) => (value ? value : undefined)),
});

export const demoRequestSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Please provide a valid email address."),
  company: z.string().trim().min(2, "Company is required."),
  industry: z.string().trim().min(2, "Industry is required."),
  challenge: z.string().trim().min(10, "Challenge should be at least 10 characters."),
  timeline: z.string().trim().min(2, "Timeline is required."),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Please provide a valid email address."),
});

export type ContactSchema = z.infer<typeof contactSchema>;
export type DemoRequestSchema = z.infer<typeof demoRequestSchema>;
export type NewsletterSchema = z.infer<typeof newsletterSchema>;
