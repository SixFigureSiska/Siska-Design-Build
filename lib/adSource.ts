// Works out which "How did you hear about SISKA?" answer applies to a
// visitor who arrived from an ad, so the quote form can prefill it. Read
// from the landing URL (utm_source, or the fbclid/gclid click IDs the ad
// platforms append) or the referrer, then remembered for the tab's session
// so it survives browsing to another page before requesting a quote.

const STORAGE_KEY = "siska_lead_source";

type LeadSource = "social" | "google";

function detect(): LeadSource | null {
  const params = new URLSearchParams(window.location.search);
  const utm = (params.get("utm_source") || "").toLowerCase();
  if (/^(facebook|fb|instagram|ig|meta)$/.test(utm) || params.has("fbclid")) return "social";
  if (utm === "google" || params.has("gclid")) return "google";

  let referrerHost = "";
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {
    // Malformed referrer; ignore.
  }
  if (/(^|\.)(facebook|instagram)\.com$/.test(referrerHost)) return "social";
  if (/(^|\.)google\.[a-z.]+$/.test(referrerHost)) return "google";
  return null;
}

// Called once per page load (see AdSourceCapture) to remember an ad arrival.
export function captureLeadSource() {
  const source = detect();
  if (!source) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, source);
  } catch {
    // Storage blocked (private mode); the current page's URL still works.
  }
}

export function getLeadSource(): LeadSource | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "social" || stored === "google") return stored;
  } catch {
    // Fall through to the current URL.
  }
  return detect();
}
