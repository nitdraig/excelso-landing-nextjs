import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import MainLayout from "./src/layouts/MainLayout";
import { JsonLd } from "./src/components/JsonLd";
import { SITE_URL, defaultMetadata } from "./seo";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultMetadata.title,
    template: "%s | Excelso",
  },
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords,
  authors: [{ name: "Excelso", url: SITE_URL }],
  creator: "Excelso",
  publisher: "Excelso",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: defaultMetadata.openGraph.type,
    locale: defaultMetadata.openGraph.locale,
    url: SITE_URL,
    siteName: defaultMetadata.openGraph.siteName,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    images: [
      {
        url: "/og/default.webp",
        width: 1200,
        height: 630,
        alt: "Excelso - We are solutions",
      },
    ],
  },
  twitter: {
    card: defaultMetadata.twitter.card,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className}   antialiased`}>
        <JsonLd />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
