import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import MainLayout from "./src/layouts/MainLayout";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Excelso | We fix it thinking of you. We are solutions. We are Excelso.",
  description:
    "Innovation, excellence and positive impact moves us. We act as catalysts for digital transformation, computer security, artificial intelligence and sustainability, with the focus on creating a more accessible, collaborative and ethical future for all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className}   antialiased`}>
        <link rel="canonical" href="https://excelso.xyz" />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
