import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "MamaNote refund policy for Plus subscriptions and purchases via Google Play, web checkout, and the 7-day free trial.",
};

const LAST_UPDATED = "June 2, 2026";

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This Refund Policy explains how refunds work for MamaNote Plus subscriptions and other paid purchases. MamaNote is
        operated by MamaNote (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Your purchase channel — Google Play or web
        checkout — determines who processes payment and refunds.
      </p>

      <h2>1. Free plan and Plus trial</h2>
      <p>
        MamaNote&apos;s free plan does not require payment. The <strong>7-day Plus trial</strong> does not require a credit
        card when started in the app. If you were not charged, no refund applies. If you subscribe after the trial, the
        refund rules below apply to that paid subscription.
      </p>

      <h2>2. Purchases through Google Play</h2>
      <p>
        Most MamaNote Plus subscriptions are purchased through <strong>Google Play</strong>. Google bills you and manages
        renewals, cancellations, and refunds under{" "}
        <a href="https://support.google.com/googleplay/answer/2479637" rel="noopener noreferrer" target="_blank">
          Google Play&apos;s refund policies
        </a>
        .
      </p>
      <p>To request a refund for a Google Play purchase:</p>
      <ul>
        <li>Open Google Play → Profile → Payments &amp; subscriptions → Budget &amp; history (or Subscriptions)</li>
        <li>Select the MamaNote transaction or subscription</li>
        <li>Follow Google&apos;s steps to request a refund or cancel future billing</li>
      </ul>
      <p>
        Refund eligibility and timing are decided by Google, not MamaNote. We cannot issue refunds directly for charges
        made by Google Play.
      </p>

      <h2>3. Web checkout (Paddle)</h2>
      <p>
        If you subscribed or paid through our website checkout, payment may be processed by <strong>Paddle</strong> (or
        another payment partner shown at checkout). Refunds for those transactions are subject to Paddle&apos;s policies and
        applicable law.
      </p>
      <p>
        For web purchases, email{" "}
        <a href="mailto:support@mamanote.app">support@mamanote.app</a> with your receipt email, purchase date, and reason
        for the request. We will work with our payment provider to review eligible refund requests, typically within 5–10
        business days.
      </p>

      <h2>4. Subscription plans</h2>
      <h3>Monthly and Annual Plus</h3>
      <p>
        <strong>Monthly ($5.99 USD/month)</strong> and <strong>Annual ($39.99 USD/year)</strong> subscriptions renew
        automatically until you cancel. Canceling stops future charges; it does not automatically refund the current billing
        period unless required by law or approved under the store or payment provider&apos;s refund policy.
      </p>
      <h3>Lifetime Plus</h3>
      <p>
        <strong>Lifetime ($59.99 USD one-time)</strong> is a non-recurring purchase. Refund requests for Lifetime are
        considered on a case-by-case basis when submitted within <strong>14 days</strong> of purchase and before substantial
        use of Plus features, subject to Google Play or Paddle rules where applicable.
      </p>

      <h2>5. Canceling vs. refunding</h2>
      <ul>
        <li>
          <strong>Cancel subscription:</strong> Stops renewal at the end of the current period. You keep Plus access until
          that period ends, then your account continues on the free plan with your data intact.
        </li>
        <li>
          <strong>Refund:</strong> Returns payment for an eligible charge. After a refund, Plus access may be revoked
          according to the payment provider&apos;s process.
        </li>
      </ul>

      <h2>6. When refunds may be denied</h2>
      <p>Refunds may not be available when:</p>
      <ul>
        <li>The purchase is outside the refund window set by Google Play or our payment partner</li>
        <li>You have extensively used Plus features after purchase and a refund would be abusive or inconsistent with store rules</li>
        <li>The charge is disputed through your bank instead of our support or the store (chargebacks may limit account access while investigated)</li>
        <li>Local law does not require a refund for digital goods or subscriptions in your region</li>
      </ul>

      <h2>7. EU and UK consumers</h2>
      <p>
        If you are in the European Union or United Kingdom, you may have statutory rights to withdraw from certain digital
        purchases within 14 days. Those rights can be limited once you begin using the service, as permitted by law. Contact
        us or use your store&apos;s refund process if you believe this applies to you.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We may update this Refund Policy from time to time. The &quot;Last updated&quot; date at the top of this page will
        change when we do. Continued use of paid features after changes constitutes acceptance of the updated policy for
        future purchases.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about billing or refunds? Email{" "}
        <a href="mailto:support@mamanote.app">support@mamanote.app</a> or visit our{" "}
        <a href="/support">Support page</a>. See also our{" "}
        <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPageLayout>
  );
}
