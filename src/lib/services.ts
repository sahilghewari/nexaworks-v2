import { BrainCircuit, GaugeCircle, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  iconName: "ai-native" | "mvp" | "cloud";
  title: string;
  subtitle: string;
  heroDescription: string;
  problem: string;
  solution: string;
  metrics: ServiceMetric[];
  highlights: ServiceHighlight[];
  technologies: string[];
  timeline: string;
  ctaLabel: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "ai-revenue",
    slug: "ai-revenue-systems",
    iconName: "ai-native",
    title: "AI Revenue Systems",
    subtitle: "Autonomous Pipeline & Meeting Generation",
    heroDescription:
      "We design and ship the engines that power your top-of-funnel. From signal-based prospecting to AI booking agents, we automate the manual grunt work of outbound sales.",
    problem:
      "Traditional SDR teams are expensive, inconsistent, and slow. Generic lists and manual outreach lead to low reply rates and high CAC, burning through your runway without predictable pipeline.",
    solution:
      "We build full-stack revenue systems that ingest real-time buying signals and orchestrate hyper-personalized multi-channel outreach. Our AI agents handle qualification and booking, ensuring your AEs only spend time on high-intent demos.",
    metrics: [
      { label: "Pipeline Velocity", value: "4.2x", description: "Increase in qualified meetings booked" },
      { label: "Reply Rate", value: "12%+", description: "Average across AI-personalized sequences" },
      { label: "SDR Headcount", value: "0", description: "Scale pipeline without hiring more humans" },
    ],
    highlights: [
      {
        title: "Signal-Based Prospecting",
        description: "Scraping real-time triggers like funding, hiring, or tech stack changes to identify buyers.",
      },
      {
        title: "Autonomous Outreach",
        description: "AI-driven LinkedIn and Email sequences that sound human and handle complex objections.",
      },
      {
        title: "Inbox Management",
        description: "Automated rotation and deliverability monitoring to ensure 99% inbox placement.",
      },
    ],
    technologies: ["LangChain", "OpenAI", "Instantly", "Clay", "Python", "Node.js", "Redis"],
    timeline: "Live in 14 Days",
    ctaLabel: "Audit Your Pipeline",
  },
  {
    id: "ops-automation",
    slug: "ops-automation",
    iconName: "mvp",
    title: "Ops & Workflow Automation",
    subtitle: "Scale Your Business Loops Without Friction",
    heroDescription:
      "Eliminate manual triage and brittle handoffs. We build the custom internal platforms and automations that make your business run while you sleep.",
    problem:
      "Operational drag kills growth. When data is siloed between Sales, Success, and Finance, manual work increases and customer experience suffers.",
    solution:
      "We unify your stack into a cohesive operational engine. We automate onboarding, lead routing, and post-sale handovers using resilient job orchestration and custom internal dashboards.",
    metrics: [
      { label: "Manual Effort", value: "-85%", description: "Reduction in repetitive admin tasks" },
      { label: "Onboarding Speed", value: "3x", description: "Faster time-to-value for new customers" },
      { label: "Data Accuracy", value: "100%", description: "Single source of truth across all platforms" },
    ],
    highlights: [
      {
        title: "Customer Onboarding",
        description: "Automated account provisioning and training sequences that delight users.",
      },
      {
        title: "Intelligent Lead Routing",
        description: "Routing leads to the right AE based on intent scoring and territory rules automatically.",
      },
      {
        title: "Internal Ops Portals",
        description: "Self-serve dashboards that give your team the data they need without bothering engineering.",
      },
    ],
    technologies: ["Next.js", "Zapier/Make", "PostgreSQL", "Node.js", "Serverless", "Retool"],
    timeline: "MVP in 3-5 Weeks",
    ctaLabel: "Optimize Your Ops",
  },
  {
    id: "product-engineering",
    slug: "ai-product-engineering",
    iconName: "cloud",
    title: "Custom AI Product Builds",
    subtitle: "Bespoke AI Engineering for Funded SaaS",
    heroDescription:
      "For teams needing unique AI moats or complex product engineering that off-the-shelf tools can't handle. We build the future of your product.",
    problem:
      "Standard LLM wrappers are no longer enough to win. To build a true AI moat, you need deep integration of NLP, RAG, and Agentic architectures into your core product.",
    solution:
      "We act as your premium AI engineering partner. We design proprietary knowledge graphs, complex RAG pipelines, and high-performance SaaS architectures that scale to millions of users.",
    metrics: [
      { label: "Product Moat", value: "Proprietary", description: "Custom AI architectures unique to your biz" },
      { label: "Delivery Speed", value: "2x", description: "Faster than building an internal AI squad" },
      { label: "Uptime Target", value: "99.9%", description: "Standard for all product builds" },
    ],
    highlights: [
      {
        title: "Advanced RAG Pipelines",
        description: "Sophisticated document ingestion and vector search that actually works in production.",
      },
      {
        title: "Agentic Infrastructure",
        description: "Building systems where AI can perform complex, multi-step actions within your platform.",
      },
      {
        title: "Cloud-Native Scale",
        description: "Serverless and microservices architectures that scale horizontally with your growth.",
      },
    ],
    technologies: ["AWS/GCP", "Terraform", "Python", "Next.js", "Pinecone", "Kubernetes", "Redis"],
    timeline: "8-12 Weeks to Production",
    ctaLabel: "Discuss Your Build",
  },
];


export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "ai-native": BrainCircuit,
  "mvp": GaugeCircle,
  "cloud": ShieldCheck,
};

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
