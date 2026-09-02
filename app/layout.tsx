import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { MetaPixel } from "@/components/MetaPixel";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { ContactModal } from "@/components/ContactModal";
import { siteConfig } from "@/lib/siteConfig";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Bathroom & Kitchen Remodeling`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "bathroom remodeling Saratoga",
    "kitchen remodeling Saratoga",
    "remodeling contractor Malta NY",
    "Capital Region remodeling contractor",
    "Lake George bathroom remodeling",
    "Saratoga bathroom renovators",
    "kitchen remodeler in Saratoga",
    "general contractor Malta NY",
    "Siska Design + Build",
    "Siska Design and Build",
    "Siska Construction",
    "Siska Builders",
  ],
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  openGraph: {
    title: `${siteConfig.name} | Bathroom & Kitchen Remodeling`,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: "en_US",
    images: [
      {
        url: "/photos/upstate/hero-bathroom-v2.png",
        width: 1200,
        height: 630,
        alt: "Bathroom remodel by Siska Design + Build in Malta, NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Bathroom & Kitchen Remodeling`,
    description: siteConfig.description,
    images: ["/photos/upstate/hero-bathroom-v2.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <LocalBusinessJsonLd />
        <GoogleAnalytics />
        <MetaPixel />
        <ContactModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
