import Image from "next/image";
import { HeroReveal } from "@/components/animations/HeroReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { CtaButton } from "@/components/ui/cta-button";
import { hero } from "@/data/site-content";

export function Hero() {
  return (
    <HeroReveal>
      <section className="relative flex h-[100svh] min-h-[680px] items-center overflow-hidden bg-charcoal-950 md:items-end">
        <div data-hero="image" className="absolute inset-0">
          <Image
            src="/images/lifestyle/craft-detail.jpg"
            alt="Hand-hammered Kansa glasses on a woven mat, a warm kitchen softly blurred behind them"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="object-cover object-[65%_38%] sm:object-[center_38%]"
          />
        </div>
        {/* Directional vignette: darkest at the edges and base, clearest in the upper third where the photo breathes */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/45 to-charcoal-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/40" />
        <div className="hammered absolute inset-0 opacity-[0.08] mix-blend-overlay" aria-hidden />
        {/* Copper curtain — lifts off the photo on load instead of a plain fade-in */}
        <div
          data-hero="curtain"
          aria-hidden
          className="hammered absolute inset-0 z-10 bg-gradient-to-b from-copper-500 via-bronze-500 to-bronze-700"
        />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-gutter pb-20 text-ivory-50 md:pb-28">
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden data-hero="line" className="h-px w-10 origin-left bg-copper-400" />
            <p data-hero="eyebrow" className="eyebrow text-copper-300">
              {hero.eyebrow}
            </p>
          </div>
          <h1 data-hero="headline" className="font-serif text-display text-balance">
            {hero.headline}
          </h1>
          <div data-hero="subline" className="mt-7 max-w-xl">
            <p className="text-lg leading-relaxed text-ivory-100/90">{hero.subline}</p>
          </div>
          <div
            data-hero="ctas"
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"
          >
            <MagneticButton className="w-full sm:w-auto">
              <CtaButton href={hero.primaryCta.href} variant="solid" className="w-full justify-center sm:w-auto">
                {hero.primaryCta.label}
              </CtaButton>
            </MagneticButton>
            <CtaButton href={hero.secondaryCta.href} variant="outline" className="w-full justify-center sm:w-auto">
              {hero.secondaryCta.label}
            </CtaButton>
          </div>
        </div>
      </section>
    </HeroReveal>
  );
}
