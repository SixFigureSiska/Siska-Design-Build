import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResultsGallery } from "@/components/ResultsGallery";
import { FinalCTA } from "@/components/FinalCTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Bathroom & Kitchen Remodel Photos | Saratoga, NY | ${siteConfig.name}`,
  description:
    "Browse bathroom and kitchen renovation concepts from Siska Design + Build, including before/after comparisons — serving Saratoga, Malta, and the Capital Region.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Our Work"
        title="Bathroom and kitchen renovation inspiration."
        description="Explore design concepts tailored to the character and scale of Upstate New York homes, or drag a before/after to see the transformation."
      />
      <ResultsGallery />
      <FinalCTA />
    </>
  );
}
