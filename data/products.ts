import type { CategorySlug, Product } from "@/types";

/**
 * Curated catalog rebuilt from the client's genuine Kansa range.
 * Prices intentionally omitted (renders "Price on inquiry") —
 * TODO(client): confirm launch prices; the old site's ₹6–₹27 values were placeholders.
 */

const KANSA_BENEFITS = [
  "Supports digestion and gut health, as traditionally described in Ayurveda",
  "Helps balance the body's pH when used for everyday meals",
  "Naturally non-toxic — 100% lead-free bell metal",
  "Mildly antibacterial surface keeps food and water fresher",
];

const KANSA_CARE = [
  "Wash by hand with a mild detergent and a soft sponge — never in a dishwasher",
  "Restore the shine with a paste of tamarind or lemon and salt, then rinse and dry",
  "Dry immediately after washing to prevent water spots",
  "Avoid prolonged contact with highly acidic foods such as tamarind curries or citrus",
];

const spec = (label: string, value: string) => ({ label, value });

const BELL_METAL = spec("Material", "Pure Kansa (bell metal) — copper and tin, traditionally balanced");
const FINISH = spec("Finish", "Hand-hammered and hand-polished");
const CRAFT = spec("Craft", "Each piece is individually made; slight variations are the maker's signature");

export const products: Product[] = [
  // ── Dinnerware ──────────────────────────────────────────
  {
    slug: "kansa-thali-set",
    name: "Kansa Thali Set",
    category: "dinnerware",
    material: "kansa",
    shortDescription:
      "A complete hand-hammered dinner setting — thali, katoris, glass and spoon in pure bell metal.",
    description:
      "The centrepiece of the Nakshee range. One thali, matched katoris, a drinking glass and a spoon, each hammered from the same traditionally balanced Kansa. Set a full meal on it and eat the way Indian households have for three thousand years — warm metal, honest food, nothing in between.",
    images: [
      { src: "/images/products/kansa-thali-set.jpg", alt: "Complete Kansa thali set with katoris and glass", width: 2560, height: 1707 },
      { src: "/images/products/thali-set-grand.jpg", alt: "Kansa thali set arranged for a full meal", width: 1707, height: 2560 },
    ],
    specs: [BELL_METAL, spec("Set includes", "1 thali, 2 katoris, 1 glass, 1 spoon"), spec("Thali diameter", "Approx. 12 in / 30 cm"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    featured: true,
    relatedSlugs: ["kansa-thali", "gilat-thali-set", "heirloom-thali-set"],
  },
  {
    slug: "kansa-thali",
    name: "Kansa Thali",
    category: "dinnerware",
    material: "kansa",
    shortDescription: "A single hand-hammered dining thali in pure bell metal.",
    description:
      "The everyday thali, made properly. Hammered from a single sheet of pure Kansa, its shallow rim holds a full meal while the hammered surface scatters light the way only hand-worked metal can.",
    images: [
      { src: "/images/products/kansa-thali.jpg", alt: "Hand-hammered Kansa thali", width: 2560, height: 1707 },
      { src: "/images/products/thali.jpg", alt: "Kansa thali on a dining table", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Diameter", "Approx. 12 in / 30 cm"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    relatedSlugs: ["kansa-thali-set", "kansa-plate", "gilat-thali"],
  },
  {
    slug: "gilat-thali",
    name: "Gilat Thali",
    category: "dinnerware",
    material: "kansa",
    shortDescription: "The classic gilat-finish thali — softly lustrous, deeply traditional.",
    description:
      "Gilat is the finish elders remember: a soft, moon-like lustre achieved by hand-polishing hammered Kansa. This thali brings that heirloom glow back to the modern table.",
    images: [
      { src: "/images/products/gilat-thali.jpg", alt: "Gilat-finish Kansa thali", width: 2560, height: 1707 },
      { src: "/images/products/gilat-thali-set.jpg", alt: "Gilat thali with matching pieces", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Diameter", "Approx. 11 in / 28 cm"), spec("Finish", "Traditional gilat hand-polish"), CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    featured: true,
    relatedSlugs: ["gilat-thali-set", "kansa-thali", "kansa-plate"],
  },
  {
    slug: "gilat-thali-set",
    name: "Gilat Thali Set",
    category: "dinnerware",
    material: "kansa",
    shortDescription: "A full gilat-finish dinner setting for one — thali, katoris and glass.",
    description:
      "The complete gilat experience: thali, katoris and glass, all finished with the traditional hand-polish that gives Kansa its soft festival shine. The set our customers most often gift to their parents.",
    images: [
      { src: "/images/products/gilat-thali-set.jpg", alt: "Gilat thali set with katoris and glass", width: 2560, height: 1707 },
      { src: "/images/products/gilat-thali.jpg", alt: "Gilat-finish Kansa thali detail", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "1 thali, 2 katoris, 1 glass"), spec("Finish", "Traditional gilat hand-polish"), CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    relatedSlugs: ["gilat-thali", "kansa-thali-set", "heirloom-thali-set"],
  },
  {
    slug: "kansa-plate",
    name: "Kansa Plate",
    category: "dinnerware",
    material: "kansa",
    shortDescription: "A rimmed everyday plate in hand-hammered bell metal.",
    description:
      "Smaller than a thali, larger than a katori — the plate for breakfasts, snacks and sweets. Hammered and polished by hand so it ages into character rather than out of it.",
    images: [
      { src: "/images/products/plate.jpg", alt: "Hand-hammered Kansa plate", width: 2560, height: 1707 },
      { src: "/images/products/glass-bowl-set.jpg", alt: "Kansa plate with glass and bowl", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Diameter", "Approx. 8 in / 20 cm"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    relatedSlugs: ["kansa-thali", "kansa-bowl", "kansa-spoon-set"],
  },

  // ── Drinkware ───────────────────────────────────────────
  {
    slug: "kansa-glass",
    name: "Kansa Glass",
    category: "drinkware",
    material: "kansa",
    shortDescription: "The classic bell-metal drinking glass, hammered by hand.",
    description:
      "Ayurveda recommends storing and drinking water from Kansa. This glass makes the ritual effortless — cool to the lip, softly hammered in the hand, and quietly beautiful on any table.",
    images: [
      { src: "/images/products/kansa-glass.jpg", alt: "Hand-hammered Kansa drinking glass", width: 2560, height: 1707 },
      { src: "/images/products/kansa-glass-pair.jpg", alt: "Pair of Kansa glasses", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Capacity", "Approx. 250 ml"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    featured: true,
    relatedSlugs: ["kansa-glass-set", "pachahad-set", "glass-bowl-combo"],
  },
  {
    slug: "kansa-glass-set",
    name: "Kansa Glass Set",
    category: "drinkware",
    material: "kansa",
    shortDescription: "A matched set of hand-hammered Kansa glasses for the family table.",
    description:
      "Water tastes different when the whole table drinks from Kansa. A matched set of hand-hammered glasses, each with its own pattern of strike marks — same family, different fingerprints.",
    images: [
      { src: "/images/products/glass-set.jpg", alt: "Set of Kansa drinking glasses", width: 2560, height: 1707 },
      { src: "/images/products/kansa-glass-pair.jpg", alt: "Two Kansa glasses side by side", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "4 glasses"), spec("Capacity", "Approx. 250 ml each"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    relatedSlugs: ["kansa-glass", "glass-bowl-set", "gift-glass-bowl-duo"],
  },
  {
    slug: "pachahad-set",
    name: "Pachahad Set",
    category: "drinkware",
    material: "kansa",
    shortDescription: "The traditional pachahad drinking vessels, revived in pure Kansa.",
    description:
      "A regional classic few still make: the pachahad, the household water vessel of old bell-metal kitchens. Nakshee's artisans hammer it exactly as their grandfathers did — a living piece of drinking heritage.",
    images: [
      { src: "/images/products/pachahad-set.jpg", alt: "Traditional Kansa pachahad set", width: 2560, height: 1707 },
      { src: "/images/products/pachahad-detail.jpg", alt: "Pachahad vessel detail", width: 1707, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "2 pachahad vessels"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    isNew: true,
    relatedSlugs: ["kansa-glass", "kansa-glass-set", "kansa-bowl"],
  },

  // ── Serveware ───────────────────────────────────────────
  {
    slug: "kansa-bowl",
    name: "Kansa Bowl",
    category: "serveware",
    material: "kansa",
    shortDescription: "A hand-hammered bell-metal bowl for dals, curries and desserts.",
    description:
      "The workhorse of the Kansa kitchen. Deep enough for dal, elegant enough for kheer at a dinner party, and hammered by hand so it catches candlelight like nothing machine-made can.",
    images: [
      { src: "/images/products/bowl.jpg", alt: "Hand-hammered Kansa bowl", width: 2560, height: 1707 },
      { src: "/images/products/bowl-hero.jpg", alt: "Kansa bowl on a set table", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Capacity", "Approx. 300 ml"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    featured: true,
    relatedSlugs: ["kansa-bowl-set", "glass-bowl-combo", "kansa-plate"],
  },
  {
    slug: "kansa-bowl-set",
    name: "Kansa Bowl Set",
    category: "serveware",
    material: "kansa",
    shortDescription: "A matched set of hammered Kansa bowls for serving and everyday meals.",
    description:
      "Four bowls, one maker's rhythm. Serve a full spread — dal, sabzi, raita, sweet — in matched hammered Kansa and watch a weekday dinner turn into an occasion.",
    images: [
      { src: "/images/products/bowl-set.jpg", alt: "Set of hammered Kansa bowls", width: 1707, height: 2560 },
      { src: "/images/products/bowl.jpg", alt: "Single Kansa bowl detail", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "4 bowls"), spec("Capacity", "Approx. 300 ml each"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    relatedSlugs: ["kansa-bowl", "glass-bowl-set", "kansa-thali-set"],
  },
  {
    slug: "glass-bowl-combo",
    name: "Glass & Bowl Combo",
    category: "serveware",
    material: "kansa",
    shortDescription: "The everyday pair — one Kansa glass, one Kansa bowl.",
    description:
      "The simplest way to begin with Kansa: a glass for your water, a bowl for your meal. The pair most first-time customers choose — and the one they come back from.",
    images: [
      { src: "/images/products/glass-bowl-combo.jpg", alt: "Kansa glass and bowl combination", width: 2560, height: 1707 },
      { src: "/images/products/glass-bowl-set.jpg", alt: "Kansa glass and bowl on a table", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "1 glass, 1 bowl"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    relatedSlugs: ["kansa-glass", "kansa-bowl", "gift-glass-bowl-duo"],
  },
  {
    slug: "glass-bowl-set",
    name: "Glass & Bowl Set",
    category: "serveware",
    material: "kansa",
    shortDescription: "A family set of matched Kansa glasses and bowls.",
    description:
      "Everything the everyday table needs in bell metal: matched glasses and bowls for the whole family, hammered in the same workshop batch so their tone ages together.",
    images: [
      { src: "/images/products/glass-bowl-set.jpg", alt: "Set of Kansa glasses and bowls", width: 2560, height: 1707 },
      { src: "/images/products/glass-bowl-combo.jpg", alt: "Kansa glass and bowl pairing", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "2 glasses, 2 bowls"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    relatedSlugs: ["glass-bowl-combo", "kansa-bowl-set", "kansa-glass-set"],
  },

  // ── Accessories ─────────────────────────────────────────
  {
    slug: "kansa-spoon-set",
    name: "Kansa Spoon Set",
    category: "accessories",
    material: "kansa",
    shortDescription: "Hand-finished bell-metal spoons that complete the Kansa table.",
    description:
      "A detail most tables miss. These spoons are cast and finished by hand in the same pure Kansa as our thalis, so every course — from first sip to last bite — touches only honest metal.",
    images: [
      { src: "/images/products/spoon-set.jpg", alt: "Set of handcrafted Kansa spoons", width: 2560, height: 1707 },
      { src: "/images/products/thali.jpg", alt: "Kansa spoons with thali", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "6 spoons"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    featured: true,
    relatedSlugs: ["kansa-thali-set", "kansa-bowl", "kansa-plate"],
  },

  // ── Wedding & Gifting ───────────────────────────────────
  {
    slug: "heirloom-thali-set",
    name: "Heirloom Wedding Thali Set",
    category: "wedding-gifting",
    material: "kansa",
    shortDescription: "The grand thali set, gift-ready — a wedding tradition made to last generations.",
    description:
      "In many Indian families a Kansa thali still marks a wedding. This grand set — thali, katoris, glass, spoon and serving bowl — arrives gift-ready and carries Nakshee's buy-back promise: the metal keeps its worth for the generation after next.",
    images: [
      { src: "/images/products/thali-set-grand.jpg", alt: "Grand Kansa thali set arranged for gifting", width: 1707, height: 2560 },
      { src: "/images/products/kansa-thali-set.jpg", alt: "Complete Kansa thali set", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "1 thali, 3 katoris, 1 glass, 1 spoon, 1 serving bowl"), spec("Packaging", "Gift-ready presentation box"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    featured: true,
    relatedSlugs: ["kansa-thali-set", "gilat-thali-set", "gift-glass-bowl-duo"],
  },
  {
    slug: "gift-glass-bowl-duo",
    name: "Gifting Duo — Glass & Bowl",
    category: "wedding-gifting",
    material: "kansa",
    shortDescription: "A gift-boxed Kansa glass and bowl pair for festivals and corporate gifting.",
    description:
      "The thoughtful corporate and festival gift: one glass, one bowl, hand-hammered and boxed. Meaningful, useful and permanent — the opposite of a gift card.",
    images: [
      { src: "/images/products/glass-bowl-combo.jpg", alt: "Gift-ready Kansa glass and bowl duo", width: 2560, height: 1707 },
      { src: "/images/products/bowl-hero.jpg", alt: "Kansa bowl on a set table", width: 2560, height: 1707 },
    ],
    specs: [BELL_METAL, spec("Set includes", "1 glass, 1 bowl"), spec("Packaging", "Gift-ready presentation box"), FINISH, CRAFT],
    benefits: KANSA_BENEFITS,
    care: KANSA_CARE,
    isNew: true,
    relatedSlugs: ["glass-bowl-combo", "heirloom-thali-set", "kansa-glass"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

export function getFeatured() {
  return products.filter((p) => p.featured);
}

export function getRelated(product: Product, limit = 4) {
  const related = (product.relatedSlugs ?? [])
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
  if (related.length < limit) {
    for (const p of getProductsByCategory(product.category)) {
      if (related.length >= limit) break;
      if (p.slug !== product.slug && !related.includes(p)) related.push(p);
    }
  }
  return related.slice(0, limit);
}
