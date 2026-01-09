import Image from "next/image";
import { Star } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: ReactNode;
  name: string;
  title: string;
  avatarUrl?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  avatarUrl,
  rating = 5,
  className,
}: TestimonialCardProps) {
  const displayRating = Math.min(Math.max(Math.round(rating), 0), 5);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/90 via-[#0D1015]/90 to-[#1F2937]/80 p-8 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.65)]",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {avatarUrl ? (
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
            <Image src={avatarUrl} alt={`${name} avatar`} fill sizes="48px" />
          </div>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1F2937] text-lg font-semibold uppercase text-[#CBC8BA]">
            {name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
        <div>
          <p className="text-base font-semibold text-[#CBC8BA]">{name}</p>
          <p className="text-sm text-[#9CA3AF]">{title}</p>
        </div>
      </div>

      <blockquote className="flex-1 text-lg leading-relaxed text-[#CBC8BA]/90">
        “{quote}”
      </blockquote>

      <div className="flex items-center gap-1" aria-label={`Rated ${displayRating} out of 5`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn("h-4 w-4", index < displayRating ? "fill-[#FF2003] text-[#FF2003]" : "text-[#374151]")}
            aria-hidden="true"
          />
        ))}
      </div>
    </article>
  );
}
