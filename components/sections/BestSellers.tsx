import Link from "next/link";
import { getFeatured } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/section-heading";

export function BestSellers() {
  const featured = getFeatured().slice(0, 4);
  return (
    <section className="border-t border-border py-section">
      <div className="mx-auto max-w-7xl px-gutter">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Most loved" title="Best sellers" />
          <Link href="/collections" className="text-sm font-medium text-copper-600 underline-offset-4 hover:underline">
            View all →
          </Link>
        </div>
        <FadeIn stagger={0.08} className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
