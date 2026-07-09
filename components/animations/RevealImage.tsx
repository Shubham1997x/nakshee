"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

/**
 * Signature image reveal: a hammered-copper panel wipes upward like a
 * curtain lifting off the metal, while the photo beneath settles in from
 * a slight zoom. Ties the motion to the brand's hand-hammering motif
 * instead of a generic fade/clip reveal.
 */
export function RevealImage({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current || !panelRef.current || !innerRef.current) return;

      gsap.timeline({
        delay,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
        .from(innerRef.current, { scale: 1.18, duration: 1.5, ease: "power3.out" })
        .to(
          panelRef.current,
          { yPercent: -100, duration: 1, ease: "power4.inOut" },
          0.05,
        );
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden", className)}>
      <div ref={innerRef} className="relative h-full w-full">
        {children}
      </div>
      <div
        ref={panelRef}
        aria-hidden
        className="hammered absolute inset-0 bg-gradient-to-b from-copper-400 via-copper-600 to-bronze-700"
      />
    </div>
  );
}
