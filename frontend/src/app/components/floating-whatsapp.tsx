import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/app/data/site";

type Props = {
  phone?: string;
  message?: string;
};

export function FloatingWhatsApp({
  phone = SITE.whatsapp,
  message = SITE.whatsappMessage,
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
   >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
}
