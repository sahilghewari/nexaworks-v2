"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { navItems } from "@/lib/constants";
import { Button } from "@/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { openContactModal } = useModal();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="mobile-menu" className="md:hidden" aria-modal="true" role="dialog">
            <motion.div
              className="fixed inset-0 z-[9998] bg-[#0D1015]"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
              onClick={onClose}
              style={{ backgroundColor: "#0D1015" }}
          />

            <motion.aside
              className="fixed inset-0 z-[9999] flex flex-col bg-[#0D1015] px-6 py-8 text-[#F6F1E8] shadow-[0_18px_64px_rgba(0,0,0,0.7)]"
              style={{ backgroundColor: "#0D1015" }}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl tracking-widest text-[#F6F1E8]">NexaWorks</span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-10 flex-1 overflow-y-auto" aria-label="Mobile navigation">
              <ul className="space-y-3 text-lg font-semibold">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block rounded-lg px-3 py-3 transition-colors duration-200 ${
                          isActive
                            ? "bg-white/10 text-white shadow-inner shadow-black/30"
                            : "text-white/80 hover:bg-white/6 hover:text-white"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-8 space-y-3">
              <Button
                className="w-full bg-[#A3542B] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-[#8d4726]"
                onClick={() => {
                  openContactModal();
                  onClose();
                }}
              >
                Schedule Demo
              </Button>
              <p className="text-xs text-white/70">
                Ready to build something remarkable? Let us craft a custom strategy for your team.
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
