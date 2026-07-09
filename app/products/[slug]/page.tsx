import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, getRelated, products } from "@/data/products";
import { getCategory } from "@/data/categories";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductSpecsCare } from "@/components/product/ProductSpecsCare";
import { WhatsAppButton } from "@/components/product/WhatsAppButton";
import { InquiryForm } from "@/components/product/InquiryForm";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { RecentlyViewed, RecordView } from "@/components/product/RecentlyViewed";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: [{ url: product.images[0].src }],
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelated(product);

  return (
    <div className="pt-16 md:pt-20">
      <JsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Collections", href: "/collections" },
            ...(category ? [{ name: category.name, href: `/collections/${category.slug}` }] : []),
            { name: product.name, href: `/products/${product.slug}` },
          ]),
        ]}
      />
      <RecordView slug={product.slug} />

      <div className="mx-auto max-w-7xl px-gutter py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="max-w-lg">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          <div>
            {category && <p className="eyebrow mb-3">{category.name}</p>}
            <h1 className="font-serif text-heading">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{formatPrice(product.price)}</p>
            <p className="mt-6 leading-relaxed text-foreground/90">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton product={product} />
              <InquiryForm productName={product.name} />
            </div>

            <ProductSpecsCare product={product} />
          </div>
        </div>
      </div>

      <RelatedProducts products={related} />
      <RecentlyViewed excludeSlug={product.slug} />
    </div>
  );
}
