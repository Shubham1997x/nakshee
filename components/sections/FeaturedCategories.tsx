import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { RevealImage } from "@/components/animations/RevealImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-gutter py-section">
      <SectionHeading
        eyebrow="Shop by category"
        title="Every table, in pure Kansa"
        description="From the everyday glass to the wedding thali set — each category shares one uncompromised material."
        className="mb-14"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <RevealImage key={cat.slug} delay={i * 0.08} className="aspect-[4/5] rounded-[var(--radius-card,0.375rem)]">
            <Link
              href={`/collections/${cat.slug}`}
              className="group relative block h-full w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <Image
                src={cat.heroImage.src}
                alt={cat.heroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                quality={75}
                className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent" />
              <div className="dark absolute inset-x-0 bottom-0 p-6 text-ivory-50">
                <p className="eyebrow mb-2">{cat.tagline}</p>
                <h3 className="font-serif text-2xl">{cat.name}</h3>
              </div>
            </Link>
          </RevealImage>
        ))}
      </div>
      <FadeIn className="mt-10 text-center">
        <Link href="/collections" className="text-sm font-medium text-copper-600 underline-offset-4 hover:underline">
          View all collections →
        </Link>
      </FadeIn>
    </section>
  );
}
