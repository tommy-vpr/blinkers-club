"use client";

import React from "react";
import Sidebar from "./(components)/Sibebar";
import MobileSidebar from "./(components)/MobileSlider"; // <-- add this
import LogoWithTime from "@/components/LogoWithTime";
import Footer from "./(components)/Footer";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const isProductPage = pathname.includes("/products");
  const isShopPage = pathname.includes("/shop-all");

  // const contentClasses = clsx(!isProductPage && "bg-gray-50");

  // Full-bleed layout on landing page
  if (pathname === "/landing") {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-14 px-4">
      {/* Logo and Mobile Sidebar Toggle */}
      <LogoWithTime />
      <MobileSidebar /> {/* Only visible on mobile */}
      <div className="flex w-full max-w-[900px] min-h-screen">
        {!isProductPage && (
          <aside className="hidden md:block">
            <Sidebar />
          </aside>
        )}

        <main className="w-full flex flex-col gap-12">
          <div>{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
