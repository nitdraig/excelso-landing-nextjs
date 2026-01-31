/**
 * Constantes y configuración centralizada para SEO
 */
export const SITE_URL = "https://excelso.xyz";

export const defaultMetadata = {
  title: "Excelso | We fix it thinking of you. We are solutions. We are Excelso.",
  description:
    "Innovation, excellence and positive impact moves us. We act as catalysts for digital transformation, computer security, artificial intelligence and sustainability, with the focus on creating a more accessible, collaborative and ethical future for all.",
  keywords: [
    "Excelso",
    "digital transformation",
    "IT solutions",
    "artificial intelligence",
    "cybersecurity",
    "sustainability",
    "Excelso Vault",
    "Excelso Open",
    "tech consulting",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "Excelso",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
};
