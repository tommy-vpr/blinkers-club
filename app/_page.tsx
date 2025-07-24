"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Drip from "@/components/DripOne";
import Drip2 from "@/components/DripTwo";
import Hero from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const lastDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lastDivRef.current) return;

    gsap.fromTo(
      lastDivRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lastDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="relative h-[300vh] overflow-hidden">
        {/* Hero */}
        <Hero />

        {/* First Drip at top */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Drip
            image="/images/drip-bg-1.webp"
            bgColor="bg-[#333]"
            containerBg="bg-transparent"
          />
        </div>

        {/* Second Drip underneath */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Drip2 image="/images/drip-bg-2.webp" bgColor="bg-[#222]" />
        </div>
      </div>
    </>
  );
};

export default Page;
