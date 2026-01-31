import type { Metadata } from "next";
import CaseStudiesList from "./CaseStudiesList";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how Excelso Vault enterprise solutions have delivered measurable impact for clients across various industries.",
  openGraph: {
    title: "Case Studies | Excelso Vault",
    description:
      "Explore how our enterprise solutions have delivered measurable impact for our clients.",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesList />;
}
