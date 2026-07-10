"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarsePointer) return;

    const instance = new Lenis({ autoRaf: false });
    instance.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      instance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    lenisRef.current = instance;
    setLenis(instance);

    // ScrollTrigger's own refresh recalculates trigger start/end and pin-spacer
    // heights, but Lenis caches its own max-scroll `limit` from the document
    // height at a point in time and never learns about that resize on its own.
    // Once a pin spacer grows the page, Lenis's stale (too-small) limit clamps
    // every wheel scroll back down to it — dragging the native scrollbar looks
    // fine (it bypasses the clamp) but the next wheel tick snaps back. Resize
    // Lenis every time ScrollTrigger refreshes so the two stay in sync.
    const resizeLenis = () => instance.resize();
    ScrollTrigger.addEventListener("refresh", resizeLenis);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    const imageLoadTimer = window.setTimeout(refresh, 1200);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(imageLoadTimer);
      ScrollTrigger.removeEventListener("refresh", resizeLenis);
      instance.destroy();
      gsap.ticker.remove(instance.raf);
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  const pathname = usePathname();
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
