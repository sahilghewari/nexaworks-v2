export interface CaseStudyMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudyTimelinePhase {
  title: string;
  duration: string;
  description: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudyLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  slug: "resumind" | "reports" | "analytics" | "legal-ai";
  title: string;
  subtitle?: string;
  heroDescription: string;
  problem: string;
  solution: string;
  metrics: CaseStudyMetric[];
  technologies: string[];
  timeline: CaseStudyTimelinePhase[];
  testimonial?: CaseStudyTestimonial;
  demoLink?: CaseStudyLink;
  related: CaseStudyLink[];
  coverImage: string;
  thumbnail: string;
  timelineSummary?: string;
  ctaLabel?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "resumind",
    slug: "resumind",
    title: "ResuMind AI-Analyzer",
    subtitle: "Enterprise-grade resume intelligence in weeks",
    heroDescription:
      "We helped ResuMind eliminate manual resume triage with an AI analyzer that parses, ranks, and routes thousands of applicants in minutes.",
    problem:
      "Fortune 100 hiring teams were drowning in resumes. Manual screening took days, inconsistent scoring eroded trust, and recruiters were forced to copy-paste details between legacy systems.",
    solution:
      "We designed a secure resume ingestion pipeline backed by spaCy and BERT NLP models. The system parses raw files, scores candidates against custom rubrics, and writes structured data into ATS and CRM tools with full audit trails.",
    metrics: [
      { label: "Avg Processing Time", value: "4.2s", description: "Per resume end-to-end" },
      { label: "Parsing Accuracy", value: "95%" },
      { label: "Concurrent Uploads", value: "150" },
      { label: "Platform Uptime", value: "99.7%" },
      { label: "Manual Effort Reduction", value: "85%" },
    ],
    technologies: ["React", "Node.js", "Python", "spaCy", "BERT", "Redis", "PostgreSQL", "AWS"],
    timelineSummary: "10-week delivery from prototype to production",
    timeline: [
      {
        title: "Discovery & Data Profiling",
        duration: "Week 1",
        description: "Workshop with recruiters, data sampling, and rubric definition for AI scoring.",
      },
      {
        title: "MVP Build",
        duration: "Weeks 2-4",
        description: "Built ingestion microservices, NLP pipeline, and reviewer dashboard with live metrics.",
      },
      {
        title: "Scale & Integrations",
        duration: "Weeks 5-8",
        description: "Integrated ATS/CRM, added concurrency controls, telemetry, and compliance logging.",
      },
      {
        title: "Go-Live & Enablement",
        duration: "Weeks 9-10",
        description: "Pilot rollout, recruiter training, analytics dashboards, and support playbooks.",
      },
    ],
    testimonial: {
      quote: "They shipped in eight weeks what our incumbent vendor failed to deliver in six months.",
      author: "Fortune 100 Talent Lead",
      role: "Director of Global Recruiting",
    },
    demoLink: { label: "View Live Demo", href: "https://resumind.nexaworks.tech" },
    ctaLabel: "View Full Case Study",
    related: [
      { label: "Reports Platform", href: "/projects/reports" },
      { label: "Analytics Dashboard", href: "/projects/analytics" },
    ],
    coverImage: "/images/case-studies/resumind-cover.png",
    thumbnail: "/images/case-studies/resumind-thumb.png",
  },
  {
    id: "reports",
    slug: "reports",
    title: "Automated Reports Platform",
    subtitle: "Enterprise reporting without manual spreadsheets",
    heroDescription:
      "A global operations team needed executive-ready reports on demand. We delivered a reporting engine that generates hundreds of documents nightly with zero manual QA.",
    problem:
      "Leaders were waiting days for analysts to compile spreadsheets and slide decks. Manual processes were error-prone and couldn’t scale with volume spikes.",
    solution:
      "We built a job orchestration pipeline that transforms live data into templated reports, validates quality, and distributes outputs to stakeholders with full observability.",
    metrics: [
      { label: "Reports Generated", value: "156", description: "Demo run in under 10 minutes" },
      { label: "Success Rate", value: "98.5%" },
      { label: "Avg Generation Time", value: "2.4s" },
      { label: "Concurrent Jobs", value: "120" },
      { label: "Manual Effort Reduction", value: "90%" },
    ],
    technologies: ["Next.js", "FastAPI", "RabbitMQ", "PostgreSQL", "AWS Lambda", "Tailwind"],
    timelineSummary: "10-week rollout with phased automation",
    timeline: [
      {
        title: "Blueprint",
        duration: "Week 1",
        description: "Mapped legacy reporting flow, defined automation triggers, captured compliance requirements.",
      },
      {
        title: "Job Engine",
        duration: "Weeks 2-5",
        description: "Implemented scheduler, template engine, and data adapters with automated QA checks.",
      },
      {
        title: "Visualization & Alerts",
        duration: "Weeks 6-8",
        description: "Built dashboard, real-time alerting, and stakeholder distribution workflows.",
      },
      {
        title: "Rollout",
        duration: "Weeks 9-10",
        description: "Pilot launch, analyst onboarding, and handoff with documentation.",
      },
    ],
    testimonial: {
      quote: "The automation freed two full analyst teams to work on strategy instead of spreadsheets.",
      author: "VP Operations",
      role: "Global Retail Brand",
    },
    demoLink: { label: "See Platform Walkthrough", href: "https://reports.demo.nexaworks.tech" },
    ctaLabel: "View Full Case Study",
    related: [
      { label: "ResuMind AI-Analyzer", href: "/projects/resumind" },
      { label: "Analytics Dashboard", href: "/projects/analytics" },
    ],
    coverImage: "/images/case-studies/reports-cover.png",
    thumbnail: "/images/case-studies/reports-thumb.png",
  },
  {
    id: "analytics",
    slug: "analytics",
    title: "Real-Time Analytics Dashboard",
    subtitle: "Operational intelligence in half the industry timeline",
    heroDescription:
      "We delivered a real-time analytics platform that unifies data streams, surfaces alerts instantly, and gives leadership a single source of truth.",
    problem:
      "Dashboards took months to build, data was stale, and teams lacked a unified view of revenue and fulfillment.",
    solution:
      "We orchestrated event pipelines, built modular visualization components, and deployed a secure analytics portal with company-wide access controls.",
    metrics: [
      { label: "Deployment Time", value: "8 Weeks", description: "Industry average 16 weeks" },
      { label: "Satisfaction", value: "90%" },
      { label: "Revenue Tracked", value: "$179K" },
      { label: "Live Streams", value: "Real-time" },
    ],
    technologies: ["Next.js", "NestJS", "Kafka", "ClickHouse", "Tailwind", "AWS"],
    timelineSummary: "8-week transformation to real-time reporting",
    timeline: [
      {
        title: "Discovery",
        duration: "Week 1",
        description: "Mapped KPIs, user roles, and data sources.",
      },
      {
        title: "Data Infrastructure",
        duration: "Weeks 2-3",
        description: "Implemented streaming pipelines and storage with alerting hooks.",
      },
      {
        title: "Dashboard Build",
        duration: "Weeks 4-6",
        description: "Shipped modular dashboards, filters, and alerting workflows.",
      },
      {
        title: "Pilot & Enablement",
        duration: "Weeks 7-8",
        description: "Rolled out to leadership, trained teams, iterated on insights.",
      },
    ],
    testimonial: {
      quote: "Leadership finally trusts the numbers. We spot issues before they hit revenue.",
      author: "COO",
      role: "Marketplace Platform",
    },
    demoLink: { label: "View Dashboard Demo", href: "https://analytics.demo.nexaworks.tech" },
    ctaLabel: "View Full Case Study",
    related: [
      { label: "Reports Platform", href: "/projects/reports" },
      { label: "ResuMind AI-Analyzer", href: "/projects/resumind" },
    ],
    coverImage: "/images/case-studies/analytics-cover.png",
    thumbnail: "/images/case-studies/analytics-thumb.png",
  },
  {
    id: "legal-ai",
    slug: "legal-ai",
    title: "NyayMind Legal AI Research",
    subtitle: "AI-assisted legal research and case management",
    heroDescription:
      "NyayMind is a multi-year initiative to build India’s first AI-native legal operations platform, grounded in rigorous user research and partnerships with practicing attorneys.",
    problem:
      "The legal industry is fragmented, precedent research is slow, and operational tooling hasn’t kept pace with the scale of cases.",
    solution:
      "We embedded with 300+ lawyers to map workflows, designed AI copilots for drafting and precedent search, and prototyped a knowledge graph to link statutes, orders, and briefs.",
    metrics: [
      { label: "Lawyers Interviewed", value: "300" },
      { label: "Research Duration", value: "6 Months" },
      { label: "Product Direction", value: "Research-backed" },
    ],
    technologies: ["Next.js", "Python", "LangChain", "Pinecone", "PostgreSQL"],
    timelineSummary: "Ongoing research with staged pilots",
    timeline: [
      {
        title: "Foundational Research",
        duration: "Months 1-3",
        description: "Interviewed firms across cities, captured workflows, and validated pain points.",
      },
      {
        title: "Prototype & Feedback",
        duration: "Months 4-5",
        description: "Built AI research copilots, tested with attorneys, iterated on UX." 
      },
      {
        title: "Pilot Planning",
        duration: "Month 6",
        description: "Scoped pilot cohort, compliance review, and success metrics.",
      },
    ],
    testimonial: {
      quote: "NexaWorks translated messy legal workflows into a product strategy we can execute.",
      author: "Co-founder",
      role: "NyayMind",
    },
    demoLink: { label: "Learn About Our Legal AI Research", href: "/projects/legal-ai" },
    ctaLabel: "Learn About Our Legal AI Research",
    related: [
      { label: "ResuMind AI-Analyzer", href: "/projects/resumind" },
      { label: "Analytics Dashboard", href: "/projects/analytics" },
    ],
    coverImage: "/images/case-studies/legal-cover.png",
    thumbnail: "/images/case-studies/legal-thumb.png",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);
}
