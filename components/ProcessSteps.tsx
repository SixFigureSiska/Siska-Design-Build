import { Container } from "./Container";
import { Button } from "./Button";

const steps = [
  ["01", "Walk the Space", "We listen, measure, and define what needs to change.", "30–45 min"],
  ["02", "Visualize the Plan", "Review layout, style, and finish direction before committing.", "Design phase"],
  ["03", "Approve the Quote", "Scope, materials, labor, and timeline are clearly documented.", "Before work begins"],
  ["04", "Build + Handoff", "Once materials arrive, one coordinated team completes the work and walks it with you.", "Usually about 1 week"],
];

export function ProcessSteps() {
  return (
    <section className="navy-grid bg-navy-deep py-18 text-white lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
          <div><p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#a9c1d1]">A Better Quote Starts Here</p><h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">A clear process from first look to final walkthrough.</h2><p className="mt-5 text-sm leading-6 text-white/60">No generic packages and no vague allowances. Your space drives the plan, and the plan drives the quote.</p><Button href="/process" variant="outlineOnDark" className="mt-7">See the Full Process</Button></div>
          <div><ol className="grid gap-px overflow-hidden rounded-[22px] border border-white/12 bg-white/12 sm:grid-cols-2">
            {steps.map(([number, title, body, time]) => <li key={number} className="bg-navy px-6 py-7 sm:p-8"><span className="font-display text-xs font-bold tracking-[0.14em] text-[#a9c1d1]">{number}</span><h3 className="mt-3 font-display text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{body}</p><p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-white/80">{time}</p></li>)}
          </ol><p className="mt-3 text-xs leading-5 text-white/45">Typical timing begins after materials are on site. Larger or more complex scopes may require additional time.</p></div>
        </div>
      </Container>
    </section>
  );
}
