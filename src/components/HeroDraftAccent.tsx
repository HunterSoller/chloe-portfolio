"use client";

import type { MotionValue } from "framer-motion";
import { motion, useReducedMotion, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroDraftAccent({
  scrollProgress,
  parallax,
  active,
  className = "",
}: {
  scrollProgress: MotionValue<number>;
  parallax: { x: number; y: number };
  active: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const driftY = useTransform(scrollProgress, [0, 1], [0, -40]);
  const driftFade = useTransform(scrollProgress, [0, 0.9], [1, 0]);
  const driftScale = useTransform(scrollProgress, [0, 1], [1, 0.96]);

  // Subtle 3D response (smaller than the main model)
  const rx = -parallax.y * 1.5;
  const ry = parallax.x * 2;
  const tx = parallax.x * 4;
  const ty = parallax.y * 3;

  const baseOpacity = active ? 0.24 : 0.16;

  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
      animate={
        reduce
          ? { opacity: 1, y: 0 }
          : {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease, delay: 0.22 },
            }
      }
      className={className}
      style={
        reduce
          ? undefined
          : {
              y: driftY,
              opacity: driftFade,
              scale: driftScale,
            }
      }
    >
      <motion.div
        className="select-none"
        style={
          reduce
            ? undefined
            : {
                transformStyle: "preserve-3d",
                rotateX: rx,
                rotateY: ry,
                x: tx,
                y: ty,
              }
        }
        animate={
          reduce
            ? undefined
            : {
                opacity: baseOpacity,
                y: [0, -6, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                opacity: {
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                  mass: 0.7,
                },
                y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        <motion.svg
          viewBox="0 0 620 260"
          className="w-[clamp(360px,34vw,620px)] h-auto"
          style={{ transformStyle: "preserve-3d" }}
        >
          <defs>
            <filter id="paperGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.55 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ultra-soft depth duplicate */}
          <g
            filter="url(#paperGlow)"
            transform="translate(2 2)"
            fill="none"
            stroke="rgba(190,180,159,0.35)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M38 86 C92 48, 172 52, 216 78 C268 110, 334 118, 402 96 C468 74, 546 76, 584 104" />
            <path d="M62 114 C114 86, 184 86, 232 110 C282 136, 344 144, 412 126 C482 106, 552 112, 590 138" />
            <path d="M44 146 C110 128, 190 132, 244 154 C302 176, 362 180, 426 166 C490 152, 552 156, 594 178" />
            <path d="M74 178 C132 164, 210 168, 262 188 C322 212, 378 214, 444 202 C510 190, 566 194, 606 214" />
          </g>

          {/* contour field */}
          <g
            fill="none"
            stroke="rgba(23,23,23,0.55)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M36 84 C90 46, 170 50, 214 76 C266 108, 332 116, 400 94 C466 72, 544 74, 582 102"
              pathLength={1}
              initial={reduce ? undefined : { strokeDasharray: 1, strokeDashoffset: 1 }}
              animate={reduce ? undefined : { strokeDashoffset: 0 }}
              transition={reduce ? undefined : { duration: 1.8, ease, delay: 0.44 }}
            />
            <motion.path
              d="M60 112 C112 84, 182 84, 230 108 C280 134, 342 142, 410 124 C480 104, 550 110, 588 136"
              pathLength={1}
              initial={reduce ? undefined : { strokeDasharray: 1, strokeDashoffset: 1 }}
              animate={reduce ? undefined : { strokeDashoffset: 0 }}
              transition={reduce ? undefined : { duration: 1.9, ease, delay: 0.54 }}
            />
            <motion.path
              d="M42 144 C108 126, 188 130, 242 152 C300 174, 360 178, 424 164 C488 150, 550 154, 592 176"
              pathLength={1}
              initial={reduce ? undefined : { strokeDasharray: 1, strokeDashoffset: 1 }}
              animate={reduce ? undefined : { strokeDashoffset: 0 }}
              transition={reduce ? undefined : { duration: 2.0, ease, delay: 0.64 }}
            />
            <motion.path
              d="M72 176 C130 162, 208 166, 260 186 C320 210, 376 212, 442 200 C508 188, 564 192, 604 212"
              pathLength={1}
              initial={reduce ? undefined : { strokeDasharray: 1, strokeDashoffset: 1 }}
              animate={reduce ? undefined : { strokeDashoffset: 0 }}
              transition={reduce ? undefined : { duration: 2.1, ease, delay: 0.74 }}
            />
            <motion.path
              d="M92 52 C150 36, 224 38, 276 58 C336 80, 396 82, 468 64 C540 48, 584 54, 612 74"
              stroke="rgba(23,23,23,0.35)"
              pathLength={1}
              initial={reduce ? undefined : { strokeDasharray: 1, strokeDashoffset: 1 }}
              animate={reduce ? undefined : { strokeDashoffset: 0 }}
              transition={reduce ? undefined : { duration: 1.6, ease, delay: 0.34 }}
            />
          </g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

