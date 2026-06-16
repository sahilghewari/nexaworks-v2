export interface SolutionFeature {
  title: string;
  description: string;
  iconName: string; // We'll map this to a Lucide icon in the component
}

export interface SolutionMetric {
  value: string;
  label: string;
}

export interface SolutionMetadata {
  slug: string;
  title: string;
  description: string;
  heroHeading: string;
  heroSubheading: string;
  painPoint: {
    title: string;
    description: string;
    stats: string[];
  };
  keyFeatures: SolutionFeature[];
  metrics: SolutionMetric[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const SOLUTIONS: SolutionMetadata[] = [
  {
    slug: "customer-support",
    title: "AI for Customer Support Teams | NexaWorks",
    description: "Equip your customer support agents with deterministic AI that instantly retrieves answers from Slack, Jira, and Zendesk. Eliminate hallucinations.",
    heroHeading: "Stop guessing. Start resolving.",
    heroSubheading: "Give your support team a deterministic AI layer that instantly retrieves the right answer from Slack, Jira, and Zendesk. Zero hallucinations.",
    painPoint: {
      title: "The Old Way: The Support Knowledge Gap",
      description: "Support teams are drowning. They spend hours digging through stale Confluence docs, pinging engineers in Slack, or checking Jira statuses just to answer a simple ticket. By the time they find the answer, the customer is already angry.",
      stats: ["45% of support time is spent searching for information.", "Engineers are constantly interrupted by support pings.", "Customers hate waiting days for an escalation."]
    },
    keyFeatures: [
      {
        title: "Deterministic Retrieval",
        description: "Our engine uses strict semantic retrieval. If the exact answer isn't in your documentation, it won't guess.",
        iconName: "Target"
      },
      {
        title: "Real-Time Sync",
        description: "Instantly re-indexes Jira tickets and Slack channels. When engineering fixes a bug, support knows immediately.",
        iconName: "RefreshCw"
      },
      {
        title: "Audit Trails",
        description: "Every AI response is cited. Agents can click a link to see the exact Slack thread or Notion doc the answer came from.",
        iconName: "ShieldCheck"
      }
    ],
    metrics: [
      { value: "40%", label: "Reduction in First Response Time" },
      { value: "0", label: "Hallucinated Answers" },
      { value: "3x", label: "Faster Escalation Resolution" }
    ],
    testimonial: {
      quote: "NexaWorks essentially cloned our best L3 engineer. Our L1 agents now handle complex technical queries without ever escalating.",
      author: "Sarah Jenkins",
      role: "VP of Customer Success"
    }
  },
  {
    slug: "sales-enablement",
    title: "AI for Sales Enablement | NexaWorks",
    description: "Arm your sales team with instant access to product specs, pricing, and battlecards directly in their workflow.",
    heroHeading: "Close deals faster with instant knowledge.",
    heroSubheading: "Your AEs shouldn't have to ping product managers for answers on a demo call. NexaWorks surfaces up-to-date pricing, specs, and battlecards instantly.",
    painPoint: {
      title: "The Old Way: The Deal-Killing Delay",
      description: "A prospect asks a highly technical security question on a demo. The AE says, 'Let me get back to you.' They ping Slack, wait two days for an answer, and by the time they reply, the deal has gone cold.",
      stats: ["AEs spend 20% of their week looking for internal information.", "Competitors win deals when response times lag.", "Sales engineers are overworked answering basic tech questions."]
    },
    keyFeatures: [
      {
        title: "Live Battlecards",
        description: "Instantly generate competitor battlecards based on the latest win/loss reports sitting in Salesforce and Gong.",
        iconName: "Swords"
      },
      {
        title: "Security & Compliance Auto-Fill",
        description: "AEs can instantly answer complex infosec questions by querying your internal SOC2 and compliance repositories.",
        iconName: "Lock"
      },
      {
        title: "Pricing Edge Cases",
        description: "Instantly retrieve complex historical pricing rules, discount matrices, and approval policies without waiting for Finance.",
        iconName: "CircleDollarSign"
      }
    ],
    metrics: [
      { value: "15%", label: "Increase in Win Rate" },
      { value: "2 Days", label: "Saved per Deal Cycle" },
      { value: "100%", label: "Accurate Tech Specs" }
    ],
    testimonial: {
      quote: "Our AEs use NexaWorks live on calls. It's like having our lead sales engineer whispering the perfect answer in their ear.",
      author: "Michael Chang",
      role: "Chief Revenue Officer"
    }
  },
  {
    slug: "hr-onboarding",
    title: "AI for HR & Onboarding | NexaWorks",
    description: "Automate employee onboarding and HR FAQs with an operational memory layer that knows your company policies inside and out.",
    heroHeading: "Automate HR answers. Empower your team.",
    heroSubheading: "Turn scattered HR PDFs, Notion docs, and benefits portals into an interactive brain that answers employee questions instantly, 24/7.",
    painPoint: {
      title: "The Old Way: The HR Bottleneck",
      description: "Your People Ops team spends half their day answering the same questions: 'How do I request PTO?', 'What's our hardware budget?', 'Where is the latest 401k form?'. This doesn't scale.",
      stats: ["HR teams spend 15 hours a week on repetitive policy questions.", "New hires feel lost searching across 5 different portals.", "Policy changes are communicated but instantly forgotten."]
    },
    keyFeatures: [
      {
        title: "Instant Policy Answers",
        description: "Employees just ask Slack. NexaWorks reads your employee handbook and returns the exact policy instantly.",
        iconName: "FileText"
      },
      {
        title: "Onboarding Co-pilot",
        description: "Guide new hires through their first 30 days automatically, answering IT and culture questions on demand.",
        iconName: "Rocket"
      },
      {
        title: "Strict Access Controls",
        description: "NexaWorks respects permissions. It only surfaces information that the specific employee is authorized to see.",
        iconName: "Shield"
      }
    ],
    metrics: [
      { value: "90%", label: "HR Tickets Deflected" },
      { value: "50%", label: "Faster New Hire Ramp" },
      { value: "24/7", label: "Policy Availability" }
    ],
    testimonial: {
      quote: "We freed up our People Ops team from being policy librarians. Now they actually focus on culture and retention.",
      author: "Elena Rodriguez",
      role: "VP of People Ops"
    }
  }
];

export function getAllSolutions() {
  return SOLUTIONS;
}

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
