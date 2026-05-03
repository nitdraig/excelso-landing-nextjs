import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of Excelso websites and services, including Excelso Open, Excelso Vault, and authentication via Auth0 or Google.",
  openGraph: {
    title: "Terms of Service | Excelso",
    description:
      "Terms of Service for Excelso digital products and multi-app sign-in.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
