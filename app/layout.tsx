import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Handcrafted Kansa & Copper Tableware`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "100% pure, lead-free Kansa tableware hand-hammered by Indian artisans. Dinnerware, drinkware, serveware and heirloom gifts rooted in Ayurvedic tradition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
