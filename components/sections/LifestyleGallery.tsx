import Image from "next/image";
import { RevealImage } from "@/components/animations/RevealImage";
import { SectionHeading } from "@/components/ui/section-heading";

const gallery = [
  {
    src: "/images/lifestyle/dining-1.jpg",
    alt: "Kansa tableware styled on a dining table",
    caption: "A weekday table, set in bell metal",
    className: "aspect-[4/5] md:row-span-2 md:aspect-auto",
  },
  {
    src: "/images/lifestyle/dining-2.jpg",
    alt: "Overhead view of a Kansa dinner setting",
    caption: "Overhead, everything in its place",
    className: "aspect-[4/5]",
  },
  {
    src: "/images/lifestyle/heritage-1.jpg",
    alt: "Heritage-inspired Kansa table styling",
    caption: "Heritage, laid out for guests",
    className: "aspect-[4/5]",
  },
  {
    src: "/images/lifestyle/dining-3.jpg",
    alt: "Kansa glass and bowl on a rustic surface",
    caption: "Glass and bowl, side by side",
    className: "aspect-[16/9] md:col-span-2 md:aspect-auto",
  },
];

export function LifestyleGallery() {
  return (
    <section className="border-t border-border py-section">
      <div className="mx-auto max-w-7xl px-gutter">
        <SectionHeading
          eyebrow="At the table"
          title="Everyday, made ceremonial"
          className="mb-14"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          {gallery.map((item, i) => (
            <RevealImage
              key={item.src}
              delay={i * 0.08}
              className={`group rounded-[var(--radius-card,0.375rem)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={75}
                className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-5 bottom-5 translate-y-2 text-sm text-ivory-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </span>
            </RevealImage>
          ))}
        </div>
      </div>
    </section>
  );
}
