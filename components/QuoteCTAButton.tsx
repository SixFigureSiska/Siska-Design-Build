"use client";

import type { ReactNode } from "react";
import { Button } from "./Button";
import { useContactModal } from "./ContactModalContext";

export function QuoteCTAButton({
  children,
  variant,
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "outlineOnDark" | "white";
  className?: string;
}) {
  const { open } = useContactModal();
  return (
    <Button onClick={open} variant={variant} className={className}>
      {children}
    </Button>
  );
}
