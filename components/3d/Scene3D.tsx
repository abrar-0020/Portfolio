'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere({ position, scale, speed, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.1}
        opacity={0.6}
        transparent
      />
    </Sphere>
  );
}

function Scene() {
  const spheres = useMemo(() => [
    { position: [-3, 0, -5], scale: 1.5, speed: 0.5, color: '#e0e7ff' },
    { position: [3, -1, -4], scale: 1.2, speed: 0.7, color: '#dbeafe' },
    { position: [0, 2, -6], scale: 1, speed: 0.6, color: '#f0f9ff' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#93c5fd" />
      
      {spheres.map((sphere, index) => (
        <FloatingSphere key={index} {...sphere} />
      ))}
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
