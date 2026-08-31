import { Container } from "./Container";
import { QuoteCTAButton } from "./QuoteCTAButton";

export function FinalCTA() {
  return (
    <section className="bg-paper py-18 lg:py-24">
      <Container>
        <div className="navy-grid relative overflow-hidden rounded-[28px] bg-navy px-6 py-14 text-center text-white shadow-[0_24px_70px_rgba(7,27,45,0.2)] sm:px-12 lg:py-18">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(130,168,193,0.22),transparent_32%)]" />
          <div className="relative"><p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#b5cad7]">Start with clarity</p><h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-medium leading-tight sm:text-5xl">See what your home can become before you commit to the build.</h2><p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/65">Tell us about the space, the problems you want to solve, and the finish you have in mind. We’ll help turn it into a clear renovation plan.</p><QuoteCTAButton variant="white" className="mt-8">Request a Free Consultation</QuoteCTAButton></div>
        </div>
      </Container>
    </section>
  );
}
