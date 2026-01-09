// Common types used throughout the application

import type { ComponentType } from "react";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: ComponentType<{ className?: string }>;
  label?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}

export interface DemoRequest {
  name: string;
  email: string;
  company: string;
  industry: string;
  challenge: string;
  timeline: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  metrics: Record<string, string>;
  testimonial: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type ResponseStatus = "idle" | "loading" | "success" | "error";

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
  status: ResponseStatus;
}
