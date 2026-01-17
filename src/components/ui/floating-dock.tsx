"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface FloatingDockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockProps {
  items: FloatingDockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}

export const FloatingDock = ({ items, desktopClassName, mobileClassName }: FloatingDockProps) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }: { items: FloatingDockItem[]; className?: string }) => {
  const marqueeItems = [...items, ...items];

  return (
    <div className={cn("relative block w-full md:hidden", className)}>
      <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-full border border-black/10 bg-white/92 px-2 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.14)] ring-1 ring-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B0F1A]/95 dark:shadow-[0_10px_28px_rgba(0,0,0,0.35)] dark:ring-white/10">
        <motion.div
          className="flex min-w-max items-center gap-1"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 16, ease: "linear", repeat: Infinity }}
        >
          {marqueeItems.map((item, idx) => (
            <motion.a
              key={`${item.title}-${idx}`}
              href={item.href}
              whileTap={{ scale: 0.97 }}
              className="flex min-w-[80px] flex-col items-center gap-0.5 rounded-xl border border-black/10 bg-neutral-900/4 px-2 py-1.5 text-neutral-900 shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition hover:border-black/20 hover:bg-neutral-900/8 dark:border-white/5 dark:bg-white/8 dark:text-white dark:shadow-[0_6px_18px_rgba(0,0,0,0.25)] dark:hover:border-white/15 dark:hover:bg-white/12"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900/8 text-neutral-900 dark:bg-white/10 dark:text-white">
                <span className="h-4 w-4">{item.icon}</span>
              </span>
              <span className="text-[11px] font-semibold leading-tight tracking-wide">{item.title}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }: { items: FloatingDockItem[]; className?: string }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }: FloatingDockItem & { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
