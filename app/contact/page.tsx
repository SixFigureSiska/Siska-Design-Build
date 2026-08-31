import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { QuickQuoteFlow } from "@/components/QuickQuoteFlow";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Request a free, no-obligation consultation with Siska Design + Build for your bathroom or kitchen renovation.",
};

export default function ContactPage() {
  return (
    <section className="navy-grid relative overflow-hidden bg-navy-deep py-10 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(87,132,161,0.2),transparent_34%)]" />
      <Container className="relative">
        <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_22px_65px_rgba(7,27,45,0.25)] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="navy-grid hidden bg-navy p-10 text-white lg:block lg:p-12">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#b7cbd8]">Get In Touch</p>
            <h1 className="mt-4 font-display text-3xl font-medium leading-tight">Let&apos;s talk about your renovation.</h1>
            <p className="mt-5 text-sm leading-6 text-white/62">Three quick steps and we&apos;ll follow up to schedule your free, no-obligation in-home consultation.</p>
            <dl className="mt-10 space-y-6 border-t border-white/14 pt-8">
              <Info label="Call the team">
                <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </Info>
              <Info label="Email">
                <a href={`mailto:${siteConfig.contact.email}`} className="break-all hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </Info>
              <Info label="Based in">
                {siteConfig.contact.locality}, {siteConfig.contact.region}
              </Info>
              <Info label="Service Area">{siteConfig.contact.serviceArea}</Info>
            </dl>
          </div>

          <div className="p-6 sm:p-8 lg:p-12">
            <div className="mb-2 lg:hidden">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Get In Touch</p>
            </div>
            <QuickQuoteFlow variant="page" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Info({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#b7cbd8]">{label}</dt>
      <dd className="mt-1.5 text-sm text-white/82">{children}</dd>
    </div>
  );
}
