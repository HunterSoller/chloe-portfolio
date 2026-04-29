"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function WireObject({ parallax }: { parallax: { x: number; y: number } }) {
  const group = useRef<Group>(null);

  const color = useMemo(() => "#BEB49F", []);

  useFrame((state, dt) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    // Very subtle motion: slow drift + slight rotation.
    group.current.rotation.y = t * 0.08 + parallax.x * 0.25;
    group.current.rotation.x = -0.12 + parallax.y * 0.18;
    group.current.position.y = Math.sin(t * 0.35) * 0.06;
  });

  return (
    <group ref={group} position={[0.35, 0.05, 0]}>
      <Float speed={0.35} rotationIntensity={0.15} floatIntensity={0.12}>
        {/* Massing-like stacked volumes */}
        <mesh position={[-0.35, -0.05, 0]}>
          <boxGeometry args={[1.25, 0.65, 1.05, 10, 6, 10]} />
          <meshBasicMaterial wireframe color={color} transparent opacity={0.32} />
        </mesh>
        <mesh position={[0.55, 0.25, -0.25]}>
          <boxGeometry args={[0.95, 0.45, 0.8, 10, 5, 10]} />
          <meshBasicMaterial wireframe color={color} transparent opacity={0.26} />
        </mesh>
        <mesh position={[0.05, 0.52, 0.35]}>
          <boxGeometry args={[0.7, 0.3, 0.65, 10, 5, 10]} />
          <meshBasicMaterial wireframe color={color} transparent opacity={0.22} />
        </mesh>

        {/* Section-like plane */}
        <mesh position={[0.2, -0.1, 0.55]} rotation={[0.12, 0.4, 0.08]}>
          <planeGeometry args={[2.1, 1.3, 18, 10]} />
          <meshBasicMaterial wireframe color={color} transparent opacity={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroWireframe({
  className = "",
  parallax,
}: {
  className?: string;
  parallax: { x: number; y: number };
}) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        camera={{ position: [0.2, 0.35, 3.2], fov: 40, near: 0.1, far: 100 }}
      >
        <ambientLight intensity={0.6} />
        <WireObject parallax={parallax} />
      </Canvas>
    </div>
  );
}

