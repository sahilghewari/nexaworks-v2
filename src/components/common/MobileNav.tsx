"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { navItems } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onToggleTheme: () => void;
  theme: "light" | "dark";
  brand?: string;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.92 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

export function MobileNav({ isOpen, onOpenChange, onToggleTheme, theme, brand = "NEXAWORKS" }: MobileNavProps) {
  const pathname = usePathname();
  const { openContactModal } = useModal();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleEsc);
      triggerRef.current?.focus();
    };
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => onOpenChange(!isOpen)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#0D1015]/10 bg-[#0D1015]/5 text-[#0D1015] transition hover:bg-[#0D1015]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3542B]"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-[10000]">
            <motion.div
              className="fixed inset-0 z-[10001] bg-[#0D1015]"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.16, ease: "easeOut" }}
              onClick={() => onOpenChange(false)}
            />

            <motion.aside
              className="fixed inset-0 z-[10002] flex flex-col bg-gradient-to-b from-[#0D1015] via-[#10131a] to-[#121620] px-6 py-7 text-[#F6F1E8] shadow-[0_18px_64px_rgba(0,0,0,0.6)]"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl tracking-[0.24em]">{brand}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    onClick={onToggleTheme}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3542B]"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
                  </button>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => onOpenChange(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3542B]"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <nav className="mt-8 flex-1 overflow-y-auto" aria-label="Mobile navigation">
                <ul className="space-y-3 text-lg font-semibold tracking-[0.08em]">
                  {navItems.map((item, idx) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <li key={item.href}>
                        <Link
                          ref={idx === 0 ? firstLinkRef : undefined}
                          href={item.href}
                          onClick={() => onOpenChange(false)}
                          className={`group relative block rounded-lg px-3 py-3 transition-colors ${
                            isActive
                              ? "bg-white/10 text-white shadow-inner shadow-black/30"
                              : "text-white/80 hover:bg-white/6 hover:text-white"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <span className="pointer-events-none absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 bg-[#A3542B] opacity-0 transition group-hover:opacity-100 group-active:opacity-100" />
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    onOpenChange(false);
                    openContactModal();
                  }}
                  className="mt-auto w-full rounded-full bg-[#A3542B] px-5 py-3 text-center text-base font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-[#8d4726] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99]"
                  style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
                >
                  Schedule Demo
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
