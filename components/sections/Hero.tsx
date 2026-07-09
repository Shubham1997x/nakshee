import Image from "next/image";
import { RevealText } from "@/components/animations/RevealText";
import { FadeIn } from "@/components/animations/FadeIn";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { CtaButton } from "@/components/ui/cta-button";
import { hero } from "@/data/site-content";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[680px] items-center md:items-end overflow-hidden bg-charcoal-950">
      <Image
        src="/images/lifestyle/craft-detail.jpg"
        alt="Hand-hammered Kansa glasses on a woven mat, a warm kitchen softly blurred behind them"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={85}
        className="motion-safe:animate-hero-zoom object-cover object-[65%_38%] sm:object-[center_38%]"
      />
      {/* Directional vignette: darkest at the edges and base, clearest in the upper third where the photo breathes */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/45 to-charcoal-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/40" />
      <div className="hammered absolute inset-0 opacity-[0.08] mix-blend-overlay" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-gutter pb-20 text-ivory-50 md:pb-28">
        <FadeIn className="mb-6 flex items-center gap-4">
          <span aria-hidden className="h-px w-10 bg-copper-400" />
          <p className="eyebrow text-copper-300">{hero.eyebrow}</p>
        </FadeIn>
        <RevealText as="h1" by="lines" className="font-serif text-display text-balance">
          {hero.headline}
        </RevealText>
        <FadeIn delay={0.3} className="mt-7 max-w-xl">
          <p className="text-lg leading-relaxed text-ivory-100/90">{hero.subline}</p>
        </FadeIn>
        <FadeIn delay={0.45} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <MagneticButton className="w-full sm:w-auto">
            <CtaButton href={hero.primaryCta.href} variant="solid" className="w-full justify-center sm:w-auto">
              {hero.primaryCta.label}
            </CtaButton>
          </MagneticButton>
          <CtaButton href={hero.secondaryCta.href} variant="outline" className="w-full justify-center sm:w-auto">
            {hero.secondaryCta.label}
          </CtaButton>
        </FadeIn>
      </div>
    </section>
  );
}
