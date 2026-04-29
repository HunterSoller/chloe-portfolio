"use client";

import { Container } from "@/components/Container";
import { ProjectGridCard } from "@/components/ProjectGridCard";
import { motion, useReducedMotion } from "framer-motion";

export function ArchitecturePortfolioSection() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="relative -mt-[40px] pt-[40px] pb-16 sm:pb-20">
      {/* layered transition into hero */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-16 bg-[linear-gradient(to_bottom,rgba(247,242,227,0),rgba(247,242,227,1))]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-8 shadow-[0_-10px_34px_rgba(17,17,17,0.06)]" />

      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-10 xl:px-12">
        <motion.div
          initial={
            reduce
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 24, filter: "blur(4px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pt-10 sm:pt-12">
            <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--muted)]">
              Architecture Portfolio
            </p>
            <div className="mt-6 border-t border-[color:var(--line)]" />
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: {
              transition: reduce
                ? {}
                : { staggerChildren: 0.14, delayChildren: 0.12 },
            },
          }}
        >
          <motion.div
            className="w-full min-w-0"
            variants={{
              hidden: reduce
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 48, scale: 0.98 },
              show: reduce
                ? { opacity: 1, y: 0, scale: 1 }
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
            }}
          >
            <ProjectGridCard
              title="Civic Assembly Plaza"
              meta="ARC 108 Studio · Spring 2026"
              description="Community resource center exploring movement, public experience, circulation, visual cues, and spatial sequence."
              href="/projects/civil-arch-portfolio.pdf"
              tone="taupe"
              imageSrc="/projects/civic-assembly-plaza.png"
              imageAlt="Civic Assembly Plaza project model preview"
              objectPosition="center top"
            />
          </motion.div>

          <motion.div
            className="w-full min-w-0"
            variants={{
              hidden: reduce
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 48, scale: 0.98 },
              show: reduce
                ? { opacity: 1, y: 0, scale: 1 }
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
            }}
          >
            <ProjectGridCard
              title="Slant House"
              meta="ARC 107 Studio · Fall 2025"
              description="Interior-driven residence exploring section, courtyard, and spatial sequence."
              href="/projects/slant-house.pdf"
              tone="taupe"
              imageSrc="/projects/slant-house-preview.png"
              imageAlt="Slant House physical model photograph"
              objectPosition="center"
            />
          </motion.div>

          <motion.div
            className="w-full min-w-0"
            variants={{
              hidden: reduce
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 48, scale: 0.98 },
              show: reduce
                ? { opacity: 1, y: 0, scale: 1 }
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
            }}
          >
            <ProjectGridCard
              title="Interlock"
              meta="ARC 108 Studio · Spring 2026"
              description="Cardboard chair study focused on joinery, load paths, and structural balance."
              href="/projects/interlock.pdf"
              tone="cream"
              imageSrc="/projects/interlock-preview.png"
              imageAlt="Interlock cardboard chair prototype photograph"
              objectPosition="center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

