"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import { Button } from "@/ui/button";
import { MobileMenu } from "@/common/MobileMenu";

const headerMotion = {
  initial: { y: -16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  return (
    <AnimatePresence>
      <motion.header
        {...headerMotion}
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
          isScrolled ? "border-[#1F2937] bg-[#0D1015]/95" : "border-transparent bg-[#0D1015]/80"
        } backdrop-blur supports-[backdrop-filter]:bg-[#0D1015]/60`}
      >
        <nav
          className="container flex h-20 items-center justify-between"
          aria-label="Primary navigation"
        >
          <Link href="/" className="flex items-center space-x-2" aria-label="NexaWorks home">
            <span className="font-display text-2xl font-semibold uppercase tracking-widest text-gradient">
              NexaWorks
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={`transition-colors duration-200 ${
                        isActive ? "text-[#CBC8BA]" : "text-[#CBC8BA]/70 hover:text-[#CBC8BA]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.title}
                      {isActive && (
                        <motion.span
                          layoutId="active-nav-indicator"
                          className="absolute left-0 top-full mt-1 h-0.5 w-full rounded-full bg-[#FF2003]"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Button asChild size="sm" className="ml-4">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[#CBC8BA] transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2003] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </motion.header>
    </AnimatePresence>
  );
}
