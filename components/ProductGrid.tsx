"use client";

import Link from "next/link";
import { data } from "@/data";

const ProductGrid = () => {
  return (
    <div className="w-full justify-center p-8">
      <div className="m-auto max-w-[1100px]">
        <h2 className="font-bold text-gray-200 text-4xl mb-8">Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`}>
              <div className="cursor-pointer">
                <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center text-center transition hover:shadow-lg">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto rounded-md mb-2"
                  />
                </div>
                <h3 className="font-semibold text-sm text-gray-200 mt-2">
                  {item.title}
                </h3>
                <p className="text-xs mb-1 text-zinc-500">{item.category}</p>
                <p className="font-bold text-sm text-zinc-500">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
