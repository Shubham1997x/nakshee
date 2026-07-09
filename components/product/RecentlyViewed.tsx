"use client";

import { useRecordRecentlyViewed, useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { getProduct } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/section-heading";

export function RecordView({ slug }: { slug: string }) {
  useRecordRecentlyViewed(slug);
  return null;
}

export function RecentlyViewed({ excludeSlug }: { excludeSlug: string }) {
  const slugs = useRecentlyViewed(excludeSlug);
  const products = slugs.map((s) => getProduct(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (products.length === 0) return null;

  return (
    <section className="border-t border-border py-section">
      <div className="mx-auto max-w-7xl px-gutter">
        <SectionHeading eyebrow="Recently viewed" title="Pieces you looked at" className="mb-10" />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
