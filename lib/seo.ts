import { CONTACT, SITE_NAME, SITE_URL, SOCIALS } from "@/lib/site";
import type { Faq, Product } from "@/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/nakshee-logo.png`,
    sameAs: [SOCIALS.instagram, SOCIALS.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT.email,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((i) => `${SITE_URL}${i.src}`),
    brand: { "@type": "Brand", name: SITE_NAME },
    material: "Bronze (Kansa bell metal)",
    url: `${SITE_URL}/products/${product.slug}`,
    ...(product.price !== undefined && {
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/products/${product.slug}`,
      },
    }),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
