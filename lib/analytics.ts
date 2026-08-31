export type ConversionEvent =
  | "generate_lead"
  | "schedule_call"
  | "phone_click"
  | "email_click";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(
  event: ConversionEvent,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", event, parameters);
}
