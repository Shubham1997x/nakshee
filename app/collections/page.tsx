import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { collections } from "@/data/collections";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse Nakshee's handcrafted Kansa collections — dinnerware, drinkware, serveware, accessories and wedding gifting.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Collections", href: "/collections" },
        ])}
      />

      <section className="mx-auto max-w-7xl px-gutter py-section">
        <SectionHeading
          eyebrow="The full range"
          title="Every category, one standard of purity"
          description="Five categories, one material: 100% pure Kansa, hand-hammered by the same artisans who shape our heirloom sets."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[var(--radius-card,0.375rem)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
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
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory-50">
                <p className="eyebrow mb-2 text-copper-200">{cat.tagline}</p>
                <h2 className="font-serif text-2xl">{cat.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-section">
        <div className="mx-auto max-w-7xl px-gutter">
          <SectionHeading
            eyebrow="Signature collections"
            title="Curated for a moment, not just a category"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {collections.map((collection) => (
              <div key={collection.slug}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card,0.375rem)]">
                  <Image
                    src={collection.image.src}
                    alt={collection.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl">{collection.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {collection.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
