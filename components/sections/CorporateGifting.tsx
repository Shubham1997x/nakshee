import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import { RevealImage } from "@/components/animations/RevealImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { gifting } from "@/data/site-content";

export function CorporateGifting() {
  return (
    <section className="border-t border-border py-section">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-gutter md:grid-cols-2 md:gap-16">
        <FadeIn>
          <p className="eyebrow mb-4">{gifting.eyebrow}</p>
          <h2 className="font-serif text-heading text-balance">{gifting.headline}</h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{gifting.body}</p>
          <CtaButton href={gifting.cta.href} variant="solid" className="mt-8">
            {gifting.cta.label}
          </CtaButton>
        </FadeIn>
        <RevealImage className="aspect-[4/3] rounded-[var(--radius-card,0.375rem)]">
          <Image
            src="/images/products/thali-set-grand.jpg"
            alt="Kansa gift set arranged for a wedding or corporate occasion"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            quality={80}
            className="object-cover"
          />
        </RevealImage>
      </div>
    </section>
  );
}
