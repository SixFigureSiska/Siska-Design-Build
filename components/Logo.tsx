import Image from "next/image";

type LogoProps = {
  variant?: "onLight" | "onDark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-[190px] sm:w-[215px]",
  md: "w-[230px]",
  lg: "w-[260px] sm:w-[300px]",
};

export function Logo({ variant: _variant = "onLight", size = "md", className = "" }: LogoProps) {
  return (
    <Image
      src="/siska-white-long-logo.svg"
      alt="Siska Design + Build"
      width={2020}
      height={300}
      className={`h-auto max-w-full ${sizeClasses[size]} ${className}`}
    />
  );
}
