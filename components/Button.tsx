import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "outlineOnDark" | "white";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_24px_rgba(7,27,45,0.18)] hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_12px_30px_rgba(7,27,45,0.24)]",
  outline:
    "border border-accent/35 bg-white text-accent hover:-translate-y-0.5 hover:border-accent hover:bg-navy-soft/45",
  outlineOnDark:
    "border border-white/35 text-white hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10",
  white:
    "bg-white text-navy-deep shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:bg-cream",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 ${variantClasses[variant]} ${className}`}
    >
      {children}
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
