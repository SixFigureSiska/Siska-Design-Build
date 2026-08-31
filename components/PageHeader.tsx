import { Container } from "./Container";

type PageHeaderProps = { label: string; title: string; description?: string };

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="navy-grid relative overflow-hidden bg-navy-deep py-14 text-white lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_30%,rgba(87,132,161,0.23),transparent_34%)]" />
      <Container className="relative">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#a9c1d1]">{label}</p>
        <h1 className="mt-4 max-w-3xl font-display text-[38px] font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-[48px]">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-[16px] leading-7 text-white/65">{description}</p>}
      </Container>
    </section>
  );
}
