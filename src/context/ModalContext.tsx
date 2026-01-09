"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import type { ContactSchema } from "@/lib/validations";

interface ModalContextValue {
  isContactOpen: boolean;
  openContactModal: (prefill?: Partial<ContactSchema>) => void;
  closeModal: () => void;
  contactPrefill?: Partial<ContactSchema>;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactPrefill, setContactPrefill] = useState<Partial<ContactSchema> | undefined>();

  const openContactModal = useCallback((prefill?: Partial<ContactSchema>) => {
    setContactPrefill(prefill);
    setIsContactOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsContactOpen(false);
    setContactPrefill(undefined);
  }, []);

  useEffect(() => {
    if (!isContactOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isContactOpen]);

  const value = useMemo(
    () => ({ isContactOpen, openContactModal, closeModal, contactPrefill }),
    [isContactOpen, openContactModal, closeModal, contactPrefill]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
