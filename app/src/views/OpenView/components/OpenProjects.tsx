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
import { openSourceProjects } from "@/app/data/data";

// Sample open source projects data - replace with your actual projects

const OpenProjects = () => {
  const projectsRef = useRef(null);
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
    <section
      ref={projectsRef}
      className="w-full py-12 md:py-24 lg:py-32"
      id="open-projects"
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
          {[...openSourceProjects].reverse().map((project) => (
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
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2"
                  >
                    <Button variant="outline" size="sm" className="w-full cursor-pointer">
                      <Github className="h-4 w-4 mr-2" />
                      Repo
                    </Button>
                  </Link>

                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2"
                  >
                    <Button size="sm" className="w-full cursor-pointer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </Link>
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
  );
};

export default OpenProjects;
