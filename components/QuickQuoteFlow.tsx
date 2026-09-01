"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { trackConversion } from "@/lib/analytics";

type Values = {
  name: string;
  phone: string;
  email: string;
  projectLocation: string;
  projectType: string;
  desiredStartDate: string;
  leadSource: string;
  message: string;
  consent: boolean;
};

const INITIAL_VALUES: Values = {
  name: "",
  phone: "",
  email: "",
  projectLocation: "",
  projectType: "",
  desiredStartDate: "",
  leadSource: "",
  message: "",
  consent: false,
};

const STEPS = [
  {
    eyebrow: "Step 1 of 3",
    title: "Who are we talking to?",
    subtitle: "So we know how to reach you.",
    required: ["name", "phone", "email"] as (keyof Values)[],
  },
  {
    eyebrow: "Step 2 of 3",
    title: "What are we building?",
    subtitle: "Where the project is, and what you're picturing.",
    required: ["projectLocation", "projectType"] as (keyof Values)[],
  },
  {
    eyebrow: "Step 3 of 3",
    title: "Last few things.",
    subtitle: "Photos help, but everything here except consent is optional.",
    required: ["leadSource", "consent"] as (keyof Values)[],
  },
];

export function QuickQuoteFlow({
  variant = "page",
  onClose,
}: {
  variant?: "page" | "modal";
  onClose?: () => void;
}) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [values, setValues] = useState<Values>(INITIAL_VALUES);
  const [photos, setPhotos] = useState<File[]>([]);
  const [honeypot, setHoneypot] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const current = STEPS[step];
  const missing = useMemo(
    () =>
      current.required.filter((key) => {
        const val = values[key];
        return typeof val === "boolean" ? !val : !val.trim();
      }),
    [current, values],
  );

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function goNext() {
    if (missing.length > 0) {
      setTouched(true);
      return;
    }
    setTouched(false);
    setDirection("forward");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goBack() {
    setTouched(false);
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    if (missing.length > 0) {
      setTouched(true);
      return;
    }
    setSubmitting(true);
    setError(null);

    const formData = new FormData();
    formData.set("company", honeypot);
    formData.set("name", values.name);
    formData.set("phone", values.phone);
    formData.set("email", values.email);
    formData.set("projectLocation", values.projectLocation);
    formData.set("projectType", values.projectType);
    formData.set("desiredStartDate", values.desiredStartDate);
    formData.set("leadSource", values.leadSource);
    formData.set("message", values.message);
    formData.set("consent", "on");
    photos.forEach((file) => formData.append("projectPhotos", file));

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong");
      }
      trackConversion("generate_lead", {
        project_type: values.projectType || "not_selected",
        lead_source: values.leadSource || "not_selected",
      });
      setSubmitted(true);
    } catch {
      setError("We couldn't send that. Please call us or try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const isModal = variant === "modal";
  const animClass = direction === "forward" ? "animate-[quote-step-in-forward_0.42s_cubic-bezier(0.16,1,0.3,1)]" : "animate-[quote-step-in-back_0.42s_cubic-bezier(0.16,1,0.3,1)]";

  if (submitted) {
    return (
      <div className={`flex flex-col items-center px-1 py-6 text-center ${isModal ? "" : "min-h-[26rem] justify-center"} animate-[quote-step-in-forward_0.5s_cubic-bezier(0.16,1,0.3,1)]`}>
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-soft text-3xl text-accent">✓</span>
        <h2 className="mt-6 font-display text-3xl font-medium text-ink sm:text-4xl">Thanks—we have your details.</h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">Choose a time to talk with the team, or call us directly if you would rather speak now.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.contact.schedulingUrl}
            target={siteConfig.contact.schedulingUrl.startsWith("http") ? "_blank" : undefined}
            rel={siteConfig.contact.schedulingUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={() => trackConversion("schedule_call")}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(7,27,45,0.18)] transition hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            Schedule a Call
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            onClick={() => trackConversion("phone_click")}
            className="inline-flex items-center justify-center rounded-xl border border-accent/30 bg-white px-6 py-3.5 text-sm font-bold text-accent transition hover:border-accent hover:bg-navy-soft/45"
          >
            Call {siteConfig.contact.phone}
          </a>
        </div>
        {isModal && onClose ? (
          <button type="button" onClick={onClose} className="mt-7 text-xs font-semibold text-muted underline underline-offset-4 hover:text-ink">
            Close
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setValues(INITIAL_VALUES);
              setPhotos([]);
              setStep(0);
            }}
            className="mt-7 text-xs font-semibold text-muted underline underline-offset-4 hover:text-ink"
          >
            Submit another project
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="px-1">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {STEPS.map((s, i) => (
          <div key={s.title} className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
              style={{ width: i < step ? "100%" : i === step ? "50%" : "0%" }}
            />
          </div>
        ))}
      </div>

      {/* Honeypot — invisible to real visitors, but a naive bot filling
          every input it finds will populate this and get silently
          rejected server-side. Present on every step, not just one. */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div key={step} className={`mt-7 ${animClass}`}>
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{current.eyebrow}</p>
        <h2 className="mt-2 font-display text-[28px] font-medium leading-[1.1] text-ink sm:text-[34px]">{current.title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{current.subtitle}</p>

        <div className="mt-7 grid gap-5">
          {step === 0 && (
            <>
              <Field label="Full Name" value={values.name} onChange={(v) => set("name", v)} autoComplete="name" invalid={touched && !values.name.trim()} autoFocus />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" type="tel" value={values.phone} onChange={(v) => set("phone", v)} autoComplete="tel" invalid={touched && !values.phone.trim()} />
                <Field label="Email" type="email" value={values.email} onChange={(v) => set("email", v)} autoComplete="email" invalid={touched && !values.email.trim()} />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <Field
                label="Project Address or ZIP Code"
                value={values.projectLocation}
                onChange={(v) => set("projectLocation", v)}
                autoComplete="street-address"
                placeholder="Malta, NY 12020"
                invalid={touched && !values.projectLocation.trim()}
                autoFocus
              />
              <SelectField
                label="Project Type"
                value={values.projectType}
                onChange={(v) => set("projectType", v)}
                invalid={touched && !values.projectType.trim()}
                options={[
                  { value: "bathroom", label: "Bathroom Remodel" },
                  { value: "kitchen", label: "Kitchen Remodel" },
                  { value: "both", label: "Bathroom + Kitchen" },
                  { value: "custom", label: "Custom Interior Project" },
                ]}
              />
              <Field
                label="Desired Start Date (optional)"
                type="date"
                value={values.desiredStartDate}
                onChange={(v) => set("desiredStartDate", v)}
                invalid={touched && !values.desiredStartDate.trim()}
              />
            </>
          )}

          {step === 2 && (
            <>
              <SelectField
                label="How did you hear about SISKA?"
                value={values.leadSource}
                onChange={(v) => set("leadSource", v)}
                invalid={touched && !values.leadSource.trim()}
                options={[
                  { value: "google", label: "Google search" },
                  { value: "referral", label: "Friend or client referral" },
                  { value: "social", label: "Social media" },
                  { value: "sign-vehicle", label: "Jobsite sign or vehicle" },
                  { value: "other", label: "Other" },
                ]}
              />
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-ink">
                  Project Details <span className="font-normal text-muted">(optional)</span>
                </span>
                <textarea
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  rows={4}
                  placeholder="What would you like to change? Include the room, your goals, and any timing you have in mind."
                  className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/65 focus:border-accent"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-ink">
                  Project Photos <span className="font-normal text-muted">(optional)</span>
                </span>
                <span className="rounded-xl border border-dashed border-accent/35 bg-navy-soft/30 px-4 py-4">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={(e) => setPhotos(Array.from(e.target.files ?? []))}
                    className="block w-full text-xs text-muted file:mr-4 file:rounded-lg file:border-0 file:bg-navy file:px-4 file:py-2.5 file:text-xs file:font-bold file:text-white hover:file:bg-accent"
                  />
                  {photos.length > 0 && <span className="mt-2 block text-[11px] leading-4 text-muted">{photos.length} photo{photos.length === 1 ? "" : "s"} selected</span>}
                </span>
              </label>
              <label className={`flex items-start gap-3 text-xs leading-5 ${touched && !values.consent ? "text-red-600" : "text-muted"}`}>
                <input
                  type="checkbox"
                  checked={values.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  className="mt-1 accent-accent"
                />
                <span>
                  I agree to be contacted about this renovation request and acknowledge the{" "}
                  <Link href="/privacy" className="font-semibold text-accent underline underline-offset-4">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </>
          )}
        </div>

        {touched && missing.length > 0 && <p className="mt-4 text-xs font-semibold text-red-600">Please fill in the highlighted field{missing.length === 1 ? "" : "s"} above.</p>}
        {error && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        <div className="mt-7 flex items-center justify-between gap-4">
          {step > 0 ? (
            <button type="button" onClick={goBack} className="text-xs font-bold uppercase tracking-[0.08em] text-muted transition hover:text-ink">
              ← Back
            </button>
          ) : (
            <span />
          )}
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(7,27,45,0.18)] transition hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Continue
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(7,27,45,0.18)] transition hover:-translate-y-0.5 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Get My Free Quote"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  invalid,
  autoFocus,
  ...rest
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  invalid?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-ink">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={autoFocus}
        className={`rounded-xl border bg-paper px-4 py-3 text-sm text-ink focus:border-accent ${invalid ? "border-red-400" : "border-line"}`}
        {...rest}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  invalid,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  invalid?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-ink">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-xl border bg-paper px-4 py-3 text-sm text-ink focus:border-accent ${invalid ? "border-red-400" : "border-line"}`}
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
