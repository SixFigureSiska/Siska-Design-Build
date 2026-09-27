import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { LimitedOffer } from "@/components/LimitedOffer";
import { PhoneLink } from "@/components/PhoneLink";
import { QuoteCTAButton } from "@/components/QuoteCTAButton";
import { siteConfig } from "@/lib/siteConfig";

// Landing page for the Bathroom Refresh ad campaign — a fixed-price, 1–2 day
// package (vanity, mirror, light, paint, hardware) that keeps the
// existing tub/shower. Not in the main nav; ads link straight here. Leads
// from its buttons are tagged with the campaign label below.

export const metadata: Metadata = {
  title: `Bathroom Refresh in Saratoga & the Capital Region | ${siteConfig.name}`,
  description:
    "New vanity, mirror, lighting, paint and hardware in 1–2 days. Bathroom Refresh packages from $3,500 installed. Local Malta, NY design + build team.",
  alternates: { canonical: "/bathroom-refresh" },
};

const STARTING_PRICE = "$3,500";
const INSTALL_DAYS = "1–2 days";

// Free toilet offer. The toilet is normally an add-on (not in the base
// package), so this is a real bonus. Hidden automatically once this moment
// passes (midnight Eastern at the start of Oct 31, i.e. "booked before Oct 31").
const OFFER_ENDS_AT = "2026-10-31T00:00:00-04:00";
const OFFER_TEXT = "Free comfort-height toilet on refreshes booked before October 31";

const campaign = {
  label: "Bathroom Refresh landing page — free toilet before Oct 31",
  projectType: "bathroom",
};

const included = [
  { title: "New vanity, top & faucet", body: "A new vanity cabinet with sink top and faucet, plumbed and installed." },
  { title: "Mirror & vanity light", body: "A new mirror and light fixture to brighten the whole room." },
  { title: "Fresh paint", body: "Walls and ceiling painted in the color you choose." },
  { title: "New hardware", body: "Towel bar, towel ring, toilet paper holder and cover plates to match." },
  { title: "Haul-away & cleanup", body: "We remove the old fixtures and leave the room clean." },
];

const steps = [
  { title: "Tell us about it", body: "Tap “Get My Refresh Price” or call. We'll reach out quickly during business hours." },
  { title: "Pick your finishes", body: "We visit, measure, and help you choose the vanity, fixtures and paint color." },
  { title: "Fixed price", body: "A clear written price for your package. No 3-hour pitch and no “today-only” pricing." },
  { title: "Refresh day", body: `Our crew handles everything in ${INSTALL_DAYS}. Your shower stays usable except where plumbing requires.` },
];

const faqItems = [
  {
    question: "What's included in a Bathroom Refresh?",
    answer:
      "A new vanity with top and faucet, a new mirror and vanity light, fresh paint on the walls and ceiling, new towel and toilet-paper hardware, plus removal of the old fixtures and cleanup.",
  },
  {
    question: "How much does a Bathroom Refresh cost?",
    answer: `Bathroom Refresh packages start at ${STARTING_PRICE} installed for a standard-size bathroom with standard selections. Upgraded vanities and fixtures, flooring, moving plumbing, or repairing hidden damage are quoted separately so you see exactly what you're paying for.`,
  },
  {
    question: "How long does it take?",
    answer: `Most refreshes are done in ${INSTALL_DAYS}. We'll give you the schedule up front, and we clean up at the end of each day.`,
  },
  {
    question: "Can you replace the toilet too?",
    answer:
      "Yes. A new comfort-height toilet can be added to any refresh and installed the same visit. Ask about current offers. We sometimes include it free.",
  },
  {
    question: "Does the refresh include my tub or shower?",
    answer:
      "No. A refresh keeps your existing tub or shower. If you'd like to replace it too, add a grout-free Wetwall walk-in shower. Together they give you a bathroom that looks fully remodeled, done in about a week.",
  },
  {
    question: "Can I choose my own vanity and fixtures?",
    answer:
      "Yes. We'll show you options that fit the standard package price, and upgrades if you want something specific. You'll see the price for each before anything is ordered.",
  },
  {
    question: "Do you replace flooring too?",
    answer:
      "Flooring isn't part of the base package, but we can add it. Many small bathrooms can get new waterproof flooring in the same visit.",
  },
];

