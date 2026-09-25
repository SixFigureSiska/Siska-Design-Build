"use client";

import { useEffect } from "react";
import { captureLeadSource } from "@/lib/adSource";

// Remembers whether this visit came from an ad, for the quote form's
// "How did you hear about SISKA?" prefill. Renders nothing.
export function AdSourceCapture() {
  useEffect(() => {
    captureLeadSource();
  }, []);
  return null;
}
