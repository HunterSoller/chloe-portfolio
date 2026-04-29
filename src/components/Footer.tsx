import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)]">
      <Container className="py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-[1.75] text-[color:var(--muted)]">
            Syracuse University · B.Arch Candidate, 2030
          </p>
          <div className="flex items-center gap-8">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors"
            >
              LinkedIn
              <span className="translate-x-0 opacity-70 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </a>
            <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--muted)]">
              © 2026
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

