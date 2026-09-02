import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { FinalCTA } from "@/components/FinalCTA";
import { LocalServicePage } from "@/components/LocalServicePage";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `General Contractor in Saratoga & the Capital Region | ${siteConfig.name}`,
  description:
    "General contracting from a Malta, NY design + build team — basements, mudrooms, laundry rooms, built-ins, and multi-room renovations, serving Saratoga, the Capital Region, and Lake George.",
  alternates: { canonical: "/general-contracting" },
};

const faqItems = [
  {
    question: "What kind of general contracting projects do you take on?",
    answer:
      "Basement and bonus-room renovations, mudrooms, laundry rooms, custom built-ins, and multi-room interior updates — any project evaluated case-by-case that goes beyond a standard bathroom or kitchen remodel.",
  },
  {
    question: "Is design included with general contracting work?",
    answer:
      "Yes. Every project, custom or not, gets the same design + build process — layout and finish planning are worked out and priced before construction begins, under one team.",
  },
  {
    question: "Where do you provide general contracting services?",
    answer:
      "Siska Design + Build is based in Malta and serves homeowners throughout Saratoga, the Capital Region, and Lake George areas.",
  },
];

export default function GeneralContractingPage() {
  return (
    <>
      <PageHeader
        label="General Contracting"
        title="General contracting for Saratoga, the Capital Region, and Lake George."
        description="Basements, mudrooms, laundry rooms, built-ins, and multi-room projects — planned and priced before construction begins."
      />
      <LocalServicePage
        serviceName="General Contracting"
        image="/photos/upstate/service-custom.jpg"
        imageAlt="Custom built-in storage project by a Malta, NY general contractor"
        introduction="Siska Design + Build takes on interior renovation and general contracting work that doesn't fit neatly into a bathroom or kitchen remodel — basement finishes, mudrooms, laundry rooms, built-ins, and multi-room projects, all handled by one design + build team."
        localContext="Homes across Saratoga County, the Capital Region, and the Lake George area vary widely in age, layout, and construction. We plan around those existing conditions so structural, plumbing, electrical, and finish work come together as one coordinated project — not a patchwork of separate trades."
        includes={[
          "Basement and bonus-room renovations",
          "Mudrooms and laundry rooms",
          "Built-ins and custom storage",
          "Multi-room interior updates",
          "Structural, plumbing, and electrical coordination",
          "Transparent, scope-driven quotes",
        ]}
        planningTitle="The details that make a general contracting project go smoothly."
        planningPoints={[
          { title: "Scope Definition", body: "We define exactly what's changing — walls, systems, finishes — before pricing anything, so there's no ambiguity once work starts." },
          { title: "Structural Coordination", body: "Framing, plumbing, and electrical are planned together so trades aren't working around each other's surprises mid-project." },
          { title: "Finish Selection", body: "Materials and finishes are chosen and confirmed up front, coordinated with the rest of the scope." },
          { title: "Construction Plan", body: "Materials are coordinated before work begins so the build can move efficiently once everything arrives." },
        ]}
      />
      <FAQ title="General contracting questions." items={faqItems} />
      <FAQJsonLd items={faqItems} />
      <FinalCTA />
    </>
  );
}
