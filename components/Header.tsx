"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { siteConfig } from "@/lib/siteConfig";
import { trackConversion } from "@/lib/analytics";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 bg-navy-deep text-white transition-shadow duration-200 ${scrolled ? "shadow-[0_12px_35px_rgba(5,20,33,0.28)]" : ""}`}>
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4 border-b border-white/10 lg:min-h-[76px]">
          <Link href="/" aria-label={`${siteConfig.name} — home`} className="shrink-0">
            <Logo variant="onDark" size="sm" />
          </Link>
          <div className="flex items-center gap-4">
            <a href={siteConfig.contact.phoneHref} onClick={() => trackConversion("phone_click")} className="hidden text-right text-xs text-white/65 transition-colors hover:text-white md:block">
              <span className="block font-display uppercase tracking-[0.14em]">Call the team</span>
              <span className="mt-0.5 block text-sm font-semibold text-white">{siteConfig.contact.phone}</span>
            </a>
            <Button href="/contact" variant="white" className="whitespace-nowrap px-4 py-2.5 sm:px-5">
              <span className="sm:hidden">Free Quote</span>
              <span className="hidden sm:inline">Plan My Remodel</span>
            </Button>
          </div>
        </div>
        <nav aria-label="Primary" className="no-scrollbar flex items-center gap-1 overflow-x-auto">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`relative shrink-0 whitespace-nowrap px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:origin-left after:bg-white after:transition-transform ${active ? "text-white after:scale-x-100" : "text-white/58 after:scale-x-0 hover:text-white hover:after:scale-x-100"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
