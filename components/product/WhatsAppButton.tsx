import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/types";

export function WhatsAppButton({
  product,
  size = "lg",
}: {
  product?: Pick<Product, "name" | "slug">;
  size?: "default" | "lg" | "sm";
}) {
  return (
    <Button asChild size={size} className="bg-[#1da851] text-white hover:bg-[#178f44]">
      <a href={buildWhatsAppUrl(product)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="size-4" />
        Inquire on WhatsApp
      </a>
    </Button>
  );
}
