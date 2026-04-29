"use client";

import Image from "next/image";
import { ArchitecturalPlaceholder } from "@/components/ArchitecturalPlaceholder";

export function ProjectGridCard({
  title,
  meta,
  description,
  href,
  tone,
  imageSrc,
  imageAlt,
  objectPosition,
}: {
  title: string;
  meta: string;
  description: string;
  href: string;
  tone: "taupe" | "cream";
  imageSrc?: string;
  imageAlt?: string;
  objectPosition?: string;
}) {
  return (
    <article className="group w-full min-w-0 h-full overflow-hidden rounded-[24px] bg-[color:var(--surface)] ring-1 ring-[rgba(17,17,17,0.14)] transition-[transform,box-shadow,ring-color] duration-300 ease-out hover:-translate-y-[6px] hover:ring-[rgba(17,17,17,0.22)] hover:shadow-[0_20px_70px_rgba(17,17,17,0.10)]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full cursor-pointer flex-col"
        aria-label={`${title} — open portfolio PDF`}
      >
        <div className="relative w-full overflow-hidden">
          <div className="relative h-[240px] lg:h-[220px] xl:h-[240px] w-full">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.035]"
                style={{ objectPosition: objectPosition ?? "center" }}
                priority={title === "Slant House"}
              />
            ) : (
              <ArchitecturalPlaceholder className="h-full w-full" tone={tone} />
            )}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,17,0.12),transparent_55%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[color:var(--muted)]">
            {meta}
          </p>
          <h3 className="mt-4 font-[family-name:var(--font-serif)] text-2xl leading-[1.08] tracking-[-0.02em] text-[color:var(--text)]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-[1.75] text-[color:var(--muted)]">
            {description}
          </p>
          <div className="mt-auto pt-6">
            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-[color:var(--text)] transition-colors duration-300 ease-out group-hover:text-[color:var(--accent)]">
              Open Portfolio
              <span className="inline-block translate-x-0 opacity-70 transition-all duration-300 ease-out group-hover:translate-x-[6px] group-hover:opacity-100">
                →
              </span>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

