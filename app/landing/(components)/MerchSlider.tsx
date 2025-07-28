"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { data } from "@/data"; // your product list

const images = [
  "/images/clothing.webp",
  "/images/accessories.webp",
  "/images/bottle-opener.webp",
];

const overlayTexts = ["Apparel", "Accessories", "More!"];

export default function MerchSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex w-full gap-4 bg-gray-100 p-2">
        {images.map((src, index) => {
          const product = data[index]; // map image to product by index
          if (!product) return null;

          return (
            <Link
              key={product.id}
              href={`/landing/merch/${product.id}`}
              className={clsx(
                "bg-red-400 relative group transition-all duration-700 overflow-hidden h-[400px] px-[8px] flex-grow",
                activeIndex === index ? "w-[58%]" : "w-[21%]"
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
            >
              <div className="absolute inset-0">
                <Image
                  src={src}
                  alt={product.title}
                  fill
                  className="object-cover w-full h-full transition-all duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 flex items-end justify-center p-4">
                <p className="text-white text-lg font-semibold">
                  {overlayTexts[index]}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href="/landing/merch-all"
        className="px-3 py-1 mt-4 hover:bg-emerald-500 transition duration-150 cursor-pointer hover:text-white w-fit text-xs"
      >
        View All
      </Link>
    </div>
  );
}
