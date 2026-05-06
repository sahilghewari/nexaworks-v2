import { Metadata } from "next";
import { Badge } from "@/ui/Badge";
import { ctaButtonVariants } from "@/ui/CTAButton";

export const metadata: Metadata = {
  title: "Pipeline Acceleration Audit | NexaWorks",
  description: "Apply for a customized AI outbound pipeline audit. See how much revenue you are leaving on the table.",
};

export default function PipelineAuditPage() {
  return (
    <main className="flex-1 bg-[#0A0A0B] py-20 sm:py-32">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <Badge variant="info" className="mb-6 bg-white/5 text-[#A1A1AA] border-none">
            Limited spots available this month
          </Badge>
          <h1 className="font-display text-4xl font-bold text-[#FAFAFA] sm:text-5xl">
            Apply for a Pipeline Acceleration Audit
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A1A1AA]">
            If we can&apos;t identify at least 3 actionable ways to increase your qualified pipeline by 30% using AI automation, we&apos;ll pay you $500 for your time.
          </p>
        </div>

        <div className="rounded-3xl border border-[#27272A] bg-[#131316] p-8 shadow-[0_32px_65px_-32px_rgba(0,0,0,0.5)] sm:p-12">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#FAFAFA]">Work Email</label>
                <input 
                  type="email" 
                  className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                  placeholder="name@company.com"
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#FAFAFA]">Mobile Number</label>
                <input 
                  type="tel" 
                  className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                  placeholder="+1 (555) 000-0000"
                  required 
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#FAFAFA]">Full Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                  placeholder="John Doe"
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#FAFAFA]">Company Website</label>
                <input 
                  type="url" 
                  className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                  placeholder="https://company.com"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#FAFAFA]">What is your current monthly lead generation spend?</label>
              <select className="w-full appearance-none rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" required>
                <option value="">Select a range...</option>
                <option value="under5k">Under $5k / month</option>
                <option value="5k_15k">$5k - $15k / month</option>
                <option value="over15k">Over $15k / month</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#FAFAFA]">What is your primary outbound bottleneck right now?</label>
              <textarea 
                className="h-32 w-full resize-none rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                required 
                placeholder="E.g., SDRs are too slow, open rates are dead, data scraping is manual..."
              />
            </div>

            <button 
              type="submit" 
              className={ctaButtonVariants({ variant: "primary", size: "lg", className: "mt-4 w-full" })}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
