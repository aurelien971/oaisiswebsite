export default function FaikePrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          FAIKE - AI Detector
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mb-10 text-sm text-neutral-500">
          Effective Date: June 21, 2026
          <br />
          Operated by New Age Technologies Ltd.
        </p>

        <div className="space-y-10 text-base leading-7 text-neutral-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              1. Introduction
            </h2>
            <p>
              FAIKE (&quot;the App&quot;) is operated by New Age Technologies Ltd.
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), registered at 40
              Ossington Street, London W2 4LY, United Kingdom. This Privacy
              Policy explains how we collect, use, and protect your information
              when you use our App.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              2. Information We Collect
            </h2>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-neutral-900">
              2.1 Content You Submit for Analysis
            </h3>
            <p>
              When you use FAIKE, you may submit text claims, images, or voice
              recordings for analysis. This content is sent to third-party AI
              services, including OpenAI, for processing. We do not store your
              submitted content on our servers after analysis is complete.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-neutral-900">
              2.2 Voice Recordings
            </h3>
            <p>
              If you use the voice input feature, your audio is temporarily
              recorded on your device, sent to OpenAI&apos;s Whisper API for
              transcription, and then deleted from your device. We do not retain
              voice recordings.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-neutral-900">
              2.3 Images
            </h3>
            <p>
              Images you upload for analysis are sent to OpenAI&apos;s API for
              processing. We do not store your images on our servers. Thumbnail
              previews may be stored locally on your device for your scan
              history.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-neutral-900">
              2.4 Scan History
            </h3>
            <p>
              Your scan history, including results, timestamps, and text
              previews, is stored locally on your device using Apple&apos;s
              UserDefaults. This data never leaves your device and is not
              accessible to us.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-neutral-900">
              2.5 Subscription Information
            </h3>
            <p>
              If you subscribe to FAIKE Pro, your payment is processed entirely
              by Apple through the App Store. We do not collect, store, or have
              access to your payment details, credit card information, or Apple
              ID.
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-neutral-900">
              2.6 Analytics and Diagnostics
            </h3>
            <p>
              We do not currently collect analytics, crash reports, or usage
              data. This may change in future updates, and this policy will be
              updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              3. Third-Party Services
            </h2>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-neutral-900">
              3.1 OpenAI
            </h3>
            <p>
              Content you submit for analysis is processed by OpenAI&apos;s API.
              OpenAI&apos;s data usage policies apply to this processing. For
              more information, visit{" "}
              <a
                href="https://openai.com/policies/privacy-policy"
                className="font-medium text-blue-600 underline"
              >
                https://openai.com/policies/privacy-policy
              </a>
              .
            </p>

            <h3 className="mb-2 mt-5 text-lg font-semibold text-neutral-900">
              3.2 Apple
            </h3>
            <p>
              Subscription purchases and account management are handled by
              Apple. Apple&apos;s privacy policy applies:{" "}
              <a
                href="https://www.apple.com/legal/privacy"
                className="font-medium text-blue-600 underline"
              >
                https://www.apple.com/legal/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              4. Data Retention
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Submitted content:</strong> Not retained after analysis.
                Sent to OpenAI for real-time processing only.
              </li>
              <li>
                <strong>Scan history:</strong> Stored locally on your device
                until you clear it. Limited to 50 items.
              </li>
              <li>
                <strong>Voice recordings:</strong> Deleted immediately after
                transcription.
              </li>
              <li>
                <strong>Images:</strong> Not stored on our servers. Local
                thumbnails are stored on device only.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              5. Data Security
            </h2>
            <p>
              All communication with third-party APIs is encrypted using
              HTTPS/TLS. Your scan history is stored locally on your device and
              protected by your device&apos;s built-in security features, such as
              passcode and Face ID.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              6. Children&apos;s Privacy
            </h2>
            <p>
              FAIKE is not directed at children under the age of 13. We do not
              knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access the personal data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Opt out of data processing</li>
            </ul>
            <p className="mt-3">
              Since we do not store your data on our servers, most data control
              is in your hands. You can clear your scan history at any time
              within the App.
            </p>
            <p className="mt-3">
              For users in the European Economic Area (EEA), you have rights
              under the General Data Protection Regulation (GDPR). For users in
              California, you have rights under the California Consumer Privacy
              Act (CCPA).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy within the
              App. Your continued use of the App after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <address className="mt-4 not-italic">
              <strong>New Age Technologies Ltd.</strong>
         
              United Kingdom
              <br />
              Email:{" "}
              <a
                href="mailto:fefeapphello@gmail.com"
                className="font-medium text-blue-600 underline"
              >
                fefeapphello@gmail.com
              </a>
            </address>
          </section>
        </div>
      </section>
    </main>
  )
}