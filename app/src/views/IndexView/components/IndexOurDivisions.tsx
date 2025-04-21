"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Server, Shield, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import React, { useRef } from "react";
import IndexOpenDivision from "./IndexOpenDivision";
import Image from "next/image";

const IndexOurDivisions = () => {
  const servicesRef = useRef(null);
  const vaultRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isVaultInView = useInView(vaultRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={servicesRef}
      className="w-full py-24 md:py-32 lg:py-14"
      id="our-divisions"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">
              Our Divisions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Excelso delivers innovative technology solutions through two
              specialized divisions.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid gap-16">
          {/* Vault Division */}
          <motion.div
            ref={vaultRef}
            className="grid lg:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isVaultInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              animate={isVaultInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Excelso Vault</h3>
                </div>
                <p className="text-muted-foreground">
                  Our private and corporate division, dedicated to delivering
                  strategic, scalable, and secure IT solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-muted-foreground" />
                    <span>Process modernization strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <span>Applied artificial intelligence solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Server className="h-4 w-4 text-muted-foreground" />
                    <span>Scalable digital infrastructure</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button asChild className="group">
                    <Link href="/vault">
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
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 relative h-[300px] md:h-[400px] rounded-lg border overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVaultInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isVaultInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="w-full h-full relative z-0 bg-black  overflow-hidden">
                  <video
                    src="/videos/bg.webm"
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
          </motion.div>

          {/* Open Division */}
          <IndexOpenDivision />
        </div>
      </div>
    </motion.section>
  );
};

export default IndexOurDivisions;
