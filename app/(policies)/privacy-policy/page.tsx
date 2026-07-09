import type { Metadata } from "next";
import { CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1 className="font-serif text-heading">Privacy Policy</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        {SITE_NAME} collects only the information you choose to share with us —
        through an inquiry form, a WhatsApp message, or a newsletter signup —
        in order to respond to you and fulfil any order you place.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        We never sell or share your information with third parties for marketing
        purposes. Newsletter subscribers can unsubscribe at any time from any email
        we send.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        For any privacy question, write to us at{" "}
        <a href={`mailto:${CONTACT.email}`} className="underline">
          {CONTACT.email}
        </a>
        .
      </p>
    </>
  );
}