export default function BathroomRefreshPage() {
  return (
    <>
      {/* Hero */}
      <section className="navy-grid relative overflow-hidden bg-navy-deep py-14 text-white lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_30%,rgba(87,132,161,0.23),transparent_34%)]" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#a9c1d1]">
                Bathroom Refresh · Saratoga &amp; the Capital Region
              </p>
              <h1 className="mt-4 font-display text-[38px] font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-[52px]">
                A bathroom that looks brand-new, in {INSTALL_DAYS}.
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-7 text-white/70">
                New vanity, mirror, lighting, paint and hardware, all for one fixed price. No full remodel, no
                weeks of construction. Your shower stays right where it is.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <QuoteCTAButton variant="primary" campaign={campaign}>
                  Get My Refresh Price
                </QuoteCTAButton>
                <PhoneLink className="text-[15px] font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline">
                  or call {siteConfig.contact.phone}
                </PhoneLink>
              </div>
              <p className="mt-5 text-sm text-white/55">Refresh packages from {STARTING_PRICE}, installed.</p>
              <LimitedOffer endsAt={OFFER_ENDS_AT}>
                <p className="mt-5 inline-flex rounded-full border border-cta/60 bg-cta/10 px-4 py-2 text-[13px] font-semibold text-white">
                  {OFFER_TEXT}
                </p>
              </LimitedOffer>
            </div>

            {/* Package card — swap for real before/after photos once shot */}
            <div className="rounded-[24px] border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-9">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#a9c1d1]">
                The Refresh package
              </p>
              <p className="mt-3 font-display text-[56px] font-semibold leading-none text-cta">{STARTING_PRICE}</p>
              <p className="mt-2 text-[15px] text-white/70">installed · {INSTALL_DAYS} · one fixed price</p>
              <ul className="mt-7 grid gap-3">
                {included.map((item) => (
                  <li key={item.title} className="flex gap-3 text-[15px] leading-6 text-white/90">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cta" />
                    {item.title}
                  </li>
                ))}
              </ul>
              <LimitedOffer endsAt={OFFER_ENDS_AT}>
                <p className="mt-6 rounded-xl bg-cta px-4 py-3 text-[14px] font-semibold text-navy-deep">
                  + Comfort-height toilet, free when you book before Oct 31
                </p>
              </LimitedOffer>
            </div>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="bg-paper py-18 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div>
              <p className="eyebrow">What&apos;s Included</p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Everything that makes a bathroom look dated, replaced in one visit.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-muted">
                Most bathrooms don&apos;t need to be gutted. The vanity, lighting, paint and fixtures are what make a room feel
                old. Change those and the whole room feels new, for a fraction of a remodel.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2">
              {included.map((item, index) => (
                <article key={item.title} className="bg-white p-7 sm:p-8">
                  <span className="font-display text-xs font-bold tracking-[0.14em] text-accent">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Refresh vs. remodel */}
      <section className="bg-cream py-18 lg:py-24">
        <Container>
          <p className="eyebrow text-center">Refresh vs. Full Remodel</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-medium text-ink sm:text-4xl">
            Most of the look, a fraction of the cost.
          </h2>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[24px] border border-line bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-[15px]">
              <thead>
                <tr className="bg-navy-deep text-white">
                  <th className="w-[28%] px-4 py-4 sm:px-6" />
                  <th className="px-4 py-4 font-display font-semibold sm:px-6">Bathroom Refresh</th>
                  <th className="px-4 py-4 font-display font-semibold text-white/75 sm:px-6">Full remodel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { row: "Time", refresh: INSTALL_DAYS, remodel: "3–6+ weeks" },
                  { row: "Price", refresh: `From ${STARTING_PRICE}`, remodel: "Often $15,000–$30,000+" },
                  { row: "Tub / shower", refresh: "Stays (or add a Wetwall shower)", remodel: "Replaced" },
                  { row: "Disruption", refresh: "A day or two", remodel: "Bathroom out of service for weeks" },
                ].map((r) => (
                  <tr key={r.row} className="border-t border-line align-top">
                    <th className="px-4 py-4 font-semibold text-ink sm:px-6">{r.row}</th>
                    <td className="bg-navy-soft/40 px-4 py-4 font-medium text-ink sm:px-6">{r.refresh}</td>
                    <td className="px-4 py-4 text-muted sm:px-6">{r.remodel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-7 text-muted">
            Want the shower done too? Pair a Refresh with a{" "}
            <a href="/wetwall-showers" className="font-semibold text-accent underline underline-offset-4">
              grout-free Wetwall walk-in shower
            </a>{" "}
            for a bathroom that looks fully remodeled in about a week.
          </p>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-white py-18 lg:py-24">
        <Container>
          <p className="eyebrow text-center">How It Works</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-medium text-ink sm:text-4xl">
            From first call to finished bathroom.
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

      <FAQ title="Bathroom Refresh questions." items={faqItems} />
      <FAQJsonLd items={faqItems} />

      {/* Closing CTA */}
      <section className="bg-paper pb-18 lg:pb-24">
        <Container>
          <div className="navy-grid relative overflow-hidden rounded-[28px] bg-navy px-6 py-14 text-center text-white shadow-[0_24px_70px_rgba(7,27,45,0.2)] sm:px-12 lg:py-18">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(130,168,193,0.22),transparent_32%)]" />
            <div className="relative">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#b5cad7]">
                Refresh packages from {STARTING_PRICE}
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-medium leading-tight sm:text-5xl">
                Get your Bathroom Refresh price.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/65">
                Takes about a minute. No pressure, no obligation.
              </p>
              <LimitedOffer endsAt={OFFER_ENDS_AT}>
                <p className="mx-auto mt-6 inline-flex rounded-full border border-cta/60 bg-cta/10 px-4 py-2 text-[13px] font-semibold text-white">
                  {OFFER_TEXT}
                </p>
              </LimitedOffer>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <QuoteCTAButton variant="primary" campaign={campaign}>
                  Get My Refresh Price
                </QuoteCTAButton>
                <PhoneLink className="text-[15px] font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline">
                  or call {siteConfig.contact.phone}
                </PhoneLink>
              </div>
              <p className="mx-auto mt-8 max-w-xl text-xs leading-5 text-white/45">
                {STARTING_PRICE} starting price is for a standard-size bathroom with standard selections. Upgraded
                fixtures, toilet replacement (outside current offers), flooring, plumbing relocation and hidden-damage
                repairs are quoted separately.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
