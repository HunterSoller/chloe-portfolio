"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    if (reduce) return;
    setScrolled(v > 12);
  });

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <motion.div
        className="border-b"
        initial={false}
        animate={
          reduce || scrolled
            ? {
                backgroundColor: "rgba(247, 242, 227, 0.82)",
                borderColor: "rgba(216, 207, 186, 1)",
                backdropFilter: "blur(10px)",
              }
            : {
                backgroundColor: "rgba(247, 242, 227, 0)",
                borderColor: "rgba(216, 207, 186, 0)",
                backdropFilter: "blur(0px)",
              }
        }
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: -8 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Container className="py-5">
            <div className="flex items-center justify-end">
              <nav aria-label="Primary" className="flex items-center gap-8">
                <Link
                  href="/#work"
                  className="group relative -mx-2 -my-2 rounded-[10px] px-2 py-2 text-[12px] tracking-[0.16em] uppercase text-[color:var(--muted)] transition-colors hover:text-[color:var(--text)] md:mx-0 md:my-0 md:rounded-none md:px-0 md:py-0"
                >
                  <span className="relative">
                    Work
                    <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="group relative -mx-2 -my-2 rounded-[10px] px-2 py-2 text-[12px] tracking-[0.16em] uppercase text-[color:var(--muted)] transition-colors hover:text-[color:var(--text)] md:mx-0 md:my-0 md:rounded-none md:px-0 md:py-0"
                >
                  <span className="relative">
                    About
                    <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </Link>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative -mx-2 -my-2 rounded-[10px] px-2 py-2 text-[12px] tracking-[0.16em] uppercase text-[color:var(--muted)] transition-colors hover:text-[color:var(--text)] md:mx-0 md:my-0 md:rounded-none md:px-0 md:py-0"
                >
                  <span className="relative">
                    LinkedIn
                    <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </a>
              </nav>
            </div>
          </Container>
        </motion.div>
      </motion.div>
    </header>
  );
}

