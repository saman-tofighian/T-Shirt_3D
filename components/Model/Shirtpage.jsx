import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";

export default function Shirtpage({ color }) {
  const model = useGLTF("/oversized_t-shirt.glb");

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh && child.material) {
        gsap.to(child.material.color, {
          r: gsap.utils.splitColor(color)[0] / 255,
          g: gsap.utils.splitColor(color)[1] / 255,
          b: gsap.utils.splitColor(color)[2] / 255,
          duration: 1,
        });
      }
    });
  }, [color]);

  return (
    <>
      <OrbitControls />
      <Stage>
        <primitive object={model.scene} />
      </Stage>
    </>
  );
}
