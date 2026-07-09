import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    slug: "the-first-table",
    name: "The First Table",
    story:
      "Where most people begin: a glass, a bowl, a thali. The essential pieces for a first Kansa table, chosen so each one earns its place before you add the next.",
    image: {
      src: "/images/products/glass-bowl-combo.jpg",
      alt: "Kansa glass and bowl — the first pieces of a Kansa table",
      width: 2560,
      height: 1707,
    },
    productSlugs: ["glass-bowl-combo", "kansa-glass", "kansa-bowl", "kansa-thali"],
  },
  {
    slug: "the-gilat-heritage",
    name: "The Gilat Heritage",
    story:
      "The soft moon-polish finish your grandmother's thali had. Our artisans still achieve gilat entirely by hand — this collection keeps that finish alive.",
    image: {
      src: "/images/products/gilat-thali-set.jpg",
      alt: "Gilat-finish Kansa thali set",
      width: 2560,
      height: 1707,
    },
    productSlugs: ["gilat-thali", "gilat-thali-set", "pachahad-set"],
  },
  {
    slug: "the-heirloom-gift",
    name: "The Heirloom Gift",
    story:
      "Sets that mark occasions — weddings, festivals, milestones. Kansa holds its material value for generations, which is why it has always been given, not just bought.",
    image: {
      src: "/images/products/thali-set-grand.jpg",
      alt: "Grand Kansa thali set arranged for gifting",
      width: 1707,
      height: 2560,
    },
    productSlugs: ["heirloom-thali-set", "gift-glass-bowl-duo", "kansa-thali-set", "gilat-thali-set"],
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
