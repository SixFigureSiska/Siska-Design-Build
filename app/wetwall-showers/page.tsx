import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { LimitedOffer } from "@/components/LimitedOffer";
import { PhoneLink } from "@/components/PhoneLink";
import { Photo } from "@/components/Photo";
import { QuoteCTAButton } from "@/components/QuoteCTAButton";
import { siteConfig } from "@/lib/siteConfig";

// Landing page for the Wetwall Meta/Google ad campaign. Not in the main nav —
// ads link straight here. Leads from its buttons are tagged with the campaign
// label below in the lead email and CRM.

export const metadata: Metadata = {
  title: `Wetwall Shower Installation in Saratoga & the Capital Region | ${siteConfig.name}`,
  description:
    "Grout-free Wilsonart Wetwall walk-in showers installed in 2–4 days. Waterproof, mold-resistant panels that look like stone. Starting at $6,000. Local Malta, NY design + build team.",
  alternates: { canonical: "/wetwall-showers" },
};

const STARTING_PRICE = "$6,000";
const INSTALL_DAYS = "2–4 days";

// Free-trim promotion. Hidden automatically once this moment passes
// (midnight Eastern at the start of Nov 14, i.e. "booked before Nov 14").
const OFFER_ENDS_AT = "2026-11-14T00:00:00-05:00";

const campaign = {
  label: "Wetwall landing page — free shower trim before Nov 14",
  projectType: "bathroom",
};

const features = [
  { title: "Waterproof core", body: "A solid composite core with high-performance layers on both sides. Water has nowhere to soak in." },
  { title: "No grout, ever", body: "Panels lock together with tongue-and-groove joints. No grout lines to stain, seal, or scrub." },
  { title: "Mold-resistant", body: "Built-in antimicrobial protection inhibits stain- and odor-causing mold and mildew." },
  { title: "Looks like stone", body: "Marble, stone, and tile-look designs with a scratch- and scuff-resistant surface." },
  { title: "Fast install", body: `No tile to set and no grout to cure. Most showers are done in ${INSTALL_DAYS}.` },
  { title: "Tub-to-shower ready", body: "Turn a tub you never use into a safe, low-step walk-in shower." },
];

const comparison = [
  { row: "Grout lines", wetwall: "None", tile: "Dozens to hundreds" },
  { row: "Waterproofing", wetwall: "Waterproof panel core", tile: "Relies on a membrane behind the tile; grout is porous" },
  { row: "Mold & mildew", wetwall: "Antimicrobial surface, nothing to soak in", tile: "Grout stains and can harbor mold" },
  { row: "Cleaning", wetwall: "Wipe down", tile: "Scrub grout, reseal periodically" },
  { row: "Install time", wetwall: INSTALL_DAYS, tile: "1–2+ weeks" },
  { row: "Design options", wetwall: "Curated stone & tile-look designs", tile: "Nearly unlimited: patterns, mosaics, niches", tileWins: true },
];

const steps = [
  { title: "Tell us about it", body: "Tap “Get My Shower Price” or call. We'll reach out quickly during business hours." },
  { title: "Free design visit", body: "We measure, show you Wetwall designs in person, and preview your new shower on the spot." },
  { title: "Written quote", body: "A clear, itemized price. No 3-hour pitch and no “today-only” pricing." },
  { title: "Install", body: `Our crew handles everything from demo to final wipe-down in ${INSTALL_DAYS}.` },
];

const faqItems = [
  {
    question: "What is Wetwall?",
    answer:
      "Wetwall is a waterproof wall panel system made by Wilsonart for showers and tub surrounds. Each panel has a waterproof composite core, a decorative stone- or tile-look surface, and antimicrobial protection. Panels lock together with tongue-and-groove joints, so there's no grout.",
  },
  {
    question: "How long does a Wetwall shower installation take?",
    answer: `Most of our Wetwall shower projects take ${INSTALL_DAYS} from demolition to finished shower, compared with one to two weeks or more for a traditional tile shower.`,
  },
  {
    question: "How much does a Wetwall shower cost?",
    answer: `Walk-in showers with Wetwall start at ${STARTING_PRICE} installed. Your final price depends on shower size, plumbing changes, glass, and fixtures. You'll get a written, itemized quote after a free in-home visit.`,
  },
  {
    question: "Is Wetwall better than tile?",
    answer:
      "For most showers, it's easier to live with: no grout to stain or grow mold, faster installation, and wipe-clean maintenance. Tile gives you more custom design options for showpiece bathrooms. We install both and will help you choose.",
  },
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. We remove the tub, rework the drain, install a low-threshold shower base, and finish the walls with Wetwall. Grab bars and a handheld shower are easy to add.",
  },
  {
    question: "Can Wetwall go over my existing tile?",
    answer:
      "Sometimes, but we usually recommend removing old tile so we can check for hidden water damage and give you a sound, flat wall. We'll tell you what we find during your design visit.",
  },
];

