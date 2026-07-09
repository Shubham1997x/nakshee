import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealText } from "@/components/animations/RevealText";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FaqSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary/40 py-section">
      <div className="relative mx-auto grid max-w-6xl gap-14 px-gutter md:grid-cols-[1fr_1.6fr] md:gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          {/* Hand-drawn thali watermark — a quiet nod to the craft behind the left column */}
          <Image
            src="/images/brand/line-art-thali.png"
            alt=""
            aria-hidden
            width={1067}
            height={1195}
            className="pointer-events-none absolute -left-16 -top-10 h-72 w-auto -rotate-6 opacity-[0.07] select-none"
          />
          <p className="eyebrow mb-4">Questions</p>
          <RevealText as="h2" by="words" className="font-serif text-heading text-balance">
            Before you begin
          </RevealText>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            The things people ask before they set their table in Kansa for the first time.
          </p>
          <Link
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-copper-600 underline-offset-4 hover:underline"
          >
            Still have a question? Ask us directly →
          </Link>
        </div>

        <Accordion type="single" collapsible className="divide-y divide-copper-300/25">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.04}>
              <AccordionItem value={`faq-${i + 1}`} className="group/item relative border-0 py-1">
                <span
                  aria-hidden
                  className="absolute -left-4 top-0 h-full w-0.5 origin-top scale-y-0 bg-copper-400 transition-transform duration-500 ease-luxe group-data-[state=open]/item:scale-y-100"
                />
                <AccordionTrigger className="group/trigger items-center py-7 text-left hover:no-underline">
                  <span className="flex flex-1 items-baseline gap-4">
                    <span className="font-serif text-sm text-copper-500 transition-colors duration-300 group-data-[state=open]/item:text-copper-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-xl font-normal text-balance transition-colors duration-300 group-hover/trigger:text-copper-600 group-data-[state=open]/item:text-copper-700">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pl-[3.25rem] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </FadeIn>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
