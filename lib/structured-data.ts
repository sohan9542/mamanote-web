import { LANDING_SEO } from "@/lib/landing-seo";

type SchemaContext = {
  baseUrl: string;
  logoUrl: string;
};

export function buildOrganizationSchema({ baseUrl, logoUrl }: SchemaContext) {
  return {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "MamaNote",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      caption: "MamaNote baby tracker and diary app logo",
    },
    image: logoUrl,
    description: LANDING_SEO.description,
    email: "support@mamanote.app",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@mamanote.app",
      availableLanguage: ["English"],
    },
  };
}

export function buildWebSiteSchema({ baseUrl }: SchemaContext) {
  return {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "MamaNote",
    description: LANDING_SEO.description,
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: "en",
  };
}

export function buildSoftwareApplicationSchema({ baseUrl, logoUrl }: SchemaContext) {
  return {
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#app`,
    name: "MamaNote — Baby Tracker & Diary",
    applicationCategory: "HealthApplication",
    operatingSystem: "Android",
    description:
      "MamaNote is a free baby tracker and diary app for new parents. Log breastfeeding, sleep, diapers, medicine, growth, and milestones. Includes 7-day Plus trial.",
    image: logoUrl,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free — 3 logs/day, view all history" },
      { "@type": "Offer", price: "5.99", priceCurrency: "USD", description: "Plus Monthly — unlimited logs, family sharing, AI routine" },
      { "@type": "Offer", price: "39.99", priceCurrency: "USD", description: "Plus Annual — best value, ~$3.33/mo" },
      { "@type": "Offer", price: "59.99", priceCurrency: "USD", description: "Plus Lifetime — one-time payment" },
    ],
    provider: { "@id": `${baseUrl}/#organization` },
  };
}

export const faqPageSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MamaNote free to download?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MamaNote is free to download. Free users can view all past logs and create up to 3 new logs per day, forever. A 7-day Plus trial is included — no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the 7-day Plus trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The trial gives full access to every Plus feature: unlimited activity logs, multiple baby profiles, family sharing, full insights dashboard, weekly charts, and AI daily routine generation.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a credit card to start the trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The 7-day Plus trial requires no credit card. Download the app and start your trial from settings. Payment is only asked if you choose to subscribe after the trial.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when the trial ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you don't subscribe, your account continues on the free plan. You keep all logs and history. You'll be limited to 3 new logs per day going forward.",
      },
    },
    {
      "@type": "Question",
      name: "Can I share logs with my partner or caregiver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — family sharing is a Plus feature. You and your partner or caregiver can see the same baby's logs in real time on their own devices.",
      },
    },
    {
      "@type": "Question",
      name: "Is my baby's data private and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MamaNote uses a secure backend with row-level access controls. Medicine reminders are stored locally on your device and never synced. We do not sell user data.",
      },
    },
    {
      "@type": "Question",
      name: "Does MamaNote send marketing push notifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MamaNote does not send marketing push notifications. The only notifications you receive are the ones you personally set, such as medicine reminders.",
      },
    },
    {
      "@type": "Question",
      name: "Which pricing plan offers the best value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Annual plan at $39.99/year (~$3.33/month) saves 44% vs monthly billing. Lifetime at $59.99 one-time pays for itself in under 18 months and is best for long-term use.",
      },
    },
    {
      "@type": "Question",
      name: "What activities can I track with MamaNote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MamaNote supports 13+ activity types: sleep, breastfeeding, bottle feeding, nutrition, pumping, medicine, temperature, diaper changes, bath, tummy time, growth, doctor visits, playtime, and diary notes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use MamaNote on multiple devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your data syncs across devices via your account. Plus subscribers can also share access with family members on their own devices using the family sharing feature.",
      },
    },
  ],
};

export function buildHomeSchemaGraph(ctx: SchemaContext) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(ctx),
      buildWebSiteSchema(ctx),
      buildSoftwareApplicationSchema(ctx),
      { ...faqPageSchema, "@id": `${ctx.baseUrl}/#faq` },
    ],
  };
}
