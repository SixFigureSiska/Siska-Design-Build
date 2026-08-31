import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
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
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <LocalBusinessJsonLd />
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
