import { Hero } from "@/components/sections/Hero";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { SignatureCollections } from "@/components/sections/SignatureCollections";
import { WhyKansa } from "@/components/sections/WhyKansa";
import { CraftsmanshipStory } from "@/components/sections/CraftsmanshipStory";
import { HammeringProcess } from "@/components/sections/HammeringProcess";
import { BestSellers } from "@/components/sections/BestSellers";
import { Purity } from "@/components/sections/Purity";
import { LifestyleGallery } from "@/components/sections/LifestyleGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CorporateGifting } from "@/components/sections/CorporateGifting";
import { FaqSection } from "@/components/sections/FaqSection";
import { Newsletter } from "@/components/sections/Newsletter";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { faqs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Hero />
      <FeaturedCategories />
      <SignatureCollections />
      <WhyKansa />
      <CraftsmanshipStory />
      <HammeringProcess />
      <BestSellers />
      <Purity />
      <LifestyleGallery />
      <Testimonials />
      <CorporateGifting />
      <FaqSection />
      <Newsletter />
    </>
  );
}
