import RepublicDayForm from "@/components/campaigns/RepublicDayForm";
import Image from "next/image";
import React from "react";
import LayoutGridDemo from "@/components/layout-grid-demo";

export const metadata = {
  title: "Free MVP Builds — Republic Day Special | NexaWorks",
  description: "NexaWorks will build 5 startup MVPs free of development costs. Jan 25–31. 2-week delivery. Apply now.",
  openGraph: {
    title: "Free MVP Builds — Republic Day Special | NexaWorks",
    description: "NexaWorks will build 5 startup MVPs free of development costs. Jan 25–31. 2-week delivery. Apply now.",
    url: "https://www.nexaworks.tech/campaigns/republic-day-2026",
    images: ["/images/campaigns/republic-day-2026-og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "https://www.nexaworks.tech/campaigns/republic-day-2026" },
};

export default function RepublicDayPage() {
  return (
    <main className="flex flex-col bg-[#E7E2D6] text-[#0D1015]">

      <section className="relative isolate overflow-hidden bg-[#0D1015] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3d52a0_0%,transparent_45%)] opacity-60" aria-hidden="true" />
        <div className="container relative z-10 py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6 text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-[#adbbda]">Republic Day special</p>
              <h1 className="font-display text-3xl font-bold leading-tight md:text-5xl">Launch your startup — we’ll build the MVP. No development fees.</h1>
              <p className="text-sm text-[#d1d5e6]">NexaWorks will fully develop 5 startup MVPs during Republic Day week (Jan 25–31). We cover development costs; winners cover domain and deployment only. Two-week delivery per MVP.</p>

              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
                <a href="#apply" className="inline-flex items-center rounded-md bg-[#3d52a0] px-4 py-3 text-sm font-semibold text-white shadow">Apply for Free MVP</a>
                <a href="#eligibility" className="inline-flex items-center rounded-md border border-white/10 px-4 py-3 text-sm">See eligibility</a>
              </div>

              <p className="mt-3 text-xs text-[#adbbda]">Limited to 5 startups. Selection based on traction, users, and fundability.</p>
            </div>

            <div className="order-first md:order-last">
              <div className="mx-auto max-w-md rounded-xl bg-gradient-to-br from-[#3d52a0]/20 via-[#7091e6]/12 to-[#adbbda]/8 p-4">
                <div className="relative h-56 rounded-md bg-black/60">
                  <Image src="/images/campaigns/republic-day-2026-og.svg" alt="Republic Day MVP" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#ed8f5]" />
                    <div className="text-xs">
                      <div className="font-semibold">Magic.dev</div>
                      <div className="text-[11px] text-[#d1d5e6]">+ 30 enterprise clients</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#adbbda]">5 winners • Jan 25–31</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ed8f5] via-[#fff] to-[#3d52a0] opacity-95" aria-hidden="true" />
      </section>

      <section className="container py-6">
        {/* grid-based cards layout for the key sections */}
        <div className="mx-auto max-w-6xl">
          {/* lazy load the layout grid demo component */}
          <React.Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
            {/* @ts-ignore */}
            <LayoutGridDemo />
          </React.Suspense>
        </div>
      </section>

      <section className="container py-8" id="apply">
        <h2 className="font-display text-2xl font-semibold text-[#0D1015]">Apply</h2>
        <div className="mt-4 max-w-2xl">
          <RepublicDayForm />
        </div>
      </section>

      <section className="container py-8" id="testimonials">
        <h2 className="font-display text-2xl font-semibold text-[#0D1015]">Testimonials & past clients</h2>
        <p className="mt-3 text-sm text-[#3F3A32]">Trusted by enterprise teams and startups — logos: Magic.dev + 30 enterprise automation clients (rendered as accessible SVGs where available).</p>
      </section>

      <section className="container py-8" id="faq">
        <h2 className="font-display text-2xl font-semibold text-[#0D1015]">FAQ & legal</h2>
        <p className="mt-3 text-sm text-[#3F3A32]">We sign a simple scope-of-work before starting. Development is free for listed deliverables; additional work is billable. Winners pay domain & hosting fees.</p>
      </section>

      <footer className="container py-8 text-sm text-[#6b7280]">
        <p>© NexaWorks — Republic Day MVP program (Jan 25–31). Limited to 5 winners.</p>
      </footer>
    </main>
  );
}
