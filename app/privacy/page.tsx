"use client";

import { Shield } from "lucide-react";
import { useLanguage } from "@/app/src/contexts/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { LegalDocumentPage } from "@/app/src/views/LegalView/LegalDocumentPage";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const legal = getTranslation(language).legal;

  return (
    <LegalDocumentPage
      icon={<Shield className="h-7 w-7" aria-hidden />}
      title={legal.privacyTitle}
      lastUpdated={legal.privacyLastUpdated}
      intro={legal.privacyIntro}
      alsoReadIntro={legal.alsoReadIntro}
      crossLinkHref="/terms"
      crossLinkLabel={legal.termsTitle}
      articles={legal.privacyArticles}
      contactLabel={legal.contactLabel}
      supportEmail={legal.supportEmail}
      backToHome={legal.backToHome}
    />
  );
}
