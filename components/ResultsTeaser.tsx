import { Container } from "./Container";
import { Photo } from "./Photo";
import { Button } from "./Button";

const projects = [
  ["Bathroom", "Tile, fixtures + layered lighting", "/photos/upstate/work-bathroom-2.png"],
  ["Kitchen", "Full gut renovation, cabinetry + appliances", "/photos/upstate/work-kitchen-3.png"],
];

export function ResultsTeaser() {
  return (
    <section className="bg-cream py-18 lg:py-24">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Design Inspiration</p><h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink sm:text-4xl">Rooms designed to feel at home in Upstate New York.</h2></div><Button href="/work" variant="outline">See the Full Gallery</Button></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">{projects.map(([room, scope, image]) => <article key={image} className="group"><Photo src={image} alt={`${room} remodeling design concept — ${scope}`} ratio="aspect-[4/5]" sizes="(min-width: 640px) 50vw, 100vw" className="transition-transform duration-300 group-hover:-translate-y-1" /><p className="mt-4 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-accent">{room} concept</p><p className="mt-1 text-sm font-semibold text-ink">{scope}</p></article>)}</div>
      </Container>
    </section>
  );
}
