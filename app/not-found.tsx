import { CtaButton } from "@/components/ui/cta-button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-gutter pt-16 text-center md:pt-20">
      <p className="eyebrow mb-4">Page not found</p>
      <h1 className="font-serif text-heading">This piece isn't on the shelf.</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you're looking for may have moved. Browse the full collection instead.
      </p>
      <CtaButton href="/collections" variant="outline-dark" className="mt-8">
        Explore collections
      </CtaButton>
    </div>
  );
}
