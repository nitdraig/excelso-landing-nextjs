"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Lock,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { caseStudies } from "@/app/data/data";

// Custom services data
const customServices = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive security frameworks tailored to your organization's specific threat landscape and compliance requirements.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Custom AI solutions that transform your data into actionable insights and automate complex business processes.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure, and optimized cloud architectures designed for your specific performance and reliability needs.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "End-to-end data pipelines and analytics platforms that unlock the full potential of your organization's data.",
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description:
      "Strategic modernization of legacy systems and processes to enhance efficiency and create new business opportunities.",
  },
  {
    icon: Network,
    title: "IoT & Edge Computing",
    description:
      "Connected device ecosystems with real-time processing capabilities for mission-critical applications.",
  },
];

const VaultServices = () => {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });

  const featuredCaseStudies = caseStudies.slice(0, 3);

  const containerVariants = {
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

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      y: -10,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={servicesRef}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <motion.span
              className="inline-block text-sm font-medium px-3 py-1 border rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isServicesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tailored Solutions
            </motion.span>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Custom Enterprise Services
            </h2>
            <p className="max-w-[900px]  text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bespoke technology solutions designed to address your
              organization's unique challenges and opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
        >
          {customServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-background p-6"
              variants={serviceVariants}
              whileHover="hover"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-foreground"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-foreground text-background">
            <Link href="/contact">
              Request Custom Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VaultServices;
