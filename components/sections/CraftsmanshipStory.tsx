import Image from "next/image";
import { RevealText } from "@/components/animations/RevealText";
import { RevealImage } from "@/components/animations/RevealImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { craftsmanship } from "@/data/site-content";

export function CraftsmanshipStory() {
  return (
    <section className="dark bg-background py-section text-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-gutter md:grid-cols-2 md:items-center md:gap-20">
        <RevealImage className="aspect-[4/5] rounded-[var(--radius-card,0.375rem)] md:order-2">
          <Image
            src="/images/lifestyle/artisan.jpg"
            alt="An artisan hand-shaping a Kansa vessel in the workshop"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            quality={80}
            className="object-cover"
          />
        </RevealImage>
        <div className="md:order-1">
          <p className="eyebrow mb-4">{craftsmanship.eyebrow}</p>
          <RevealText as="h2" by="lines" className="font-serif text-heading text-balance">
            {craftsmanship.headline}
          </RevealText>
          {craftsmanship.body.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">{p}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
