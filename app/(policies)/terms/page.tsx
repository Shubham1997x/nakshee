import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <h1 className="font-serif text-heading">Terms of Service</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        By browsing {SITE_NAME} and submitting an inquiry, you agree that product
        prices, availability and specifications are confirmed at the time of
        inquiry and may change without notice. All product photography reflects
        genuine handcrafted pieces; because each item is hand-hammered, minor
        variation between pieces is normal and not a defect.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Orders are confirmed only once agreed directly with our team over
        WhatsApp, email or our inquiry form — this site does not process
        payments directly.
      </p>
    </>
  );
}
