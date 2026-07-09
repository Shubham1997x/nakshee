import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { CtaButton } from "@/components/ui/cta-button";
import { CONTACT, FOOTER_POLICY_LINKS, SITE_NAME } from "@/lib/site";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const inlineLinks = [
  ...categories.map((c) => ({ label: c.name, href: `/collections/${c.slug}` })),
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
  ...FOOTER_POLICY_LINKS,
  // TODO(client): link out once real social accounts are confirmed — routes home for now
  { label: "Instagram", href: "/" },
  { label: "Facebook", href: "/" },
];

export function Footer() {
  return (
    <footer className="dark relative overflow-hidden bg-background text-foreground">
      <div className="hammered pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-gutter pt-20 md:pt-28">
        {/* ── Closing statement — the last word, not a form ─────────── */}
        <div className="flex flex-col gap-8 border-b border-copper-300/20 pb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Before you go</p>
            <p className="font-serif text-heading text-balance">
              Set your table in something that outlives the moment.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-5">
            <NewsletterForm className="mt-0" />
            <CtaButton href="/collections" variant="outline">
              Explore the collection
            </CtaButton>
          </div>
        </div>

      </div>

      {/* ── Giant wordmark — a poster signature, not a copyright line ─ */}
      <div className="relative select-none overflow-hidden">
        <Image
          src="/images/brand/nakshee-logo.png"
          alt=""
          aria-hidden
          width={1835}
          height={1357}
          className="mx-auto h-[9rem] w-auto opacity-[0.08] brightness-0 invert md:h-[16rem]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-gutter">
        {/* ── One line, everything — no column grid ─────────────────── */}
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-3 gap-y-4 border-t border-copper-300/20 py-10 text-sm text-muted-foreground">
          {inlineLinks.map((link, i) => (
            <span key={link.href + link.label} className="flex items-center gap-3">
              <Link href={link.href} className="transition-colors hover:text-copper-300">
                {link.label}
              </Link>
              {i < inlineLinks.length - 1 && <span aria-hidden className="text-copper-300/30">·</span>}
            </span>
          ))}
        </nav>
      </div>

      <div className="relative border-t border-copper-300/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-gutter py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>Handcrafted in India · {CONTACT.email}</p>
        </div>
      </div>
    </footer>
  );
}
