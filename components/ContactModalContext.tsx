"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

// Optional context a landing page attaches when it opens the quote modal
// (e.g. which ad campaign sent the visitor). It rides along into the lead
// email and CRM so campaign leads can be told apart from general site leads.
export type QuoteCampaign = {
  label: string;
  projectType?: string;
};

type ContactModalContextValue = {
  isOpen: boolean;
  campaign: QuoteCampaign | null;
  open: (campaign?: QuoteCampaign) => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [campaign, setCampaign] = useState<QuoteCampaign | null>(null);
  const open = useCallback((next?: QuoteCampaign) => {
    setCampaign(next ?? null);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, campaign, open, close }), [isOpen, campaign, open, close]);

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>;
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}
