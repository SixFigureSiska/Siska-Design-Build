import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";
import { QuoteCTAButton } from "./QuoteCTAButton";

export function Hero() {
  return (
    <section className="navy-grid relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_26%,rgba(71,118,150,0.24),transparent_35%),linear-gradient(120deg,rgba(7,27,45,0.98)_25%,rgba(13,47,79,0.90)_100%)]" />
      <Container wide className="relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 xl:gap-14">
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#aac3d2]">Upstate New York • Design + Build</p>
            <h1 className="mt-5 max-w-2xl font-display text-[40px] font-medium leading-[1.04] tracking-[-0.025em] text-white sm:text-[52px] lg:text-[62px]">
              Remodel with a clear plan—and no surprise pricing.
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-7 text-white/68 sm:text-[17px]">
              Bathrooms, kitchens, and custom interiors planned around your home, visualized before construction, and quoted with the scope clearly spelled out.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteCTAButton variant="white" className="sm:px-7">Plan My Remodel</QuoteCTAButton>
              <Button href="/work" variant="outlineOnDark" className="sm:px-7">Explore the Work</Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-xs font-semibold text-white/62">
              <span>Design + build under one roof</span>
              <span>Firm, itemized quotes</span>
              <span>Licensed &amp; insured</span>
            </div>
          </div>

          <div className="relative lg:-mr-6 lg:pl-2 xl:-mr-10">
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[21px]">
                <Image src="/photos/upstate/hero-bathroom-v2.png" alt="Warm white and natural oak bathroom remodeling design concept for an Upstate New York home" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 left-0 max-w-[245px] rounded-2xl border border-white/15 bg-white px-5 py-4 text-navy-deep shadow-[0_16px_45px_rgba(0,0,0,0.22)] sm:left-[-16px]">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-accent">See it before you commit</p>
              <p className="mt-1.5 text-sm font-semibold leading-5">Visual planning turns a renovation idea into a room you can approve.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
