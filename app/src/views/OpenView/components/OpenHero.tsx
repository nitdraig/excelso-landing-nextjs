"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Code, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

const OpenHero = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={headerRef}
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden border-b"
    >
      {/* 🔹 Video de fondo */}
      <video
        src="/videos/bg2.webm"
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* 🔹 Capa de desenfoque */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-10" />

      {/* 🔹 Contenido principal */}
      <div className="relative  z-20 container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Excelso Open
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-white/90 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our open-source and community-focused branch, championing
                collaborative technology and social impact projects.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                className="inline-flex h-10 items-center justify-center rounded-md bg-white hover:bg-white/90 px-4 text-black font-semibold"
              >
                <Link href="https://github.com/excelso-tech" className="group">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Organization
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              <Button
                asChild
                className="inline-flex h-10 items-center justify-center rounded-md hover:bg-[#ffffff] hover:text-[#000000] text-[#ffffff] bg-[#000000] border "
              >
                <Link href="#open-projects">
                  See our projects
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>{" "}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenHero;
