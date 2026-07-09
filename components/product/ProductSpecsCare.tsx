import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Product } from "@/types";

export function ProductSpecsCare({ product }: { product: Product }) {
  return (
    <Accordion type="single" collapsible defaultValue="specs" className="mt-8">
      <AccordionItem value="specs">
        <AccordionTrigger className="font-serif text-lg">Specifications</AccordionTrigger>
        <AccordionContent>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 border-b border-border pb-2 text-sm sm:block sm:border-0 sm:pb-0">
                <dt className="text-muted-foreground">{spec.label}</dt>
                <dd className="text-right sm:mt-1 sm:text-left sm:font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="benefits">
        <AccordionTrigger className="font-serif text-lg">Ayurvedic benefits</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            {product.benefits.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper-500" />
                {b}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="care">
        <AccordionTrigger className="font-serif text-lg">Care instructions</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            {product.care.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper-500" />
                {c}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
