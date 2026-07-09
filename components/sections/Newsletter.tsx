import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { RevealText } from "@/components/animations/RevealText";

export function Newsletter() {
  return (
    <section className="border-t border-border bg-secondary/40 py-section">
      <div className="mx-auto max-w-2xl px-gutter text-center">
        <p className="eyebrow mb-4">Stay close to the craft</p>
        <RevealText as="h2" by="words" className="font-serif text-heading text-balance">
          Letters on craft, care and new pieces
        </RevealText>
        <p className="mt-5 text-muted-foreground">
          Occasional, honest, never spam. Unsubscribe whenever you like.
        </p>
        <div className="mt-8 flex justify-center">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
