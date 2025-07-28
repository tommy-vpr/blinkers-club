// components/MobileSidebar.tsx
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Shop", href: "/landing/shop" },
  { name: "Merch", href: "/landing/merch" },
  { name: "About", href: "/landing/about" },
  { name: "FAQ", href: "/landing/faq" },
  { name: "Contact", href: "/landing/contact" },
];

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-black fixed top-4 left-4 z-50 md:hidden"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-2 p-4">
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={`block px-3 py-2 rounded text-sm transition duration-200 ${
                  pathname.includes(href)
                    ? "text-emerald-500"
                    : "text-black hover:text-white hover:bg-emerald-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
