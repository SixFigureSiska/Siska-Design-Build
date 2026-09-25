"use client";

import type { ReactNode } from "react";
import { trackConversion } from "@/lib/analytics";
import { siteConfig } from "@/lib/siteConfig";

// tel: link that reports a phone_click conversion (GA4 + Meta "Contact"),
// for use inside server-rendered pages.
export function PhoneLink({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <a href={siteConfig.contact.phoneHref} onClick={() => trackConversion("phone_click")} className={className}>
      {children}
    </a>
  );
}
