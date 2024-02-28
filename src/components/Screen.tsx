import { HomeIcon } from "@/assets/images";
import Image from "next/image";
import React from "react";

type DataItem = {
  image: any;
  alter: string;
};

const data: DataItem[] = [
  {
    image: HomeIcon,
    alter: "Home Icon",
  },
  {
    image: HomeIcon,
    alter: "Flower Icon",
  },
  {
    image: HomeIcon,
    alter: "Cart Icon",
  },
  {
    image: HomeIcon,
    alter: "Cable Icon",
  },
];

const Screen = () => {
  return (
    <div className="w-[calc(100vw-20%] flex items-center justify-center gap-4 h-[calc(100vh - 20%)]">
      <div className="bg-[#d4cfcf] flex gap-6 flex-col w-fit p-3 rounded-full ">
        {data.map((item: DataItem, index) => {
          return (
            <div className="h-6 cursor-pointer hover:bg-white p-[2px] rounded-full w-6">
              <Image
                src={item?.image??''}
                alt={item?.alter??'icon'}
                height={24}
                className="object-cover"
                width={24}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Screen;
