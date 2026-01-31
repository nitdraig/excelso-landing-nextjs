import { SITE_URL } from "@/app/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Excelso",
  url: SITE_URL,
  description:
    "Innovation, excellence and positive impact. We act as catalysts for digital transformation, computer security, artificial intelligence and sustainability.",
  sameAs: [],
  logo: `${SITE_URL}/excelso-logo-1.png`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Excelso",
  url: SITE_URL,
  description:
    "Excelso - We fix it thinking of you. We are solutions. We are Excelso.",
  publisher: {
    "@type": "Organization",
    name: "Excelso",
    url: SITE_URL,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/vault?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