export default function WetwallShowersPage() {
  return (
    <>
      {/* Hero */}
      <section className="navy-grid relative overflow-hidden bg-navy-deep py-14 text-white lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_30%,rgba(87,132,161,0.23),transparent_34%)]" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#a9c1d1]">
                Wetwall Installers · Saratoga &amp; the Capital Region
              </p>
              <h1 className="mt-4 font-display text-[38px] font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-[52px]">
                A grout-free walk-in shower, installed in {INSTALL_DAYS}.
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-7 text-white/70">
                We replace your old tub or tiled shower with waterproof Wilsonart® Wetwall™ panels that look like stone and
                wipe clean. You&apos;ll never scrub grout again.
              </p>
              <ul className="mt-7 grid gap-3">
                {[
                  "100% waterproof, zero grout lines",
                  "Antimicrobial protection resists mold & mildew",
                  "Local Malta, NY team, not a national franchise",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-6 text-white/85">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cta" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <QuoteCTAButton variant="primary" campaign={campaign}>
                  Get My Shower Price
                </QuoteCTAButton>
                <PhoneLink className="text-[15px] font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline">
                  or call {siteConfig.contact.phone}
                </PhoneLink>
              </div>
              <p className="mt-5 text-sm text-white/55">Walk-in showers starting at {STARTING_PRICE}, installed.</p>
              <LimitedOffer endsAt={OFFER_ENDS_AT}>
                <p className="mt-5 inline-flex rounded-full border border-cta/60 bg-cta/10 px-4 py-2 text-[13px] font-semibold text-white">
                  Free shower trim on projects booked before November 14
                </p>
              </LimitedOffer>
            </div>
            <Photo
              src="/photos/wetwall/wetwall-walk-in-shower.jpg"
              alt="Grout-free marble-look Wetwall walk-in shower with sliding glass door and grab bars, installed by Siska Design + Build"
              ratio="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </Container>
      </section>

      {/* What is Wetwall */}
      <section className="bg-paper py-18 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div>
              <p className="eyebrow">What Is Wetwall?</p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Built to replace tile, without tile&apos;s biggest problem: grout.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-muted">
                Wetwall is a shower wall panel system made by Wilsonart, one of the best-known names in surfaces. We use it
                because it gives you the look of stone with none of the upkeep.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2">
              {features.map((feature, index) => (
                <article key={feature.title} className="bg-white p-7 sm:p-8">
                  <span className="font-display text-xs font-bold tracking-[0.14em] text-accent">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="bg-cream py-18 lg:py-24">
        <Container>
          <p className="eyebrow text-center">Wetwall vs. Tile</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-medium text-ink sm:text-4xl">
            An honest comparison.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-7 text-muted">
            We install both. Here&apos;s how they compare for a typical shower.
          </p>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[24px] border border-line bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-[15px]">
              <thead>
                <tr className="bg-navy-deep text-white">
                  <th className="w-[28%] px-4 py-4 sm:px-6" />
                  <th className="px-4 py-4 font-display font-semibold sm:px-6">Wetwall panels</th>
                  <th className="px-4 py-4 font-display font-semibold text-white/75 sm:px-6">Tile</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item) => (
                  <tr key={item.row} className="border-t border-line align-top">
                    <th className="px-4 py-4 font-semibold text-ink sm:px-6">{item.row}</th>
                    <td className={`px-4 py-4 sm:px-6 ${item.tileWins ? "text-muted" : "bg-navy-soft/40 font-medium text-ink"}`}>
                      {item.wetwall}
                    </td>
                    <td className={`px-4 py-4 sm:px-6 ${item.tileWins ? "bg-navy-soft/40 font-medium text-ink" : "text-muted"}`}>
                      {item.tile}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-7 text-muted">
            Want a one-of-a-kind custom tile showpiece? We build those too, and we&apos;ll tell you honestly which fits your
            bathroom and budget.
          </p>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-white py-18 lg:py-24">
        <Container>
          <p className="eyebrow text-center">How It Works</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-medium text-ink sm:text-4xl">
            From first call to finished shower.
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-[20px] border border-line bg-paper p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep font-display text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FAQ title="Wetwall shower questions." items={faqItems} />
      <FAQJsonLd items={faqItems} />

      {/* Closing CTA */}
      <section className="bg-paper pb-18 lg:pb-24">
        <Container>
          <div className="navy-grid relative overflow-hidden rounded-[28px] bg-navy px-6 py-14 text-center text-white shadow-[0_24px_70px_rgba(7,27,45,0.2)] sm:px-12 lg:py-18">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(130,168,193,0.22),transparent_32%)]" />
            <div className="relative">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#b5cad7]">
                Walk-in showers from {STARTING_PRICE}
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-medium leading-tight sm:text-5xl">
                Get your walk-in shower price.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/65">
                Takes about a minute. No pressure, no obligation.
              </p>
              <LimitedOffer endsAt={OFFER_ENDS_AT}>
                <p className="mx-auto mt-6 inline-flex rounded-full border border-cta/60 bg-cta/10 px-4 py-2 text-[13px] font-semibold text-white">
                  Free shower trim on projects booked before November 14
                </p>
              </LimitedOffer>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <QuoteCTAButton variant="primary" campaign={campaign}>
                  Get My Shower Price
                </QuoteCTAButton>
                <PhoneLink className="text-[15px] font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline">
                  or call {siteConfig.contact.phone}
                </PhoneLink>
              </div>
              <p className="mt-8 text-xs text-white/45">Wilsonart® and Wetwall™ are trademarks of Wilsonart LLC.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
