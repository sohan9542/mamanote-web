import type { Metadata } from "next";
import { headers } from "next/headers";
import LandingPage from "../components/landing/LandingPage";
import logo from "../assets/logo.png";

function resolveBaseUrl(headerList: Headers) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.startsWith("http")) {
    return envUrl;
  }

  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  if (host) {
    return `${protocol}://${host}`;
  }

  return "https://mamanote.app";
}

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const baseUrl = resolveBaseUrl(headerList);
  const canonicalUrl = new URL("/", baseUrl).toString();
  const logoUrl = new URL(logo.src, baseUrl).toString();

  return {
    title: "MamaNote — Baby Tracker & Diary | Breastfeeding & Sleep Log App",
    description:
      "MamaNote is the calm baby tracker & diary app for new moms. Log breastfeeding, sleep, diaper changes, and precious milestones in one beautiful, free app.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "MamaNote — Baby Tracker & Diary | Breastfeeding & Sleep Log",
      description:
        "Track breastfeeding sessions, sleep logs, diaper changes, and baby diary milestones in one soft, calming baby tracker app for moms.",
      url: canonicalUrl,
      siteName: "MamaNote",
      type: "website",
      images: [
        {
          url: logoUrl,
          width: 512,
          height: 512,
          alt: "MamaNote — Baby Tracker & Diary app logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "MamaNote — Baby Tracker & Diary",
      description:
        "Breastfeeding log, sleep log, baby diary, and growth insights — the calm baby tracker app every new mom needs.",
      images: [logoUrl],
    },
  };
}

export default function Home() {
  return <LandingPage />;
}
