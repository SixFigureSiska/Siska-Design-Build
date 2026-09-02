import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { FinalCTA } from "@/components/FinalCTA";
import { LocalServicePage } from "@/components/LocalServicePage";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Bathroom Remodeling in Saratoga & the Capital Region | ${siteConfig.name}`,
  description:
    "Bathroom remodeling from a Malta, NY design + build contractor serving Saratoga, the Capital Region, and Lake George. Clear plans and transparent quotes.",
  alternates: { canonical: "/bathroom-remodeling" },
};

const faqItems = [
  {
    question: "How long does the construction portion usually take?",
    answer:
      "Once the selected materials are on site, most bathroom remodels take around one week. Larger layouts or projects involving extensive structural, plumbing, or electrical changes may take longer, and the project schedule is reviewed before work begins.",
  },
  {
    question: "Do you help with tile, fixtures, and vanity selections?",
    answer:
      "Yes. Design planning and finish coordination are part of the process so the room can be visualized, priced, and approved before construction begins.",
  },
  {
    question: "Where do you provide bathroom remodeling?",
    answer:
      "Siska Design + Build is based in Malta and serves homeowners throughout Saratoga, the Capital Region, and Lake George areas.",
  },
];

export default function BathroomRemodelingPage() {
  return (
    <>
      <PageHeader
        label="Bathroom Remodeling"
        title="Bathroom remodeling for Saratoga, the Capital Region, and Lake George."
        description="See the direction, understand the scope, and know what you are paying for before construction begins."
      />
      <LocalServicePage
        serviceName="Bathroom Remodel"
        image="/photos/upstate/service-bathroom.png"
        imageAlt="Bathroom remodeling design concept for a Saratoga-area home"
        introduction="Siska Design + Build handles bathroom renovations from layout and finish planning through the final walkthrough. Every quote starts with the real room—not a generic package or an allowance that leaves the important decisions unresolved."
        localContext="Homes across Saratoga County, the Capital Region, and the Lake George area vary widely in age, layout, and construction. We plan around those existing conditions so plumbing, ventilation, storage, lighting, and finish details work together."
        includes={[
          "Full and partial bathroom renovations",
          "Walk-in and curbless showers",
          "Tile, vanities, fixtures, and lighting",
          "Plumbing and electrical coordination",
          "Storage and layout improvements",
          "Transparent, scope-driven quotes",
        ]}
        planningTitle="The details that make a bathroom easier to live with."
        planningPoints={[
          { title: "Layout", body: "We look at clearances, door swings, fixture locations, and storage before finishes are selected." },
          { title: "Water Management", body: "Shower systems, ventilation, waterproofing, and transitions are planned as part of the build—not treated as afterthoughts." },
          { title: "Finish Coordination", body: "Tile scale, grout, fixtures, vanity, lighting, and hardware are reviewed as one complete room." },
          { title: "Construction Plan", body: "Materials are coordinated before work begins so the typical construction phase can move efficiently once everything arrives." },
        ]}
      />
      <FAQ title="Bathroom remodeling questions." items={faqItems} />
      <FAQJsonLd items={faqItems} />
      <FinalCTA />
    </>
  );
}
