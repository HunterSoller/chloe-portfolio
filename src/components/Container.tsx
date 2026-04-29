import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-[clamp(24px,4vw,64px)] ${className}`}
    >
      {children}
    </div>
  );
}

