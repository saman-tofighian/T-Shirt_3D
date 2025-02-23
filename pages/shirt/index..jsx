import Shirtpage from "@/components/Model/Shirtpage";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  const [shirtColor, setShirtColor] = useState("red");
  const [bgColor, setBgColor] = useState("white");

  const getContrastColor = (color) => {
    const colorMap = {
      red: "#e0f7fa",
      green: "#ffebee",
      blue: "#fff3e0",
      purple: "#e8f5e9",
      yellow: "#ede7f6",
    };
    return colorMap[color] || "#ffffff";
  };

  useEffect(() => {
    const contrastColor = getContrastColor(shirtColor);
    setBgColor(contrastColor);
    gsap.to("body", { backgroundColor: contrastColor, duration: 1 });
  }, [shirtColor]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full h-[70vh]">
        <Canvas
          gl={{ antialias: true }}
          camera={{ fov: 75, position: [0, 0, 7] }}
        >
          <Shirtpage color={shirtColor} />
        </Canvas>
      </div>

      <div className="w-full flex justify-center mt-9 gap-4">
        <button
          className="w-[50px] h-[50px] bg-red-600 rounded-full shadow-lg"
          onClick={() => setShirtColor("red")}
        ></button>
        <button
          className="w-[50px] h-[50px] bg-[#6ce67e] rounded-full shadow-lg"
          onClick={() => setShirtColor("#6ce67e")}
        ></button>
        <button
          className="w-[50px] h-[50px] bg-[#28d] rounded-full shadow-lg"
          onClick={() => setShirtColor("#28d")}
        ></button>
        <button
          className="w-[50px] h-[50px] bg-[#cb61e8] rounded-full shadow-lg"
          onClick={() => setShirtColor("#cb61e8")}
        ></button>
        <button
          className="w-[50px] h-[50px] bg-yellow-400 rounded-full shadow-lg"
          onClick={() => setShirtColor("yellow")}
        ></button>
      </div>
    </div>
  );
}
