import type { NavItem, SiteConfig } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexaworks.tech";

export const siteConfig: SiteConfig = {
  name: "NexaWorks",
  description: "Building the future, one innovation at a time.",
  url: siteUrl,
  ogImage: `${siteUrl.replace(/\/$/, "")}/og.png`,
  links: {
    github: "https://github.com/orgs/nexaworks-technology",
    linkedin: "https://www.linkedin.com/company/nexaworks-tech",
  },
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "What We Do", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "How We Work", href: "/process" },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
];

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

const INTERNAL_CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "hello@nexaworks.com";
const INTERNAL_SUPPORT_EMAIL = process.env.SUPPORT_EMAIL ?? "support@nexaworks.com";
const INTERNAL_CONTACT_PHONE = process.env.CONTACT_PHONE ?? "+1 (800) 555-0128";
const INTERNAL_COMPANY_ADDRESS =
  process.env.COMPANY_ADDRESS ?? "145 Market Street, Suite 500, San Francisco, CA";

export const CONTACT_EMAIL = INTERNAL_CONTACT_EMAIL;
export const SUPPORT_EMAIL = INTERNAL_SUPPORT_EMAIL;

export const PUBLIC_CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? INTERNAL_CONTACT_EMAIL;
export const PUBLIC_SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? INTERNAL_SUPPORT_EMAIL;
export const PUBLIC_CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? INTERNAL_CONTACT_PHONE;
export const PUBLIC_COMPANY_ADDRESS =
  process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? INTERNAL_COMPANY_ADDRESS;

export const COMPANY_INFO = {
  name: siteConfig.name,
  email: PUBLIC_CONTACT_EMAIL,
  phone: PUBLIC_CONTACT_PHONE,
  address: PUBLIC_COMPANY_ADDRESS,
  tagline: "Strategic product partners for ambitious teams.",
} as const;

export const SOCIAL_LINKS = {
  twitter: siteConfig.links.twitter,
  github: siteConfig.links.github,
  linkedin: siteConfig.links.linkedin,
} as const;

export const FOOTER_LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "What We Do", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "How We Work", href: "/process" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "GitHub", href: siteConfig.links.github ?? "https://github.com/orgs/nexaworks-technology" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
] as const;
