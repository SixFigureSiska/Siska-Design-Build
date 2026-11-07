import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/work",
    "/process",
    "/services",
    "/bathroom-remodeling",
    "/kitchen-remodeling",
    "/masonry-stonework",
    "/general-contracting",
    "/builders",
    "/wetwall-showers",
    "/bathroom-refresh",
    "/about",
    "/contact",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "/privacy" ? "yearly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" ? 0.3 : 0.8,
  }));
}
