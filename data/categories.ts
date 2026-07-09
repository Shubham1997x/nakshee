import type { Category, CategorySlug } from "@/types";

export const categories: Category[] = [
  {
    slug: "dinnerware",
    name: "Dinnerware",
    tagline: "The thali, honoured",
    description:
      "Thalis, plates and full dinner sets hand-hammered from pure Kansa. Each surface carries the maker's strike marks — no two plates dine alike.",
    heroImage: {
      src: "/images/products/gilat-thali.jpg",
      alt: "Hand-hammered Kansa gilat thali",
      width: 2560,
      height: 1707,
    },
    seoDescription:
      "Handcrafted Kansa dinnerware — bronze thalis, plates and dinner sets made by Indian artisans. 100% pure, lead-free bell metal.",
  },
  {
    slug: "drinkware",
    name: "Drinkware",
    tagline: "Water, the Ayurvedic way",
    description:
      "Glasses and pachahad vessels in pure bell metal. Ayurveda has trusted Kansa to hold drinking water for over three thousand years.",
    heroImage: {
      src: "/images/products/kansa-glass-pair.jpg",
      alt: "Pair of Kansa drinking glasses",
      width: 2560,
      height: 1707,
    },
    seoDescription:
      "Pure Kansa drinkware — bronze glasses and traditional vessels for Ayurvedic drinking. Lead-free, handcrafted in India.",
  },
  {
    slug: "serveware",
    name: "Serveware",
    tagline: "From the maker's hand to your table",
    description:
      "Bowls, katoris and serving combinations that bring the warm glow of hammered bronze to every course.",
    heroImage: {
      src: "/images/products/bowl-hero.jpg",
      alt: "Kansa serving bowl on a table",
      width: 2560,
      height: 1707,
    },
    seoDescription:
      "Handcrafted Kansa serveware — bronze bowls, katoris and serving sets. Artisan-made, lead-free bell metal.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "The details of the table",
    description:
      "Spoons and everyday pieces, finished with the same care as our largest thali. Small in the hand, generous in craft.",
    heroImage: {
      src: "/images/products/spoon-set.jpg",
      alt: "Set of handcrafted Kansa spoons",
      width: 2560,
      height: 1707,
    },
    seoDescription:
      "Kansa table accessories — handcrafted bronze spoons and everyday essentials, lead-free and artisan-made.",
  },
  {
    slug: "wedding-gifting",
    name: "Wedding & Gifting",
    tagline: "Gifts that outlive occasions",
    description:
      "Curated sets for weddings, festivals and corporate gifting. Kansa holds its material value for generations — a gift that becomes an heirloom.",
    heroImage: {
      src: "/images/products/thali-set-grand.jpg",
      alt: "Grand Kansa thali set arranged for gifting",
      width: 1707,
      height: 2560,
    },
    seoDescription:
      "Kansa wedding and corporate gift sets — heirloom bronze thali sets and curated collections, handcrafted in India.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function isCategorySlug(slug: string): slug is CategorySlug {
  return categories.some((c) => c.slug === slug);
}
