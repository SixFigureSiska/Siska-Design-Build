// Text lockup used until the supplied logo artwork is dropped into /public.
type LogoProps = {
  variant?: "onLight" | "onDark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl sm:text-3xl",
};

export function Logo({ variant = "onLight", size = "md", className = "" }: LogoProps) {
  const wordmark = variant === "onDark" ? "text-white" : "text-ink";
  const tag = variant === "onDark" ? "text-[#b9cbd7]" : "text-accent";
  const divider = variant === "onDark" ? "border-white/25" : "border-accent/25";

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span
        className={`font-display font-medium leading-none tracking-[0.22em] ${sizeClasses[size]} ${wordmark}`}
      >
        SISKA
      </span>
      <span
        className={`ml-2.5 border-l pl-2.5 font-display text-[10px] font-medium uppercase leading-none tracking-[0.18em] ${divider} ${tag}`}
      >
        Design + Build
      </span>
    </div>
  );
}
