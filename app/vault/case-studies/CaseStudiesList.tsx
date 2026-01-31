"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { caseStudies } from "@/app/data/data";

export default function CaseStudiesList() {
  const headerRef = useRef(null);
  const casesRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isCasesInView = useInView(casesRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col">
      <section
        ref={headerRef}
        className="w-full py-12 md:py-24 lg:py-2 lg:pb-10 border-b"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-start space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild variant="ghost" size="sm" className="mb-4">
                <Link href="/vault" className="group flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Vault
                </Link>
              </Button>
            </motion.div>

            <div className="space-y-2">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={isHeaderInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Shield className="h-6 w-6" />
                <h2 className="text-xl font-semibold tracking-tight">
                  Excelso Vault
                </h2>
              </motion.div>
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Case Studies
              </motion.h1>
              <motion.p
                className="max-w-[700px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Explore how our enterprise solutions have delivered measurable
                impact for our clients across various industries.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={casesRef} className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isCasesInView ? "visible" : "hidden"}
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/vault/case-studies/${study.id}`}
                  className="block h-full"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-2">{study.industry}</Badge>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {study.challenge}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {study.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{study.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">{study.client}</span>
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium">
                      View case study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Ready to transform your business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Contact us to discuss how Excelso Vault can develop a custom
                solution for your specific challenges.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-4 bg-foreground text-background"
              >
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
