// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://macrobyte.my";
  const now = new Date();

  const routes = [
    "/",

    // language root pages
    "/en",
    "/bm",
    "/zh",

    // services
    "/en/services",
    "/bm/services",
    "/zh/services",

    // pricing
    "/en/pricing",
    "/bm/pricing",
    "/zh/pricing",

    // contact
    "/en/contact",
    "/bm/contact",
    "/zh/contact",

    // faq
    "/en/faq",
    "/bm/faq",
    "/zh/faq",

    // thank you
    "/en/thank-you",
    "/bm/thank-you",
    "/zh/thank-you",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}