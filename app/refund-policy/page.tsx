import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "MamaNote refund policy for Plus subscriptions purchased through our website checkout (Paddle) and the 7-day free trial.",
};

const LAST_UPDATED = "June 2, 2026";

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This Refund Policy explains how refunds work for MamaNote Plus subscriptions and other paid purchases. MamaNote is
        operated by MamaNote (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
      </p>
      <p>
        <strong>Important:</strong> MamaNote Plus is not sold through Google Play in-app billing at this time. The app may be
        downloaded free from Google Play, but paid Plus plans are purchased through our <strong>website checkout</strong> only.
      </p>

      <h2>1. Free plan and Plus trial</h2>
      <p>
        MamaNote&apos;s free plan does not require payment. The <strong>7-day Plus trial</strong> does not require a credit
        card when started in the app. If you were not charged, no refund applies. If you subscribe after the trial via our
        website checkout, the refund rules below apply.
      </p>

      <h2>2. Website checkout (Paddle)</h2>
      <p>
        Plus subscriptions and Lifetime access are purchased on our website. Payment is processed by{" "}
        <strong>Paddle</strong> (or another payment partner shown at checkout). Refunds are subject to Paddle&apos;s policies
        and applicable law.
      </p>
      <p>To request a refund or ask about a charge:</p>
      <ul>
        <li>Email <a href="mailto:support@mamanote.app">support@mamanote.app</a> from the address used at checkout</li>
        <li>Include your receipt email, purchase date, plan type (Monthly, Annual, or Lifetime), and reason for the request</li>
        <li>We will review eligible requests with our payment provider, typically within 5–10 business days</li>
      </ul>
      <p>
        To cancel a recurring subscription, use the link in your Paddle receipt email or contact us at{" "}
        <a href="mailto:support@mamanote.app">support@mamanote.app</a>. Canceling stops future charges; it does not
        automatically refund the current billing period unless required by law or approved under our refund review.
      </p>

      <h2>3. Subscription plans</h2>
      <h3>Monthly and Annual Plus</h3>
      <p>
        <strong>Monthly ($5.99 USD/month)</strong> and <strong>Annual ($39.99 USD/year)</strong> subscriptions renew
        automatically until you cancel through Paddle or by contacting support.
      </p>
      <h3>Lifetime Plus</h3>
      <p>
        <strong>Lifetime ($59.99 USD one-time)</strong> is a non-recurring purchase. Refund requests for Lifetime are
        considered on a case-by-case basis when submitted within <strong>14 days</strong> of purchase and before substantial
        use of Plus features.
      </p>

      <h2>4. Canceling vs. refunding</h2>
      <ul>
        <li>
          <strong>Cancel subscription:</strong> Stops renewal at the end of the current period. You keep Plus access until
          that period ends, then your account continues on the free plan with your data intact.
        </li>
        <li>
          <strong>Refund:</strong> Returns payment for an eligible charge. After a refund, Plus access may be revoked once
          the refund is processed.
        </li>
      </ul>

      <h2>5. When refunds may be denied</h2>
      <p>Refunds may not be available when:</p>
      <ul>
        <li>The purchase is outside the refund window allowed by our payment partner or applicable law</li>
        <li>You have extensively used Plus features after purchase and a refund would be abusive or inconsistent with our policies</li>
        <li>The charge is disputed through your bank instead of our support (chargebacks may limit account access while investigated)</li>
        <li>Local law does not require a refund for digital goods or subscriptions in your region</li>
      </ul>

      <h2>6. Google Play (download only)</h2>
      <p>
        If you downloaded MamaNote from Google Play, that distribution is separate from Plus billing. We do not process Plus
        subscription payments or refunds through Google Play today. If in-app billing is added in the future, this policy will
        be updated and Google&apos;s refund rules will apply to those purchases.
      </p>

      <h2>7. EU and UK consumers</h2>
      <p>
        If you are in the European Union or United Kingdom, you may have statutory rights to withdraw from certain digital
        purchases within 14 days. Those rights can be limited once you begin using the service, as permitted by law. Contact
        us if you believe this applies to you.
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
