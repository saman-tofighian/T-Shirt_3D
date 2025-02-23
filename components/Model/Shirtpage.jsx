import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Shirtpage({ color = "white" }) {
  const model = useGLTF("/oversized_t-shirt.glb");

  useEffect(() => {
    if (model.scene) {
      model.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.color.set(color);
        }
      });
    }
  }, [model.scene, color]);

  return (
    <>
      <OrbitControls makeDefault />
      <Stage>
        <primitive object={model.scene} />
      </Stage>
    </>
  );
}
