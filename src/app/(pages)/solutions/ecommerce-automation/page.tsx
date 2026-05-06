import { Metadata } from "next";
import Link from "next/link";
import { ctaButtonVariants } from "@/ui/CTAButton";
import { Badge } from "@/ui/Badge";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation for E-commerce & Retail Ops | NexaWorks",
  description: "Automate your customer support, inventory management, and order tracking with custom AI. Done-for-you e-commerce ops.",
};

export default function EcommerceAutomationPage() {
  return (
    <main className="flex-1 bg-[#0A0A0B]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#131316_0%,transparent_55%)]" aria-hidden="true" />
        <div className="container relative z-10 max-w-4xl text-center">
          <Badge variant="info" className="mb-6 bg-white/5 text-[#A1A1AA] border-none">
            E-commerce Ops Automation
          </Badge>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-[#FAFAFA] sm:text-6xl">
            Stop Burning Margin on Manual E-commerce Ops
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A1A1AA] sm:text-xl">
            Customer support tickets piling up? Returns processing manually? We build custom AI workflows that automate up to 80% of your e-commerce operations, integrating directly with Shopify, Klaviyo, and Zendesk.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/pipeline-audit"
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Book an Ops Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-[#131316] py-20">
        <div className="container max-w-5xl">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-[#FAFAFA]">
            What We Automate
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "L1/L2 Customer Support", desc: "AI agents that resolve 'Where is my order?' and return requests instantly, 24/7." },
              { title: "Inventory Forecasting", desc: "Predictive models that prevent stockouts and reduce over-ordering based on historical data." },
              { title: "Automated Refunds", desc: "Rule-based AI that validates returns and processes refunds without human intervention." }
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-[#27272A] bg-[#1A1A1F] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <CheckCircle2 className="mb-4 h-8 w-8 text-[#10B981]" />
                <h3 className="text-lg font-bold text-[#FAFAFA]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#A1A1AA]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Final CTA */}
      <section className="py-20 sm:py-32">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-[#FAFAFA] sm:text-4xl">
            Protect your profit margins.
          </h2>
          <p className="mt-4 text-lg text-[#A1A1AA]">
            Let&apos;s map out your operational bottlenecks and build an AI engine to solve them.
          </p>
          <div className="mt-10">
            <Link
              href="/pipeline-audit"
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Get Your Ops Blueprint
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
