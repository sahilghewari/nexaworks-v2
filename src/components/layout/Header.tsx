"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-[1100] transition-all duration-300 bg-white ${isScrolled ? "border-b border-[#E4E4E7] py-4" : "py-6"}`}>
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <Image src="/nexaworks-logo-icon.svg" alt="NexaWorks Icon" width={32} height={32} className="rounded-lg" />
          <div className="flex flex-col">
            <span className="font-sans text-xl font-bold tracking-tight text-[#09090B] leading-none">
              CompanyBrain
            </span>
            <span className="text-[10px] font-semibold text-[#71717A] uppercase tracking-widest mt-0.5">
              by NexaWorks
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
          {navItems.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-[15px] font-semibold text-[#09090B] transition-colors hover:text-[#6366F1]"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/contact" className="text-[15px] font-medium !text-white bg-[#09090B] px-5 py-2.5 rounded-full hover:bg-[#27272A] transition-all shadow-sm hover:shadow">
            Book a demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white text-[#09090B] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col border-b border-[#E4E4E7] bg-white px-6 py-8 shadow-xl md:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-lg font-medium text-[#09090B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-[#E4E4E7] pt-6">
              <Link href="/contact" className="text-center font-medium !text-white bg-[#09090B] px-4 py-3 rounded-xl hover:bg-[#27272A] transition-colors shadow-sm">
                Book a demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
