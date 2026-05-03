"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { LegalArticle } from "@/lib/legalCopy";
import { Button } from "@/components/ui/button";
import { LegalArticles } from "@/app/src/components/legal/LegalArticles";
import { useLanguage } from "@/app/src/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type LegalDocumentPageProps = {
  icon: ReactNode;
  title: string;
  lastUpdated: string;
  intro: string;
  alsoReadIntro: string;
  crossLinkHref: string;
  crossLinkLabel: string;
  articles: readonly LegalArticle[];
  contactLabel: string;
  supportEmail: string;
  backToHome: string;
};

export function LegalDocumentPage({
  icon,
  title,
  lastUpdated,
  intro,
  alsoReadIntro,
  crossLinkHref,
  crossLinkLabel,
  articles,
  contactLabel,
  supportEmail,
  backToHome,
}: LegalDocumentPageProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col w-full min-w-0">
      <section className="w-full border-b bg-muted/30">
        <div className="container relative px-4 md:px-6 py-10 md:py-14 lg:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild className="-ml-2 h-9 w-fit">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
              {backToHome}
            </Link>
            </Button>
            <div
              className="inline-flex rounded-md border bg-background p-0.5 shadow-sm"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "rounded px-3 py-1.5 text-xs font-medium transition-colors",
                  language === "en"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={cn(
                  "rounded px-3 py-1.5 text-xs font-medium transition-colors",
                  language === "es"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                ES
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-background text-foreground shadow-sm"
                aria-hidden
              >
                {icon}
              </div>
              <div className="space-y-3 min-w-0 flex-1">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/tight">
                  {title}
                </h1>
                <p className="text-sm font-medium text-muted-foreground">
                  {lastUpdated}
                </p>
                <p className="text-muted-foreground leading-relaxed md:text-lg/relaxed max-w-3xl">
                  {intro}
                </p>
              </div>
            </div>

            <aside className="rounded-lg border bg-background/80 backdrop-blur-sm px-4 py-3 text-sm text-muted-foreground max-w-3xl">
              {alsoReadIntro}{" "}
              <Link
                href={crossLinkHref}
                className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                {crossLinkLabel}
              </Link>
              .
            </aside>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 lg:py-16">
        <div className="container px-4 md:px-6">
          <article lang={language} className="mx-auto max-w-3xl space-y-10">
            <LegalArticles articles={articles} />

            <footer className="pt-8 border-t border-border/60">
              <p className="text-sm text-muted-foreground">
                {contactLabel}{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
                >
                  {supportEmail}
                </a>
              </p>
            </footer>
          </article>
        </div>
      </section>
    </div>
  );
}
