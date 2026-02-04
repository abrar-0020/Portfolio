'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere({ position, scale, speed, color, isMobile }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  // Reduce geometry complexity on mobile
  const segments = isMobile ? 32 : 64;

  return (
    <Sphere ref={meshRef} args={[1, segments, segments]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={isMobile ? 0.2 : 0.4}
        speed={2}
        roughness={0}
        metalness={0}
        opacity={isMobile ? 0.3 : 0.5}
        transparent
        depthWrite={false}
      />
    </Sphere>
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const spheres = useMemo(() => [
    { position: [-3, 0, -5], scale: 1.5, speed: 0.5, color: '#dbeafe' },
    { position: [3, -1, -4], scale: 1.2, speed: 0.7, color: '#e0e7ff' },
    { position: [0, 2, -6], scale: 1, speed: 0.6, color: '#f0f9ff' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#bfdbfe" />
      
      {spheres.map((sphere, index) => (
        <FloatingSphere key={index} {...sphere} isMobile={isMobile} />
      ))}
    </>
  );
}

export default function Scene3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
