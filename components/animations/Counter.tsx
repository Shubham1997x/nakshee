"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";

export function Counter({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const obj = { value: 0 };
      gsap.to(obj, {
        value: to,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = Math.round(obj.value).toLocaleString() + suffix;
        },
      });
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
