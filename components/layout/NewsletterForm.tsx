"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO(client): wire to the mailing-list provider of choice.
    toast.success("You're on the list", {
      description: "We'll write when there's something worth reading.",
    });
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className={cn("mt-4 flex gap-2", className)}>
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        aria-label="Email address"
        className="max-w-56"
      />
      <Button type="submit" variant="secondary">
        Subscribe
      </Button>
    </form>
  );
}
