"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  /** Split by "words" or "lines" — lines suit long copy, words suit short headlines. */
  by?: "words" | "lines";
}

export function RevealText({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  by = "lines",
}: RevealTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      let split: SplitText | undefined;

      const run = () => {
        if (!ref.current) return;
        split = SplitText.create(ref.current, {
          type: by,
          mask: by,
          linesClass: "reveal-line",
          wordsClass: "reveal-word",
        });
        const targets = by === "lines" ? split.lines : split.words;

        // Clean masked reveal — translate + fade only, no blur. Crisp and
        // quick to settle rather than lingering in a soft, out-of-focus state.
        gsap.from(targets, {
          yPercent: 100,
          opacity: 0,
          duration: by === "lines" ? 0.85 : 0.6,
          delay,
          ease: "power4.out",
          stagger: by === "lines" ? 0.08 : 0.025,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(run);
      } else {
        run();
      }

      return () => split?.revert();
    },
    { scope: ref, dependencies: [children] },
  );

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={cn(className)} aria-label={children}>
      {children}
    </Component>
  );
}
