"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import { COMPANY_INFO, FOOTER_LINK_GROUPS, siteConfig, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = (theme === "system" ? resolvedTheme : theme) === "dark" ? "dark" : "light";
  const themeChoice = mounted ? activeTheme : "dark";

  const currentYear = new Date().getFullYear();

  const socials = useMemo(
    () =>
      [
        SOCIAL_LINKS.github && { label: "GitHub", href: SOCIAL_LINKS.github, Icon: Github },
        SOCIAL_LINKS.linkedin && { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: Linkedin },
        SOCIAL_LINKS.twitter && { label: "Twitter", href: SOCIAL_LINKS.twitter, Icon: Twitter },
      ].filter(Boolean) as { label: string; href: string; Icon: typeof Github }[],
    []
  );

  return (
    <footer className="border-t border-[#A79F90] bg-[#CBC8BA]">
      <div className="container space-y-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full max-w-sm flex-col gap-4">
            <Link href="/" className="inline-flex items-center" aria-label="NexaWorks home">
              <Image
                src={themeChoice === "dark" ? "/nexaworks-logo-dark.svg" : "/nexaworks-logo-light.svg"}
                alt="NexaWorks logo"
                width={224}
                height={40}
                className="h-10 w-[14rem] object-contain"
                priority
              />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-[#3F3A32]">{COMPANY_INFO.tagline}</p>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#0D1015]/10 bg-[#0D1015]/5 text-[#0D1015] transition hover:bg-[#0D1015]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3542B]"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-6 text-sm text-[#3F3A32] sm:grid-cols-3 md:flex md:flex-1 md:flex-wrap md:justify-end md:gap-8">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="space-y-2 text-xs">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D1015]">
                  {group.title}
                </h3>
                <ul className="space-y-1.5 text-xs">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          className="transition hover:text-[#0D1015]"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="transition hover:text-[#0D1015]">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 space-y-2 text-xs sm:col-span-3 md:col-auto">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D1015]">Contact</h3>
              <div className="space-y-1.5 text-[#3F3A32]">
                <a
                  className="block break-words transition hover:text-[#0D1015]"
                  href={`mailto:${COMPANY_INFO.email}`}
                >
                  {COMPANY_INFO.email}
                </a>
                <a
                  className="block transition hover:text-[#0D1015]"
                  href={`tel:${COMPANY_INFO.phone}`}
                >
                  {COMPANY_INFO.phone}
                </a>
                <p className="max-w-sm break-words text-pretty leading-relaxed sm:max-w-xs">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#A79F90] pt-4 text-xs text-[#3F3A32]">
          <div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <span>© {currentYear} {siteConfig.name}</span>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <span className="rounded-full bg-[#0D1015]/5 px-2.5 py-1 font-semibold text-[#0D1015]">AI-native delivery</span>
              <span className="rounded-full bg-[#0D1015]/5 px-2.5 py-1 font-semibold text-[#0D1015]">Founder-led teams</span>
              <span className="rounded-full bg-[#0D1015]/5 px-2.5 py-1 font-semibold text-[#0D1015]">Shipping real products</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
