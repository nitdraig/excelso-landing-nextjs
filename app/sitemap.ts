import { MetadataRoute } from "next";
import { SITE_URL } from "./seo";
import { caseStudies } from "./data/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/open`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/vault`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${SITE_URL}/vault/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${SITE_URL}/vault/case-studies/${study.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
