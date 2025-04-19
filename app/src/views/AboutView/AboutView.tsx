import { Check } from "lucide-react";

export default function AboutView() {
  const coreValues = [
    {
      title: "Excellence",
      description: "Pursuing the highest standards in all endeavors.",
    },
    {
      title: "Innovation",
      description: "Embracing creativity to drive technological advancement.",
    },
    {
      title: "Integrity",
      description: "Upholding transparency and ethical practices.",
    },
    {
      title: "Collaboration",
      description: "Working synergistically with clients and partners.",
    },
    {
      title: "Social & Environmental Responsibility",
      description: "Committing to positive societal and ecological impact.",
    },
    {
      title: "Flexibility",
      description: "Adapting to evolving client needs and industry trends.",
    },
    {
      title: "Sustainability",
      description: "Ensuring long-term viability in all solutions.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-2 lg:pb-10 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Excelso
              </h1>
              <div className="mt-8 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Mission</h2>
                  <p className="text-muted-foreground">
                    To develop high-quality IT solutions that positively impact
                    lives, fostering digital transformation, cybersecurity,
                    innovation, and sustainable development.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Vision</h2>
                  <p className="text-muted-foreground">
                    To be a leader in innovation, ethics, and sustainability
                    within the IT sector, empowering individuals, organizations,
                    and communities towards a more modern, secure, and inclusive
                    future.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
                <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative z-0 bg-black  overflow-hidden">
                    <video
                      src="/videos/bg4.mp4"
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
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Core Values
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide our work and define our culture.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-foreground p-1">
                    <Check className="h-4 w-4 text-background" />
                  </div>
                  <h3 className="font-bold">{value.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
