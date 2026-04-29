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
              "left-6 right-6 bottom-[10vh]",
              "sm:left-[6vw] sm:right-auto sm:bottom-[12vh]",
              // extra breathing room on short viewports + safe-area devices
              "pb-[max(3rem,env(safe-area-inset-bottom))]",
            ].join(" ")}
          >
            <div className="flex items-start gap-6">
              <div className="hidden sm:block w-[1px] h-20 bg-[color:var(--line)]" />
              <div>
                <div className="relative">
                  <HeroDraftAccent
                    scrollProgress={scrollYProgress}
                    parallax={p}
                    active={!navigatingToWork}
                    className="pointer-events-none absolute -top-10 left-[-10px] z-0 hidden sm:block"
                  />
                  <h1 className="relative z-[1] font-[family-name:var(--font-serif)] font-semibold text-[clamp(64px,8vw,128px)] leading-[0.92] tracking-[-0.055em] text-[color:var(--text)]">
                    Chloe Soller
                  </h1>
                </div>

                <p className="mt-7 text-[16px] leading-[1.75] text-[#2a2a2a]">
                  Architecture student at Syracuse University
                </p>
                <p className="mt-3 text-[13px] tracking-[0.12em] uppercase text-[color:var(--muted)]/90">
                  B.Arch Candidate, 2030
                </p>

                <div className="mt-11 flex items-center gap-10">
                  <a
                    href="/#work"
                    onClick={(e) => {
                      e.preventDefault();
                      setNavigatingToWork(true);
                      const el = document.getElementById("work");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                      window.setTimeout(() => setNavigatingToWork(false), 850);
                    }}
                    className="group inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-[color:var(--text)] hover:text-[color:var(--accent)] transition-colors"
                  >
                    View Work
                    <span className="translate-x-0 opacity-70 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                  <a
                    href="/about"
                    className="group inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors"
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

        <div className="absolute bottom-0 left-0 right-0 border-t border-[color:var(--line)]" />
      </Container>
    </section>
  );
}

