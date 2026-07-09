export type CategorySlug =
  | "dinnerware"
  | "drinkware"
  | "serveware"
  | "accessories"
  | "wedding-gifting";

export type Material = "kansa" | "copper" | "brass";

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  material: Material;
  /** INR. Placeholder until client confirms — PDP renders "Price on inquiry" when undefined. */
  price?: number;
  shortDescription: string;
  description: string;
  images: ProductImage[];
  specs: ProductSpec[];
  benefits: string[];
  care: string[];
  featured?: boolean;
  isNew?: boolean;
  relatedSlugs?: string[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  heroImage: ProductImage;
  seoDescription: string;
}

export interface Collection {
  slug: string;
  name: string;
  story: string;
  image: ProductImage;
  productSlugs: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  context?: string;
}

export interface Faq {
  question: string;
  answer: string;
  category?: "product" | "care" | "shipping" | "gifting";
}
