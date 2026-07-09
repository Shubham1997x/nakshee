import { CONTACT, SITE_URL } from "@/lib/site";
import type { Product } from "@/types";

export function buildWhatsAppUrl(product?: Pick<Product, "name" | "slug">) {
  const message = product
    ? `Hello Nakshee, I'd like to know more about the ${product.name} (${SITE_URL}/products/${product.slug}).`
    : "Hello Nakshee, I'd like to know more about your Kansa collection.";
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
