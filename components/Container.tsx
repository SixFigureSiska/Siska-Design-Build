import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full ${wide ? "max-w-[1320px]" : "max-w-[1180px]"} px-5 sm:px-7 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
