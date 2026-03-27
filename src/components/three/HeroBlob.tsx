"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, useSyncExternalStore } from "react";
import type { Mesh } from "three";

function subscribeToMotionPreference(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getMotionPreferenceServer() {
  return false;
}

function Blob() {
  const meshRef = useRef<Mesh>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getMotionPreferenceServer,
  );

  useFrame(({ clock }) => {
    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
      <MeshDistortMaterial
        color="#F5A623"
        roughness={0.3}
        metalness={0.8}
        distort={reducedMotion ? 0 : 0.35}
        speed={reducedMotion ? 0 : 1.5}
        opacity={0.12}
        transparent
      />
    </Sphere>
  );
}

export default function HeroBlob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#F5A623" />
      <directionalLight position={[-5, -5, 5]} intensity={0.3} color="#00D4AA" />
      <Blob />
    </Canvas>
  );
}
