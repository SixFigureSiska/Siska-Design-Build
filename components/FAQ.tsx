import { Container } from "./Container";

type FAQProps = {
  title: string;
  items: { question: string; answer: string }[];
};

// Real <details>/<summary> accordion, styled to match the rest of the site
// (eyebrow + font-display heading, rounded card, +/− indicator).
export function FAQ({ title, items }: FAQProps) {
  return (
    <section className="bg-paper py-18 lg:py-24">
      <Container>
        <p className="eyebrow text-center">Questions</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-medium text-ink sm:text-4xl">
          {title}
        </h2>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-2.5">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-line bg-white px-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-[15px] font-semibold text-ink">
                {item.question}
                <span className="shrink-0 text-xl font-normal text-accent group-open:hidden">
                  +
                </span>
                <span className="hidden shrink-0 text-xl font-normal text-accent group-open:inline">
                  −
                </span>
              </summary>
              <p className="m-0 pb-4 text-[14.5px] leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
