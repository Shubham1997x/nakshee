import Image from "next/image";
import { HorizontalScroll } from "@/components/animations/HorizontalScroll";
import { process } from "@/data/site-content";

const stepImages = [
  { src: "/images/lifestyle/hero.jpg", alt: "Artisan working molten bell metal in the workshop" },
  { src: "/images/lifestyle/heritage-1.jpg", alt: "Freshly cast Kansa pieces cooling before shaping" },
  { src: "/images/products/bowl-hero.jpg", alt: "A hand-hammered Kansa bowl mid-shaping" },
  { src: "/images/products/gilat-thali.jpg", alt: "The gilat hand-polish finish catching the light" },
  { src: "/images/products/kansa-thali-set.jpg", alt: "A finished, inspected Kansa thali set" },
];

export function HammeringProcess() {
  return (
    <section className="dark border-t border-border bg-background py-section text-foreground">
      <HorizontalScroll
        className="h-auto min-h-[640px] py-16 md:h-[74vh] md:min-h-[560px] md:py-0"
        aside={
          <div>
            <p className="eyebrow mb-4">{process.eyebrow}</p>
            <h2 className="font-serif text-heading text-balance">{process.headline}</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Scroll to follow one piece from molten metal to the table — five stages, one
              uninterrupted craft.
            </p>
          </div>
        }
      >
        {process.steps.map((step, i) => (
          <div
            key={step.title}
            className="relative flex h-[60vh] min-h-96 w-[82vw] shrink-0 flex-col justify-end overflow-hidden rounded-[var(--radius-card,0.375rem)] p-8 sm:w-[60vw] md:h-[60vh] md:w-[30vw]"
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={stepImages[i].src}
              alt={stepImages[i].alt}
              fill
              sizes="(max-width: 768px) 82vw, 30vw"
              quality={75}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/35 to-charcoal-950/10" />
            <div className="relative text-ivory-50">
              <span className="font-serif text-5xl text-copper-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory-100/85">{step.text}</p>
            </div>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
}
