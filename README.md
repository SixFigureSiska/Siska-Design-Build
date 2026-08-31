# Siska Design + Build — Marketing Site

A multi-page sales site for **Siska Design + Build**, a bathroom and kitchen
remodeling contractor. Built with Next.js (App Router), TypeScript, and
Tailwind CSS v4.

Pages: **Home** (`/`), **Work** (`/work`), **Process** (`/process`),
**Services** (`/services`), **About** (`/about`), **Contact** (`/contact`).
Local-search landing pages are also available for **Bathroom Remodeling**
(`/bathroom-remodeling`) and **Kitchen Remodeling** (`/kitchen-remodeling`).
Home leads with a before/after comparison right under the hero, then teases
each other page with a "See more" link.

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whatever port is
printed in the terminal).

## What's placeholder right now

Everything here is real, working code — nothing is stubbed out structurally —
but several pieces of *content* are stand-ins until you provide the real
thing. Each is flagged in the code with a `TODO` comment or a visible
`[BRACKETED LABEL]`.

1. **Logo** — [components/Logo.tsx](components/Logo.tsx) is a coded wordmark
   built to match the description of the real logo (thin tracked "SISKA"
   over a small tracked "DESIGN + BUILD" with flanking rule lines), not the
   actual logo file. Once you have the real logo:
   - Drop the file into `public/` (e.g. `public/logo.svg`).
   - Replace the contents of `Logo.tsx` with an `<Image>` (or inline `<svg>`)
     pointing at it. Keep the `variant`/`size` props if you still want a
     dark-background version for the header-over-hero and footer.
   - Re-sample the exact navy from the real file and update `--accent` in
     [app/globals.css](app/globals.css) (currently `#2b4b73`, the brief's
     suggested approximation).
   - Replace [app/icon.svg](app/icon.svg) (the favicon) with a simplified
     mark from the real logo.

2. **Photography** — the hero, Services section, project cards, and matched
   comparison sliders use AI-generated concept photography created for the
   character and scale of Upstate New York homes. The active images live in
   `public/photos/upstate/` and are visibly described as design concepts —
   **none depict completed Siska projects**. Replace them with your own
   project photography before launch.

   Two exceptions: `service-kitchen.jpg` (Kitchens) and `service-custom.jpg`
   (Custom Projects) are real stock photos from Unsplash, used under the
   free [Unsplash License](https://unsplash.com/license) (no attribution
   required, free for commercial use) — not AI-generated, but also not
   real Siska project photos. Replace with real project photography
   before launch, same as the rest.

3. **Testimonials** — the three reviews in
   [components/Testimonials.tsx](components/Testimonials.tsx) are sample
   copy, clearly badged "Sample review — placeholder." Replace with real
   client quotes (and remove the badge) once you have permission to publish
   them. This component isn't currently rendered on any page — add it back
   in wherever you want it once the quotes are real.

4. **Business details** — phone, email, service area, license/insurance
   line, social links, and the production domain (used by the sitemap) all
   live in one place: [lib/siteConfig.ts](lib/siteConfig.ts). Update that
   file and it flows through the header, footer, and contact page
   automatically.

5. **Pricing ranges** — [components/Services.tsx](components/Services.tsx)
   shows an illustrative "Typical Investment" range per service
   (`$[18K] – $[65K]+`, etc.) — replace with your real pricing bands.

