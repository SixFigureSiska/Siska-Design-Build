import { NextRequest, NextResponse } from "next/server";

// Next.js's App Router injects its own inline <script> tags for RSC
// hydration — a plain script-src 'self' blocks those outright (confirmed:
// the app broke under it). A per-request nonce is Next's documented fix:
// Next automatically applies this same nonce to every script tag IT
// renders, so the framework's own inline scripts stay allowed while any
// injected/attacker script (no nonce) still gets blocked.
export function proxy(request: NextRequest) {
  const nonce = crypto.randomUUID();
  // React's dev-mode Fast Refresh needs eval() for its debugging features
  // (confirmed via a console error) — React itself states it "will never
  // use eval() in production mode", so this stays dev-only.
  const scriptSrc =
    process.env.NODE_ENV === "production"
      ? `'self' 'nonce-${nonce}' 'strict-dynamic'`
      : `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`;
  const cspHeader = `
    default-src 'self';
    script-src ${scriptSrc};
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    frame-ancestors 'none';
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", cspHeader);
  return response;
}

export const config = {
  matcher: [
    // Skip static assets and Next's own image optimizer — only pages/API
    // routes need a fresh nonce each request.
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
