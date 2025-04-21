"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import { montserrat, openSans } from "@/app/fonts";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Custom cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Simulated loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    // <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
    <>
      {/* Initial loading animation */}
      {isLoading ? (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="flex-col text-center ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`${openSans.className}text-2xl font-bold`}
            >
              We are solutions. <br />
              We are
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`${montserrat.className}text-4xl font-bold`}
              >
                EXCELSO
              </motion.div>
            </motion.div>
          </div>
        </div>
      ) : (
        <>
          {/* Custom cursor (visible only on desktop) */}
          <motion.div
            className="custom-cursor hidden md:block"
            style={{
              left: cursorPosition.x,
              top: cursorPosition.y,
            }}
            animate={{
              x: cursorPosition.x,
              y: cursorPosition.y,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              mass: 0.5,
            }}
          />

          <Navigation />
          <main className="flex-1 ">{children}</main>
          <Footer />
        </>
      )}
      {/* </ThemeProvider> */}
    </>
  );
}
