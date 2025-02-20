"use client";

import { Stage, useGLTF } from "@react-three/drei";

export default function Tshirt() {
  const model = useGLTF("/oversized_t-shirt.glb");
  model.scene.children[0].children[0].children[0].material.color.set("#efbd4e");
  return (
    <>
      <Stage shadows={{ type: "soft", color: "#efbd4e", opacity: 1 }}>
        <primitive object={model.scene} />
      </Stage>
    </>
  );
}
