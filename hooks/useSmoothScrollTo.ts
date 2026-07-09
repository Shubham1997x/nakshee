"use client";

import { useCallback } from "react";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

const HEADER_OFFSET = -96;

export function useSmoothScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (target: string) => {
      if (lenis) {
        lenis.scrollTo(target, { offset: HEADER_OFFSET, duration: 1.4 });
        return;
      }
      const el = document.querySelector(target);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [lenis],
  );
}
