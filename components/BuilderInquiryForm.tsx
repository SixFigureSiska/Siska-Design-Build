"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { trackConversion } from "@/lib/analytics";

type FormState = {
  company: string;
  name: string;
  phone: string;
  email: string;
  projectLocation: string;
  projectScope: string;
  desiredStartDate: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  company: "",
  name: "",
  phone: "",
  email: "",
  projectLocation: "",
  projectScope: "",
  desiredStartDate: "",
  message: "",
  consent: false,
};

export function BuilderInquiryForm() {
  const [values, setValues] = useState(initialState);
  const [photos, setPhotos] = useState<File[]>([]);
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData();
    formData.set("website", website);
    formData.set("inquiryType", "builder");
    formData.set("company", values.company);
    formData.set("name", values.name);
    formData.set("phone", values.phone);
    formData.set("email", values.email);
    formData.set("projectLocation", values.projectLocation);
    formData.set("projectScope", values.projectScope);
    formData.set("desiredStartDate", values.desiredStartDate);
    formData.set("message", values.message);
    formData.set("leadSource", "builder-partner-page");
    if (values.consent) formData.set("consent", "on");
    photos.forEach((file) => formData.append("projectPhotos", file));

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Could not send inquiry");
      }
      trackConversion("generate_lead", { project_type: "builder_subcontracting" });
      setSubmitted(true);
    } catch {
      setError("We couldn't send that. Please call or email Andrew directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-soft text-3xl text-accent">✓</span>
        <h2 className="mt-6 font-display text-3xl font-medium text-ink">Thanks—your project is on our radar.</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted">
          Andrew will review the scope and follow up about fit, availability, and next steps.
        </p>
        <a href={siteConfig.contact.phoneHref} className="mt-7 font-bold text-accent underline underline-offset-4">
          Need a quick answer? Call {siteConfig.contact.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>Website<input value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" value={values.company} onChange={(value) => set("company", value)} autoComplete="organization" required />
        <Field label="Your name" value={values.name} onChange={(value) => set("name", value)} autoComplete="name" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" type="tel" value={values.phone} onChange={(value) => set("phone", value)} autoComplete="tel" required />
        <Field label="Email" type="email" value={values.email} onChange={(value) => set("email", value)} autoComplete="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project location" value={values.projectLocation} onChange={(value) => set("projectLocation", value)} placeholder="City or jobsite ZIP" required />
        <Field label="Target start date" type="date" value={values.desiredStartDate} onChange={(value) => set("desiredStartDate", value)} />
      </div>

      <label className="grid gap-2">
        <span className="text-xs font-semibold text-ink">Scope you need covered</span>
        <select value={values.projectScope} onChange={(event) => set("projectScope", event.target.value)} required className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-accent">
          <option value="">Select the closest fit</option>
          <option value="bathroom">Bathroom renovation scope</option>
          <option value="kitchen">Kitchen renovation scope</option>
          <option value="masonry">Masonry or stonework scope</option>
          <option value="interior">Interior renovation scope</option>
          <option value="punch-list">Punch-list or finish work</option>
          <option value="ongoing">Ongoing trade partnership</option>
          <option value="other">Other / not sure yet</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-xs font-semibold text-ink">Project details</span>
        <textarea
          value={values.message}
          onChange={(event) => set("message", event.target.value)}
          rows={5}
          required
          placeholder="Tell us the scope, approximate size, current stage, schedule, and what you need from a subcontractor."
          className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/65 focus:border-accent"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-xs font-semibold text-ink">Plans or site photos <span className="font-normal text-muted">(optional)</span></span>
        <span className="rounded-xl border border-dashed border-accent/35 bg-navy-soft/30 px-4 py-4">
          <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" multiple onChange={(event) => setPhotos(Array.from(event.target.files ?? []))} className="block w-full text-xs text-muted file:mr-4 file:rounded-lg file:border-0 file:bg-navy file:px-4 file:py-2.5 file:text-xs file:font-bold file:text-white hover:file:bg-accent" />
          {photos.length > 0 && <span className="mt-2 block text-[11px] text-muted">{photos.length} file{photos.length === 1 ? "" : "s"} selected</span>}
        </span>
      </label>

      <label className="flex items-start gap-3 text-xs leading-5 text-muted">
        <input type="checkbox" checked={values.consent} onChange={(event) => set("consent", event.target.checked)} required className="mt-1 accent-accent" />
        <span>I agree to be contacted about this project and acknowledge the <Link href="/privacy" className="font-semibold text-accent underline underline-offset-4">Privacy Policy</Link>.</span>
      </label>

      {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      <button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-xl bg-cta px-7 py-4 text-sm font-bold text-navy-deep shadow-[0_10px_25px_rgba(7,27,45,0.16)] transition hover:-translate-y-0.5 hover:bg-cta-dark disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? "Sending…" : "Send Subcontracting Inquiry"}
      </button>
      <p className="text-center text-[11px] leading-5 text-muted">No polished bid package required. Send what you have and we’ll tell you quickly whether the project is a fit.</p>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", ...props }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean; autoComplete?: string; placeholder?: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-ink">{label}{props.required ? " *" : ""}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/65 focus:border-accent" {...props} />
    </label>
  );
}
