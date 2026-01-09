"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="bg-[#0D1015] py-24 sm:py-28">
      <div className="container space-y-12">
        <motion.div
          className="flex flex-col gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="info" className="mx-auto w-fit sm:mx-0">
            Customer Testimonials
          </Badge>
          <h2 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl md:text-[2.75rem]">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                rating={5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
