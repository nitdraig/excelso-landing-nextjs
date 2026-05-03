import type { LegalArticle } from "@/lib/legalCopy";
import { cn } from "@/lib/utils";

type LegalArticlesProps = {
  articles: readonly LegalArticle[];
  headingClassName?: string;
  paragraphClassName?: string;
  sectionClassName?: string;
};

export function LegalArticles({
  articles,
  headingClassName,
  paragraphClassName,
  sectionClassName,
}: LegalArticlesProps) {
  return (
    <div className="space-y-8">
      {articles.map((article, i) => (
        <section
          key={i}
          className={cn(sectionClassName)}
          aria-labelledby={`legal-article-title-${i}`}
        >
          <h2
            id={`legal-article-title-${i}`}
            className={cn(
              "text-xl font-bold tracking-tight text-foreground scroll-mt-24",
              headingClassName,
            )}
          >
            {article.title}
          </h2>
          <div className="mt-4 space-y-4">
            {article.paragraphs.map((p, j) => (
              <p
                key={j}
                className={cn(
                  "text-muted-foreground leading-relaxed text-[15px] sm:text-base",
                  paragraphClassName,
                )}
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
