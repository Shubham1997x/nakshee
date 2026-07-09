import { FadeIn } from "@/components/animations/FadeIn";
import { RevealText } from "@/components/animations/RevealText";
import { purity } from "@/data/site-content";

export function Purity() {
  return (
    <section className="dark bg-background py-section text-foreground">
      <div className="mx-auto max-w-7xl px-gutter">
        <p className="eyebrow mb-4 text-center">{purity.eyebrow}</p>
        <RevealText as="h2" by="lines" className="mx-auto max-w-2xl text-center font-serif text-heading text-balance">
          {purity.headline}
        </RevealText>
        <FadeIn stagger={0.1} className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {purity.pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <h3 className="font-serif text-xl">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
