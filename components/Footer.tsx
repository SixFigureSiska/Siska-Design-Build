import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 border-b border-white/12 pb-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo variant="onDark" size="md" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">Bathroom, kitchen, and custom interior remodeling with clear planning, thoughtful design, and workmanship that lasts.</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#a9c1d1]">{siteConfig.contact.serviceArea}</p>
            <p className="mt-2 text-xs text-white/45">{siteConfig.contact.basedIn}</p>
          </div>
          <FooterColumn title="Explore">
            {siteConfig.nav.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
          </FooterColumn>
          <FooterColumn title="Services">
            <Link href="/bathroom-remodeling" className="hover:text-white">Bathrooms</Link>
            <Link href="/kitchen-remodeling" className="hover:text-white">Kitchens</Link>
            <Link href="/services#custom" className="hover:text-white">Custom Projects</Link>
          </FooterColumn>
          <FooterColumn title="Start a Project">
            <a href={siteConfig.contact.phoneHref} className="font-semibold text-white hover:text-[#c8dae5]">Call the team: {siteConfig.contact.phone}</a>
            <a href={`mailto:${siteConfig.contact.email}`} className="break-all hover:text-white">{siteConfig.contact.email}</a>
            <Link href="/contact" className="mt-2 inline-flex font-bold text-white underline decoration-[#89a9bd] underline-offset-4">Request a free consultation</Link>
          </FooterColumn>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="underline decoration-white/25 underline-offset-4 transition hover:text-white">Privacy Policy</Link>
            <span>Licensed &amp; insured • Design + Build</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return <div><h2 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#a9c1d1]">{title}</h2><div className="mt-4 flex flex-col gap-2.5 text-sm text-white/60">{children}</div></div>;
}
