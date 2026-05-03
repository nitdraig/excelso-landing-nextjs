import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Excelso collects, uses, and protects personal data across Excelso Open, Excelso Vault, and linked applications (including Auth0 / Google sign-in).",
  openGraph: {
    title: "Privacy Policy | Excelso",
    description:
      "Privacy practices for Excelso websites and applications, aligned with Argentina Law 25.326 and international standards.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
