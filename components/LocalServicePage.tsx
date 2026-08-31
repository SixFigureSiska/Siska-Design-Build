import { QuoteCTAButton } from "./QuoteCTAButton";
import { Container } from "./Container";
import { Photo } from "./Photo";
import { siteConfig } from "@/lib/siteConfig";

type LocalServicePageProps = {
  serviceName: string;
  image: string;
  imageAlt: string;
  introduction: string;
  localContext: string;
  includes: string[];
  planningTitle: string;
  planningPoints: { title: string; body: string }[];
};

export function LocalServicePage({
  serviceName,
  image,
  imageAlt,
  introduction,
  localContext,
  includes,
  planningTitle,
  planningPoints,
}: LocalServicePageProps) {
  return (
    <>
      <section className="bg-paper py-18 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="eyebrow">{siteConfig.contact.basedIn}</p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Local {serviceName.toLowerCase()} planning, pricing, and construction under one roof.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-muted">{introduction}</p>
              <p className="mt-4 text-[15px] leading-7 text-muted">{localContext}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-5 text-ink">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <QuoteCTAButton variant="primary" className="mt-8">
                Plan My {serviceName}
              </QuoteCTAButton>
            </div>
            <Photo
              src={image}
              alt={imageAlt}
              ratio="aspect-[5/4]"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-cream py-18 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div>
              <p className="eyebrow">Designed for the Home You Have</p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                {planningTitle}
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2">
              {planningPoints.map((point, index) => (
                <article key={point.title} className="bg-white p-7 sm:p-8">
                  <span className="font-display text-xs font-bold tracking-[0.14em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <p className="eyebrow text-center">Our Service Area</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-2xl font-medium text-ink sm:text-3xl">
            {siteConfig.contact.serviceArea}
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {siteConfig.serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-line bg-paper px-4 py-2 text-xs font-semibold text-muted">
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
