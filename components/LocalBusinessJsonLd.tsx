import { siteConfig } from "@/lib/siteConfig";

export function LocalBusinessJsonLd() {
  const sameAs = siteConfig.googleBusinessProfileUrl
    ? [siteConfig.googleBusinessProfileUrl]
    : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: [
      "Siska Design and Build",
      "Siska Design & Build",
      "Siska Construction",
      "Siska Builders",
      "Siska Build",
      "Siska Design",
      "Siska Tile",
    ],
    url: siteConfig.url,
    image: `${siteConfig.url}/photos/upstate/hero-bathroom-v2.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.locality,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.country,
    },
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Remodeling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Remodeling",
            url: `${siteConfig.url}/bathroom-remodeling`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Remodeling",
            url: `${siteConfig.url}/kitchen-remodeling`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Interior Remodeling",
            url: `${siteConfig.url}/services`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tile Installation",
            url: `${siteConfig.url}/services`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "General Contracting",
            url: `${siteConfig.url}/services`,
          },
        },
      ],
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
