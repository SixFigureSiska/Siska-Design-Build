import { Hero } from "@/components/Hero";
import { FeaturedBeforeAfter } from "@/components/FeaturedBeforeAfter";
import { ValueProps } from "@/components/ValueProps";
import { NewGuys } from "@/components/NewGuys";
import { ServicesTeaser } from "@/components/ServicesTeaser";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ResultsTeaser } from "@/components/ResultsTeaser";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedBeforeAfter />
      <ServicesTeaser />
      <ProcessSteps />
      <NewGuys />
      <ResultsTeaser />
      <FinalCTA />
    </>
  );
}
