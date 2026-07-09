"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

/**
 * Pins the section and slides a card rail horizontally behind a fixed
 * clipping viewport, while `aside` (an eyebrow/heading/counter) stays put
 * beside it for the whole pin — a split storytelling layout rather than a
 * plain carousel. The viewport itself never moves; only the rail inside it
 * does, so the rail can't slide over the aside panel.
 * Falls back to native horizontal snap-scroll on touch/coarse-pointer
 * devices and under reduced motion, where pinning would fight the user's
 * own scroll.
 */
export function HorizontalScroll({
  aside,
  children,
  className,
}: {
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      if (reduced || coarse) return;
      if (!sectionRef.current || !viewportRef.current || !railRef.current) return;

      const rail = railRef.current;
      const distance = rail.scrollWidth - viewportRef.current.clientWidth;
      if (distance <= 0) return;

      gsap.to(rail, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=140",
          end: () => `+=${distance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div className="flex h-full flex-col gap-8 md:flex-row md:items-center md:gap-16">
        {aside && (
          <div className="shrink-0 px-gutter md:w-72 md:px-0 md:pl-gutter lg:w-96">{aside}</div>
        )}
        <div
          ref={viewportRef}
          className="min-w-0 overflow-x-auto md:flex-1 md:overflow-hidden"
        >
          <div
            ref={railRef}
            className="flex w-max gap-6 pl-gutter pr-gutter md:gap-8 md:pl-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
