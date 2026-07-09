"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/data/categories";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  // Only these routes have a dark, full-bleed hero image directly beneath the
  // header — everywhere else (Collections index, product pages, Contact,
  // policies) starts on plain page background, so the header must never use
  // the transparent/inverted treatment there.
  const hasDarkHero =
    pathname === "/" || pathname === "/about" || /^\/collections\/[^/]+$/.test(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolid = scrolled || !hasDarkHero;
  const inverted = hasDarkHero && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500",
        showSolid
          ? "bg-background/85 backdrop-blur-md"
          : "bg-gradient-to-b from-black/35 to-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-gutter md:h-24">
        <Link href="/" className="flex items-center" aria-label={`${SITE_NAME} home`}>
          <Image
            src="/images/brand/nakshee-logo.png"
            alt={SITE_NAME}
            width={108}
            height={80}
            priority
            quality={85}
            className={cn(
              "h-14 w-auto transition-[filter] duration-500 md:h-16",
              inverted && "brightness-0 invert",
            )}
          />
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-9 md:flex",
            inverted ? "text-ivory-50" : "text-foreground",
          )}
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors hover:text-copper-400",
                (link.href === "/collections"
                  ? pathname.startsWith("/collections")
                  : pathname === link.href) && "text-copper-500",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="text-[#25D366] transition-transform hover:scale-110"
          >
            <WhatsAppIcon className="size-6" />
          </a>
        </nav>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("md:hidden", inverted && "text-ivory-50 hover:bg-white/10 hover:text-ivory-50")}
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <Image
                src="/images/brand/nakshee-logo.png"
                alt={SITE_NAME}
                width={108}
                height={80}
                quality={85}
                className="h-12 w-auto"
              />
              <SheetTitle className="sr-only">{SITE_NAME}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm px-2 py-2.5 text-base transition-colors hover:bg-accent"
                >
                  {cat.name}
                </Link>
              ))}
              <div className="my-3 h-px bg-border" />
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm px-2 py-2.5 text-base transition-colors hover:bg-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-[#1da851] text-white hover:bg-[#178f44]">
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  Chat with us
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
