"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { companyData } from "@/data/company";

export default function WhatsAppButton() {
  // Format let's say +62 21 5555 1234 to 622155551234
  const waNumber = companyData.phone.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${waNumber}?text=Halo%20Kalsel%20Civil%2C%20saya%20ingin%20berkonsultasi.`;

  return (
    <Link
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-16 bg-white text-slate-800 text-sm py-1.5 px-3 rounded-lg shadow-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Hubungi Kami via WhatsApp
      </span>
    </Link>
  );
}
