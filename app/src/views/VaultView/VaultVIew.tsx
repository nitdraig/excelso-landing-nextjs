import Link from "next/link";
import { ArrowRight, Shield, Cpu, Zap, Server, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VaultView() {
  const services = [
    {
      icon: Shield,
      title: "Advanced cybersecurity measures",
      description:
        "Comprehensive protection for your digital assets and infrastructure.",
    },
    {
      icon: Zap,
      title: "Process modernization strategies",
      description:
        "Streamline operations and enhance efficiency through digital transformation.",
    },
    {
      icon: Cpu,
      title: "Applied artificial intelligence solutions",
      description:
        "Leverage AI to gain insights and automate complex processes.",
    },
    {
      icon: Server,
      title: "Scalable digital infrastructure",
      description: "Build robust systems that grow with your business needs.",
    },
    {
      icon: Recycle,
      title: "Sustainable digital transformation",
      description:
        "Implement eco-friendly technology solutions that reduce environmental impact.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-2 lg:pb-10 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Excelso Vault
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our private and corporate division, dedicated to delivering
                  strategic, scalable, and secure IT solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  className="inline-flex h-10 items-center justify-center rounded-md bg-foreground text-background"
                >
                  <Link href="/contact">
                    Partner with Vault
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
                <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
                <div className="w-full h-full relative z-0 bg-black  overflow-hidden">
                  <video
                    src="/videos/bg5.mp4"
                    className="w-full  h-full m-auto max-w-none absolute top-0 left-0 right-0 bottom-0"
                    autoPlay
                    playsInline
                    preload="auto"
                    loop
                    muted
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Our Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive technology solutions tailored to your
                organization's needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 rounded-lg border p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
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
