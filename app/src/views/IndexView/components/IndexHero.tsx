"use client";
import { montserrat } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import VantaWaves from "@/components/VantaRings";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const IndexHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.section
      ref={heroRef}
      className="relative w-full -mt-44 lg:-mt-28 min-h-screen flex items-center border-b overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 z-0 ">
        <div className="w-full h-full opacity-20 lg:opacity-40 backdrop-blur-lg">
          <VantaWaves />
        </div>
      </div>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity, scale, y }}
      >
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
      </motion.div>

      <div className="container relative px-4 md:px-6 z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className={`${montserrat.className} inline-block text-sm font-medium px-3 py-1 border border-[#BA0201] rounded-full `}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Tech Group
              </motion.span>
              <motion.h1
                className={`${montserrat.className} lg:text-4xl lg:mt-2 mt-2 font-bold tracking-tighter text-3xl xl:text-7xl/none}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We fix it thinking of you. <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  We are{" "}
                  <span className="relative">
                    solutions
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    />
                  </span>
                  .
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  We are Excelso.
                </motion.span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-[#5e5d5d]  md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                A tech group driving innovation, digitalization, and
                sustainability through digital solutions.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-3 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Button
                asChild
                className="inline-flex h-12 items-center justify-center rounded-md bg-foreground text-background text-base"
                size="lg"
              >
                <Link href="/vault" className="group">
                  Explore Vault
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
                variant="outline"
                className="inline-flex h-12 items-center justify-center rounded-md border text-base"
                size="lg"
              >
                <Link href="/open" className="group">
                  Discover Open
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
            </motion.div>
          </motion.div>
        </div>
      </div>
      <a href="/#our-divisions">
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-muted-foreground mb-2">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1 h-1 bg-foreground rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </a>
    </motion.section>
  );
};

export default IndexHero;
