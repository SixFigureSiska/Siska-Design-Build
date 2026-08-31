"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/lib/siteConfig";
import { trackConversion } from "@/lib/analytics";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong");
      }

      trackConversion("generate_lead", {
        project_type: String(formData.get("projectType") || "not_selected"),
        lead_source: String(formData.get("leadSource") || "not_selected"),
      });
      setSubmitted(true);
    } catch {
      setError("We couldn't send that. Please call us or try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-paper py-18 lg:py-24">
      <Container>
        <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_22px_65px_rgba(7,27,45,0.10)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="navy-grid bg-navy p-7 text-white sm:p-10 lg:p-12">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#b7cbd8]">Start a Conversation</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight">Tell us what is not working in your space.</h2>
            <p className="mt-5 text-sm leading-6 text-white/62">We’ll talk through the room, the look you want, and the practical problems the renovation needs to solve.</p>
            <dl className="mt-10 space-y-6 border-t border-white/14 pt-8">
              <Info label="Call the team"><a href={siteConfig.contact.phoneHref} onClick={() => trackConversion("phone_click")}>{siteConfig.contact.phone}</a></Info>
              <Info label="Email"><a href={`mailto:${siteConfig.contact.email}`} onClick={() => trackConversion("email_click")} className="break-all">{siteConfig.contact.email}</a></Info>
              <Info label="Based in">{siteConfig.contact.locality}, {siteConfig.contact.region}</Info>
              <Info label="Service Area">{siteConfig.contact.serviceArea}</Info>
            </dl>
            <div className="mt-10 rounded-2xl border border-white/12 bg-white/7 p-5"><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b7cbd8]">What happens next</p><ol className="mt-4 space-y-3 text-sm text-white/70"><li>1. We review your project details.</li><li>2. We schedule an initial conversation.</li><li>3. We walk the space and build the scope.</li></ol></div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            {submitted ? <div className="flex min-h-[36rem] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-soft text-2xl text-accent">✓</span><h2 className="mt-5 font-display text-3xl font-medium text-ink">Thanks—we have your details.</h2><p className="mt-3 max-w-sm text-sm leading-6 text-muted">Choose a time to talk with the team, or call us directly if you would rather speak now.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={siteConfig.contact.schedulingUrl} target={siteConfig.contact.schedulingUrl.startsWith("http") ? "_blank" : undefined} rel={siteConfig.contact.schedulingUrl.startsWith("http") ? "noopener noreferrer" : undefined} onClick={() => trackConversion("schedule_call")} className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(7,27,45,0.18)] transition hover:-translate-y-0.5 hover:bg-accent-dark">Schedule a Call</a><a href={siteConfig.contact.phoneHref} onClick={() => trackConversion("phone_click")} className="inline-flex items-center justify-center rounded-xl border border-accent/30 bg-white px-6 py-3.5 text-sm font-bold text-accent transition hover:border-accent hover:bg-navy-soft/45">Call {siteConfig.contact.phone}</a></div><button type="button" onClick={() => setSubmitted(false)} className="mt-7 text-xs font-semibold text-muted underline underline-offset-4 hover:text-ink">Submit another project</button></div> : (
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" id="name" name="name" autoComplete="name" required /><Field label="Phone" id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
                <Field label="Email" id="email" name="email" type="email" autoComplete="email" required />
                <Field label="Project Address or ZIP Code" id="projectLocation" name="projectLocation" autoComplete="street-address" placeholder="Malta, NY 12020" required />
                <label htmlFor="projectType" className="grid gap-2"><span className="text-xs font-semibold text-ink">Project Type</span><select id="projectType" name="projectType" required defaultValue="" className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-accent"><option value="" disabled>Select a project type</option><option value="bathroom">Bathroom Remodel</option><option value="kitchen">Kitchen Remodel</option><option value="both">Bathroom + Kitchen</option><option value="custom">Custom Interior Project</option></select></label>
                <Field label="Desired Start Date" id="desiredStartDate" name="desiredStartDate" type="date" required />
                <label htmlFor="projectPhotos" className="grid gap-2"><span className="text-xs font-semibold text-ink">Project Photos <span className="font-normal text-muted">(optional)</span></span><span className="rounded-xl border border-dashed border-accent/35 bg-navy-soft/30 px-4 py-4"><input id="projectPhotos" name="projectPhotos" type="file" accept="image/jpeg,image/png,image/webp" multiple className="block w-full text-xs text-muted file:mr-4 file:rounded-lg file:border-0 file:bg-navy file:px-4 file:py-2.5 file:text-xs file:font-bold file:text-white hover:file:bg-accent" /><span className="mt-2 block text-[11px] leading-4 text-muted">Add photos that show the room, layout, or problem areas. JPG, PNG, or WebP.</span></span></label>
                <label htmlFor="leadSource" className="grid gap-2"><span className="text-xs font-semibold text-ink">How did you hear about SISKA?</span><select id="leadSource" name="leadSource" required defaultValue="" className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-accent"><option value="" disabled>Select one</option><option value="google">Google search</option><option value="referral">Friend or client referral</option><option value="social">Social media</option><option value="sign-vehicle">Jobsite sign or vehicle</option><option value="other">Other</option></select></label>
                <label htmlFor="message" className="grid gap-2"><span className="text-xs font-semibold text-ink">Project Details</span><textarea id="message" name="message" rows={5} placeholder="What would you like to change? Include the room, your goals, and any timing you have in mind." className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/65 focus:border-accent" /></label>
                <label className="flex items-start gap-3 text-xs leading-5 text-muted"><input type="checkbox" name="consent" required className="mt-1 accent-accent" /><span>I agree to be contacted about this renovation request and acknowledge the <Link href="/privacy" className="font-semibold text-accent underline underline-offset-4">Privacy Policy</Link>.</span></label>
                {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                <button type="submit" disabled={submitting} className="mt-1 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(7,27,45,0.18)] transition hover:-translate-y-0.5 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Sending…" : "Request My Free Consultation"}</button>
                <p className="text-center text-[11px] text-muted">No obligation. Your information is only used to follow up about your project.</p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) { return <div><dt className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#b7cbd8]">{label}</dt><dd className="mt-1.5 text-sm text-white/82">{children}</dd></div>; }
function Field({ label, id, type = "text", ...rest }: { label: string; id: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) { return <label htmlFor={id} className="grid gap-2"><span className="text-xs font-semibold text-ink">{label}</span><input id={id} type={type} className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-accent" {...rest} /></label>; }
