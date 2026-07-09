"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/animations/gsap";

/**
 * A single choreographed entrance for the hero. Every tween uses explicit
 * fromTo() start/end values (never gsap.from(), which infers its "end" from
 * whatever the element's current inline style happens to be) so the sequence
 * plays identically every time this mounts — including after a client-side
 * back-navigation remounts it fresh.
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
      let tl: gsap.core.Timeline | undefined;

      const run = () => {
        // Force every piece back to its starting state first — guards
        // against a leftover inline style from a previous, interrupted run.
        if (curtain) gsap.set(curtain, { scaleY: 1 });
        if (image) gsap.set(image, { scale: 1.18 });
        if (line) gsap.set(line, { scaleX: 0 });
        if (eyebrow) gsap.set(eyebrow, { opacity: 0, x: -10 });
        if (subline) gsap.set(subline, { opacity: 0, y: 14 });
        if (ctas) gsap.set(Array.from(ctas.children), { opacity: 0, y: 16 });

        split?.revert();
        split = headline
          ? SplitText.create(headline, { type: "lines", mask: "lines", linesClass: "reveal-line" })
          : undefined;
        if (split) gsap.set(split.lines, { yPercent: 120, opacity: 0 });

        tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (curtain) {
          tl.to(curtain, { scaleY: 0, transformOrigin: "bottom", duration: 1.2, ease: "power4.inOut" }, 0);
        }
        if (image) {
          tl.to(image, { scale: 1, duration: 1.8, ease: "power3.out" }, 0);
        }
        if (line) {
          tl.to(line, { scaleX: 1, duration: 0.7, transformOrigin: "left" }, 0.55);
        }
        if (eyebrow) {
          tl.to(eyebrow, { opacity: 1, x: 0, duration: 0.5 }, 0.6);
        }
        if (split) {
          tl.to(split.lines, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "back.out(1.7)" }, 0.7);
        }
        if (subline) {
          tl.to(subline, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
        }
        if (ctas) {
          tl.to(Array.from(ctas.children), { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.35");
        }
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(run);
      } else {
        run();
      }

      return () => {
        tl?.kill();
        split?.revert();
      };
    },
    { scope: rootRef, dependencies: [] },
  );

  return <div ref={rootRef}>{children}</div>;
}
