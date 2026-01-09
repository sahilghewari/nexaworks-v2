import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact | NexaWorks",
  description: "Talk to the NexaWorks founders about automation, AI, and shipping production software fast.",
  openGraph: {
    title: "Contact NexaWorks",
    description: "Schedule a consultation or share your challenge with the NexaWorks team.",
    url: "https://nexaworks.tech/contact",
    siteName: "NexaWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NexaWorks",
    description: "Reach the founders directly to discuss your next build.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col bg-[#0A0D12] text-[#CBC8BA]">
      <section className="relative isolate overflow-hidden bg-[#0D1015] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937_0%,transparent_55%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-4 text-center sm:max-w-4xl sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9CA3AF]">Contact</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[3rem]">
            Let&apos;s Talk
          </h1>
          <p className="text-base text-[#9CA3AF] sm:text-lg">
            Tell us about your challenge. We reply within one business day with next steps and a live demo plan.
          </p>
        </div>
      </section>

      <section className="container grid gap-10 py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <ContactForm />

        <div className="space-y-6 rounded-3xl border border-white/10 bg-[#0D1015] p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.75)]">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#CBC8BA]">Contact details</h3>
            <p className="text-sm text-[#9CA3AF]">Prefer email or a quick call? Reach us directly.</p>
          </div>

          <div className="space-y-4 text-sm text-[#9CA3AF]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">Email</p>
              <a className="text-[#FF2003]" href="mailto:hello@nexaworks.tech">hello@nexaworks.tech</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">Phone</p>
              <a className="text-[#FF2003]" href="tel:+918356954152">+91-8356-954-152</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">Address</p>
              <p>Kalyan, Maharashtra, India</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="NexaWorks location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.995690792808!2d73.1350!3d19.2170!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795e5b85e2c97%3A0xe76a39076905f384!2sKalyan%2C%20Maharashtra%20421601!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
