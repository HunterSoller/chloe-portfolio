"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/Container";
import { HeroVisual } from "@/components/HeroVisual";
import { HeroDraftAccent } from "@/components/HeroDraftAccent";
import { useMemo, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHeroArchitect() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [navigatingToWork, setNavigatingToWork] = useState(false);
  const [p, setP] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.4]);
  const progressFill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const onMove = useMemo(
    () => (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce) return;
      const r = e.currentTarget.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const x = Math.max(-1, Math.min(1, nx));
      const y = Math.max(-1, Math.min(1, ny));
      setP({ x, y });
    },
    [reduce],
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
    >
      <Container>
        <div
          className="relative min-h-[100svh] [perspective:1200px]"
          onMouseMove={onMove}
          onMouseLeave={() => setP({ x: 0, y: 0 })}
        >
          <HeroVisual scrollProgress={scrollYProgress} parallax={p} />

          {/* readability veil behind text only */}
          <motion.div
            className="pointer-events-none absolute left-0 top-0 h-full w-[62%] max-w-[860px] bg-[radial-gradient(820px_520px_at_15%_35%,rgba(247,242,227,1),rgba(247,242,227,0.86))] z-[1]"
            style={reduce ? undefined : { opacity: veilOpacity }}
          />

          {/* optional progress line (hero → projects) */}
          <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 sm:block z-[2]">
            <div className="relative h-44 w-px bg-[color:var(--line)]/70 overflow-hidden">
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-[color:var(--text)]/35 origin-bottom"
                style={reduce ? { scaleY: 1 } : { scaleY: progressFill }}
              />
            </div>
          </div>

          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            animate={
              reduce
                ? { opacity: 1, y: 0 }
                : navigatingToWork
                  ? { opacity: 0, y: -18 }
                  : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.65, ease }}
            style={
              reduce || navigatingToWork ? undefined : { y: textY, opacity: textOpacity }
            }
            className={[
              "absolute z-10 max-w-3xl",
              // mobile: center the content vertically a bit more (reduce dead space at top)
              "left-6 right-6 top-[38svh]",
              // desktop/tablet: keep exact current placement
              "md:left-[6vw] md:right-auto md:bottom-[12vh] md:top-auto",
              // extra breathing room on short viewports + safe-area devices
              "pb-[max(3rem,env(safe-area-inset-bottom))]",
            ].join(" ")}
          >
            <div className="flex items-start gap-6">
              <div className="hidden sm:block w-[1px] h-20 bg-[color:var(--line)]" />
              <div>
                <div className="relative">
                  {/* mobile-only subtle line accent behind the name (no panel/card) */}
                  <HeroDraftAccent
                    scrollProgress={scrollYProgress}
                    parallax={p}
                    active={false}
                    className="pointer-events-none absolute -top-7 left-[-12px] z-0 md:hidden"
                  />
                  <HeroDraftAccent
                    scrollProgress={scrollYProgress}
                    parallax={p}
                    active={!navigatingToWork}
                    className="pointer-events-none absolute -top-10 left-[-10px] z-0 hidden sm:block"
                  />
                  <h1 className="relative z-[1] font-[family-name:var(--font-serif)] font-semibold text-[clamp(54px,11.5vw,88px)] leading-[0.86] tracking-[-0.062em] text-[color:var(--text)] md:text-[clamp(64px,8vw,128px)] md:leading-[0.92] md:tracking-[-0.055em]">
                    Chloe Soller
                  </h1>
                </div>

                <p className="mt-5 max-w-[28ch] text-[15px] leading-[1.7] text-[#2a2a2a] md:mt-7 md:max-w-none md:text-[16px] md:leading-[1.75]">
                  Architecture student at Syracuse University
                </p>
                <p className="mt-3 text-[12px] tracking-[0.12em] uppercase text-[color:var(--muted)]/90 md:text-[13px]">
                  B.Arch Candidate, 2030
                </p>

                <div className="mt-7 flex flex-col items-start gap-2 md:mt-11 md:flex-row md:items-center md:gap-10">
                  <a
                    href="/#work"
                    onClick={(e) => {
                      e.preventDefault();
                      setNavigatingToWork(true);
                      const el = document.getElementById("work");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                      window.setTimeout(() => setNavigatingToWork(false), 850);
                    }}
                    className="group inline-flex items-center gap-2 rounded-[12px] px-3 py-3 text-[12px] tracking-[0.16em] uppercase text-[color:var(--text)] transition-all active:scale-[0.98] hover:text-[color:var(--accent)] md:rounded-none md:px-0 md:py-0 md:transition-colors"
                  >
                    View Work
                    <span className="translate-x-0 opacity-70 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                  <a
                    href="/about"
                    className="group inline-flex items-center gap-2 rounded-[12px] px-3 py-3 text-[12px] tracking-[0.16em] uppercase text-[color:var(--muted)] transition-all active:scale-[0.98] hover:text-[color:var(--text)] md:rounded-none md:px-0 md:py-0 md:transition-colors"
                  >
                    About
                    <span className="translate-x-0 opacity-70 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 hidden border-t border-[color:var(--line)] md:block" />
      </Container>
    </section>
  );
}

