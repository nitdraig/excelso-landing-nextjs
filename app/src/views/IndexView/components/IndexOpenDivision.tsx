"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Code, Recycle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IndexOpenDivision = () => {
  const openRef = useRef(null);
  const isOpenInView = useInView(openRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={openRef}
      className="grid lg:grid-cols-2 gap-8 items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={isOpenInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative h-[300px] md:h-[400px] rounded-lg border overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isOpenInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={isOpenInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-full h-full relative z-0 bg-black  overflow-hidden">
            <video
              src="/videos/bg3.mp4"
              className="w-full  h-full m-auto max-w-none absolute top-0 left-0 right-0 bottom-0"
              autoPlay
              playsInline
              preload="auto"
              loop
              muted
            ></video>
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-grid-small-pattern opacity-30"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isOpenInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <h3 className="text-2xl font-bold">Excelso Open</h3>
          </div>
          <p className="text-muted-foreground">
            Our open-source and community-focused branch, championing
            collaborative technology and social impact projects.
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <span>Development of open-source projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Recycle className="h-4 w-4 text-muted-foreground" />
              <span>Public-private collaborative efforts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-muted-foreground" />
              <span>IT education and mentorship programs</span>
            </div>
          </div>
          <div className="pt-4">
            <Button asChild className="group">
              <Link href="/open">
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IndexOpenDivision;
