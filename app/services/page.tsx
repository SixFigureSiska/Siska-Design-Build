import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description:
    "Bathroom and kitchen remodeling services from Siska Design + Build — full gut renovations to focused refreshes.",
};

const faqItems = [
  {
    question: "Do you handle projects of any size?",
    answer:
      "We take on everything from a focused vanity-and-fixture refresh to a full gut renovation touching layout, plumbing, and electrical — scoped and quoted to match the work.",
  },
  {
    question: "Is design included, or do I need my own designer?",
    answer:
      "Design is built into every project. We're a design + build company — one team carries your project from layout and finish selection through construction.",
  },
  {
    question: "What determines the final price?",
    answer:
      "Your space's real measurements, the finishes you choose, and the scope of structural, plumbing, or electrical work involved. Your quote itemizes all of it — no flat packages.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "We can point you toward financing options during your consultation. Ask your project consultant about what's currently available.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Bathrooms, kitchens, and custom interiors—planned before they are built."
        description="Choose a service tab to see what we handle. Every project gets the same clear design + build process and transparent, scope-driven quote."
      />
      <Services />
      <FAQ title="What shapes a Siska quote." items={faqItems} />
      <FinalCTA />
    </>
  );
}
