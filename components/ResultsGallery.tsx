"use client";

import { useState } from "react";
import { Container } from "./Container";
import { Photo } from "./Photo";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

type Room = "Bathroom" | "Kitchen";
type Filter = "All" | Room;

const projects: { room: Room; scope: string; location: string; image: string }[] = [
  {
    room: "Bathroom",
    scope: "Primary suite refresh — tile, fixtures & lighting",
    location: "Upstate New York concept",
    image: "/photos/upstate/work-bathroom-2.png",
  },
  {
    room: "Kitchen",
    scope: "Full gut renovation — layout, cabinetry & appliances",
    location: "Upstate New York concept",
    image: "/photos/upstate/work-kitchen-3.png",
  },
];

const filters: Filter[] = ["All", "Bathroom", "Kitchen"];

export function ResultsGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter((p) => filter === "All" || p.room === filter);

  return (
    <section className="bg-paper py-18 lg:py-24">
      <Container>
        <p className="eyebrow text-center">Before + After</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-medium text-ink sm:text-4xl">Drag to reveal the transformation.</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <BeforeAfterSlider
            beforeSrc="/photos/upstate/bathroom-before.png"
            afterSrc="/photos/upstate/bathroom-after.png"
            beforeAlt="Outdated bathroom before renovation"
            afterAlt="Same Upstate New York bathroom after renovation"
            caption="Bathroom remodel concept — same room, fully transformed"
          />
          <BeforeAfterSlider
            beforeSrc="/photos/upstate/kitchen-before.png"
            afterSrc="/photos/upstate/kitchen-after.png"
            beforeAlt="Outdated kitchen before renovation"
            afterAlt="Same Upstate New York kitchen after renovation"
            caption="Kitchen remodel concept — same layout, completely renewed"
          />
        </div>

        <div className="mt-20 flex flex-col items-center gap-5">
          <p className="eyebrow">Design Inspiration</p>
          <h2 className="text-center font-display text-3xl font-medium text-ink sm:text-4xl">Browse by room.</h2>
          <div className="flex gap-2">
            {filters.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={filter === option}
                className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-colors ${
                  filter === option
                    ? "bg-accent text-white"
                    : "border border-line bg-white text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visible.map((project, index) => (
            <article key={index}>
              <Photo
                src={project.image}
                alt={`${project.room} renovation — ${project.scope}`}
                ratio="aspect-[4/5]"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <span className="mt-4 inline-block font-display text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                {project.room} design concept
              </span>
              <p className="mt-1 text-sm leading-snug text-ink">{project.scope}</p>
              <p className="mt-0.5 text-xs text-muted">{project.location}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
