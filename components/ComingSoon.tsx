"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "@/styles/gsap.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// ✅ Zod Schema
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email"),
});

type FormData = z.infer<typeof schema>;

const ComingSoon = () => {
  const neonRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (!neonRef.current) return;

    gsap.to(neonRef.current, {
      delay: 0.8,
      color: "#dbfdff",
      textShadow:
        "0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 40px #00f7ff",
      duration: 0.3,
      ease: "power1.out",
    });
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  return (
    <div
      className={`${geistSans.className} relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4`}
    >
      {/* 🔹 Background Video Layer */}
      <div className="absolute bottom-0 z-10 w-full h-72 bg-gradient-to-t from-black to-transparent"></div>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://video.wixstatic.com/video/d47472_58cce06729c54ccb935886c4b3647274/1080p/mp4/file.mp4"
      />

      {/* 🔹 Glassmorphism Box */}
      <div className="z-10 bg-gray-900/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg px-8 sm:px-16 py-10 w-full max-w-xl">
        <Image
          src="/images/blinkers-black.png"
          alt="blinker logo"
          width={200}
          height={100}
          className="m-auto mb-6 invert"
        />
        <div
          ref={neonRef}
          className="tracking-widest uppercase text-5xl font-semibold text-center text-gray-200/20 transition-colors duration-300 mb-8"
        >
          Coming Soon
        </div>

        {/* 🔹 Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full mt-2 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </button>

          {submitted && (
            <p className="text-green-400 text-sm mt-2 text-center">
              Thank you! We’ll keep you posted.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
