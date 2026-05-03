"use client";

import { FileText } from "lucide-react";
import { useLanguage } from "@/app/src/contexts/LanguageContext";

import { LegalDocumentPage } from "@/app/src/views/LegalView/LegalDocumentPage";
import { getTranslation } from "@/lib/i18n";

export default function TermsPage() {
  const { language } = useLanguage();
  const legal = getTranslation(language).legal;

  return (
    <LegalDocumentPage
      icon={<FileText className="h-7 w-7" aria-hidden />}
      title={legal.termsTitle}
      lastUpdated={legal.termsLastUpdated}
      intro={legal.termsIntro}
      alsoReadIntro={legal.alsoReadIntro}
      crossLinkHref="/privacy"
      crossLinkLabel={legal.privacyTitle}
      articles={legal.termsArticles}
      contactLabel={legal.contactLabel}
      supportEmail={legal.supportEmail}
      backToHome={legal.backToHome}
    />
  );
}
