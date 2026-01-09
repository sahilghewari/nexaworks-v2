"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  COMPANY_INFO,
  FOOTER_LINK_GROUPS,
  siteConfig,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setFeedback("Enter your email to subscribe.");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      setFeedback("");

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.error ?? "Unable to subscribe right now.");
      }

      setEmail("");
      setStatus("success");
      setFeedback("Thank you for subscribing! Check your inbox for a welcome email.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to subscribe right now.");
    }
  };

  return (
    <footer className="border-t border-[#1F2937] bg-[#0D1015]">
      <div className="container space-y-12 py-12 md:space-y-16 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr] xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center" aria-label="NexaWorks home">
              <span className="font-display text-2xl font-semibold uppercase tracking-widest text-gradient">
                NexaWorks
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#9CA3AF]">
              {COMPANY_INFO.tagline}
            </p>
            <div className="grid gap-2 text-sm text-[#9CA3AF]">
              <span className="font-semibold text-[#CBC8BA]">Contact</span>
              <a className="transition hover:text-[#CBC8BA]" href={`mailto:${COMPANY_INFO.email}`}>
                {COMPANY_INFO.email}
              </a>
              <a className="transition hover:text-[#CBC8BA]" href={`tel:${COMPANY_INFO.phone}`}>
                {COMPANY_INFO.phone}
              </a>
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.github && (
                <a
                  href={SOCIAL_LINKS.github}
                  className="text-sm text-[#9CA3AF] transition hover:text-[#CBC8BA]"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  className="text-sm text-[#9CA3AF] transition hover:text-[#CBC8BA]"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {SOCIAL_LINKS.twitter && (
                <a
                  href={SOCIAL_LINKS.twitter}
                  className="text-sm text-[#9CA3AF] transition hover:text-[#CBC8BA]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CBC8BA]">
                {group.title}
              </h3>
              <ul className="space-y-3 text-sm text-[#9CA3AF]">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        className="transition hover:text-[#CBC8BA]"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="transition hover:text-[#CBC8BA]">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <motion.div
            className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-[#CBC8BA]">Stay in the loop</h3>
            <p className="text-sm text-[#9CA3AF]">
              Insights on emerging tech, fresh case studies, and behind-the-scenes updates delivered monthly.
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-describedby="newsletter-feedback"
                required
              />
              <Button type="submit" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? "Joining..." : "Join newsletter"}
              </Button>
              {feedback && (
                <p
                  id="newsletter-feedback"
                  className={`text-sm ${status === "success" ? "text-emerald-400" : "text-[#F59E0B]"}`}
                  role={status === "success" ? "status" : "alert"}
                >
                  {feedback}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <div className="border-t border-[#1F2937] pt-8 text-sm text-[#9CA3AF]">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <span>© {currentYear} {siteConfig.name}. All rights reserved.</span>
            <span>Crafted for visionaries building tomorrow&apos;s products.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
