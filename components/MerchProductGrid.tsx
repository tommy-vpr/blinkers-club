"use client";

import Link from "next/link";
import { merchData } from "@/data";

const MerchProductGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50">
      {merchData.map((item) => (
        <Link key={item.id} href={`/landing/merch/${item.id}`}>
          <div className="h-full">
            {" "}
            {/* ensures grid cell stretches */}
            <div className="cursor-pointer border-1 border-transparent hover:border-gray-300 transition duration-200 h-full flex flex-col">
              <div className="flex flex-col items-center text-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="px-2 flex flex-col flex-grow justify-between pb-2">
                <h3 className="text-sm text-black mt-2">{item.title}</h3>
                <p className="text-[10px] mb-1 rounded-full bg-black/10 text-black w-fit px-2 py-[1px]">
                  {item.category}
                </p>
                <p className="text-xs text-zinc-500">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MerchProductGrid;
