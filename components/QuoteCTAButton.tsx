"use client";

import type { ReactNode } from "react";
import { Button } from "./Button";
import { useContactModal, type QuoteCampaign } from "./ContactModalContext";

export function QuoteCTAButton({
  children,
  variant,
  className,
  campaign,
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "outlineOnDark" | "white";
  className?: string;
  campaign?: QuoteCampaign;
}) {
  const { open } = useContactModal();
  return (
    <Button onClick={() => open(campaign)} variant={variant} className={className}>
      {children}
    </Button>
  );
}
