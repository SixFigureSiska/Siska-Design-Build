import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Request a free, no-obligation consultation with Siska Design + Build for your bathroom or kitchen renovation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get In Touch"
        title="Let's talk about your renovation."
        description="Tell us about your project and we'll follow up to schedule your free, no-obligation in-home consultation."
      />
      <ContactSection />
    </>
  );
}
