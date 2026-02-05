export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl mb-6">
          Privacy Policy
        </h1>

        <p className="text-white/70 mb-8">
          Last updated: [February 5th, 2026]
        </p>

        <p className="mb-6">
          Oasis Cleaner is built with privacy as a core principle. The app is designed
          to work fully offline and does not collect, store, transmit, or share any
          personal data.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          1. No Data Collection
        </h2>
        <p className="mb-4">
          Oasis Cleaner does not collect any information about you.
        </p>
        <ul className="list-disc ml-6 text-white/80 mb-6">
          <li>Personal information such as name, email address, phone number, or identifiers</li>
          <li>Device information or usage data</li>
          <li>Analytics, diagnostics, or tracking data</li>
          <li>Location data</li>
        </ul>
        <p className="mb-6">
          We do not maintain servers and do not store any user data.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          2. Photos and Media Processing
        </h2>
        <p className="mb-4">
          Oasis Cleaner requires access to your photo library solely to perform its
          core functionality, including detecting duplicate photos and videos,
          detecting blurry photos and videos, and allowing you to delete selected
          items.
        </p>
        <p className="mb-6">
          All photo and video analysis happens entirely on your device and does not
          require an internet connection. Your photos and videos are never uploaded,
          transmitted, or shared in any form.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          3. Offline Functionality
        </h2>
        <p className="mb-6">
          Oasis Cleaner works 100% offline. The app does not connect to the internet
          to analyze your photos, process duplicates, detect blurry content, or
          perform deletions. An internet connection is not required to use the app.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          4. No Third-Party Services
        </h2>
        <p className="mb-6">
          Oasis Cleaner does not use third-party analytics services, advertising
          networks, tracking SDKs, or cloud storage or processing services. There are
          no third parties with access to your data.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          5. Data Storage
        </h2>
        <p className="mb-6">
          Oasis Cleaner does not store any personal data. Any temporary data created
          during scanning or analysis exists only on your device and is automatically
          discarded once the operation is complete.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          6. User Control
        </h2>
        <p className="mb-6">
          You are always in full control of your data. Oasis Cleaner only deletes
          photos or videos when you explicitly choose to do so. No content is removed
          automatically.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          7. Children’s Privacy
        </h2>
        <p className="mb-6">
          Oasis Cleaner does not knowingly collect data from anyone, including
          children under the age of 13. Since no data is collected, no child data is
          processed or stored.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          8. Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy if the app changes in the future. Any
          updates will be reflected by updating the date at the top of this page.
        </p>

        <h2 className="text-xl mt-10 mb-3">
          9. Contact
        </h2>
        <p>
          If you have any questions about this Privacy Policy, you may contact us at{" "}
          <strong>[your support email]</strong>.
        </p>
      </div>
    </main>
  )
}