import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MamaNote collects, uses, and protects your data. Baby tracker app privacy — local medicine reminders, no data selling.",
};

const LAST_UPDATED = "June 2, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        MamaNote (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the MamaNote mobile application and this website. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your information when you use our baby tracker and diary
        app.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Account information</h3>
      <p>
        When you create an account, we may collect your email address and authentication credentials through our secure
        identity provider. This lets you sync your data across devices and use Plus features such as family sharing.
      </p>
      <h3>Baby activity data</h3>
      <p>
        You choose what to log in the app, which may include feeding, sleep, diapers, medicine, growth measurements,
        milestones, diary notes, and related timestamps. This data is stored to provide tracking, insights, and sharing
        features you enable.
      </p>
      <h3>Device and usage information</h3>
      <p>
        We may collect limited technical data such as device type, operating system version, and crash logs to keep the app
        reliable and secure. We do not use this information for cross-app advertising profiles.
      </p>

      <h2>2. Information stored only on your device</h2>
      <p>
        <strong>Medicine reminders</strong> you configure in MamaNote are stored locally on your device. They are not uploaded
        to our servers or shared with third parties. This keeps sensitive health reminders private to you.
      </p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>Provide core app features: logging, history, charts, AI routine suggestions, and shared access when you opt in</li>
        <li>Process subscriptions and trials for MamaNote Plus</li>
        <li>Respond to support requests</li>
        <li>Improve security, fix bugs, and maintain service quality</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal information or baby activity data to third parties. We do{" "}
        <strong>not</strong> send marketing push notifications.
      </p>

      <h2>4. Sharing your information</h2>
      <p>We may share information only in these situations:</p>
      <ul>
        <li>
          <strong>With people you choose:</strong> Shared Access and family sharing let you grant view or edit access via
          invite or QR code. You control who receives access.
        </li>
        <li>
          <strong>Service providers:</strong> We use trusted vendors for hosting, authentication, analytics limited to
          operations, and payment processing (e.g., Google Play, Paddle on web checkout). They process data only on our
          instructions.
        </li>
        <li>
          <strong>Legal requirements:</strong> If required by law or to protect rights, safety, and security.
        </li>
      </ul>

      <h2>5. Data security</h2>
      <p>
        We use industry-standard measures including encrypted connections and row-level access controls on our backend so
        users can only access data they are authorized to see. No method of transmission or storage is 100% secure; we work
        continuously to protect your information.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain your account and activity data while your account is active. You may request deletion of your account and
        associated data by contacting us at{" "}
        <a href="mailto:support@mamanote.app">support@mamanote.app</a>. Some information may be retained where required by
        law or for legitimate business purposes (e.g., payment records).
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or export your personal data, and to
        object to or restrict certain processing. Contact us to exercise these rights. EU/UK users may also lodge a complaint
        with their local data protection authority.
      </p>

      <h2>8. Children</h2>
      <p>
        MamaNote is used by parents and caregivers to track information about their babies. We do not knowingly collect
        personal information directly from children under 13. If you believe we have done so, contact us and we will delete
        it promptly.
      </p>

      <h2>9. International transfers</h2>
      <p>
        Your information may be processed in countries other than your own. We take steps to ensure appropriate safeguards
        when data is transferred internationally.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the
        &quot;Last updated&quot; date. Continued use of MamaNote after changes constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact us</h2>
      <p>
        Questions about this Privacy Policy? Email{" "}
        <a href="mailto:support@mamanote.app">support@mamanote.app</a> or visit our{" "}
        <a href="/support">Support page</a>.
      </p>
    </LegalPageLayout>
  );
}
