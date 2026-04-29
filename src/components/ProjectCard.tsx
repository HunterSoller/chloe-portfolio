import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus:outline-none"
      aria-label={`${project.title} — view project`}
    >
      <figure>
        <div className="overflow-hidden rounded-[6px] bg-white ring-1 ring-[color:var(--border)] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
          <div className="relative aspect-[3/2] w-full">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover opacity-[0.985] transition-opacity duration-500 ease-out group-hover:opacity-100"
            priority={project.featured}
          />
        </div>
      </div>

        <figcaption className="mt-5 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="font-[family-name:var(--font-serif)] text-[22px] leading-[1.1] tracking-[-0.02em] text-[color:var(--text)]">
              {project.title}
            </h3>
            <p className="mt-2 text-[12px] tracking-[0.12em] uppercase text-[color:var(--muted)]">
              {project.course} — {project.semester} {project.year}
            </p>
            <p className="mt-3 max-w-[520px] text-[14px] leading-[1.7] text-[color:var(--muted)]">
              {project.subtitle ?? project.shortDescription}
            </p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}

