"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type MotionValue,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  animate?: boolean;
  decimals?: number;
  className?: string;
}

function useAnimatedNumber(target: number, shouldAnimate: boolean): MotionValue<number> {
  const motionValue = useMotionValue(shouldAnimate ? 0 : target);
  const spring = useSpring(motionValue, { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (!shouldAnimate) {
      motionValue.set(target);
      return;
    }

    motionValue.set(0);
    const frame = requestAnimationFrame(() => motionValue.set(target));
    return () => cancelAnimationFrame(frame);
  }, [shouldAnimate, target, motionValue]);

  return spring;
}

export function MetricCard({
  value,
  label,
  prefix = "",
  suffix = "",
  animate = true,
  decimals = 0,
  className,
}: MetricCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const motionValue = useAnimatedNumber(value, animate && isInView);

  return (
    <motion.article
      ref={containerRef}
      className={cn(
        "flex h-full flex-col gap-6 rounded-2xl border border-[#1F2937] bg-[#111827] p-6 shadow-[0_24px_50px_-24px_rgba(15,23,42,0.65)]",
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <AnimatedNumber value={motionValue} prefix={prefix} suffix={suffix} decimals={decimals} />
      <p className="text-sm uppercase tracking-[0.25em] text-[#9CA3AF]">{label}</p>
    </motion.article>
  );
}

function AnimatedNumber({
  value,
  prefix,
  suffix,
  decimals,
}: {
  value: MotionValue<number>;
  prefix?: string;
  suffix?: string;
  decimals: number;
}) {
  const rounded = useTransform(value, (latest) => {
    const factor = 10 ** decimals;
    const adjusted = Math.round(latest * factor) / factor;
    return adjusted.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  });
  return (
    <motion.span className="inline-flex items-baseline gap-1 leading-none whitespace-nowrap">
      {prefix ? (
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
          {prefix.trim()}
        </span>
      ) : null}
      <motion.span className="text-[1.85rem] font-semibold tracking-tight text-[#FF2003] md:text-[2.4rem]">
        {rounded}
      </motion.span>
      {suffix ? (
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
          {suffix.trim()}
        </span>
      ) : null}
    </motion.span>
  );
}
