import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  {
    key: "Content-Security-Policy",
    // A per-request nonce (via middleware/proxy.ts) was tried first, since
    // it's the stricter option — but Next statically pre-renders most of
    // this site's pages, baking one nonce into the cached HTML while a
    // fresh nonce got generated per-request for the header, so every
    // script tag mismatched and the site broke in production (confirmed
    // live). 'unsafe-inline' is the reliable fallback: script-src 'self'
    // still blocks loading a script from any external origin — the far
    // more common injection vector — this only gives up blocking an
    // inline <script> an attacker managed to get into the page some other
    // way, and no such injection point exists here (no user input is
    // rendered as raw HTML anywhere in this app).
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; " +
      "font-src 'self'; img-src 'self' data: https:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
