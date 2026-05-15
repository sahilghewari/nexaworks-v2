import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINK_GROUPS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#111111] py-16 sm:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/nexaworks-logo-icon.svg" alt="NexaWorks Icon" width={32} height={32} className="rounded-lg" />
              <span className="font-sans text-xl font-bold tracking-tight text-white">
                CompanyBrain
              </span>
            </Link>
            <p className="mt-6 text-sm text-[#A1A1AA] leading-relaxed max-w-xs">
              Automate your support, resolve issues instantly, and turn scattered knowledge into deterministic resolutions.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-[#FFFFFF] mb-6 text-sm">{group.title}</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  {group.links.map((link) => (
                    <li key={link.label} className="list-none p-0 m-0">
                      <Link href={link.href} className="text-sm !text-[#A1A1AA] hover:!text-[#FFFFFF] transition-colors font-medium block">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#27272A] flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-[#71717A]">
            © {new Date().getFullYear()} NexaWorks. All rights reserved.
          </p>
          <p className="text-sm text-[#71717A] mt-4 md:mt-0">
            Built by NexaWorks
          </p>
        </div>
      </div>
    </footer>
  );
}
