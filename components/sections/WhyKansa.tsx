import Image from "next/image";
import { RevealText } from "@/components/animations/RevealText";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { whyKansa } from "@/data/site-content";

export function WhyKansa() {
  return (
    <section id="why-kansa" className="border-t border-border py-section">
      <div className="mx-auto grid max-w-7xl gap-14 px-gutter md:grid-cols-5 md:items-center md:gap-10 lg:gap-16">
        <div className="md:col-span-2">
          <p className="eyebrow mb-4">{whyKansa.eyebrow}</p>
          <RevealText as="h2" by="lines" className="font-serif text-heading text-balance">
            {whyKansa.headline}
          </RevealText>
          {whyKansa.body.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">{p}</p>
            </FadeIn>
          ))}
        </div>

        <div className="md:col-span-3">
          <ParallaxImage className="aspect-[5/4] overflow-hidden rounded-[var(--radius-card,0.375rem)] shadow-xl shadow-charcoal-950/10">
            <Image
              src="/images/lifestyle/table-story.jpg"
              alt="Kansa tableware set for an everyday meal"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={80}
              className="object-cover"
            />
          </ParallaxImage>
          <FadeIn delay={0.2} className="mt-5 flex items-center gap-3 md:mt-6">
            <span aria-hidden className="h-px w-8 bg-copper-400" />
            <p className="text-xs uppercase tracking-luxe text-muted-foreground">
              Every meal, set in bell metal
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn stagger={0.1} className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 px-gutter sm:grid-cols-2 lg:grid-cols-4">
        {whyKansa.points.map((point) => (
          <div key={point.title} className="border-t border-copper-300 pt-5">
            <h3 className="font-serif text-lg">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
