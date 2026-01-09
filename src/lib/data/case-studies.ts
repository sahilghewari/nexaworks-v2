import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "aurora-labs",
    title: "Aurora Labs: 40% faster feature delivery",
    slug: "aurora-labs-feature-delivery",
    metrics: {
      "Deployment frequency": "4x increase",
      "Revenue uplift": "+18% quarter-over-quarter",
      "Support tickets": "-35% within two months",
    },
    testimonial:
      "NexaWorks reimagined how our teams collaborate. The results were immediate and measurable.",
    technologies: ["Next.js", "GraphQL", "AWS", "Storybook"],
  },
  {
    id: "atlas-finance",
    title: "Atlas Finance: Modernized customer onboarding",
    slug: "atlas-finance-customer-onboarding",
    metrics: {
      "Onboarding time": "Reduced from 14 days to 3 days",
      "Conversion": "+27% completion rate",
      "Compliance": "100% audit ready",
    },
    testimonial:
      "The NexaWorks team translated complexity into clarity. Our customers feel the difference every day.",
    technologies: ["React", "Node.js", "Kubernetes", "PostgreSQL"],
  },
  {
    id: "lumen-health",
    title: "Lumen Health: Scalable telemedicine platform",
    slug: "lumen-health-telemedicine",
    metrics: {
      "Patient sessions": "10k concurrent users supported",
      "Latency": "Sub-200ms across geographies",
      "Satisfaction": "4.8/5 post-visit rating",
    },
    testimonial:
      "NexaWorks delivered a resilient platform that let us focus on care instead of firefighting incidents.",
    technologies: ["Next.js", "WebRTC", "Redis", "Docker"],
  },
];
