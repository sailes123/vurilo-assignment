import { ChineseMoney, Delisicious, GreenRoom, Monstera } from "@/assets/images";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div  className="h-full flex items-center overflow-hidden space-between w-full">
      <div className="hidden md:flex flex-1 h-full items-center flex-col gap-2">
        <div className="flex  h-[200px] w-[150px]">
              <Image src={ChineseMoney} alt='chinese money' className="h-fulll w-full object-cover" />
        </div>
        <p className="text-white text-[14px] leading-[18px]">Chinese Money</p>
        <p className="text-white text-[14px] leading-[18px] font-medium">$220</p>
        </div>
        <div className="flex-1 flex items-start">
        <div className=" h-[200px] w-[200px] sm:h-[300px] mx-auto sm:w-[300px]">
        <Image src={Monstera} alt='monstera' className="h-fulll w-full object-fill" />
        </div>
        </div>
        <div className=" flex-1 hidden md:flex  items-center flex-col gap-2">
        <div className="h-[200px] w-[150px]">
        <Image src={Delisicious} alt='delisicious' className="h-fulll w-full object-cover" />
        </div>
        <p className="text-white text-[14px] leading-[18px]">Monstera Deliciousa</p>
        <p className="text-white text-[14px]leading-[18px]">$220</p> 
        </div> 
      </div>
      <div className="absolute p-2 sm:p-4 -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 rounded-full gap-2 sm:gap-8 bg-white bg-opacity-40  items-center flex shadow-xl  ">
          <div className="flex flex-col pl-2 sm:pl-4 gap-1">
               <p className="text-[13px] leading-[17px] sm:text-[16px] whitespace-nowrap sm:leading-[20px] text-white">Monstera Deliciousa</p>
               <p className="test-[13px] sm:text-[16px] leading-[17px] sm:leading-[20px] font-bold text-white">$244</p>
          </div>
          <div className="p-2 sm:p-3 whitespace-nowrap bg-white font-semibold  text-xs rounded-full">
            + Add to Cart
          </div>
      </div>

    </>
  );
};

export default HomePage;
