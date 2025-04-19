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

export default function VaultView() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });

  // Featured case studies (showing only 3)
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
    <div className="flex flex-col">
      <section
        ref={headerRef}
        className="w-full py-12 md:py-24 lg:py-2 lg:pb-10 border-b"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Excelso Vault
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-xl"
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
                  className="inline-flex h-10 items-center justify-center rounded-md bg-foreground text-background"
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
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
                <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={isHeaderInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Shield className="h-32 w-32 text-foreground/20" />
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Services Section */}
      <section
        ref={servicesRef}
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="flexx flex-col items-center justify-center space-y-4 text-center mb-12"
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
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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

      <section ref={projectsRef} className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Featured Enterprise Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our portfolio of closed-source enterprise solutions
                delivering measurable impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
          >
            {featuredCaseStudies.map((project: any) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/vault/case-studies/${project.id}`}
                  className="block h-full"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-foreground text-background">
                        <Lock className="h-3 w-3 mr-1" />
                        Vault
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <span className="font-medium">{project.client}</span>
                        <span className="mx-2">•</span>
                        <span>{project.industry}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.challenge}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 2)
                        .map((tech: any, index: any) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 2} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm font-medium">
                      View case study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-foreground text-background">
              <Link href="/vault/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 border-t">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Elevate your organization's technological capabilities
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Partner with Excelso Vault to transform your business through
              innovative technology solutions.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <Button
              asChild
              className="inline-flex h-10 items-center justify-center rounded-md bg-foreground text-background"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
