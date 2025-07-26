"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LogoWithTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const californiaTime = now.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      setTime(californiaTime);
    };

    updateTime(); // initial load
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <Link href="/landing">
        <Image
          src="/images/blinkers-black.png"
          alt="blinkers logo"
          width={130}
          height={50}
          className="mb-4"
        />
      </Link>
      <p className="text-xs text-gray-500">{time} LA</p>
    </div>
  );
};

export default LogoWithTime;
