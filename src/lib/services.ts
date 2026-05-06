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
    id: "ai-native",
    slug: "ai-native-development",
    iconName: "ai-native",
    title: "AI-Native Development",
    subtitle: "Agentic AI, RAG, and LLM Orchestration",
    heroDescription:
      "We build production-grade AI systems that don't just chat—they execute. From agentic workflows to semantic search, we embed intelligence where it moves the needle.",
    problem:
      "Most AI initiatives fail because they're treated as chatbots rather than systems. Companies struggle with prompt drift, hallucinations, and high compute costs without measurable ROI.",
    solution:
      "We treat LLMs as one component of a larger orchestration layer. We build Retrieval-Augmented Generation (RAG) pipelines, secure agentic workflows, and automated evaluation frameworks that ensure your AI is accurate, secure, and cost-effective.",
    metrics: [
      { label: "Parsing Accuracy", value: "95%+", description: "Achieved on complex unstructured data" },
      { label: "Latency Reduction", value: "40%", description: "Via optimized vector retrieval & caching" },
      { label: "Automation ROI", value: "10x", description: "Average efficiency gain for document triage" },
    ],
    highlights: [
      {
        title: "Agentic Workflows",
        description: "Autonomous agents that can use tools, browse data, and complete multi-step tasks without hand-holding.",
      },
      {
        title: "Enterprise RAG",
        description: "Connecting your private data safely to LLMs for context-aware, hallucination-free answers.",
      },
      {
        title: "Custom LLM Ops",
        description: "Setting up the infrastructure for monitoring, fine-tuning, and evaluating models in production.",
      },
    ],
    technologies: ["LangChain", "OpenAI", "Anthropic", "Pinecone", "Python", "FastAPI", "Redis"],
    timeline: "2-4 weeks for Pilot · 8-12 weeks for Enterprise Scale",
    ctaLabel: "Review Your AI Strategy",
  },
  {
    id: "mvp-engineering",
    slug: "mvp-engineering",
    iconName: "mvp",
    title: "MVP Engineering",
    subtitle: "Ship Production Software in Weeks, Not Quarters",
    heroDescription:
      "We help ambitious founders and enterprise teams validate product bets fast. We don't ship 'minimum viable' junk; we ship production-ready foundations.",
    problem:
      "The biggest risk to any software project is speed-to-market. Traditional agencies spend months on 'discovery' while your window of opportunity closes.",
    solution:
      "We use our 'Proof before Paperwork' methodology to show you a working prototype in week one. Our AI-accelerated delivery pipeline allows us to ship complete platforms in 4-6 weeks without cutting corners on security or scale.",
    metrics: [
      { label: "Time-to-Demo", value: "7 Days", description: "First working slice in your stack" },
      { label: "Success Rate", value: "90%", description: "Of our MVPs secure further funding or scale" },
      { label: "Code Coverage", value: "85%+", description: "Standard for every release" },
    ],
    highlights: [
      {
        title: "Rapid Prototyping",
        description: "Moving from Figma to code in days, testing core assumptions with real users immediately.",
      },
      {
        title: "Scalable Foundations",
        description: "Clean architectures using Next.js, Node.js, and Serverless that can grow to 1M+ users.",
      },
      {
        title: "Product-First Engineering",
        description: "Engineers who think like founders, focusing on the features that drive customer acquisition.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Node.js", "Serverless", "Framer"],
    timeline: "1 week for Prototype · 4-6 weeks for Production Launch",
    ctaLabel: "Schedule a Build Review",
  },
  {
    id: "cloud-integration",
    slug: "cloud-systems-integration",
    iconName: "cloud",
    title: "Cloud & Systems Integration",
    subtitle: "Resilient Architecture for Complex Operations",
    heroDescription:
      "We orchestrate the data streams and infrastructure that power modern business. We move data, automate handoffs, and keep your systems in sync 24/7.",
    problem:
      "Fragmentation is the enemy of efficiency. Legacy systems, siloed data, and brittle custom scripts create operational drag and hidden costs.",
    solution:
      "We build resilient cloud-native integration layers that unify your stack. From real-time data pipelines to complex API orchestration, we ensure your systems work as one cohesive unit with full observability.",
    metrics: [
      { label: "Platform Uptime", value: "99.9%", description: "Target for all integrated systems" },
      { label: "Data Sync Latency", value: "<100ms", description: "For real-time operational streams" },
      { label: "Cost Reduction", value: "30%", description: "Average infra saving post-optimization" },
    ],
    highlights: [
      {
        title: "Infrastructure as Code",
        description: "Immutable infra using Terraform and AWS CDK for predictable, reproducible deployments.",
      },
      {
        title: "Event-Driven Architecture",
        description: "Decoupled systems that communicate via message queues (RabbitMQ, Kafka) for extreme scale.",
      },
      {
        title: "API Orchestration",
        description: "Custom middleware that unifies fragmented 3rd party services into a single source of truth.",
      },
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "RabbitMQ", "Redis", "ElasticSearch"],
    timeline: "4-6 weeks for Integration · 8-12 weeks for Infrastructure Overhaul",
    ctaLabel: "Audit Your Infrastructure",
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
