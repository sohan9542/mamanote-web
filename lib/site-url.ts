/** Canonical site origin for sitemap, robots, and metadata. */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl?.startsWith("http")) return envUrl.replace(/\/$/, "");
  return "https://mamanote.app";
}
