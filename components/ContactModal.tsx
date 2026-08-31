"use client";

import { useEffect } from "react";
import { useContactModal } from "./ContactModalContext";
import { QuickQuoteFlow } from "./QuickQuoteFlow";

export function ContactModal() {
  const { isOpen, close } = useContactModal();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-sm animate-[quote-backdrop-in_0.25s_ease-out]"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[24px] bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] animate-[quote-modal-in_0.32s_cubic-bezier(0.16,1,0.3,1)] sm:p-9">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-navy-soft/50 hover:text-ink"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <QuickQuoteFlow variant="modal" onClose={close} />
      </div>
    </div>
  );
}
