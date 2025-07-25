"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Drip from "@/components/DripOne";
import Drip2 from "@/components/DripTwo";
import Hero from "@/components/Hero";
import { div } from "motion/react-client";
import ComingSoon from "@/components/ComingSoon";
import { HeroHighlightDemo } from "@/components/highlight";
import { TextHoverEffectDemo } from "@/components/TextHoverEffectDemo";

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
    <div className="w-full flex justify-center items-center min-h-screen">
      <ComingSoon />
    </div>
  );
};

export default Page;
