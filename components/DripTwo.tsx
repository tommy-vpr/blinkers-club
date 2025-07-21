"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface DripProps {
  image: string;
  bgColor?: string; // optional with a default fallback
  containerBg?: string;
}

export default function Drip({
  image,
  bgColor = "bg-[#1735b5]",
  containerBg = "bg-transparent",
}: DripProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const yellowRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !yellowRef.current || !redRef.current) return;

    gsap.to(yellowRef.current, {
      yPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom 30%",
        scrub: true,
      },
    });

    gsap.fromTo(
      redRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div ref={sectionRef} className={`h-[100vh] ${containerBg} relative`}>
      <div ref={yellowRef} className="absolute top-0 h-[70vh]">
        <div ref={redRef} className={`w-full ${bgColor}`}></div>
        <Image
          src={image}
          alt="drip"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover relative z-0 -mt-1"
        />
      </div>
    </div>
  );
}
