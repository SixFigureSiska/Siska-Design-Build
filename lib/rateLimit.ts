// Small in-memory fixed-window rate limiter. On Vercel this is best-effort
// only — state resets on a cold start and isn't shared across regions/
// instances — but it's a cheap floor against a single burst of spam, and
// costs nothing to add. Vercel's dashboard-level "Attack Challenge Mode" is
// a stronger complementary option if this proves insufficient.

const buckets = new Map<string, { count: number; resetAt: number }>();

export function checkLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= max) return false;
  bucket.count += 1;
  return true;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}
