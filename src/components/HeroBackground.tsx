"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";

export default function HeroBackground() {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Example 3D objects */}
      <Suspense fallback={null}>
        <mesh rotation={[0.4, 0.2, 0]}>
          <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
          <meshStandardMaterial color="#0bb5ff" metalness={0.6} roughness={0.2} />
        </mesh>
      </Suspense>

      {/* Background stars */}
      <Stars radius={50} depth={50} count={500} factor={4} saturation={0} fade />

      {/* Optional: allow orbiting */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
