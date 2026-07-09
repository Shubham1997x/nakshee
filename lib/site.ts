export const SITE_NAME = "Nakshee";
export const SITE_URL = "https://nakshee.in";
export const SITE_TAGLINE = "Invest in your health and heritage";

/**
 * TODO(client): confirm real contact details — the current site publishes none.
 * The WhatsApp number drives every inquiry CTA; replace before launch.
 */
export const CONTACT = {
  whatsapp: "+91 00000 00000",
  whatsappNumber: "910000000000", // digits only, for wa.me links
  email: "hello@nakshee.in",
  phone: "+91 00000 00000",
  address: "India",
};

export const SOCIALS = {
  instagram: "https://www.instagram.com/nakshee",
  facebook: "https://www.facebook.com/nakshee",
};

export const NAV_LINKS = [
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns & Buy-Back", href: "/returns" },
  { label: "Terms of Service", href: "/terms" },
] as const;
