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
        "relative flex h-full flex-col gap-6 rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/90 to-[#A79F90]/80 p-8 shadow-[0_20px_45px_-20px_rgba(13,16,21,0.65)]",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {avatarUrl ? (
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#0D1015]/10">
            <Image src={avatarUrl} alt={`${name} avatar`} fill sizes="48px" />
          </div>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D1015]/10 bg-[#A79F90] text-lg font-semibold uppercase text-[#0D1015]">
            {name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
        <div>
          <p className="text-base font-semibold text-[#0D1015]">{name}</p>
          <p className="text-sm text-[#3F3A32]">{title}</p>
        </div>
      </div>

      <blockquote className="relative flex-1 text-lg leading-relaxed text-[#0D1015]">
        <span className="absolute -left-3 -top-2 text-3xl text-[#A3542B]/60" aria-hidden="true">“</span>
        <div className="pl-4">
          {quote}
        </div>
      </blockquote>

      <div className="flex items-center gap-1" aria-label={`Rated ${displayRating} out of 5`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn("h-4 w-4", index < displayRating ? "fill-[#A3542B] text-[#A3542B]" : "text-[#374151]")}
            aria-hidden="true"
          />
        ))}
      </div>
    </article>
  );
}
