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
    id: "ai-pipeline",
    slug: "resumind",
    title: "AI Pipeline Triage System",
    subtitle: "85% reduction in manual lead qualification",
    heroDescription:
      "We built an autonomous triage engine for a high-volume B2B marketplace, eliminating the bottleneck in their Sales Development workflow.",
    problem:
      "The sales team was drowning in 5,000+ monthly leads. Manual qualification took 48+ hours, causing high-intent buyers to churn before ever speaking to an AE.",
    solution:
      "We deployed an AI-native scoring layer that parses inbound signals, enriches them with firmographic data, and routes 'hot' leads to Slack in real-time while automating the nurture for the rest.",
    metrics: [
      { label: "Avg Triage Time", value: "4.2s", description: "From lead submission to AE notification" },
      { label: "Pipeline Velocity", value: "3x", description: "Increase in same-day meeting bookings" },
      { label: "Manual Effort", value: "-85%", description: "Recaptured 40+ hours/week for the sales team" },
      { label: "Lead-to-Meeting", value: "+22%", description: "Lift in conversion rate" },
    ],
    technologies: ["Next.js", "OpenAI", "Clay", "Redis", "PostgreSQL", "AWS"],
    timelineSummary: "Live in 14 Days",
    timeline: [
      {
        title: "Signal Mapping",
        duration: "Week 1",
        description: "Identified the high-intent triggers that actually predict a sale.",
      },
      {
        title: "Engine Build",
        duration: "Week 2",
        description: "Built the ingestion and scoring pipeline with live Slack integrations.",
      },
      {
        title: "Scale & Optimize",
        duration: "Week 3",
        description: "Fine-tuned the model on historic 'closed-won' data for higher accuracy.",
      },
    ],
    testimonial: {
      quote: "NexaWorks shipped a system that books meetings while we sleep. Our AEs finally have 'clean' calendars.",
      author: "Head of Sales",
      role: "Global B2B Marketplace",
    },
    demoLink: { label: "View Pipeline Flow", href: "/case-studies/resumind" },
    ctaLabel: "View Breakdown",
    related: [
      { label: "Revenue Ops Automation", href: "/case-studies/reports" },
      { label: "Sales Intelligence Dashboard", href: "/case-studies/analytics" },
    ],
    coverImage: "/images/case-studies/resumind-cover.png",
    thumbnail: "/images/case-studies/resumind-thumb.png",
  },
  {
    id: "rev-ops",
    slug: "reports",
    title: "Revenue Ops Automation",
    subtitle: "Automating the $100M data loop",
    heroDescription:
      "A global retail brand needed to eliminate the 'Friday scramble' for revenue reporting. We built a zero-manual-QA engine that powers their executive weekly.",
    problem:
      "Leadership was flying blind. It took 3 analysts 2 days every week to compile revenue data from 12 siloed sources, leading to delayed decisions and missed targets.",
    solution:
      "We built a resilient data orchestration engine that unifies Shopify, Stripe, and CRM data into a single source of truth, generating board-ready reports automatically every 6 hours.",
    metrics: [
      { label: "Reporting Accuracy", value: "100%", description: "Eliminated manual entry errors" },
      { label: "Analyst Time", value: "-90%", description: "Freed up teams for strategic work" },
      { label: "Data Refresh", value: "6hrs", description: "Down from 7 days previously" },
      { label: "Metric Confidence", value: "High", description: "Full audit trail for every data point" },
    ],
    technologies: ["FastAPI", "RabbitMQ", "PostgreSQL", "AWS Lambda", "Next.js"],
    timelineSummary: "5-Week Delivery",
    timeline: [
      {
        title: "Data Audit",
        duration: "Week 1",
        description: "Mapped all 12 data sources and identified the 'Source of Truth'.",
      },
      {
        title: "Pipe Architecture",
        duration: "Weeks 2-3",
        description: "Built the resilient orchestration layer with automated retry logic.",
      },
      {
        title: "Visuals & Handoff",
        duration: "Weeks 4-5",
        description: "Shipped the executive portal and trained the RevOps team.",
      },
    ],
    testimonial: {
      quote: "The NexaWorks engine saved us two full days of manual work every single week. It's a game changer.",
      author: "VP Revenue Operations",
      role: "Fortune 500 Retailer",
    },
    demoLink: { label: "See Report Engine", href: "/case-studies/reports" },
    ctaLabel: "View Breakdown",
    related: [
      { label: "AI Pipeline Triage", href: "/case-studies/resumind" },
      { label: "Sales Intelligence Dashboard", href: "/case-studies/analytics" },
    ],
    coverImage: "/images/case-studies/reports-cover.png",
    thumbnail: "/images/case-studies/reports-thumb.png",
  },
  {
    id: "sales-intel",
    slug: "analytics",
    title: "Sales Intelligence Dashboard",
    subtitle: "Real-time visibility into the $10M pipeline",
    heroDescription:
      "We delivered a real-time analytics platform that unifies event streams to surface the 'next best action' for every sales rep in the company.",
    problem:
      "Reps didn't know which leads to call. Activity was high but output was low because data was stale and hidden in complex CRM reports.",
    solution:
      "We built a high-performance event stream that surfaces intent signals (demo requests, pricing page visits) instantly to the reps' dashboard, ranked by probability to close.",
    metrics: [
      { label: "Speed to Lead", value: "<1min", description: "Average response time to high-intent signals" },
      { label: "Meeting Show Rate", value: "+18%", description: "Due to faster follow-up" },
      { label: "Revenue Tracked", value: "$10M+", description: "Flowing through the system daily" },
      { label: "Rep Adoption", value: "94%", description: "Active daily users on the new dashboard" },
    ],
    technologies: ["Kafka", "Next.js", "ClickHouse", "AWS", "TypeScript"],
    timelineSummary: "8-Week Build",
    timeline: [
      {
        title: "Signal Discovery",
        duration: "Week 1",
        description: "Interviewed top AEs to define the 'intent' markers that matter.",
      },
      {
        title: "Stream Infra",
        duration: "Weeks 2-4",
        description: "Deployed the low-latency Kafka pipeline for real-time signals.",
      },
      {
        title: "Rep Portal",
        duration: "Weeks 5-8",
        description: "Shipped the 'Action Center' UI and integrated with existing CRMs.",
      },
    ],
    testimonial: {
      quote: "Our reps don't ask 'who should I call?' anymore. The dashboard tells them. Meetings are up 20%.",
      author: "CRO",
      role: "Series B SaaS Startup",
    },
    demoLink: { label: "View Intelligence Dashboard", href: "/case-studies/analytics" },
    ctaLabel: "View Breakdown",
    related: [
      { label: "AI Pipeline Triage", href: "/case-studies/resumind" },
      { label: "Revenue Ops Automation", href: "/case-studies/reports" },
    ],
    coverImage: "/images/case-studies/analytics-cover.png",
    thumbnail: "/images/case-studies/analytics-thumb.png",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);
}
