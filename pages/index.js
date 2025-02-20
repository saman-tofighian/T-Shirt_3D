import Tshirt from "@/components/Model/Tshirt";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full px-[4%] py-8 grid grid-cols-12">
        <div className="col-span-10 xl:col-span-5">
          <h1 className="text-[7rem] xl:text-[10rem] font-black">
            LET'S DO IT.
          </h1>
          <p className="text-[2rem] mt-3">
            Create your unique and exclusive shirt with our brand-new 3D
            customization tool.
          </p>
          <div className="mt-10">
            <Link
              href="/shirt"
              className="bg-[#efbd4e] shadow-xl rounded py-[15px] px-[30px] text-white"
            >
              Customize it
            </Link>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-7 py-7">
          <Canvas gl={{ antialias: true }} camera={{ fov: 35 }}>
            <Tshirt />
          </Canvas>
        </div>
      </section>
    </main>
  );
}
