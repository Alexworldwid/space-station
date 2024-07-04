"use client"

import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "./components/shared/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const barlowCondensed = Barlow_Condensed({ style: ["italic", "normal"], subsets: ["latin", "latin-ext", "vietnamese"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname()
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) {
      if (pathName === "/") {
        bodyRef.current.classList.add("homepage");
        bodyRef.current.classList.remove("destination");
        bodyRef.current.classList.remove("crew");
        bodyRef.current.classList.remove("technology");
      } else if (pathName === "/destination") {
        bodyRef.current.classList.add("destination");
        bodyRef.current.classList.remove("homepage");
        bodyRef.current.classList.remove("crew");
        bodyRef.current.classList.remove("technology");
      } else if (pathName === "/crew") {
        bodyRef.current.classList.add("crew");
        bodyRef.current.classList.remove("homepage");
        bodyRef.current.classList.remove("destination");
        bodyRef.current.classList.remove("technology");
      } else if (pathName === "/technology") {
        bodyRef.current.classList.add("technology");
        bodyRef.current.classList.remove("homepage");
        bodyRef.current.classList.remove("crew");
        bodyRef.current.classList.remove("destination");
      }
    }
  }, [pathName]);

  return (
    <html lang="en">
      <body ref={bodyRef} className={`${barlowCondensed.className} min-h-dvh`}>
        <Navigation />
        <AnimatePresence mode="wait">
          <motion.main
            className="flex w-full h-auto"
            key={pathName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition= {{ duration: 0.75 }}  
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
