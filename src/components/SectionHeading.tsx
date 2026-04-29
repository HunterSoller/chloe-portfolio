import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      {eyebrow ? (
        <p className="text-[12px] tracking-[0.12em] uppercase text-[color:var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-serif)] text-[30px] leading-[1.12] tracking-[-0.03em] text-[color:var(--text)] sm:text-[36px]">
        {title}
      </h2>
      {children ? (
        <div className="max-w-[520px] text-[15px] leading-[1.7] text-[color:var(--muted)]">
          {children}
        </div>
      ) : null}
    </div>
  );
}

