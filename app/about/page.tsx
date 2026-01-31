import type { Metadata } from "next";
import AboutView from "../src/views/AboutView/AboutView";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Excelso: our mission, values, and commitment to digital transformation, cybersecurity, AI, and sustainability.",
  openGraph: {
    title: "About Us | Excelso",
    description:
      "Learn about Excelso: our mission, values, and commitment to digital transformation and positive impact.",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
