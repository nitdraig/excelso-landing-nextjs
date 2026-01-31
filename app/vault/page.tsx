import type { Metadata } from "next";
import VaultView from "../src/views/VaultView/VaultVIew";

export const metadata: Metadata = {
  title: "Excelso Vault",
  description:
    "Excelso Vault: private and corporate division delivering strategic, scalable, and secure IT solutions. Process modernization, AI, and digital infrastructure.",
  openGraph: {
    title: "Excelso Vault | Corporate IT Solutions",
    description:
      "Strategic IT solutions: process modernization, AI, and scalable digital infrastructure.",
  },
};

export default function VaultPage() {
  return <VaultView />;
}
