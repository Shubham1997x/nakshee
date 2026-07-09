import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Product } from "@/types";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section className="border-t border-border py-section">
      <div className="mx-auto max-w-7xl px-gutter">
        <SectionHeading eyebrow="Pairs well with" title="You may also like" className="mb-10" />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
