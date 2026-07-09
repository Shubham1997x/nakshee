"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO(client): POST to app/api/inquiry once an email/CRM destination is confirmed.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    e.currentTarget.reset();
    toast.success("Message sent", { description: "We'll be in touch within one business day." });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[var(--radius-card,0.375rem)] border border-border bg-card p-8">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input id="contact-name" placeholder="Aarohi Deshmukh" required autoComplete="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input id="contact-email" type="email" placeholder="you@example.com" required autoComplete="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          placeholder="I'm looking for a Kansa dinner set for six — could you share pricing and lead time?"
          required
          rows={5}
        />
      </div>
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
