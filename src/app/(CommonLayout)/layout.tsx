import Footer from "@/components/shared/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
    >
      <main>{children}</main>
      <Footer />
    </div>
  );
}
