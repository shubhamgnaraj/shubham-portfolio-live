import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const ORBIT_RADIUS = 1.65;
// Negative tilt brings the near/front half lower and pushes the far/back half up.
const ORBIT_TILT = -0.85;
const ORBIT_SPEED = 0.65;
const PARALLAX_STRENGTH = 0.12;
const PARALLAX_SMOOTHING = 3;

function OrbitRig({ segment, pointerRef }) {
  const rigRef = useRef(null);
  const orbRef = useRef(null);
  const coreMaterialRef = useRef(null);
  const haloMaterialRef = useRef(null);
  const lightRef = useRef(null);

  useFrame((state, delta) => {
    if (!rigRef.current) return;

    const pointer = pointerRef.current;
    const targetX = ORBIT_TILT + pointer.y * PARALLAX_STRENGTH;
    const targetY = pointer.x * PARALLAX_STRENGTH;

    rigRef.current.rotation.x = THREE.MathUtils.damp(
      rigRef.current.rotation.x,
      targetX,
      PARALLAX_SMOOTHING,
      delta,
    );
    rigRef.current.rotation.y = THREE.MathUtils.damp(
      rigRef.current.rotation.y,
      targetY,
      PARALLAX_SMOOTHING,
      delta,
    );

    // Use a shared wall-clock time so the two transparent canvases stay in sync.
    const time = performance.now() / 1000;
    const angle = (time * ORBIT_SPEED) % (Math.PI * 2);

    // With a negative X tilt, the lower half is closer to the camera.
    const isFront = Math.sin(angle) <= 0;
    const orbBelongsHere = segment === "front" ? isFront : !isFront;

    if (orbRef.current) {
      orbRef.current.visible = orbBelongsHere;
      orbRef.current.position.set(
        ORBIT_RADIUS * Math.cos(angle),
        ORBIT_RADIUS * Math.sin(angle),
        0,
      );
    }

    const pulse = 0.5 + 0.5 * Math.sin(time * 3.2);
    if (coreMaterialRef.current) {
      coreMaterialRef.current.emissiveIntensity = 2.3 + pulse * 0.8;
    }
    if (haloMaterialRef.current) {
      haloMaterialRef.current.opacity = 0.12 + pulse * 0.09;
    }
    if (lightRef.current) {
      lightRef.current.intensity = 2.3 + pulse * 1.5;
    }
  });

  return (
    <group ref={rigRef} position={[0, -0.25, 0]}>
      <mesh rotation={[0, 0, segment === "front" ? Math.PI : 0]}>
        <torusGeometry args={[ORBIT_RADIUS, 0.045, 24, 160, Math.PI]} />
        <meshPhysicalMaterial
          color="#ff5738"
          metalness={0.3}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.18}
        />
      </mesh>

      {/* A warm-white luminous core with a soft golden halo and local light. */}
      <group ref={orbRef} visible={false}>
        <mesh>
          <sphereGeometry args={[0.052, 32, 32]} />
          <meshStandardMaterial
            ref={coreMaterialRef}
            color="#fff8df"
            emissive="#fff0b2"
            emissiveIntensity={2.7}
            roughness={0.18}
            metalness={0.05}
            toneMapped={false}
          />
        </mesh>

        <mesh scale={2.2}>
          <sphereGeometry args={[0.052, 24, 24]} />
          <meshBasicMaterial
            color="#ffd36f"
            transparent
            opacity={0.17}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

        <mesh scale={3.5}>
          <sphereGeometry args={[0.052, 20, 20]} />
          <meshBasicMaterial
            color="#ffbd55"
            transparent
            opacity={0.055}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

        <pointLight
          ref={lightRef}
          color="#ffe5a3"
          intensity={3}
          distance={1.1}
          decay={2}
        />
      </group>
    </group>
  );
}

function Scene({ segment, pointerRef }) {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 4, 5]} intensity={3} />
      <pointLight position={[-3, -2, 3]} color="#ff5738" intensity={12} />
      <OrbitRig segment={segment} pointerRef={pointerRef} />
      <Environment preset="studio" />
    </>
  );
}

function RingCanvas({ segment, pointerRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <Scene segment={segment} pointerRef={pointerRef} />
    </Canvas>
  );
}

export default function HeroScene({ pointerRef }) {
  return (
    <div className="hero-3d-scene" aria-hidden="true">
      <div className="ring-back">
        <RingCanvas segment="back" pointerRef={pointerRef} />
      </div>
      <div className="ring-front">
        <RingCanvas segment="front" pointerRef={pointerRef} />
      </div>
    </div>
  );
}
