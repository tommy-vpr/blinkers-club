import React from "react";
import { IconCircleLetterB } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <header className="bg-[#333] border-b border-zinc-700 px-8 py-2 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
      <div className="rounded-full bg-gray-200 text-gray-900 h-8 w-8 flex justify-center items-center">
        <IconCircleLetterB />
      </div>
      <ul className="flex items-center gap-8 text-gray-100 text-sm tracking-wider">
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <li>COA</li>
      </ul>
    </header>
  );
};

export default Navbar;
