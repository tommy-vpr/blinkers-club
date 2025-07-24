// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

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
  description: "Premium, lab-tested vape devices, cartridges, and pre‑rolls.",
  openGraph: {
    title: "Blinkers – Hit It Til It Blinks",
    description:
      "Premium, lab-tested THC vape devices, cartridges, and pre‑rolls.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Blinkers Logo – Hit It Til It Blinks",
      },
    ],
    siteName: "Blinkers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blinkers – Hit It Til It Blinks",
    description:
      "Premium, lab-tested THC vape devices, cartridges, and pre‑rolls.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111]`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
