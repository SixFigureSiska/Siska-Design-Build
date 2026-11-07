import type { Metadata } from "next";
import { BuilderInquiryForm } from "@/components/BuilderInquiryForm";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Subcontracting Partner for Builders in Upstate NY | ${siteConfig.name}`,
  description: "Builders and general contractors can contact Siska Design + Build about bathroom, kitchen, masonry, stonework, interior renovation, finish-work, and ongoing subcontracting needs in Upstate New York.",
  alternates: { canonical: "/builders" },
};

const goodFit = [
  "Bathroom, kitchen, and interior scopes",
  "Masonry, stonework, and finish work",
  "Defined scopes with plans, photos, or a site walk",
  "One-off projects or ongoing trade partnerships",
];

const helpfulDetails = [
  "Jobsite location and current project stage",
  "The scope you want covered",
  "Target start date and schedule constraints",
  "Plans, specifications, photos, or allowance information",
];

export default function BuildersPage() {
  return (
    <>
      <section className="navy-grid relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(87,132,161,0.26),transparent_35%)]" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-32">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#b7cbd8]">For Builders &amp; General Contractors</p>
              <h1 className="mt-5 max-w-2xl font-display text-[42px] font-medium leading-[1.04] tracking-[-0.025em] sm:text-[56px]">A straightforward subcontracting partner for renovation work.</h1>
              <p className="mt-6 max-w-xl text-[16px] leading-7 text-white/68">If you need capable help covering a defined interior scope, send us the project. We’ll review the details, be direct about availability, and coordinate around the schedule you’re managing.</p>
              <a href="#builder-inquiry" className="mt-7 inline-flex rounded-xl bg-cta px-6 py-3.5 text-sm font-bold text-navy-deep shadow-[0_10px_25px_rgba(0,0,0,0.18)] lg:hidden">Send Project Details</a>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {goodFit.map((item) => <div key={item} className="flex gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white/78"><span className="mt-1 text-[#b7cbd8]">✓</span>{item}</div>)}
              </div>
              <div className="mt-8 border-t border-white/14 pt-6 text-sm text-white/62">
                Prefer to talk first? <a href={siteConfig.contact.phoneHref} className="font-bold text-white underline decoration-white/35 underline-offset-4">Call Andrew at {siteConfig.contact.phone}</a>
              </div>
            </div>

            <div id="builder-inquiry" className="scroll-mt-28 rounded-[28px] border border-white/12 bg-white p-6 text-ink shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:p-9 lg:p-11">
              <p className="eyebrow">Send a project</p>
              <h2 className="mt-3 font-display text-3xl font-medium">Tell us what you need covered.</h2>
              <p className="mt-3 text-sm leading-6 text-muted">You don’t need a finished bid package. A clear description, location, and approximate schedule are enough to start.</p>
              <div className="mt-8"><BuilderInquiryForm /></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 lg:py-22">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div><p className="eyebrow">A faster first conversation</p><h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">What helps us price and schedule responsibly.</h2><p className="mt-5 text-[15px] leading-7 text-muted">Share what is available today. If the scope needs a site walk or clarification, we’ll identify that before putting a number on the work.</p></div>
            <ol className="grid gap-3">{helpfulDetails.map((item, index) => <li key={item} className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">{index + 1}</span><span className="text-sm font-semibold text-ink">{item}</span></li>)}</ol>
          </div>
        </Container>
      </section>
    </>
  );
}
