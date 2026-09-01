export type ConversionEvent =
  | "generate_lead"
  | "schedule_call"
  | "phone_click"
  | "email_click";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const META_EVENTS: Partial<Record<ConversionEvent, string>> = {
  generate_lead: "Lead",
  schedule_call: "Schedule",
  phone_click: "Contact",
  email_click: "Contact",
};

export function trackConversion(
  event: ConversionEvent,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, parameters);

  const metaEvent = META_EVENTS[event];
  if (metaEvent) window.fbq?.("track", metaEvent, parameters);
}
