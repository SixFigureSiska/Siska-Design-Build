"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";
import { QuoteCTAButton } from "./QuoteCTAButton";

const services = [
  { id: "bathrooms", tab: "Bathrooms", title: "Bathroom Remodeling", eyebrow: "Showers • Tile • Vanities • Layouts", description: "From focused updates to complete gut renovations, every detail is planned around the way the room needs to work—and the finish you want to live with every day.", includes: ["Layout and finish planning", "Plumbing, electrical, and tile coordination", "Showers, vanities, fixtures, and storage", "Clear scope and project-specific quote"], image: "/photos/upstate/service-bathroom.png", alt: "Finished bathroom remodeling concept for an Upstate New York home", detailHref: "/bathroom-remodeling" },
  { id: "kitchens", tab: "Kitchens", title: "Kitchen Remodeling", eyebrow: "Cabinetry • Counters • Lighting • Appliances", description: "We rethink the kitchen as a working room first—then layer in cabinetry, surfaces, lighting, and finishes that make it the room everyone wants to be in.", includes: ["Layout and cabinetry design", "Countertops, backsplash, and lighting", "Appliance and fixture coordination", "Structural, plumbing, and electrical planning"], image: "/photos/upstate/service-kitchen.jpg", alt: "Kitchen with a marble island and granite counters", detailHref: "/kitchen-remodeling" },
  { id: "custom", tab: "Custom Projects", title: "Custom Interior Projects", eyebrow: "Basements • Mudrooms • Laundry • Built-ins", description: "Have a project that does not fit neatly into a bathroom or kitchen? We are comfortable evaluating thoughtful interior renovations and custom work on a case-by-case basis.", includes: ["Basement and bonus-room renovations", "Mudrooms and laundry rooms", "Built-ins and custom storage", "Multi-room interior updates"], image: "/photos/upstate/service-custom.jpg", alt: "Built-in bookshelf storage in a bright home office", detailHref: "/services" },
] as const;

export function Services() {
  type ServiceId = (typeof services)[number]["id"];
  const [active, setActive] = useState<ServiceId>(services[0].id);
  const service: (typeof services)[number] = services.find((item) => item.id === active) ?? services[0];

  // Deep links like /services#custom (used by the footer) should select
  // that tab and scroll to it, not just land on the default first tab.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const match = services.find((item) => item.id === hash);
    if (match) {
      setActive(match.id);
      requestAnimationFrame(() => {
        document.getElementById(match.id)?.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  return (
    <section className="bg-paper py-18 lg:py-24">
      <Container>
        <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-2xl bg-navy-soft/75 p-2" role="tablist" aria-label="Remodeling services">
          {services.map((item) => <button key={item.id} type="button" role="tab" aria-selected={active === item.id} aria-controls={item.id} onClick={() => setActive(item.id)} className={`min-w-[150px] flex-1 shrink-0 rounded-xl px-7 py-5 font-display text-base font-semibold transition-all sm:min-w-0 sm:text-lg ${active === item.id ? "bg-navy text-white shadow-[0_8px_22px_rgba(7,27,45,0.18)]" : "bg-white/60 text-ink hover:bg-white hover:text-accent"}`}>{item.tab}</button>)}
        </div>

        <div id={service.id} role="tabpanel" className="mt-10 scroll-mt-24 grid items-center gap-10 rounded-[26px] border border-line bg-white p-5 shadow-[0_18px_55px_rgba(7,27,45,0.08)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-10">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[20px]"><Image src={service.image} alt={service.alt} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" /></div>
          <div className="lg:pr-6"><p className="eyebrow">{service.eyebrow}</p><h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">{service.title}</h2><p className="mt-5 text-[15px] leading-7 text-muted">{service.description}</p><ul className="mt-6 grid gap-3">{service.includes.map((line) => <li key={line} className="flex gap-3 border-t border-line pt-3 text-sm text-ink first:border-0 first:pt-0"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />{line}</li>)}</ul><p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-muted">Investment is quoted from your actual space and scope.</p><div className="mt-6 flex flex-wrap gap-3"><QuoteCTAButton variant="primary">Request a {service.tab === "Custom Projects" ? "Project" : service.tab.slice(0, -1)} Quote</QuoteCTAButton>{service.id !== "custom" && <Button href={service.detailHref} variant="outline">Explore Local Service</Button>}</div></div>
        </div>
      </Container>
    </section>
  );
}
