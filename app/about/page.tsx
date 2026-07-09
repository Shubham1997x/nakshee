import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealText } from "@/components/animations/RevealText";
import { FadeIn } from "@/components/animations/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Nakshee brought back authentic, lead-free Kansa — founders, craft and the artisans behind every hand-hammered piece.",
};

export default function AboutPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Our Story", href: "/about" },
        ])}
      />

      <section className="relative flex h-[85vh] min-h-[620px] items-end overflow-hidden">
        <Image
          src="/images/lifestyle/heritage-2.jpg"
          alt="A hand-hammered Kansa thali laid out on dark wood, lit warmly from above"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          className="motion-safe:animate-hero-zoom object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/30 to-charcoal-950/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-gutter pb-16 text-ivory-50 md:pb-20">
          <FadeIn>
            <p className="eyebrow mb-3 text-copper-200">{about.eyebrow}</p>
          </FadeIn>
          <RevealText as="h1" by="lines" className="max-w-2xl font-serif text-heading">
            {about.headline}
          </RevealText>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-gutter py-section">
        <FadeIn stagger={0.12}>
          {about.story.map((p, i) => (
            <p key={i} className="mb-6 text-lg leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </FadeIn>
        <FadeIn stagger={0.1} className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {about.founders.map((f) => (
            <div key={f.name}>
              <p className="font-serif text-xl">{f.name}</p>
              <p className="eyebrow mt-1">{f.role}</p>
            </div>
          ))}
        </FadeIn>
      </section>

      <section className="dark bg-background py-section text-foreground">
        <div className="mx-auto max-w-7xl px-gutter">
          <SectionHeading
            eyebrow="What guides us"
            title="Four pillars, one standard"
            align="center"
            className="mx-auto"
          />
          <FadeIn stagger={0.1} className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {about.pillars.map((p) => (
              <div key={p.title} className="text-center">
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
