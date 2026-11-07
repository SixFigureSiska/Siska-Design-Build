import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";

const services = [
  { name: "Bathrooms", description: "Gut renovations, showers, tile, vanities, lighting, and layouts built for daily life.", image: "/photos/upstate/service-bathroom.png" },
  { name: "Kitchens", description: "Cabinetry, counters, lighting, appliances, and layouts that make the whole home work better.", image: "/photos/upstate/service-kitchen.jpg" },
  { name: "Masonry & Stonework", description: "Stone veneer, steps, walkways, patios, walls, and repairs built for Upstate conditions.", image: "/photos/upstate/service-masonry.png" },
  { name: "Custom Projects", description: "Basements, laundry rooms, mudrooms, built-ins, and interior projects evaluated case by case.", image: "/photos/upstate/service-custom.jpg" },
];

export function ServicesTeaser() {
  return (
    <section className="bg-paper py-18 lg:py-24">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">What We Build</p><h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-ink sm:text-4xl">Thoughtful work inside the home and across the property.</h2></div>
          <Button href="/services" variant="outline">Explore All Services</Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article key={service.name} className="group overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_10px_35px_rgba(7,27,45,0.07)]">
              <div className="relative aspect-[4/3] overflow-hidden"><Image src={service.image} alt={`${service.name} service example`} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
              <div className="p-6"><span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-accent">0{index + 1}</span><h3 className="mt-2 font-display text-xl font-semibold text-ink">{service.name}</h3><p className="mt-3 text-sm leading-6 text-muted">{service.description}</p></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
