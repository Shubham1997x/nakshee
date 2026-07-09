import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/collections/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.seoDescription,
    openGraph: { images: [{ url: category.heroImage.src }] },
  };
}

export default async function CategoryPage({ params }: PageProps<"/collections/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Collections", href: "/collections" },
          { name: category.name, href: `/collections/${category.slug}` },
        ])}
      />

      <section className="relative flex h-[46vh] min-h-80 items-end overflow-hidden">
        <Image
          src={category.heroImage.src}
          alt={category.heroImage.alt}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-gutter pb-10 text-ivory-50">
          <p className="eyebrow mb-3 text-copper-200">{category.tagline}</p>
          <h1 className="font-serif text-heading">{category.name}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter py-section">
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
