import type { Metadata } from "next";
import { caseStudies } from "@/app/data/data";
import { SITE_URL } from "@/app/seo";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return {
      title: "Case study not found",
    };
  }

  const description =
    study.solution || study.challenge || "Excelso Vault case study.";
  const canonical = `${SITE_URL}/vault/case-studies/${id}`;

  return {
    title: study.title,
    description,
    openGraph: {
      title: study.title,
      description,
      url: canonical,
      type: "article",
      images: study.image
        ? [
            {
              url: study.image.startsWith("http") ? study.image : `${SITE_URL}${study.image.split("?")[0]}`,
              width: 800,
              height: 600,
              alt: study.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description,
    },
    alternates: {
      canonical,
    },
  };
}

export default function CaseStudyLayout({ children }: Props) {
  return <>{children}</>;
}
