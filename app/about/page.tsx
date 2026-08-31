import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Photo } from "@/components/Photo";
import { FinalCTA } from "@/components/FinalCTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "The practical, transparent approach behind Siska Design + Build's bathroom, kitchen, and custom interior remodeling.",
};

const values = [
  ["01", "Craftsmanship", "Every visible detail—and the work behind it—is held to a standard we are willing to put our name on."],
  ["02", "Transparency", "The scope and number are discussed clearly. If the work changes, the price is approved before the change happens."],
  ["03", "Practical Design", "A beautiful room still has to work. Layout, storage, lighting, and daily routines shape every plan."],
  ["04", "Modern Planning", "Visual tools and clear project communication help homeowners make decisions before construction starts."],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader label="About Siska" title="New thinking for remodeling. Old-school standards for the work." description="Siska Design + Build combines modern planning and transparent pricing with the kind of workmanship that has always mattered." />
      <section className="bg-paper py-18 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
            <div>
              <p className="eyebrow">The Siska Approach</p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">Built around a simple frustration with the usual remodeling experience.</h2>
              <div className="mt-6 space-y-5 text-[15px] leading-7 text-muted">
                <p>Too many homeowners are asked to commit to vague scopes, loose allowances, and a finished room they cannot truly picture. Our company was built around a clearer way to renovate: understand the space, visualize the direction, and price the actual work before construction begins.</p>
                <p>We are the new guys on the block—lean enough to offer sharp pricing and modern enough to use better planning tools. But tile lines, trim, cleanup, communication, and the final walkthrough still get the old-school attention they deserve.</p>
                <p>Bathrooms and kitchens are our core work. We also consider custom interior projects where our design + build approach is a good fit.</p>
              </div>
            </div>
            <div className="relative"><Photo src="/photos/upstate/work-kitchen-3.png" alt="Refined kitchen remodeling concept for an Upstate New York home" ratio="aspect-[4/5]" sizes="(min-width: 1024px) 45vw, 100vw" /><div className="absolute -bottom-5 -left-3 rounded-2xl bg-navy px-5 py-4 text-white shadow-xl sm:-left-6"><p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#b7cbd8]">Our promise</p><p className="mt-1 max-w-[220px] text-sm font-semibold">Clarity before construction. Care through the finish.</p></div></div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-18 lg:py-24">
        <Container>
          <div className="max-w-xl"><p className="eyebrow">What We Stand For</p><h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">The standard behind every project.</h2></div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2">
            {values.map(([number, title, body]) => <div key={title} className="bg-white p-7 sm:p-9"><span className="font-display text-xs font-bold tracking-[0.14em] text-accent">{number}</span><h3 className="mt-3 font-display text-xl font-semibold text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{body}</p></div>)}
          </div>
          <p className="mt-8 text-sm text-muted">Licensed &amp; insured. {siteConfig.contact.basedIn}. {siteConfig.contact.serviceArea}.</p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
