"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Github,
  Star,
  GitFork,
  Users,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";

// Sample open source projects data - replace with your actual projects
const openSourceProjects = [
  {
    id: 1,
    name: "C-UI",
    description:
      "A modern UI component library built with Tailwind, React, and TypeScript",
    language: "TypeScript",
    stars: 342,
    forks: 87,
    contributors: 12,
    repoUrl: "https://github.com/nitdraig/cui-react",
    demoUrl: "https://c-ui.agustin.top",
    image: "https://c-ui.agustin.top/logo.png?height=300&width=400",
    tags: ["React", "UI Library", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "Roger",
    description: "Open source An IA bot to consulting about S&P500 stocks",
    language: "Python",
    stars: 215,
    forks: 43,
    contributors: 8,
    repoUrl: "https://github.com/nitdraig/roger",
    demoUrl: "https://roger.agustin.top",
    image:
      "https://github.com/nitdraig/roger/blob/main/static/public/roger3.png?raw=true?height=300&width=400",
    tags: ["Bot", "Python", "Flask", "YFinances", "OpenAI"],
  },
  {
    id: 3,
    name: "Skipy",
    description:
      "Spiky is a multi-tool application designed to make the lives of developers and IT professionals easier.",
    language: "TypeScript",
    stars: 178,
    forks: 32,
    contributors: 6,
    repoUrl: "https://github.com/nitdraig/skipy",
    demoUrl: "https://skipy.click",
    image:
      "https://camo.githubusercontent.com/db5929f58fdbd135c28a884ee7c307fcb98f7da5e42cf842b12f5238fe57ef16/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64726169672f696d6167652f75706c6f61642f76313730353730333130332f536b6970792f627579767632726161737a747a6e6f677a6738672e706e67?height=300&width=400",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "NextJS",
      "Tailwind CSS",
    ],
  },
  // {
  //   id: 4,
  //   name: "AIToolkit",
  //   description: "Open source tools for AI model deployment and management",
  //   language: "Python",
  //   stars: 423,
  //   forks: 98,
  //   contributors: 15,
  //   repoUrl: "https://github.com/excelso-tech/aitoolkit",
  //   demoUrl: "https://aitoolkit.excelso.xyz",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["AI", "Machine Learning", "Python"],
  // },
  // {
  //   id: 5,
  //   name: "SecureAuth",
  //   description:
  //     "Authentication and authorization library with security best practices",
  //   language: "Go",
  //   stars: 156,
  //   forks: 27,
  //   contributors: 5,
  //   repoUrl: "https://github.com/excelso-tech/secureauth",
  //   demoUrl: "https://secureauth.excelso.xyz",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["Security", "Authentication", "Go"],
  // },
];

export default function OpenView() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 });

  const initiatives = [
    {
      icon: Code,
      title: "Development of open-source projects",
      description:
        "Creating and contributing to open-source software that benefits the wider community.",
    },
    {
      icon: Users,
      title: "Public-private collaborative efforts",
      description:
        "Bridging the gap between public institutions and private enterprises for technological advancement.",
    },
  ];

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
                  Excelso Open
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-xl"
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
                  className="inline-flex h-10 items-center justify-center rounded-md bg-foreground text-background"
                >
                  <Link
                    href="https://github.com/excelso-tech"
                    className="group"
                  >
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
                  <Code className="h-32 w-32 text-foreground/20" />
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
                Active Open Source Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our community-driven projects and contributions to the
                open source ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
          >
            {openSourceProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <Badge variant="outline" className="text-xs font-medium">
                      {project.language}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-4 w-4 mr-1" />
                      <span>{project.forks}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{project.contributors}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 w-[330px]">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-[50%]"
                    >
                      <Link href={project.repoUrl}>
                        <Github className="h-4 w-4 mr-2" />
                        Repo
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="w-[50%]">
                      <Link href={project.demoUrl}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
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
              <Link href="https://github.com/excelso-tech">
                View All Projects
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
              Contribute to a collaborative and inclusive digital future
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join Excelso Open to be part of technology initiatives that make a
              positive impact on society.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <Button
              asChild
              className="inline-flex h-10 items-center justify-center rounded-md bg-foreground text-background"
            >
              <Link href="/contact">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
