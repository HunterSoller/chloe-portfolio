"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";
import { useRef } from "react";

function ScrollIndicator() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] tracking-[0.18em] uppercase text-[color:var(--muted)]">
        Scroll
      </span>
      <span className="relative h-8 w-[1px] bg-[color:var(--border)] overflow-hidden">
        <span className="absolute left-0 top-0 h-3 w-full bg-[color:var(--text)] opacity-60 animate-[heroScroll_1.25s_ease-in-out_infinite]" />
      </span>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="min-h-[100svh] pt-28 sm:pt-32">
      <Container className="min-h-[calc(100svh-7rem)] sm:min-h-[calc(100svh-8rem)] flex flex-col">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? undefined : { y, opacity }}
          className="flex-1 flex items-center"
        >
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                Architecture portfolio
              </p>
              <h1 className="mt-10 font-[family-name:var(--font-serif)] text-[clamp(64px,8vw,110px)] leading-[0.9] tracking-[-0.06em] text-[color:var(--text)]">
                {site.name}
              </h1>
            </div>

            <aside className="md:col-span-5 md:flex md:items-center md:justify-end">
              <div className="max-w-[440px] md:text-right">
                <p className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                  {site.program}
                </p>
                <p className="mt-5 text-[14px] leading-[1.75] text-[color:var(--muted)]">
                  {site.note}
                </p>
              </div>
            </aside>
          </div>
        </motion.div>

        <div className="pb-10 sm:pb-12 flex items-end justify-between">
          <ScrollIndicator />
          <div className="hidden sm:block text-[11px] tracking-[0.18em] uppercase text-[color:var(--muted)]">
            Selected work below
          </div>
        </div>
      </Container>

      <div className="border-t border-[color:var(--border)]" />
    </section>
  );
}

