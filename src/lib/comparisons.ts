export interface ComparisonFeature {
  feature: string;
  us: boolean;
  them: boolean;
  explanation: string;
}

export interface ComparisonMetadata {
  slug: string;
  competitorName: string;
  title: string;
  description: string;
  heroHeading: string;
  heroSubheading: string;
  competitorFlaw: string;
  ourAdvantage: string;
  architecturalDifference: {
    theirApproach: string;
    ourApproach: string;
  };
  pricingDifference: {
    theirPricing: string;
    ourPricing: string;
  };
  featureMatrix: ComparisonFeature[];
  testimonial: {
    quote: string;
    author: string;
    company: string;
  };
}

export const COMPARISONS: ComparisonMetadata[] = [
  {
    slug: "zendesk-ai-alternative",
    competitorName: "Zendesk AI",
    title: "Zendesk AI Alternative | NexaWorks vs Zendesk",
    description: "Looking for an alternative to Zendesk AI? NexaWorks provides deterministic resolutions instead of basic deflection, with predictable pricing for modern B2B SaaS teams.",
    heroHeading: "Move beyond basic deflection.",
    heroSubheading: "Zendesk AI was built to deflect simple B2C tickets. NexaWorks is an autonomous operational layer built to resolve complex B2B tickets completely, with zero hallucinations.",
    competitorFlaw: "Zendesk AI relies heavily on your existing, perfectly-formatted public help center articles. If the answer involves checking a Jira bug status or reading an internal Slack thread, Zendesk AI fails. It's fundamentally designed to keep users away from agents, rather than deeply solving their technical issues.",
    ourAdvantage: "NexaWorks connects directly to where your real, messy operational knowledge lives—Slack, Jira, and internal Notion workspaces. We don't just deflect; we execute deterministic resolutions based on real-time company reality.",
    architecturalDifference: {
      theirApproach: "Single-agent architecture relying on static, public-facing FAQ articles.",
      ourApproach: "Multi-agent validator architecture that continuously syncs with internal, private engineering and ops tools."
    },
    pricingDifference: {
      theirPricing: "Unpredictable per-resolution fees that penalize you for scale and force you to buy expensive Zendesk Advanced AI add-ons.",
      ourPricing: "Transparent, flat-rate platform pricing based on seats and data volume, not on how many times your customers ask for help."
    },
    featureMatrix: [
      { feature: "Instant Public FAQ Answers", us: true, them: true, explanation: "Both systems can regurgitate your public help center." },
      { feature: "Query Internal Jira Tickets", us: true, them: false, explanation: "NexaWorks can check live engineering status; Zendesk cannot." },
      { feature: "Multi-Agent Hallucination Validation", us: true, them: false, explanation: "We use a secondary LLM to audit answers before sending." },
      { feature: "Slack Thread Indexing", us: true, them: false, explanation: "We extract ground-truth from engineer Slack conversations." },
      { feature: "Predictable Flat Pricing", us: true, them: false, explanation: "No surprise bills at the end of the month." }
    ],
    testimonial: {
      quote: "We hit a ceiling with Zendesk AI in about a week. It just didn't understand our complex B2B product. NexaWorks plugged into our Jira and Slack and immediately started resolving L2 technical tickets.",
      author: "David Chen",
      company: "CTO, CloudScale"
    }
  },
  {
    slug: "intercom-fin-alternative",
    competitorName: "Intercom Fin",
    title: "Intercom Fin Alternative | NexaWorks vs Fin",
    description: "Switching from Intercom Fin? NexaWorks offers transparent, predictable pricing and deep enterprise integrations without the hallucination risks of generic LLMs.",
    heroHeading: "Predictable pricing. Zero hallucinations.",
    heroSubheading: "Intercom Fin charges unpredictable per-resolution fees for basic answers. NexaWorks gives you an enterprise-grade Company Brain with transparent pricing and complex B2B workflow support.",
    competitorFlaw: "Intercom Fin's pricing scales unpredictably based on 'resolutions'—a metric that is often opaque and difficult to control. Furthermore, while great for simple e-commerce queries, Fin struggles with complex, multi-step B2B workflows that require deep system context and custom API calls.",
    ourAdvantage: "We offer predictable, flat-rate platform pricing. More importantly, our architecture is built for complex B2B workflows, strictly grounding answers to your internal data and utilizing a multi-agent validation layer to prevent hallucinations.",
    architecturalDifference: {
      theirApproach: "Black-box LLM summarization of Intercom Articles with limited ability to trigger deep internal workflows.",
      ourApproach: "Transparent traceability matrix where every claim is cited, combined with custom tool-calling for deep API workflows."
    },
    pricingDifference: {
      theirPricing: "$0.99 (or more) per 'resolution', leading to massive, unpredictable spikes in your monthly bill.",
      ourPricing: "Simple, predictable platform fees. You shouldn't be penalized because your product is getting more usage."
    },
    featureMatrix: [
      { feature: "Basic Knowledge Retrieval", us: true, them: true, explanation: "Both can answer simple questions from docs." },
      { feature: "Flat, Predictable Pricing", us: true, them: false, explanation: "We don't charge per resolution." },
      { feature: "Multi-step API Tool Calling", us: true, them: false, explanation: "NexaWorks can string together multiple system actions." },
      { feature: "Custom Grounding Rules", us: true, them: false, explanation: "Dictate exactly which sources overrule others." },
      { feature: "Zero-Hallucination Guarantee", us: true, them: false, explanation: "Strict source citation enforced at the architecture level." }
    ],
    testimonial: {
      quote: "We loved Intercom for chat, but Fin's pricing became completely unmanageable. We switched to NexaWorks for AI resolution and kept Intercom for the inbox—we cut costs by 40% while improving answer quality.",
      author: "Amanda Lewis",
      company: "Head of Operations, FinTech API"
    }
  }
];

export function getAllComparisons() {
  return COMPARISONS;
}

export function getComparisonBySlug(slug: string) {
  return COMPARISONS.find((c) => c.slug === slug);
}
