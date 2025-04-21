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

const OpenCollaborate = () => {
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
  );
};

export default OpenCollaborate;
