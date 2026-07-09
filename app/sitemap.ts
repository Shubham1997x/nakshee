import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/collections",
    "/about",
    "/contact",
    "/privacy-policy",
    "/shipping-policy",
    "/returns",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${SITE_URL}/collections/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
