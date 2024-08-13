import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px]">
      <div className="container ">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center text-xl text-white/70 mt-5">Celebrate the joy of design with a website tailored to help architects create and refine their floorplans, turning visions into reality.</p>
        </div>
        <div className="flex items-center justify-center h-screen">
          <Image 
          height={800} 
          width={800} 
          src={appScreen} 
          alt="The product screenshot" 
          className="mt-14 rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};
