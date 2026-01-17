"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import {
  IconBriefcase,
  IconHome,
  IconListDetails,
  IconNews,
  IconRoute,
  IconUser,
} from "@tabler/icons-react";
import { useModal } from "@/context/ModalContext";
import { navItems } from "@/lib/constants";
import { Button } from "@/ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";

const headerMotion = {
  initial: { y: -16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { openContactModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved === "dark" || (!saved && prefersDark) ? "dark" : "light";
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const headerBackground = isScrolled
    ? "border-[#A79F90] bg-[#CBC8BA]/95 shadow-sm"
    : "border-transparent bg-[#CBC8BA]/85";

  const dockItems = navItems.map((item) => {
    const icon = (() => {
      switch (item.href) {
        case "/":
          return <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
        case "/services":
          return <IconListDetails className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
        case "/projects":
          return <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
        case "/process":
          return <IconRoute className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
        case "/about":
          return <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
        case "/blog":
          return <IconNews className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
        default:
          return <IconListDetails className="h-full w-full text-neutral-500 dark:text-neutral-300" />;
      }
    })();
    return { title: item.title, href: item.href, icon };
  });

  return (
    <>
      <motion.header
        {...headerMotion}
        className={`sticky top-0 z-[10000] w-full border-b backdrop-blur transition-colors duration-200 supports-[backdrop-filter]:bg-[#CBC8BA]/70 ${headerBackground}`}
      >
        <nav
          className="container flex h-20 items-center justify-between gap-4"
          aria-label="Primary navigation"
        >
          <Link href="/" className="flex items-center space-x-2" aria-label="NexaWorks home">
            <span className="font-display text-2xl font-semibold uppercase tracking-widest text-gradient">
              NexaWorks
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#0D1015]/10 bg-[#0D1015]/5 text-[#0D1015] transition hover:bg-[#0D1015]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3542B]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
            </button>

            <Button asChild size="sm">
              <button type="button" onClick={() => openContactModal()}>
                Schedule Demo
              </button>
            </Button>
          </div>
        </nav>
      </motion.header>

      <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[9999] flex justify-center px-4 md:bottom-6">
        <div className="pointer-events-auto">
          <FloatingDock
            items={dockItems}
            desktopClassName="bg-[#0D1015]/90 text-white border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-lg"
            mobileClassName="translate-y-0"
          />
        </div>
      </div>
    </>
  );
}
