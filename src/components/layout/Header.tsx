"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "ROI Calculator", href: "/#roi-calculator" },
    { name: "Process", href: "/#process" },
  ];


  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1100] transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#27272A] bg-[#0A0A0B]/80 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981] text-white font-bold">
            N
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-[#FAFAFA]">
            NexaWorks
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/pipeline-audit"
            className={ctaButtonVariants({ variant: "primary", size: "sm" })}
          >
            Apply for Audit
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#27272A] bg-[#131316] text-[#FAFAFA] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col border-b border-[#27272A] bg-[#0A0A0B] px-6 py-8 shadow-xl md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[#FAFAFA]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 border-t border-[#27272A] pt-6">
              <Link
                href="/pipeline-audit"
                className={ctaButtonVariants({ variant: "primary", size: "lg", className: "w-full" })}
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply for Pipeline Audit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
