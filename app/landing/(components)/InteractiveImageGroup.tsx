"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { data } from "@/data"; // your product list

const images = [
  "/images/green-apple-main.webp",
  "/images/banana-main.webp",

  "/images/mango-main.webp",
  "/images/grape-main.webp",
  "/images/watermelon-lemon-main.webp",
];

export default function InteractiveImageGroup() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex w-full bg-gray-100 py-2">
        {images.map((src, index) => {
          const product = data[index]; // map image to product by index
          if (!product) return null;

          return (
            <Link
              key={product.id}
              href={`/landing/products/${product.id}`}
              className={clsx(
                "transition-all duration-700 overflow-hidden h-[400px] px-[8px] flex-grow",
                activeIndex === index ? "w-[58%]" : "w-[21%]"
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
            >
              <Image
                src={src}
                alt={product.title}
                width={870}
                height={580}
                className={clsx(
                  "w-full object-cover transition-all duration-700",
                  activeIndex === index ? "h-full" : "h-[115%]"
                )}
              />
            </Link>
          );
        })}
      </div>

      <Link
        href="/landing/shop-all"
        className="px-3 py-1 mt-4 hover:bg-emerald-500 transition duration-150 cursor-pointer hover:text-white w-fit text-xs"
      >
        View All
      </Link>
    </div>
  );
}
