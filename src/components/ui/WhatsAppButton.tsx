"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "918356954152";
  const message = "Hello NexaWorks! I'm interested in a Pipeline Audit. Can we chat?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981] text-white shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-transform hover:scale-110 active:scale-95"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -4 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-12 right-0 hidden rounded-lg bg-[#131316] border border-[#27272A] px-3 py-1.5 text-xs font-semibold text-[#FAFAFA] shadow-xl group-hover:block whitespace-nowrap">
        Chat with us
      </span>
      {/* Pulse effect */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#10B981]/40" />
    </motion.a>
  );
}
