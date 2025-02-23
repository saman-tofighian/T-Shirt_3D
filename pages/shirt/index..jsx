import Shirtpage from "@/components/Model/Shirtpage";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  const [shirtColor, setShirtColor] = useState("#fff");
  const [bgColor, setBgColor] = useState("white");

  const getContrastColor = (color) => {
    const colorMap = {
      red: "#e0f7fa",
      green: "#ffebee",
      blue: "#ffe0b2",
      purple: "#e8f5e9",
      yellow: "#ede7f6",
    };
    return colorMap[color] || "white";
  };

  useEffect(() => {
    const newBgColor = getContrastColor(shirtColor);
    setBgColor(newBgColor);
  }, [shirtColor]);

  useEffect(() => {
    gsap.to("body", { backgroundColor: bgColor, duration: 1 });
  }, [bgColor]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full flex justify-end px-[6%]">
        <Link
          href="/"
          className="bg-[#efbd4e] shadow-xl rounded py-[15px] px-[30px] text-white"
        >
          Go Back
        </Link>
      </div>

      <div className="w-full h-[60vh]">
        <Canvas
          gl={{ antialias: true }}
          camera={{ fov: 75, position: [0, 0, 6] }}
        >
          <Shirtpage color={shirtColor} />
        </Canvas>
      </div>

      <div className="w-full flex justify-center mt-7 gap-4">
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
