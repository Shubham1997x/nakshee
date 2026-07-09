import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";
import { RevealImage } from "@/components/animations/RevealImage";
import { SectionHeading } from "@/components/ui/section-heading";

export function SignatureCollections() {
  const [first, second, third] = collections;
  return (
    <section className="border-t border-border bg-secondary/40 py-section">
      <div className="mx-auto max-w-7xl px-gutter">
        <SectionHeading
          eyebrow="Signature collections"
          title="Curated for a moment, not a category"
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6">
          {first && (
            <Link href={`/collections#${first.slug}`} className="group relative block md:col-span-7">
              <RevealImage className="aspect-[16/11] rounded-[var(--radius-card,0.375rem)]">
                <Image
                  src={first.image.src}
                  alt={first.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  quality={80}
                  className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.05]"
                />
              </RevealImage>
              <div className="mt-5">
                <h3 className="font-serif text-2xl">{first.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{first.story}</p>
              </div>
            </Link>
          )}
          <div className="grid grid-cols-1 gap-6 md:col-span-5">
            {[second, third].filter(Boolean).map((c) => (
              <Link key={c!.slug} href={`/collections#${c!.slug}`} className="group relative block">
                <RevealImage className="aspect-[16/10] rounded-[var(--radius-card,0.375rem)]">
                  <Image
                    src={c!.image.src}
                    alt={c!.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 38vw"
                    quality={75}
                    className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.05]"
                  />
                </RevealImage>
                <div className="mt-4">
                  <h3 className="font-serif text-xl">{c!.name}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {c!.story}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
