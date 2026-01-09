import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility at NexaWorks",
  description:
    "Our commitment to building an inclusive, accessible experience. Learn about our standards, current status, and how to contact us with feedback.",
};

export default function AccessibilityPage() {
  return (
    <main className="bg-[#0D1015] text-[#CBC8BA]">
      <section className="border-b border-white/10 bg-[#0D1015] py-16 sm:py-20">
        <div className="container space-y-4 sm:max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9CA3AF]">Accessibility</p>
          <h1 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl">
            We are committed to an inclusive experience
          </h1>
          <p className="text-base text-[#9CA3AF] sm:text-lg">
            NexaWorks aims to meet WCAG 2.1 AA guidelines. We continuously audit our site for issues, improve keyboard and screen reader support, and welcome feedback.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0D1015] py-14">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#CBC8BA]">What we focus on</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-[#9CA3AF]">
              <li><strong className="text-[#CBC8BA]">Keyboard access:</strong> All interactive elements are reachable and operable via keyboard with visible focus.</li>
              <li><strong className="text-[#CBC8BA]">Screen readers:</strong> Semantic HTML, labeled form fields, and descriptive link text for meaningful announcements.</li>
              <li><strong className="text-[#CBC8BA]">Color contrast:</strong> Text and interactive elements target WCAG 2.1 AA ratios.</li>
              <li><strong className="text-[#CBC8BA]">Motion:</strong> Animations are subtle; key content remains accessible without motion.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#CBC8BA]">Recent improvements</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-[#9CA3AF]">
              <li>Skip-to-content link for faster keyboard navigation.</li>
              <li>Accessible navigation labels and current-page indicators.</li>
              <li>Labeled form fields with error messaging via <code className="text-xs">aria-describedby</code>.</li>
              <li>Consistent focus-visible outlines on buttons, links, and menu toggles.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1015] py-14">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#CBC8BA]">Testing and standards</h2>
            <p className="text-sm leading-relaxed text-[#9CA3AF]">
              We align with WCAG 2.1 AA and regularly review using automated tooling (axe, Lighthouse) plus manual checks with keyboard and screen readers. If you encounter barriers, please tell us so we can remediate quickly.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-[#111827]/70 p-6 shadow-[0_24px_50px_-24px_rgba(15,23,42,0.65)]">
            <h3 className="text-xl font-semibold text-[#CBC8BA]">Contact for accessibility</h3>
            <p className="text-sm text-[#9CA3AF]">
              Email: <Link className="text-[#FF2003] underline" href="mailto:accessibility@nexaworks.com">accessibility@nexaworks.com</Link>
              <br />
              Please include the page URL, a description of the issue, and your browser/device. We aim to respond within 3 business days.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
