import React from "react";
import { Space_Mono, Geist_Mono } from "next/font/google";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";

const spaceMono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"], // ✅ specify subset(s)
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {/* <div
        className="absolute h-72 w-[600px] inset-0 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, #0d9488 0%, transparent 70%)",
        }}
      /> */}
      <Image
        src={"/images/blinkers-black.png"}
        alt="blinkers logo"
        width={130}
        height={80}
        className="invert mb-16"
      />
      <div className={`text-center ${spaceMono.className}`}>
        <ul className="flex flex-col gap-4 text-gray-50 text-xs tracking-widest text-center">
          <Link href={"/landing"}>
            <li
              className="w-fit text-center cursor-pointer hover:bg-emerald-500 transition 
          duration-200 hover:translate-x-1.5 px-3 py-1"
            >
              Home
            </li>
          </Link>
          <Link href={"/landing/shop"}>
            <li
              className="w-fit text-center cursor-pointer hover:bg-emerald-500 transition 
          duration-200 hover:translate-x-1.5 px-3 py-1"
            >
              Shop
            </li>
          </Link>
          <Link href={"/landing/merch"}>
            <li
              className="w-fit text-center cursor-pointer hover:bg-emerald-500 transition 
          duration-200 hover:translate-x-1.5 px-3 py-1"
            >
              Merch
            </li>
          </Link>
          <li
            className="w-fit text-center cursor-pointer hover:bg-emerald-500 transition 
          duration-200 hover:translate-x-1.5 px-3 py-1"
          >
            About
          </li>
          <li
            className="w-fit text-center cursor-pointer hover:bg-emerald-500 transition 
          duration-200 hover:translate-x-1.5 px-3 py-1"
          >
            FAQ
          </li>
          <li
            className="w-fit text-center cursor-pointer hover:bg-emerald-500 transition 
          duration-200 hover:translate-x-1.5 px-3 py-1"
          >
            Contact
          </li>
        </ul>
        <div className="flex justify-center gap-8 text-gray-500 mt-16">
          <IconBrandFacebook
            size={21}
            className="hover:text-gray-200 cursor-pointer transition duration-200"
          />
          <IconBrandTwitter
            size={21}
            className="hover:text-gray-200 cursor-pointer transition duration-200"
          />
          <IconBrandInstagram
            size={21}
            className="hover:text-gray-200 cursor-pointer transition duration-200"
          />
        </div>
      </div>
      <div
        className={`absolute bottom-0 w-full flex flex-col justify-center ${spaceMono.className}`}
      >
        <div className="flex items-center justify-center text-xs gap-8 text-gray-50 mb-4">
          <p className="tracking-widest cursor-pointer transition duration-150 px-3 py-1 hover:bg-emerald-500">
            Terms
          </p>
          <p className="tracking-widest cursor-pointer transition duration-150 px-3 py-1 hover:bg-emerald-500">
            Policy
          </p>
          <p className="tracking-widest cursor-pointer transition duration-150 px-3 py-1 hover:bg-emerald-500">
            COA
          </p>
        </div>
        <p className="text-center text-xs text-zinc-700 p-4 border-t border-gray-700/20">
          <span className={`${geistMono.className}`}>&#169;</span>Blinkers{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default page;
