import Link from "next/link";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#0A0A0B] py-16 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981] text-white font-bold">
                N
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#FAFAFA]">
                NexaWorks
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#A1A1AA]">
              We build done-for-you AI outbound engines and custom software that generate $1M+ in pipeline for B2B SaaS companies. Live in days, not quarters.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#FAFAFA]">Solutions</h3>
            <ul className="mt-6 space-y-4 text-sm text-[#A1A1AA]">
              <li>
                <Link href="/solutions/b2b-saas-outbound" className="hover:text-[#10B981] transition-colors">
                  B2B SaaS Outbound
                </Link>
              </li>
              <li>
                <Link href="/solutions/ecommerce-automation" className="hover:text-[#10B981] transition-colors">
                  E-commerce Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#10B981] transition-colors">
                  Custom AI Product Build
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#FAFAFA]">Company</h3>
            <ul className="mt-6 space-y-4 text-sm text-[#A1A1AA]">
              <li>
                <Link href="#case-studies" className="hover:text-[#10B981] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#10B981] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#10B981] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#FAFAFA]">Get Started</h3>
            <div className="mt-6 space-y-4">
              <Link
                href="/pipeline-audit"
                className={ctaButtonVariants({ variant: "primary", size: "sm", className: "w-full justify-center" })}
              >
                Apply for Audit
              </Link>
              <Link
                href="mailto:founders@nexaworks.tech"
                className="block text-sm text-[#A1A1AA] hover:text-[#10B981] transition-colors"
              >
                founders@nexaworks.tech
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-[#27272A] pt-8 sm:flex-row">
          <p className="text-sm text-[#A1A1AA]">
            © {new Date().getFullYear()} NexaWorks. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="/terms" className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
