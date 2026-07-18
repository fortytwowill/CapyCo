"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, useSyncExternalStore, useState, useEffect } from "react";
import type { Group, Mesh } from "three";

function subscribeToMotionPreference(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
}

function Blob({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reducedMotion || typeof window === "undefined") return;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.current.x = x;
      pointer.current.y = y;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reducedMotion]);

  useFrame(({ clock }) => {
    if (!meshRef.current || reducedMotion) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.08;
    meshRef.current.rotation.y = t * 0.12;
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (pointer.current.x * 0.15 - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x +=
        (-pointer.current.y * 0.1 - groupRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.35}>
        <MeshDistortMaterial
          color="#F5A623"
          roughness={0.45}
          metalness={0.35}
          distort={reducedMotion ? 0 : 0.28}
          speed={reducedMotion ? 0 : 1.1}
          opacity={0.14}
          transparent
        />
      </Sphere>
      {/* Soft inner glow sphere */}
      <Sphere args={[1, 32, 32]} scale={1.85}>
        <meshBasicMaterial color="#00D4AA" transparent opacity={0.04} />
      </Sphere>
    </group>
  );
}

export default function HeroBlob() {
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    () => false,
  );
  const isDesktop = useIsDesktop();

  // Mobile or reduced-motion: skip WebGL — CSS gradient in Hero covers the look
  if (!isDesktop || reducedMotion) {
    return null;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.35} />
      {/* Warm amber key */}
      <directionalLight position={[6, 8, 4]} intensity={1.05} color="#F5A623" />
      {/* Cool teal fill */}
      <directionalLight position={[-6, -2, 4]} intensity={0.45} color="#00D4AA" />
      {/* Soft rim */}
      <directionalLight position={[0, 4, -6]} intensity={0.25} color="#FF6B6B" />
      <Blob reducedMotion={false} />
    </Canvas>
  );
}
