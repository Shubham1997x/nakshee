"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
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

    return () => {
      instance.destroy();
      gsap.ticker.remove(instance.raf);
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
