import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const image = product.images[0];
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card,0.375rem)] bg-ivory-100">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.06]"
          priority={priority}
        />
        {product.isNew && (
          <Badge className="absolute left-3 top-3 bg-copper-500 text-ivory-50">New</Badge>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute inset-x-0 bottom-4 mx-auto w-max translate-y-2 text-xs uppercase tracking-luxe text-ivory-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View piece
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-serif text-lg leading-snug">{product.name}</h3>
        <p className="shrink-0 text-sm text-muted-foreground">{formatPrice(product.price)}</p>
      </div>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.shortDescription}</p>
    </Link>
  );
}
