import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { FinalCTA } from "@/components/FinalCTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Our Renovation Process | ${siteConfig.name}`,
  description:
    "How a Siska Design + Build renovation actually works, from your first consultation to final walkthrough — serving Saratoga, Malta, and the Capital Region.",
  alternates: { canonical: "/process" },
};

const faqItems = [
  {
    question: "How long does a typical renovation take?",
    answer:
      "Once all materials have arrived and construction begins, most remodels take around one week. Larger or more complex projects may take longer, and your quote will include a project-specific schedule before work starts.",
  },
  {
    question: "Can I still live at home during the renovation?",
    answer:
      "In most cases, yes. We section off the work area, keep the site clean at the end of each day, and coordinate with you on utility shutoffs so the rest of your home stays livable.",
  },
  {
    question: "How does payment work?",
    answer:
      "Projects are billed in scheduled milestones tied to work completed — never full payment up front. Your contract spells out every milestone and amount before work starts.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Yes — permitting is included in every quote. We pull the right permits and schedule inspections as part of the build, not as a separate hassle for you.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Our Process"
        title="From first conversation to final walkthrough."
        description="Four steps, one team, and a firm quote before any work begins — here's exactly what happens at each stage."
      />
      <ProcessSteps />
      <FAQ title="What to expect along the way." items={faqItems} />
      <FAQJsonLd items={faqItems} />
      <FinalCTA />
    </>
  );
}
