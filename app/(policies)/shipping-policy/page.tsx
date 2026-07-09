import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPolicyPage() {
  return (
    <>
      <h1 className="font-serif text-heading">Shipping Policy</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        Every piece is inspected, wrapped by hand and packed to travel safely.
        Because each order is confirmed individually through inquiry, exact
        shipping timelines and charges are shared with you before dispatch.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        We currently ship across India. For international orders or bulk wedding
        and corporate gifting, write to us at{" "}
        <a href={`mailto:${CONTACT.email}`} className="underline">
          {CONTACT.email}
        </a>{" "}
        and we'll confirm feasibility and cost.
      </p>
    </>
  );
}
