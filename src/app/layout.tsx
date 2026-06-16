import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/modals/ContactModal";
import { ModalProvider } from "@/context/ModalContext";
import { siteConfig, COMPANY_INFO } from "@/lib/constants";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const inkTrap = Syne({
  variable: "--font-ink-trap",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const VERCEL_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NexaWorks | The Company Brain for Modern Teams",
    template: "%s | NexaWorks",
  },
  description:
    "NexaWorks turns scattered company knowledge across Slack, Notion, SOPs, tickets, and internal tools into one trusted operational layer. Start with support operations.",
  keywords: ["Company Brain", "Operational Memory", "AI Support", "Support Operations", "Knowledge Management", "Autonomous Agents"],
  authors: [{ name: "NexaWorks" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "https://nexaworks.tech",
    languages: {
      "en-US": "https://nexaworks.tech",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "NexaWorks",
    title: "NexaWorks | The Company Brain for Modern Teams",
    description:
      "NexaWorks turns scattered company knowledge across Slack, Notion, SOPs, tickets, and internal tools into one trusted operational layer. Start with support operations.",
    images: [
      {
        url: `${siteConfig.url}/nexaworks-logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "NexaWorks Company Brain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaWorks | The Company Brain for Modern Teams",
    description: "NexaWorks turns scattered company knowledge across Slack, Notion, SOPs, tickets, and internal tools into one trusted operational layer. Start with support operations.",
    images: [`${siteConfig.url}/nexaworks-logo-dark.svg`],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${inkTrap.variable} antialiased`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          {GA_MEASUREMENT_ID ? (
            <>
              <Script
                id="ga-loader"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga-config" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
              </Script>
            </>
          ) : null}
          {VERCEL_ANALYTICS_TOKEN ? (
            <Script
              id="vercel-analytics"
              src="https://vitals.vercel-insights.com/v1/script.js"
              data-token={VERCEL_ANALYTICS_TOKEN}
              strategy="afterInteractive"
            />
          ) : null}
          <Script
            id="organization-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": siteConfig.name,
                "url": siteConfig.url,
                "logo": `${siteConfig.url}/nexaworks-logo-icon.svg`,
                "description": siteConfig.description,
                "foundingDate": "2024",
                "sameAs": [
                  siteConfig.links.github,
                  siteConfig.links.linkedin,
                  siteConfig.links.twitter,
                ].filter(Boolean),
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": COMPANY_INFO.phone,
                  "contactType": "customer service",
                  "availableLanguage": "English"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra"
                }
              }),
            }}
          />
          <ModalProvider>
            <Header />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ContactModal />
            <WhatsAppButton />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

