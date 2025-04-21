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

const VaultProjects = () => {
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
    <section
      ref={projectsRef}
      className="w-full py-12 md:py-24 lg:py-32"
      id="vault-projects"
    >
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
  );
};

export default VaultProjects;
