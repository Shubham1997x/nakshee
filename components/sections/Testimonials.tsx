"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { testimonials } from "@/data/testimonials";
import { RevealText } from "@/components/animations/RevealText";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!quoteRef.current) return;
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      );
    },
    { dependencies: [active], scope: quoteRef },
  );

  const current = testimonials[active];

  return (
    <section className="dark relative overflow-hidden bg-background py-section text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper-500/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-gutter md:grid-cols-[1fr_1.6fr] md:gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          <p className="eyebrow mb-4">From our table to yours</p>
          <RevealText as="h2" by="words" className="font-serif text-heading text-balance">
            What customers say
          </RevealText>

          <ul className="mt-10 space-y-1 border-t border-copper-300/25">
            {testimonials.map((t, i) => (
              <li key={t.id}>
                <button
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex w-full items-baseline gap-4 border-b border-copper-300/25 py-4 text-left transition-colors",
                    i === active ? "text-copper-300" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="font-serif text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className="block font-serif text-base">{t.author}</span>
                    {t.location && <span className="text-xs">{t.location}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-16 left-0 font-serif text-[9rem] leading-none text-copper-500/15 select-none"
          >
            &ldquo;
          </span>

          <div ref={quoteRef} className="relative pt-8">
            <blockquote>
              <p className="font-serif text-2xl leading-snug text-balance md:text-3xl">
                {current.quote}
              </p>
              <footer className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-500/20 font-serif text-sm text-copper-200">
                  {current.author
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span className="text-sm text-muted-foreground">
                  <span className="block font-medium text-foreground">{current.author}</span>
                  <span>{[current.location, current.context].filter(Boolean).join(" · ")}</span>
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
