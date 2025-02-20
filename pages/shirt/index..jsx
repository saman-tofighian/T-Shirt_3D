import Shirtpage from "@/components/Model/Shirtpage";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  const [color, setColor] = useState("white");

  // تغییر رنگ پس‌زمینه با GSAP
  useEffect(() => {
    gsap.to(document.body, { backgroundColor: color, duration: 1 });
  }, [color]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {/* 👕 Canvas برای نمایش مدل سه‌بعدی */}
      <div className="w-full flex justify-end px-[6%]">
        <Link
          href="/"
          className="bg-[#efbd4e] shadow-xl rounded py-[15px] px-[30px] text-white"
        >
          Go Back
        </Link>
      </div>
      <div className="w-full h-[70vh]">
        <Canvas
          gl={{ antialias: true }}
          camera={{ fov: 75, position: [0, 0, 6] }}
        >
          <Shirtpage color={color} />
        </Canvas>
      </div>

      {/* 🎨 دکمه‌های تغییر رنگ */}
      <div className="w-full flex justify-center mt-9 gap-4">
        <button
          className="w-[40px] h-[40px] bg-red-600 rounded-full shadow-lg"
          onClick={() => setColor("red")}
        ></button>
        <button
          className="w-[40px] h-[40px] bg-green-600 rounded-full shadow-lg"
          onClick={() => setColor("green")}
        ></button>
        <button
          className="w-[40px] h-[40px] bg-blue-600 rounded-full shadow-lg"
          onClick={() => setColor("blue")}
        ></button>
        <button
          className="w-[40px] h-[40px] bg-purple-600 rounded-full shadow-lg"
          onClick={() => setColor("purple")}
        ></button>
        <button
          className="w-[40px] h-[40px] bg-yellow-400 rounded-full shadow-lg"
          onClick={() => setColor("yellow")}
        ></button>
      </div>
    </div>
  );
}
