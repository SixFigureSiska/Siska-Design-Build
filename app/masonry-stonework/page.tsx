import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { FinalCTA } from "@/components/FinalCTA";
import { LocalServicePage } from "@/components/LocalServicePage";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Masonry & Stonework in Saratoga & the Capital Region | ${siteConfig.name}`,
  description: "Masonry and stonework from Siska Design + Build, including natural stone, veneer, steps, walkways, patios, retaining walls, and repair work across Saratoga and the Capital Region.",
  alternates: { canonical: "/masonry-stonework" },
};

const faqItems = [
  {
    question: "What masonry and stonework projects do you consider?",
    answer: "We evaluate natural and manufactured stone veneer, steps, walkways, patios, retaining and garden walls, masonry repairs, and stone details connected to a larger renovation. Every project is reviewed for site conditions, access, drainage, and scope before pricing.",
  },
  {
    question: "Do you take on masonry work for builders and general contractors?",
    answer: "Yes. Builders and general contractors can send plans, site photos, location, and schedule through our For Builders page. We consider both individual scopes and ongoing trade-partner relationships.",
  },
  {
    question: "Where do you provide masonry services?",
    answer: "Siska Design + Build is based in Malta and evaluates masonry and stonework throughout Saratoga, the Capital Region, and Lake George areas.",
  },
];

export default function MasonryStoneworkPage() {
  return (
    <>
      <PageHeader
        label="Masonry & Stonework"
        title="Stonework built to belong with the home—and hold up to Upstate New York."
        description="Natural stone, veneer, steps, walkways, patios, walls, and repairs planned around the site instead of treated as an afterthought."
      />
      <LocalServicePage
        serviceName="Masonry & Stonework"
        image="/photos/upstate/service-masonry.png"
        imageAlt="Natural stone retaining wall, walkway, and masonry steps service concept"
        introduction="Siska Design + Build provides masonry and stonework for homeowners, builders, and general contractors. We evaluate the structure, drainage, transitions, material, and surrounding architecture together so the finished work looks intentional and performs as it should."
        localContext="Freeze-thaw cycles, water movement, and changing grades matter in the Capital Region. A lasting masonry project begins below the visible surface—with the right base, drainage approach, and installation method for the site."
        includes={[
          "Natural and manufactured stone veneer",
          "Stone and masonry steps",
          "Walkways, patios, and outdoor living surfaces",
          "Retaining walls and garden walls",
          "Masonry repairs and selective rebuilding",
          "Builder and general-contractor subcontracting",
        ]}
        planningTitle="The details that separate lasting stonework from a surface treatment."
        planningPoints={[
          { title: "Site & Base", body: "We assess grade, access, substrate, and base preparation before defining the installation approach." },
          { title: "Water Management", body: "Drainage, pitch, flashing, and freeze-thaw exposure are considered as part of the scope." },
          { title: "Material & Pattern", body: "Stone type, color range, joint style, coursing, and transitions are coordinated with the home." },
          { title: "Clear Scope", body: "Preparation, installation, cleanup, and known repair work are identified before the project begins." },
        ]}
      />
      <FAQ title="Masonry and stonework questions." items={faqItems} />
      <FAQJsonLd items={faqItems} />
      <FinalCTA />
    </>
  );
}
