import { Container } from "./Container";

const items = [
  ["01", "See It Clearly", "Review the design direction before construction starts."],
  ["02", "Know the Number", "Measurements, materials, labor, and scope are laid out."],
  ["03", "Build with One Team", "Design and construction stay coordinated under one roof."],
  ["04", "Finish It Right", "Old-school attention to tile, trim, cleanup, and final details."],
];

export function ValueProps() {
  return (
    <section className="border-b border-line bg-white">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([number, title, body], index) => (
            <div key={title} className={`py-8 sm:px-6 lg:py-10 ${index > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}>
              <span className="font-display text-[11px] font-bold tracking-[0.14em] text-accent">{number}</span>
              <h2 className="mt-2 font-display text-base font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-[13px] leading-5 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
