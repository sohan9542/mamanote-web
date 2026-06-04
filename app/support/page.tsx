import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SupportPageActions } from "@/components/support/SupportPageActions";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with MamaNote — baby tracker app support, billing, account questions, and contact information.",
};

const LAST_UPDATED = "June 2, 2026";

const TOPICS = [
  {
    title: "Getting started",
    body: "Download MamaNote free on Google Play. Your account includes a 7-day Plus trial with no credit card required.",
  },
  {
    title: "Billing & subscriptions",
    body: "Plus is purchased on our website (not Google Play billing). Payments are processed by Paddle. For refunds, cancellations, or billing questions, see our Refund Policy or email support@mamanoteapp.com with your receipt.",
  },
  {
    title: "Shared access & family",
    body: "Use Shared Access in the app to share logs via QR code, or Plus family sharing for partners on their own devices.",
  },
  {
    title: "Privacy & data",
    body: "Medicine reminders stay on your device. Read our Privacy Policy for full details on how we handle your data.",
  },
  {
    title: "Delete my account",
    body: "Email support@mamanoteapp.com from the address linked to your account and ask for account deletion. We will confirm once processed.",
  },
] as const;

export default function SupportPage() {
  return (
    <LegalPageLayout title="Support" lastUpdated={LAST_UPDATED}>
      <p>
        We&apos;re here to help you get the most out of MamaNote. Browse common topics below or reach out directly — we
        typically respond within 1–2 business days.
      </p>

      <div className="not-legal-prose my-8 grid gap-4">
        {TOPICS.map(({ title, body }) => (
          <div
            key={title}
            className="rounded-[18px] border-[1.5px] border-[#ede5f8] bg-white p-5 shadow-[0_4px_16px_rgb(28_20_40/5%)]"
          >
            <h3 className="!mt-0 !mb-2 !text-[1.05rem] font-bold text-[#1c1428]">{title}</h3>
            <p className="!mb-0 text-[0.9375rem] leading-[1.65] text-[#5c4f7a]">{body}</p>
          </div>
        ))}
      </div>

      <h2>Contact us</h2>
      <p>
        Email:{" "}
        <a href="mailto:support@mamanoteapp.com" className="font-semibold">
          support@mamanoteapp.com
        </a>
      </p>
      <p>When contacting support, please include:</p>
      <ul>
        <li>The email address linked to your MamaNote account</li>
        <li>Your device model and Android version</li>
        <li>A short description of the issue and steps to reproduce it</li>
        <li>Screenshots if helpful (no passwords)</li>
      </ul>

      <h2>Helpful links</h2>
      <ul>
        <li>
          <Link href="/#faq">Frequently asked questions</Link> on the home page
        </li>
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms-of-service">Terms of Service</Link>
        </li>
        <li>
          <Link href="/refund-policy">Refund Policy</Link>
        </li>
      </ul>

      <SupportPageActions />
    </LegalPageLayout>
  );
}
