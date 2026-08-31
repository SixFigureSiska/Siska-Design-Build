// Central place for business details used across the site. Update these
// before launch — see README.md for the full pre-launch checklist.
export const siteConfig = {
  name: "Siska Design + Build",
  shortName: "Siska",
  tagline: "Design + Build",
  description:
    "Bathroom and kitchen remodeling with transparent, measurement-driven pricing. See your new space before you commit.",

  // TODO: replace with the real production domain before launch (used for
  // the sitemap and robots.txt).
  url: "https://www.siskadesignbuild.com",

  // TODO: replace with the real business contact details before launch.
  contact: {
    phone: "(518) 390-4252",
    phoneHref: "tel:+15183904252",
    email: "andrew@siskadesignbuild.com",
    serviceArea: "Serving Saratoga, the Capital Region, and Lake George areas",
    basedIn: "Based in Malta, NY",
    locality: "Malta",
    region: "NY",
    country: "US",
    schedulingUrl:
      process.env.NEXT_PUBLIC_SCHEDULING_URL || "tel:+15183904252",
  },

  serviceAreas: [
    "Malta",
    "Saratoga Springs",
    "Saratoga County",
    "New York Capital Region",
    "Lake George",
  ],

  googleBusinessProfileUrl:
    process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL || "",

  // TODO: replace with real profile URLs, or remove any platforms you don't use.
  social: [
    { label: "Instagram", href: "https://instagram.com/siskadesignbuild" },
    { label: "Houzz", href: "https://houzz.com/siskadesignbuild" },
    { label: "Facebook", href: "https://facebook.com/siskadesignbuild" },
  ],

  nav: [
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
