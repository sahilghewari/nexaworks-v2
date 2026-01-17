import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility at NexaWorks",
  description:
    "Our commitment to building an inclusive, accessible experience. Learn about our standards, current status, and how to contact us with feedback.",
};

export default function AccessibilityPage() {
  return (
    <main className="bg-[#CBC8BA] text-[#0D1015]">
      <section className="border-b border-[#0D1015]/10 bg-[#CBC8BA] py-16 sm:py-20">
        <div className="container space-y-4 sm:max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#3F3A32]">Accessibility</p>
          <h1 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            We are committed to an inclusive experience
          </h1>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            NexaWorks aims to meet WCAG 2.1 AA guidelines. We continuously audit our site for issues, improve keyboard and screen reader support, and welcome feedback.
          </p>
        </div>
      </section>

      <section className="border-b border-[#0D1015]/10 bg-[#CBC8BA] py-14">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0D1015]">What we focus on</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-[#3F3A32]">
              <li><strong className="text-[#0D1015]">Keyboard access:</strong> All interactive elements are reachable and operable via keyboard with visible focus.</li>
              <li><strong className="text-[#0D1015]">Screen readers:</strong> Semantic HTML, labeled form fields, and descriptive link text for meaningful announcements.</li>
              <li><strong className="text-[#0D1015]">Color contrast:</strong> Text and interactive elements target WCAG 2.1 AA ratios.</li>
              <li><strong className="text-[#0D1015]">Motion:</strong> Animations are subtle; key content remains accessible without motion.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0D1015]">Recent improvements</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-[#3F3A32]">
              <li>Skip-to-content link for faster keyboard navigation.</li>
              <li>Accessible navigation labels and current-page indicators.</li>
              <li>Labeled form fields with error messaging via <code className="text-xs">aria-describedby</code>.</li>
              <li>Consistent focus-visible outlines on buttons, links, and menu toggles.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#CBC8BA] py-14">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0D1015]">Testing and standards</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              We align with WCAG 2.1 AA and regularly review using automated tooling (axe, Lighthouse) plus manual checks with keyboard and screen readers. If you encounter barriers, please tell us so we can remediate quickly.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/70 p-6 shadow-[0_24px_50px_-24px_rgba(13,16,21,0.65)]">
            <h3 className="text-xl font-semibold text-[#0D1015]">Contact for accessibility</h3>
            <p className="text-sm text-[#3F3A32]">
              Email: <Link className="text-[#A3542B] underline" href="mailto:pavan@nexaworks.tech">pavan@nexaworks.tech</Link>
              <br />
              Please include the page URL, a description of the issue, and your browser/device. We aim to respond within 3 business days.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
