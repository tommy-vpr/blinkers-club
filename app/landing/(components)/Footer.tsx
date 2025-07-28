import React from "react";
import { Geist_Mono } from "next/font/google";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-white mt-auto">
      <div className="flex gap-16 text-xs">
        {/* <ul>
        <li>Shop</li>
        <li>Resources</li>
        <li>Community</li>
        <li></li>
      </ul> */}
        <div className="flex flex-col w-1/2">
          <h3 className="text-sm text-gray-400">News Letter</h3>
          <input
            type="text"
            placeholder="You Email"
            className="border border-zinc-800 p-2 mt-2"
          />
          <button
            className="text-white px-4 py-2 bg-emerald-500 w-fit hover:bg-emerald-600 
         transition duration-200 mt-2 cursor-pointer"
          >
            Subscribe
          </button>
        </div>
        <div className="flex justify-between w-1/2">
          <ul className="flex flex-col gap-2">
            <h3 className="text-sm text-gray-400">Shop</h3>
            <li>2G Flip</li>
            <li>View All</li>
            <li></li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-sm text-gray-400">Resources</h3>
            <li>Contact</li>
            <li>FAQ</li>
            <li>COA</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-sm text-gray-400">Community</h3>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-zinc-700 p-4 border-t border-gray-700/20">
        <span className={`${geistMono.className}`}>&#169;</span>Blinkers{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
