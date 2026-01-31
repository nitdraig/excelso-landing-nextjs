import type { Metadata } from "next";
import ContactView from "../src/views/ContactView/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Excelso. Connect with our team to explore how we can help you achieve your technological goals.",
  openGraph: {
    title: "Contact | Excelso",
    description: "Get in touch with Excelso for digital transformation and IT solutions.",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
