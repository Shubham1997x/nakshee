"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/types";

export function ProductGallery({ images, productName }: { images: ProductImage[]; productName: string }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const image = images[active];

  return (
    <div>
      <div
        className="overflow-hidden rounded-[var(--radius-card,0.375rem)]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setOrigin(`${x}% ${y}%`);
        }}
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          quality={85}
          className="w-full h-auto transition-transform duration-300 ease-out"
          style={{
            transformOrigin: origin,
            transform: zoomed ? "scale(1.8)" : "scale(1)",
          }}
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3" role="tablist" aria-label={`${productName} images`}>
          {images.map((img, i) => (
            <button
              key={img.src}
              role="tab"
              aria-selected={i === active}
              aria-label={`View image ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "relative h-20 w-20 shrink-0 overflow-hidden rounded-sm border-2 transition-colors",
                i === active ? "border-copper-500" : "border-transparent",
              )}
            >
              <Image src={img.src} alt="" fill sizes="80px" quality={60} className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
