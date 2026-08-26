import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { SITE_URL } from "@/lib/seo";

// Indexable content pages. Transactional and account routes (/cart, /checkout,
// /login, /register, /account, /track, /payment-capture) are deliberately
// excluded here and disallowed in robots.ts — they hold no search value.
const CONTENT_PAGES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/products", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/why-us", priority: 0.7 },
  { path: "/wholesale", priority: 0.7 },
  { path: "/press-release", priority: 0.5 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/refund-policy", priority: 0.3 },
  { path: "/shipping-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = CONTENT_PAGES.map(({ path, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const products = PRODUCTS.map((product) => ({
    url: new URL(`/products/${product.slug}`, SITE_URL).toString(),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...products];
}
