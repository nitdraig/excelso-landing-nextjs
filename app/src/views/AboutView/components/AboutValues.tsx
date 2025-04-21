import { Check } from "lucide-react";
import React from "react";
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
const AboutValues = () => {
  return (
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
  );
};

export default AboutValues;
