import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { FinalCTA } from "@/components/FinalCTA";
import { LocalServicePage } from "@/components/LocalServicePage";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Kitchen Remodeling in Saratoga & the Capital Region | ${siteConfig.name}`,
  description:
    "Kitchen remodeling from a Malta, NY design + build contractor serving Saratoga, the Capital Region, and Lake George. Thoughtful layouts and clear quotes.",
  alternates: { canonical: "/kitchen-remodeling" },
};

const faqItems = [
  {
    question: "What is included in kitchen planning?",
    answer:
      "We coordinate the layout, cabinetry, counters, backsplash, lighting, fixtures, appliance locations, and any related plumbing, electrical, or structural work included in the scope.",
  },
  {
    question: "Can you improve the layout, or do you only replace finishes?",
    answer:
      "Both are possible. We can plan a focused update within the existing footprint or evaluate a larger reconfiguration when circulation, storage, and work zones need to change.",
  },
  {
    question: "Where do you provide kitchen remodeling?",
    answer:
      "Siska Design + Build is based in Malta and serves homeowners throughout Saratoga, the Capital Region, and Lake George areas.",
  },
];

export default function KitchenRemodelingPage() {
  return (
    <>
      <PageHeader
        label="Kitchen Remodeling"
        title="Kitchen remodeling for Saratoga, the Capital Region, and Lake George."
        description="A coordinated design + build process for a kitchen that works better, looks intentional, and is clearly priced."
      />
      <LocalServicePage
        serviceName="Kitchen Remodel"
        image="/photos/upstate/service-kitchen.jpg"
        imageAlt="Kitchen with a marble island and granite counters"
        introduction="A kitchen remodel involves more than choosing cabinets and counters. Siska Design + Build plans the room as one coordinated system—from circulation and storage to lighting, appliances, surfaces, and the construction work behind them."
        localContext="Whether the home is a Saratoga colonial, a Capital Region ranch, or a Lake George retreat, the plan starts with the existing structure and the way your household actually cooks, gathers, and moves through the room."
        includes={[
          "Kitchen layout and cabinetry planning",
          "Counters, backsplash, and finish selection",
          "Lighting and electrical coordination",
          "Appliance and fixture planning",
          "Structural and plumbing updates",
          "Transparent, scope-driven quotes",
        ]}
        planningTitle="A kitchen plan built around real daily use."
        planningPoints={[
          { title: "Workflow", body: "Prep, cooking, cleanup, storage, and gathering zones are considered together before the layout is approved." },
          { title: "Cabinetry", body: "Door style matters, but so do usable drawers, pantry storage, appliance clearances, and the details at walls and ceilings." },
          { title: "Lighting", body: "Ambient, task, and decorative lighting are coordinated with cabinetry and electrical work instead of added at the end." },
          { title: "Complete Scope", body: "The quote reflects the selected finishes and the actual plumbing, electrical, structural, and installation work required." },
        ]}
      />
      <FAQ title="Kitchen remodeling questions." items={faqItems} />
      <FAQJsonLd items={faqItems} />
      <FinalCTA />
    </>
  );
}
