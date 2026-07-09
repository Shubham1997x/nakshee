"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "outline-dark";
  className?: string;
  external?: boolean;
}

/**
 * The site's signature CTA: a copper fill wipes in from the left on hover
 * (outline variants), the arrow steps forward, and a quick inertial
 * press/release gives real tactile feedback on click — a plain color-swap
 * button reads as an afterthought next to the rest of the page's motion.
 */
export function CtaButton({ href, children, variant = "solid", className, external }: CtaButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const scrollTo = useSmoothScrollTo();
  const isHash = href.startsWith("#");

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const press = () => gsap.to(el, { scale: 0.96, duration: 0.15, ease: "power2.out" });
      const release = () => gsap.to(el, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.55)" });
      el.addEventListener("pointerdown", press);
      el.addEventListener("pointerup", release);
      el.addEventListener("pointerleave", release);
      return () => {
        el.removeEventListener("pointerdown", press);
        el.removeEventListener("pointerup", release);
        el.removeEventListener("pointerleave", release);
      };
    },
    { scope: ref },
  );

  function handleClick(e: React.MouseEvent) {
    if (isHash) {
      e.preventDefault();
      scrollTo(href);
    }
  }

  const classes = cn(
    "group/cta relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide will-change-transform",
    variant === "solid" && "bg-copper-500 text-ivory-50",
    variant === "outline" && "border border-ivory-50/60 text-ivory-50",
    variant === "outline-dark" && "border border-charcoal-900/30 text-foreground",
    className,
  );

  const content = (
    <>
      {variant !== "solid" && (
        <span
          aria-hidden
          className="absolute inset-0 origin-left scale-x-0 bg-copper-500 transition-transform duration-500 ease-luxe group-hover/cta:scale-x-100"
        />
      )}
      <span
        className={cn(
          "relative z-10 transition-colors duration-300",
          variant !== "solid" && "group-hover/cta:text-ivory-50",
        )}
      >
        {children}
      </span>
      <ArrowRight
        aria-hidden
        className="relative z-10 size-4 transition-transform duration-300 ease-luxe group-hover/cta:translate-x-1"
      />
    </>
  );

  if (isHash) {
    return (
      <a ref={ref} href={href} onClick={handleClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {content}
    </Link>
  );
}
