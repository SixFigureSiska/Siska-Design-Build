// Stand-in for a real photo. Renders a labeled block so it's obvious what
// needs to be swapped in before launch — replace with next/image once real
// photography is available (see README.md).
type PlaceholderImageProps = {
  label: string;
  ratio?: string;
  tone?: "paper" | "navy";
  className?: string;
};

export function PlaceholderImage({
  label,
  ratio = "aspect-[4/3]",
  tone = "paper",
  className = "",
}: PlaceholderImageProps) {
  const bg = tone === "navy" ? "bg-navy text-white/50" : "bg-[#eef2fb] text-muted";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl shadow-[0_2px_8px_rgba(16,26,44,0.08)] ${bg} ${ratio} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <svg
        className="absolute h-8 w-8 opacity-30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2 0L4 19" />
      </svg>
      <span className="relative px-6 text-center text-[11px] font-medium uppercase tracking-[0.15em]">
        [{label}]
      </span>
    </div>
  );
}
