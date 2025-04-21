import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

const VaultHero = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={headerRef}
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden border-b"
    >
      {/* 🔹 Video de fondo */}
      <video
        src="/videos/bg.webm"
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* 🔹 Capa oscura o desenfoque opcional */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-md z-10" />

      {/* 🔹 Contenido encima */}
      <div className="relative z-20 container px-4 md:px-6">
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
                Excelso Vault
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-gray-300 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our private and corporate division, dedicated to delivering
                strategic, scalable, and secure IT solutions.
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
                className="inline-flex h-10 items-center justify-center rounded-md  bg-white hover:text-white hover:bg-black border text-black"
              >
                <Link href="/contact">
                  Partner with Vault
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
                <Link href="#vault-projects">
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

export default VaultHero;
