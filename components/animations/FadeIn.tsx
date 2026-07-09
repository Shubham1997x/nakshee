"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  /** Stagger the direct children instead of animating this element as one block. */
  stagger?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function FadeIn({
  children,
  className,
  y = 28,
  delay = 0,
  stagger,
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = stagger ? gsap.utils.toArray<HTMLElement>(ref.current.children) : ref.current;

      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref },
  );

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  );
}
