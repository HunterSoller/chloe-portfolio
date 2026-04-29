"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

export function AboutPreview() {
  return (
    <section className="py-[120px]">
      <Container>
        <FadeIn>
          <Link
            href="/about"
            className="group relative block rounded-[24px] px-6 py-16 transition-transform duration-300 ease-out hover:translate-x-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 sm:px-10"
            aria-label="View About"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px] opacity-[0.08]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />
              <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0.10),transparent_70%)] opacity-40" />
            </div>

            <div className="relative mx-auto flex max-w-[720px] flex-col items-center text-center">
              <h2 className="font-[family-name:var(--font-serif)] text-[44px] font-semibold leading-[0.95] tracking-[-0.05em] text-[color:var(--text)] sm:text-[56px]">
                About
              </h2>
              <p className="mt-4 max-w-[520px] text-[15px] leading-[1.8] text-[#666] sm:text-[16px]">
                Learn more about my background and design approach.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-[color:var(--text)]">
                View About
                <span className="translate-x-0 opacity-70 transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}

