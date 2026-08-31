import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects, uses, and protects information submitted through this website.`,
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Information we collect",
    content: (
      <>
        <p>We collect information you choose to provide when you request a consultation or contact us. This may include your name, phone number, email address, project address or ZIP code, project type, desired start date, approximate investment range, referral source, project details, and any project photos you upload.</p>
        <p>We may also collect basic technical and usage information, such as browser type, device type, pages visited, and interactions with the site, through analytics tools when they are enabled.</p>
      </>
    ),
  },
  {
    title: "How we use information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Review and respond to renovation inquiries;</li>
          <li>Schedule consultations and communicate about potential or active projects;</li>
          <li>Prepare project scopes, estimates, and related services;</li>
          <li>Operate, secure, and improve this website; and</li>
          <li>Understand how visitors find and use the site.</li>
        </ul>
        <p>We do not sell or rent your personal information.</p>
      </>
    ),
  },
  {
    title: "Service providers and sharing",
    content: (
      <>
        <p>We may share information with service providers that help us operate the website and respond to inquiries. These providers may include website hosting, email delivery, analytics, scheduling, and other business technology services. For example, form submissions and uploaded photos may be processed through Resend so they can be delivered to our team.</p>
        <p>We may also disclose information when required by law, to protect our rights or safety, or as part of a business transfer. We do not authorize service providers to use your information for their own marketing.</p>
      </>
    ),
  },
  {
    title: "Cookies and analytics",
    content: (
      <p>This site may use cookies or similar technologies for basic functionality and analytics. If Google Analytics is configured, it may collect usage information to help us understand site traffic and conversions. You can limit cookies through your browser settings; doing so may affect some website features.</p>
    ),
  },
  {
    title: "How long we keep information",
    content: (
      <p>We retain information for as long as reasonably necessary to respond to your inquiry, provide services, maintain business and legal records, resolve disputes, and meet our obligations. Retention may vary depending on the nature of the information and our relationship with you.</p>
    ),
  },
  {
    title: "Security",
    content: (
      <p>We use reasonable administrative and technical safeguards designed to protect personal information. No website, email system, or method of transmission is completely secure, so we cannot guarantee absolute security.</p>
    ),
  },
  {
    title: "Your choices",
    content: (
      <p>You may ask us to update or delete personal information you submitted, or ask questions about how it is used, by contacting us at <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. We may need to retain certain information when required for legal, contractual, or legitimate business purposes.</p>
    ),
  },
  {
    title: "Children's privacy",
    content: (
      <p>This website is intended for homeowners and other adults seeking remodeling services. We do not knowingly collect personal information from children under 13.</p>
    ),
  },
  {
    title: "Changes to this policy",
    content: (
      <p>We may update this policy as our website, services, or legal obligations change. The revised policy will be posted on this page with a new effective date.</p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Your Information"
        title="Privacy Policy"
        description="A plain-language explanation of what this website collects and how Siska Design + Build uses it."
      />
      <section className="bg-paper py-18 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[28px] border border-line bg-white p-7 shadow-[0_22px_65px_rgba(7,27,45,0.08)] sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Effective August 31, 2026</p>
              <div className="mt-6 space-y-4 text-[15px] leading-7 text-muted">
                <p>{siteConfig.name} respects your privacy. This policy explains how we collect, use, disclose, and protect information when you visit {siteConfig.url.replace("https://", "")} or contact us through the site.</p>
                <p>By using this website, you acknowledge the practices described below.</p>
              </div>

              <div className="mt-10 divide-y divide-line">
                {sections.map((section) => (
                  <section key={section.title} className="py-8 first:pt-0 last:pb-0">
                    <h2 className="font-display text-2xl font-semibold text-ink">{section.title}</h2>
                    <div className="privacy-copy mt-4 space-y-4 text-[15px] leading-7 text-muted">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-navy-soft p-6">
                <h2 className="font-display text-xl font-semibold text-ink">Questions about this policy?</h2>
                <p className="mt-3 text-sm leading-6 text-muted">Email <a className="font-semibold text-accent underline underline-offset-4" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or call <a className="font-semibold text-accent underline underline-offset-4" href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>.</p>
                <Link href="/contact" className="mt-4 inline-flex text-sm font-bold text-accent underline underline-offset-4">Go to the contact page</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