6. **Contact form** — [components/ContactSection.tsx](components/ContactSection.tsx)
   posts to [app/api/contact/route.ts](app/api/contact/route.ts), which emails
   the lead (and up to 5 attached photos, 4MB each) to
   `andrew@siskadesignbuild.com` via [Resend](https://resend.com) —
   see [lib/mail.ts](lib/mail.ts). Requires a `RESEND_API_KEY` in
   `.env.local` (see `.env.example`). The free Resend tier sends
   immediately to your own signup address with no setup; once the site is
   live on its real domain, verify `siskadesignbuild.com` in Resend and
   change the `from` address in `lib/mail.ts` for reliable inbox delivery.

7. **Map** — the "Service Area" block on the Contact page is a placeholder.
   Swap it for a real embedded map once you've settled on how you want to
   display your service area.

Note: there's intentionally no "years in business" / stats section anywhere
on the site — with no real track record to show yet, we left it out rather
than show placeholder numbers. Add one back in later (e.g. a small stats
strip) once you have real figures to put in it.

## Project structure

```
app/
  layout.tsx        — fonts, metadata, wraps every page in Header/Footer
  page.tsx           — Home
  work/page.tsx       — full portfolio, filterable by room
  process/page.tsx    — full process + FAQ
  services/page.tsx   — full services + FAQ
  about/page.tsx      — story, values
  contact/page.tsx    — quote request form
  globals.css        — brand colors & fonts (Tailwind v4 "@theme" tokens)
  sitemap.ts, robots.ts, icon.svg
components/
  Header.tsx, Footer.tsx, PageHeader.tsx   — site chrome
  Hero.tsx, FeaturedBeforeAfter.tsx         — Home's top-of-page section
  ValueProps.tsx, NewGuys.tsx                — trust strips
  ServicesTeaser.tsx, Services.tsx          — Home teaser vs. full /services content
  ProcessSteps.tsx, FAQ.tsx                 — the quoting process + Q&A (used on /process and /services)
  ResultsTeaser.tsx, ResultsGallery.tsx, BeforeAfterSlider.tsx — finished-work sections
  Testimonials.tsx, FinalCTA.tsx
  ContactSection.tsx                        — quote request form (used on /contact)
  Logo.tsx, Button.tsx, Container.tsx, SectionLabel.tsx, Photo.tsx, PlaceholderImage.tsx — shared building blocks
lib/
  siteConfig.ts      — business name, contact info, nav, social links
```

## Brand system

Defined in [app/globals.css](app/globals.css):

| Token           | Value              | Use                                  |
| --------------- | ------------------ | ------------------------------------- |
| `--ink`          | `#0a0a0a`           | Headlines, primary text on light bg  |
| `--paper`        | `#fafaf9`           | Main background                       |
| `--charcoal`     | `#1c1c1c`           | Dark sections (hero, footer, closing CTA) |
| `--accent`       | `#2b4b73`           | CTAs, labels, dividers — sample from the real logo and update once available |

Headlines use **Jost** (a geometric sans with generous tracking, echoing the
logo's wide letter-spacing); body copy uses **Inter**. Both load via
`next/font/google` in `app/layout.tsx`.

## Before launch

- [ ] Swap in the real logo and re-sample the accent color
- [ ] Replace generated concept photography with real Siska project photos
- [ ] Replace generated comparison pairs with real matched before/after photos
- [ ] Replace sample testimonials with real, permissioned client quotes
- [ ] Add a real stats/years-in-business section once you have figures to show
- [ ] Fill in real contact info, license/insurance number, and social links in `lib/siteConfig.ts`
- [ ] Fill in real pricing ranges in `components/Services.tsx`
- [ ] Sign up for [Resend](https://resend.com), add `RESEND_API_KEY` to
      `.env.local`, and verify `siskadesignbuild.com` there for reliable
      delivery of contact-form leads
- [ ] Set the real production domain in `lib/siteConfig.ts` (`url`)
- [ ] Copy `.env.example` to `.env.local` and add the Google Analytics ID,
      Search Console verification token, Google Business Profile URL, and
      scheduling URL
- [ ] Claim/update the Google Business Profile and set the production website URL
- [ ] Verify the production site in Google Search Console and submit `/sitemap.xml`
- [ ] Run `npm run build` once more to confirm everything still typechecks

## Google and scheduling configuration

The site includes Google Analytics 4, Search Console verification, local
business structured data, lead-conversion events, and a scheduling-link hook.
These remain inactive until the corresponding public values are supplied.

```bash
cp .env.example .env.local
```

Fill in the values in `.env.local`:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 measurement ID
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Search Console verification token
- `NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL` — claimed profile's public URL
- `NEXT_PUBLIC_SCHEDULING_URL` — Calendly or Google Calendar appointment link

Tracked conversion events include `generate_lead`, `schedule_call`,
`phone_click`, and `email_click`.
