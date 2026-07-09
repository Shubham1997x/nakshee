"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/animations/gsap";

/**
 * A single choreographed entrance for the hero, not a stack of independent
 * fade-ins: a copper curtain lifts off the photo as it settles from a slight
 * zoom, a hairline draws itself under the eyebrow, and the headline lands
 * with a touch of overshoot — like a strike settling — rather than a plain
 * fade-up. Everything is timed against one clock instead of scattered delays.
 */
export function HeroReveal({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const curtain = root.querySelector<HTMLElement>('[data-hero="curtain"]');
      const image = root.querySelector<HTMLElement>('[data-hero="image"]');
      const line = root.querySelector<HTMLElement>('[data-hero="line"]');
      const eyebrow = root.querySelector<HTMLElement>('[data-hero="eyebrow"]');
      const headline = root.querySelector<HTMLElement>('[data-hero="headline"]');
      const subline = root.querySelector<HTMLElement>('[data-hero="subline"]');
      const ctas = root.querySelector<HTMLElement>('[data-hero="ctas"]');

      let split: SplitText | undefined;

      const run = () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (curtain) {
          tl.to(curtain, { scaleY: 0, transformOrigin: "bottom", duration: 1.2, ease: "power4.inOut" }, 0);
        }
        if (image) {
          tl.from(image, { scale: 1.18, duration: 1.8, ease: "power3.out" }, 0);
        }
        if (line) {
          tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.7, transformOrigin: "left" }, 0.55);
        }
        if (eyebrow) {
          tl.from(eyebrow, { opacity: 0, x: -10, duration: 0.5 }, 0.6);
        }
        if (headline) {
          split = SplitText.create(headline, {
            type: "lines",
            mask: "lines",
            linesClass: "reveal-line",
          });
          tl.from(
            split.lines,
            { yPercent: 120, opacity: 0, duration: 1, stagger: 0.12, ease: "back.out(1.7)" },
            0.7,
          );
        }
        if (subline) {
          tl.from(subline, { opacity: 0, y: 14, duration: 0.7 }, "-=0.5");
        }
        if (ctas) {
          tl.from(Array.from(ctas.children), { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 }, "-=0.35");
        }
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(run);
      } else {
        run();
      }

      return () => split?.revert();
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
