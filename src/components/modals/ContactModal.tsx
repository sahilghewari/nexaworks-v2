"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { useModal } from "@/context/ModalContext";
import { Button } from "@/ui/button";

export function ContactModal() {
  const { isContactOpen, closeModal, contactPrefill } = useModal();

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isContactOpen) {
      window.addEventListener("keydown", onEsc);
    }
    return () => window.removeEventListener("keydown", onEsc);
  }, [isContactOpen, closeModal]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isContactOpen ? (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-3xl"
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
            role="dialog"
            aria-modal="true"
            aria-label="Contact NexaWorks"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-[#CBC8BA] transition hover:border-[#FF2003]/50 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <ContactForm
              defaultValues={contactPrefill}
              onSuccess={closeModal}
              className="backdrop-blur"
              ctaLabel="Send Message"
            />
            <div className="mt-3 flex justify-end text-xs text-[#9CA3AF]">
              <Button variant="ghost" size="sm" onClick={closeModal}>
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
