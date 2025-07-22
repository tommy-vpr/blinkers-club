"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";
import { data } from "@/data";

export function ProductSlider() {
  const cards = data.map((product, index) => (
    <Link key={product.id} href={`/products/${product.id}`}>
      <Card
        index={index}
        card={{
          title: product.title,
          category: product.category,
          src: product.src,
          content: (
            <div className="text-center">
              <p className="text-neutral-500 text-sm">{product.category}</p>
              <p className="text-green-600 font-bold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ),
        }}
      />
    </Link>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-100 dark:text-neutral-200 font-sans">
        Products
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
