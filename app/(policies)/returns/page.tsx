import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = { title: "Returns & Buy-Back" };

export default function ReturnsPage() {
  return (
    <>
      <h1 className="font-serif text-heading">Returns & Buy-Back</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        If a piece arrives damaged or isn't as described, tell us within 48 hours
        of delivery and we'll replace it or refund you in full.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Beyond returns, Nakshee stands behind the material itself: our buy-back
        promise means we will buy back the Kansa in any piece you own at its
        assured material value, at any point in its life. Kansa is wealth that
        lasts — this is how we prove it.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        To start a return or a buy-back, write to{" "}
        <a href={`mailto:${CONTACT.email}`} className="underline">
          {CONTACT.email}
        </a>
        .
      </p>
    </>
  );
}
