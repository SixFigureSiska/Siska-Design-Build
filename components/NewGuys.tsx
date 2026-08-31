import { Container } from "./Container";

export function NewGuys() {
  return (
    <section className="bg-white py-18 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-[26px] border border-line lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-navy px-7 py-10 text-white sm:p-10 lg:p-14"><p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#b5cad7]">Why Siska</p><h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">The new guys on the block.</h2><p className="mt-5 max-w-md text-[15px] leading-7 text-white/65">Modern planning and new-guy pricing, backed by the old-school belief that finish work, cleanup, and follow-through are what earn the next referral.</p></div>
          <div className="grid bg-cream sm:grid-cols-2">
            <Benefit number="01" title="New-Guy Pricing + Technology" lines={["Lean overhead and competitive pricing", "Visual planning before construction", "Clear scope and project updates"]} />
            <Benefit number="02" title="Old-School Workmanship + Finish" lines={["Details held to a real standard", "A clean and respectful job site", "The final walkthrough matters"]} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Benefit({ number, title, lines }: { number: string; title: string; lines: string[] }) {
  return <div className="border-t border-line p-7 first:border-t-0 sm:border-l sm:border-t-0 sm:p-9"><span className="font-display text-xs font-bold tracking-[0.14em] text-accent">{number}</span><h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{title}</h3><ul className="mt-5 space-y-3">{lines.map((line) => <li key={line} className="flex gap-3 text-sm leading-5 text-muted"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{line}</li>)}</ul></div>;
}
