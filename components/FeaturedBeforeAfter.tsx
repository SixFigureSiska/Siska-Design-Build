import { Container } from "./Container";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Button } from "./Button";

export function FeaturedBeforeAfter() {
  return (
    <section className="bg-cream py-18 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end lg:gap-14">
          <div className="lg:pb-10">
            <p className="eyebrow">Before + After</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">The transformation should feel real before the demolition does.</h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">Drag the slider to compare the same Upstate New York bathroom before and after a complete design transformation.</p>
            <Button href="/work" variant="outline" className="mt-7">View More Transformations</Button>
          </div>
          <BeforeAfterSlider beforeSrc="/photos/upstate/bathroom-before.png" afterSrc="/photos/upstate/bathroom-after.png" beforeAlt="Outdated bathroom before renovation" afterAlt="Same Upstate New York bathroom after renovation" caption="Bathroom remodel concept — same room, gut to finish" />
        </div>
      </Container>
    </section>
  );
}
