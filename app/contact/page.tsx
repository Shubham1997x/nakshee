import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/product/WhatsAppButton";
import { ContactForm } from "@/components/layout/ContactForm";
import { RevealImage } from "@/components/animations/RevealImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the Nakshee team for product inquiries, wedding sets and corporate gifting.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />

      <section className="dark relative overflow-hidden bg-background py-section text-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-copper-500/10 blur-[130px]"
        />

        <div className="relative mx-auto grid max-w-6xl gap-16 px-gutter md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div>
            <SectionHeading
              eyebrow="A note before you write"
              title="We read every message ourselves"
              description="No ticket queue, no chatbot — just the people who choose the metal and pack every order. Tell us what you're looking for and we'll write back within a day, in our own words."
            />

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton />
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-muted-foreground underline-offset-4 hover:text-copper-300 hover:underline"
              >
                {CONTACT.email}
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-copper-300/20 pt-8 text-sm sm:max-w-md">
              <div>
                <dt className="eyebrow mb-2">Response time</dt>
                <dd className="text-muted-foreground">Within one business day</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">For gifting</dt>
                <dd>
                  <Link href="/collections/wedding-gifting" className="text-muted-foreground underline-offset-4 hover:text-copper-300 hover:underline">
                    See wedding &amp; corporate sets
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Follow along</dt>
                {/* TODO(client): link out once real social accounts are confirmed — routes home for now */}
                <dd className="flex gap-3">
                  <Link href="/" className="text-muted-foreground underline-offset-4 hover:text-copper-300 hover:underline">
                    Instagram
                  </Link>
                  <Link href="/" className="text-muted-foreground underline-offset-4 hover:text-copper-300 hover:underline">
                    Facebook
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Handcrafted in</dt>
                <dd className="text-muted-foreground">{CONTACT.address}</dd>
              </div>
            </dl>
          </div>

          <FadeIn>
            <RevealImage className="aspect-[4/5] overflow-hidden rounded-[var(--radius-card,0.375rem)]">
              <Image
                src="/images/lifestyle/craft-detail.jpg"
                alt="A pair of hand-hammered Kansa glasses on a woven mat"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                quality={80}
                className="object-cover"
              />
            </RevealImage>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border py-section">
        <div className="mx-auto max-w-2xl px-gutter">
          <SectionHeading
            eyebrow="Send a message"
            title="Tell us what you're looking for"
            description="A dinner set, a wedding order, a care question — write in as much or as little detail as you like."
            align="center"
            className="mx-auto mb-12"
          />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
