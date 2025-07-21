"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/styles/gsap.css"; // contains .neon-glow class

gsap.registerPlugin(ScrollTrigger);

const ProductHero = () => {
  const blinkRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blinkRef.current || !imageRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blinkRef.current,
        start: "top 80%",
        scrub: true,
      },
    });

    // Animate glow effect with GSAP instead of class toggle
    tl.to(blinkRef.current, {
      color: "#dbfdff",
      textShadow:
        "0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 40px #00f7ff",
      duration: 0.3,
      ease: "power1.out",
    });

    tl.from(imageRef.current, {
      x: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-2/3">
        <h3 className="max-w-7xl mx-auto text-2xl md:text-6xl font-bold text-neutral-100 dark:text-neutral-200 font-sans">
          Hit 'Til It{" "}
          <span ref={blinkRef} className="font-bold font-sans inline-block">
            Blinks
          </span>
        </h3>
        <p className="text-gray-300 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          molestias incidunt tempore dicta quis alias placeat vitae perspiciatis
          reiciendis necessitatibus optio fugit corrupti dignissimos vel beatae
          magnam, velit officia totam.
        </p>
      </div>

      {/* Image that slides in */}
      <div ref={imageRef} className="flex justify-end w-full mt-8">
        <Image
          src="/images/product-1.webp"
          width={600}
          height={500}
          alt="product main"
        />
      </div>
    </div>
  );
};

export default ProductHero;
