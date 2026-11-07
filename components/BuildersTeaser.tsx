import Link from "next/link";
import { Container } from "./Container";

export function BuildersTeaser() {
  return (
    <section className="border-y border-line bg-white py-14 lg:py-18">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div>
            <p className="eyebrow">For Builders &amp; General Contractors</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">Need a reliable renovation partner on your next project?</h2>
          </div>
          <div className="rounded-[22px] border border-line bg-paper p-6 sm:p-8">
            <p className="text-[15px] leading-7 text-muted">Siska is open to remodeling, masonry, stonework, and finish-work subcontracting opportunities across Saratoga, the Capital Region, and Lake George. Send the scope, schedule, and whatever plans or photos you have—we’ll respond directly about fit and availability.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/builders" className="inline-flex items-center justify-center rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-accent">Work With Siska</Link>
              <span className="text-xs font-semibold text-muted">One project or an ongoing partnership.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
