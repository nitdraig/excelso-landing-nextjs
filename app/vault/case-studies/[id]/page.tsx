"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  ChevronRight,
  Clock,
  Users,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { caseStudies } from "@/app/data/data";

export default function CaseStudyPage() {
  const params = useParams();
  const id = params.id as string;

  const study = caseStudies.find((study: any) => study.id === id);

  if (!study) {
    return (
      <div className="container px-4 md:px-6 py-12">
        <h1 className="text-2xl font-bold mb-4">Case study not found</h1>
        <p className="text-muted-foreground mb-6">
          The case study you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/vault/case-studies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all case studies
          </Link>
        </Button>
      </div>
    );
  }

  const contentRef = useRef(null);
  const [isContentInView, setIsContentInView] = useState(false);

  useEffect(() => {
    const current = contentRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContentInView(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-4 lg:py-2 lg:pb-10 border-b">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-start space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild variant="ghost" size="sm" className="mb-4">
                <Link
                  href="/vault/case-studies"
                  className="group flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to all case studies
                </Link>
              </Button>
            </motion.div>

            <div className="space-y-2">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Shield className="h-6 w-6" />
                <h2 className="text-xl font-semibold tracking-tight">
                  Excelso Vault Case Study
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Badge className="mb-2">{study.industry}</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {study.title}
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Client: {study.client}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div
                className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-lg border mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </motion.div>

              <motion.div
                ref={contentRef}
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Solution</h2>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Results</h2>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0 text-foreground" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Timeline</h4>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{study.timeline}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Team</h4>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Button asChild className="w-full">
                        <Link href={study.publicUrl} target="_blank">
                          See This Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">
                  Interested in a similar solution?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Contact us to discuss how we can develop a custom solution for
                  your specific challenges.
                </p>
                <Button asChild className="w-full">
                  <Link href={`/contact?project=${study.id}`}>
                    Discuss your project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">
                  Explore more case studies
                </h3>
                <div className="space-y-4">
                  {caseStudies
                    .filter((s) => s.id !== study.id)
                    .slice(0, 3)
                    .map((relatedStudy) => (
                      <Link
                        key={relatedStudy.id}
                        href={`/vault/case-studies/${relatedStudy.id}`}
                        className="block group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 overflow-hidden rounded">
                            <Image
                              src={relatedStudy.image || "/placeholder.svg"}
                              alt={relatedStudy.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:underline">
                              {relatedStudy.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {relatedStudy.industry}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
