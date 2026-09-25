"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const subscribe = () => () => {};

// Renders a time-limited promotion only until its deadline. Pages are
// statically pre-rendered, so the date check has to happen in the browser —
// otherwise an expired offer would stay baked into the cached HTML until the
// next deploy. The server snapshot renders the offer; the browser hides it
// once the deadline has passed.
export function LimitedOffer({ endsAt, children }: { endsAt: string; children: ReactNode }) {
  const expired = useSyncExternalStore(
    subscribe,
    () => Date.now() >= new Date(endsAt).getTime(),
    () => false,
  );

  if (expired) return null;
  return <>{children}</>;
}
