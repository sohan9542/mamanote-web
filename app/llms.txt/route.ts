import { LANDING_SEO } from "@/lib/landing-seo";
import { getSiteUrl } from "@/lib/site-url";

export function GET() {
  const base = getSiteUrl();

  const body = `# MamaNote

> ${LANDING_SEO.description}

## About

MamaNote is a baby tracker and diary Android app for new parents. Track breastfeeding, sleep, diapers, medicine, growth, and milestones in one calm app. Free tier includes full history and 3 new logs per day. MamaNote Plus offers unlimited logs, family sharing, insights, and AI daily routines with a 7-day free trial (no credit card).

## Organization

- Name: MamaNote
- Website: ${base}
- Support email: support@mamanote.app
- Product: Baby tracker & diary mobile app (Android / Google Play)

## Key pages

- Home: ${base}/
- Privacy Policy: ${base}/privacy-policy
- Terms of Service: ${base}/terms-of-service
- Refund Policy: ${base}/refund-policy
- Support: ${base}/support
- Sitemap: ${base}/sitemap.xml

## Product features

- Breastfeeding and bottle feeding logs
- Baby sleep tracker and sleep schedules
- Diaper, medicine, and health logs
- Growth and milestone diary
- Shared access via QR code for partners, doctors, and caregivers
- Medicine reminders stored locally on device (private)
- Plus subscription: Monthly $5.99, Annual $39.99, Lifetime $59.99 USD

## Crawling

- robots.txt: ${base}/robots.txt
- sitemap.xml: ${base}/sitemap.xml

## Optional

For structured data see JSON-LD on the home page (Organization, WebSite, SoftwareApplication, FAQPage).
`;

  return new Response(body.trim() + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
