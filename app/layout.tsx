// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const spaceMono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"], // ✅ specify subset(s)
  preload: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blinkers – Hit It Til It Blinks",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${spaceMono.className} antialiased bg-black`}>
        {/* <ClientLayout>{children}</ClientLayout> */}
        {children}
      </body>
    </html>
  );
}
