"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm({ productName }: { productName?: string }) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO(client): POST to app/api/inquiry once an email/CRM destination is confirmed.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setOpen(false);
    toast.success("Inquiry sent", {
      description: "We'll get back to you within one business day.",
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          <Send aria-hidden />
          Send an inquiry
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal">Send an inquiry</DialogTitle>
          <DialogDescription>
            {productName ? `Ask us about the ${productName}.` : "Tell us what you're looking for."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="inquiry-name">Name</Label>
            <Input id="inquiry-name" required autoComplete="name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry-contact">Email or phone</Label>
            <Input id="inquiry-contact" required autoComplete="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry-message">Message</Label>
            <Textarea
              id="inquiry-message"
              required
              rows={4}
              defaultValue={productName ? `I'd like to know more about the ${productName}.` : ""}
            />
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Sending…" : "Send inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
