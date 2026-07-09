"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

export function ParallaxImage({
  children,
  className,
  strength = 15,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current || !innerRef.current) return;
      gsap.fromTo(
        innerRef.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden", className)}>
      <div ref={innerRef} className="absolute -top-[16%] left-0 h-[132%] w-full">
        {children}
      </div>
    </div>
  );
}
