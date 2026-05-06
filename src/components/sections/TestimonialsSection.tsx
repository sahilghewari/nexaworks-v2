"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Badge } from "@/ui/Badge";
import { TestimonialCard } from "@/ui/TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Marketing Manager, ResuMind",
    quote: (
      <span className="italic">
        NexaWorks turned a backlog of resumes into actionable insights within weeks. Our talent team finally has a system that keeps up with demand.
      </span>
    ),
  },
  {
    name: "Anonymous CTO",
    title: "E-commerce Company",
    quote: (
      <span className="italic">
        They ship production-ready software faster than any internal squad we have. The automation freed up two full teams to focus on roadmap work.
      </span>
    ),
  },
  {
    name: "Michael Chen",
    title: "Software Engineer, ResuMind",
    quote: (
      <span className="italic">
        Working with NexaWorks felt like adding senior engineers overnight. They solved edge cases we had battled for months.
      </span>
    ),
  },
] as const;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const total = useMemo(() => testimonials.length, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(id);
  }, [total]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const target = container.children[active] as HTMLElement | undefined;
    if (!target) return;

    const offset = target.offsetLeft - container.clientWidth * 0.05;
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, [active]);

  const handlePrev = () => setActive((prev) => (prev - 1 + total) % total);
  const handleNext = () => setActive((prev) => (prev + 1) % total);

  return (
    <section id="testimonials" className="bg-[#0A0A0B] py-24 sm:py-32">
      <div className="container space-y-12">
        <motion.div
          className="flex flex-col gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="success" className="mx-auto w-fit sm:mx-0">
            Real Pipeline Outcomes
          </Badge>
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-semibold text-[#FAFAFA] sm:text-4xl md:text-[2.75rem]">
              Trusted by B2B SaaS Founders
            </h2>
            <p className="mx-auto max-w-3xl text-base text-[#A1A1AA] sm:text-lg">
              We don&apos;t just ship code; we ship meetings. See how our AI Revenue Engine is transforming outbound for high-growth teams.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between pb-6">
            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#27272A] bg-[#131316] text-[#FAFAFA] transition hover:bg-[#1A1A1F] hover:border-[#10B981]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#27272A] bg-[#131316] text-[#FAFAFA] transition hover:bg-[#1A1A1F] hover:border-[#10B981]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="relative h-full w-[88%] shrink-0 snap-start sm:w-[70%] md:w-[48%] lg:w-[32%]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  rating={5}
                  className="h-full bg-[#131316] border-[#27272A] text-[#FAFAFA]"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === index ? "w-8 bg-[#10B981]" : "w-2 bg-[#27272A] hover:bg-[#3F3F46]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-pressed={active === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

}
