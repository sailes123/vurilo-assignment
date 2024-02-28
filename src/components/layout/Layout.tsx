import { DashboardIcon, LockIcon, SearchIcon } from "@/assets/icons";
import { CartIcon, FlowerIcon, GreenRoom, HomeIcon } from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import AddchartIcon from "@mui/icons-material/Addchart";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type DataItem = {
  image: any;
  alter: string;
};

type Props = {
  children: React.ReactNode;
};

const data: DataItem[] = [
  {
    image: HomeIcon,
    alter: "Home Icon",
  },
  {
    image: FlowerIcon,
    alter: "Flower Icon",
  },
  {
    image: CartIcon,
    alter: "Cart Icon",
  },
  {
    image: HomeIcon,
    alter: "Cable Icon",
  },
];

const Layout = ({ children }: Props) => {
  const router = useRouter();

  // Access various properties of the router object
  const currentPath = router.pathname;

  return (
    <div className="h-screen flex overflow-hidden justify-center items-center w-screen">
      <div className="fixed top-0 -z-10 left-0 h-full w-full">
        <Image
          src={GreenRoom}
          alt="green background room"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="lg:w-[calc(100vw-35%)] w-[calc(100vw-10%)] max-h-[600px]  flex items-center flex-col-reverse md:flex-row justify-center gap-4">
        <div className="bg-[#d4cfcf] flex mt-10 md:mt-0 md:flex-col gap-6 w-fit p-3 rounded-full ">
          {data.map((item: DataItem, index: number) => {
            return (
              <div
                key={index}
                className={`h-7 cursor-pointer ${index === 1 && 'bg-white'} hover:bg-white p-1 rounded-full w-7`}
              >
                <Image
                  src={item?.image ?? ""}
                  alt={item?.alter ?? "icon"}
                  height={24}
                  className="object-cover"
                  width={24}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col flex-1 w-full max-h-[800px] max-w-[1000px] h-full gap-2 justify-center item-center">
          <div className="bg-white bg-opacity-50 mx-auto w-full max-w-[450px] px-8 py-2 rounded-3xl">
            <div className="flex gap-2 w-full items-center backdrop-blur-xl">
              <LockIcon className="h-5 w-5" />
              <p className="text-xs">{`https://www.plant.com${currentPath}`}</p>
            </div>
          </div>
          <div className="h-full w-full flex-1 rounded-3xl bg-white bg-opacity-40">
            <div className="h-full w-full flex-1 min-h-[350px] max-h-[600px] rounded-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-4 p-3 sm:p-6 w-full">
                <div className="full flex justify-between w-full">
                  <div className="flex gap-1  sm:gap-4">
                    <div className="bg-[#FFFFFF] bg-opacity-60 p-1 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                      <GridViewIcon />
                    </div>
                    <div className="bg-[#FFFFFF] bg-opacity-60 p-1 h-[40px] w-[40px]  rounded-full flex items-center justify-center">
                      <AddchartIcon />
                    </div>
                    <div className="bg-[#FFFFFF] bg-opacity-60 h-[40px] w-[40px]  p-1 rounded-full flex items-center justify-center">
                      <FilterAltOutlinedIcon />
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-50 flex items-center w-[100px] m-0 px-2 py-1 rounded-3xl">
                    <div className="flex items-center pl-2 w-[100px] gap-1">
                    <input placeholder="Search" type="text" className="bg-inherit focus:outline-none text-xs w-full"/>
                    <SearchOutlinedIcon className="h-5 w-5"/>
                    </div>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
