import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the MamaNote baby tracker and diary app, including free plan, Plus subscription, and acceptable use.",
};

const LAST_UPDATED = "June 2, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the MamaNote mobile application, website, and related
        services (collectively, the &quot;Service&quot;) operated by MamaNote. By downloading, accessing, or using the Service,
        you agree to these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        MamaNote is a baby tracker and diary app that helps parents and caregivers log activities such as feeding, sleep,
        diapers, medicine, growth, and milestones. Features may include insights, AI-generated routine suggestions, family
        sharing, and optional MamaNote Plus subscriptions.
      </p>
      <p>
        MamaNote is for informational and organizational purposes only. It does not provide medical advice, diagnosis, or
        treatment. Always consult a qualified healthcare professional for medical decisions about your child.
      </p>

      <h2>2. Eligibility and accounts</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account. You are
        responsible for maintaining the confidentiality of your login credentials and for all activity under your account.
      </p>

      <h2>3. Free plan and MamaNote Plus</h2>
      <h3>Free plan</h3>
      <p>
        The free version of MamaNote lets you view your full activity history and create up to <strong>3 new logs per day</strong>,
        forever, unless we change this with reasonable notice.
      </p>
      <h3>Plus subscription</h3>
      <p>
        MamaNote Plus unlocks additional features such as unlimited logs, multiple baby profiles, family sharing, full
        insights, weekly charts, and AI daily routine generation. Plus is offered as:
      </p>
      <ul>
        <li>Monthly — $5.99 USD per month</li>
        <li>Annual — $39.99 USD per year</li>
        <li>Lifetime — $59.99 USD one-time payment</li>
      </ul>
      <p>
        A <strong>7-day free trial</strong> of Plus may be available for new users. No credit card is required to start the
        trial in the app. After the trial, your account continues on the free plan unless you subscribe. Subscriptions
        purchased through Google Play are billed and managed by Google under their terms. Web checkout, where available, may
        be processed by Paddle or other payment partners.
      </p>
      <p>
        Prices may change with notice where required by applicable law. Refunds are handled according to the store or payment
        provider through which you purchased (e.g., Google Play refund policies).
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
        <li>Attempt to gain unauthorized access to other users&apos; data or our systems</li>
        <li>Reverse engineer, scrape, or abuse the Service except as permitted by law</li>
        <li>Upload malicious code or interfere with the Service&apos;s operation</li>
        <li>Share access credentials in a way that compromises other users&apos; privacy</li>
      </ul>

      <h2>5. Your content</h2>
      <p>
        You retain ownership of the logs and content you create. You grant us a limited license to host, process, and display
        your content solely to operate and improve the Service as described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>6. Shared access</h2>
      <p>
        If you use Shared Access or family sharing, you are responsible for who you invite and what they can view. Shared
        links and QR codes should be treated as sensitive. Revoke access when it is no longer needed.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The Service, including software, design, trademarks, and documentation, is owned by MamaNote or its licensors. These
        Terms do not grant you any right to use our branding except as allowed by the Service.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
        INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE
        WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT LOGS AND INSIGHTS ARE ACCURATE FOR MEDICAL USE.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, MAMANOTE AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF THE
        SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU
        PAID US IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) FIFTY US DOLLARS ($50).
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate access if you violate these Terms or if we
        discontinue the Service with reasonable notice where practicable.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may modify these Terms from time to time. Material changes will be posted on this page with an updated date.
        Continued use after changes constitutes acceptance.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the laws applicable in our principal place of business, without regard to conflict-of-law
        rules, except where mandatory consumer protection laws in your country require otherwise.
      </p>

      <h2>13. Contact</h2>
      <p>
        For questions about these Terms, contact{" "}
        <a href="mailto:support@mamanote.app">support@mamanote.app</a> or visit{" "}
        <a href="/support">Support</a>.
      </p>
    </LegalPageLayout>
  );
}
