import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms-of-service`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/support`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
