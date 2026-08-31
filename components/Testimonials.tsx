import { Container } from "./Container";

// Placeholder reviews — replace with real client testimonials before launch.
// Keep the "Sample review" badge (or your own equivalent) until these are real.
const testimonials = [
  {
    quote:
      "We knew exactly what our new bathroom would look like before any work started. No surprises on price, no surprises on the finished room.",
    attribution: "Homeowner — Bathroom Remodel",
  },
  {
    quote:
      "The quote was itemized down to the fixture. When the final bill came, it matched what we'd agreed on line for line.",
    attribution: "Homeowner — Kitchen Remodel",
  },
  {
    quote:
      "Every crew was on time, the space was left clean every night, and the walkthrough at the end caught nothing we hadn't already seen coming.",
    attribution: "Homeowner — Full Kitchen Renovation",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <h2 className="text-center text-[26px] font-extrabold tracking-[-0.01em] text-ink">
          Real projects, real households.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <figure
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-line bg-card p-7 shadow-[0_1px_2px_rgba(16,26,44,0.05),0_4px_14px_rgba(16,26,44,0.05)]"
            >
              <div>
                <span className="inline-block rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                  Sample review — placeholder
                </span>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-5 text-[13px] font-medium text-muted">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
