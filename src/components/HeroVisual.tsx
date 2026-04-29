"use client";

import { useEffect, useMemo, useState } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { HeroWireframe } from "@/components/HeroWireframe";
import { ArchitecturalPlaceholder } from "@/components/ArchitecturalPlaceholder";

const ease = [0.22, 1, 0.36, 1] as const;

function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return mobile;
}

export function HeroVisual({
  scrollProgress,
  parallax,
}: {
  scrollProgress?: MotionValue<number>;
  parallax?: { x: number; y: number };
}) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const [p, setP] = useState({ x: 0, y: 0 });
  const parallaxSource = parallax ?? p;

  const fallback = useMotionValue(0);
  const source = scrollProgress ?? fallback;
  const driftY = useTransform(source, [0, 1], [0, 22]);
  const driftScale = useTransform(source, [0, 1], [1, 1.04]);

  const onMove = useMemo(
    () => (e: React.MouseEvent<HTMLDivElement>) => {
      if (parallax) return;
      if (reduce || isMobile) return;
      const r = e.currentTarget.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      // clamp to keep it subtle
      const x = Math.max(-1, Math.min(1, nx));
      const y = Math.max(-1, Math.min(1, ny));
      setP({ x, y });
    },
    [reduce, isMobile, parallax],
  );

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1 }}
      transition={{ duration: 0.65, ease, delay: 0.14 }}
      onMouseMove={onMove}
      onMouseLeave={() => setP({ x: 0, y: 0 })}
      className="absolute right-[-6vw] top-1/2 -translate-y-1/2 z-0 hidden w-[70vw] max-w-[1100px] md:block"
      style={reduce ? undefined : { y: driftY, scale: driftScale }}
    >
      {/* three.js scene (desktop only) */}
      <HeroWireframe className="aspect-[16/11] w-full" parallax={parallaxSource} />
    </motion.div>
  );
}

