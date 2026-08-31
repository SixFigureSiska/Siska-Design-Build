"use client";

import Image from "next/image";
import { useState } from "react";

// Drag (or use arrow keys, after clicking/tabbing to it) to compare two
// matched photos of the same room.
type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div>
      <div className="relative aspect-[3/2] select-none overflow-hidden rounded-[22px] border-[6px] border-white bg-navy-soft shadow-[0_20px_55px_rgba(7,27,45,0.15)]">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <span className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-accent text-white shadow-[0_4px_16px_rgba(7,27,45,0.35)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()} photos`}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />

        <span className="pointer-events-none absolute left-3.5 top-3.5 rounded-full bg-navy-deep/80 px-3 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3.5 top-3.5 rounded-full bg-navy-deep/80 px-3 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>
      {caption && <p className="mt-3 text-center text-sm text-muted">{caption}</p>}
    </div>
  );
}
