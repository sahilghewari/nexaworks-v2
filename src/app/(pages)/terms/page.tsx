import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NexaWorks",
  description: "Terms of Service for NexaWorks products, services, and website usage.",
};

export default function TermsPage() {
  return (
    <main className="flex flex-col bg-[#E7E2D6] text-[#0D1015]">
      <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_55%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-4 text-center sm:max-w-4xl sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[#3F3A32]">Terms</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[3rem]">
            Terms of Service
          </h1>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            The rules of engagement for using NexaWorks products, services, and this website.
          </p>
        </div>
      </section>

      <section className="container space-y-8 py-14">
        <article className="space-y-6 rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-8 shadow-[0_24px_60px_-32px_rgba(13,16,21,0.75)]">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0D1015]">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              By accessing or using NexaWorks services, demos, or this site, you agree to these Terms of Service and any policies we link here.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0D1015]">2. Services and Use</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              Our deliverables are governed by their specific statements of work. You may not reverse engineer, resell, or misuse demos, APIs, or content provided.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0D1015]">3. Confidentiality</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              We treat shared information as confidential and use it only to deliver the agreed scope. You agree to do the same with any NexaWorks materials.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0D1015]">4. Intellectual Property</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              Unless otherwise stated in writing, NexaWorks retains ownership of pre-existing IP and reusable components. Project-specific deliverables transfer as agreed in the SOW.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0D1015]">5. Warranties and Disclaimers</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              Services are provided “as is” except where explicitly covered by an SOW. We disclaim implied warranties to the fullest extent permitted by law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0D1015]">6. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              To the maximum extent allowed, NexaWorks is not liable for indirect, incidental, or consequential damages. Our aggregate liability is limited to fees paid for the applicable services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0D1015]">7. Termination</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              Either party may terminate as permitted under the governing SOW or applicable law. Provisions intended to survive termination will continue in effect.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0D1015]">8. Contact</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              Questions about these terms? Contact us at <a className="text-[#A3542B]" href="mailto:hello@nexaworks.tech">hello@nexaworks.tech</a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
