import type { Metadata } from "next";
import OpenView from "../src/views/OpenView/OpenView";

export const metadata: Metadata = {
  title: "Excelso Open",
  description:
    "Excelso Open: our open-source and community-focused branch, championing collaborative technology and social impact projects.",
  openGraph: {
    title: "Excelso Open | Open Source & Community",
    description:
      "Discover open-source projects, public-private collaboration, and IT education programs.",
  },
};

export default function OpenPage() {
  return <OpenView />;
}
