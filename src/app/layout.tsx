import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { ContactModal } from "@/components/modals/ContactModal";
import { ModalProvider } from "@/context/ModalContext";
import { siteConfig } from "@/lib/constants";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
  title: "NexaWorks · Strategic Product Partners",
  description:
    "Full-stack experts designing and shipping resilient digital products for fast-moving teams.",
  keywords: ["software development", "product strategy", "design systems", "consulting", "NexaWorks"],
  authors: [{ name: "NexaWorks" }],
  icons: {
    icon: "/nexaworks-logo-icon.svg",
    shortcut: "/nexaworks-logo-icon.svg",
    apple: "/nexaworks-logo-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "NexaWorks · Strategic Product Partners",
    description:
      "Full-stack experts designing and shipping resilient digital products for fast-moving teams.",
    images: [
      {
        url: "https://nexaworks.com/og.png",
        width: 1200,
        height: 630,
        alt: "NexaWorks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaWorks · Strategic Product Partners",
    description:
      "Full-stack experts designing and shipping resilient digital products for fast-moving teams.",
    images: ["https://nexaworks.com/og.png"],
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
          <ModalProvider>
            <Header />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ContactModal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

