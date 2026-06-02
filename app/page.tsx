import type { Metadata } from "next";
import { headers } from "next/headers";
import LandingPage from "../components/landing/LandingPage";
import logo from "../assets/logo.png";
import { LANDING_SEO } from "@/lib/landing-seo";
import { buildHomeSchemaGraph } from "@/lib/structured-data";
import { getSiteUrl } from "@/lib/site-url";

function resolveBaseUrl(headerList: Headers) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.startsWith("http")) return envUrl.replace(/\/$/, "");
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  if (host) return `${protocol}://${host}`;
  return getSiteUrl();
}

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const baseUrl = resolveBaseUrl(headerList);
  const canonical = new URL("/", baseUrl).toString();
  const logoUrl = new URL(logo.src, baseUrl).toString();

  return {
    title: LANDING_SEO.title,
    description: LANDING_SEO.description,
    keywords: [...LANDING_SEO.keywords],
    alternates: { canonical },
    openGraph: {
      title: LANDING_SEO.openGraph.title,
      description: LANDING_SEO.openGraph.description,
      url: canonical,
      siteName: "MamaNote",
      type: "website",
      images: [{ url: logoUrl, width: 512, height: 512, alt: "MamaNote baby tracker and diary app icon" }],
    },
    twitter: {
      card: "summary_large_image",
      title: LANDING_SEO.twitter.title,
      description: LANDING_SEO.twitter.description,
      images: [logoUrl],
    },
  };
}

export default async function Home() {
  const headerList = await headers();
  const baseUrl = resolveBaseUrl(headerList);
  const logoUrl = new URL(logo.src, baseUrl).toString();
  const schemaGraph = buildHomeSchemaGraph({ baseUrl, logoUrl });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <LandingPage />
    </>
  );
}
