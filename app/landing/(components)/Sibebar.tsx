// components/SidebarLinks.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarLinks = () => {
  const pathname = usePathname();

  const links = [
    { name: "Shop", href: "/landing/shop" },
    { name: "Merch", href: "/landing/merch" },
    { name: "About", href: "/landing/about" },
    { name: "FAQ", href: "/landing/faq" },
    { name: "Contact", href: "/landing/contact" },
  ];

  return (
    <div className="hidden md:block">
      <ul className="flex flex-col gap-2 items-end text-xs">
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <li
              className={`cursor-pointer w-fit px-3 py-1 transition duration-200
                hover:text-white hover:bg-emerald-500
                ${pathname.includes(href) ? "text-emerald-500" : "text-black"}`}
            >
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLinks;
