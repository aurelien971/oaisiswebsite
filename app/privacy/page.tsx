export default function Privacy() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-20">
        
        <h1 
          className="text-4xl md:text-5xl font-normal text-white mb-8"
          style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}
        >
          Privacy Policy
        </h1>
        
        <div 
          className="text-white/70 space-y-6 leading-relaxed"
          style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}
        >
          <p className="text-white/50 text-sm">Last Updated: January 2026</p>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">1. Introduction</h2>
            <p>This Privacy Policy describes how Oasis ("we," "us," or "our") collects, uses, and protects your personal information when you use our voice transcription application and related services (collectively, the "Services"). By using the Services, you agree to the practices described in this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">2. Information We Collect</h2>
            
            <p><strong>A. Account Information</strong></p>
            <p>When you create an account, we collect:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Email address</li>
              <li>Name</li>
              <li>Account credentials</li>
            </ul>

            <p className="mt-4"><strong>B. Voice Recordings and Transcriptions</strong></p>
            <p>When you use Oasis to transcribe speech, we collect:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Audio recordings of your voice</li>
              <li>Transcribed text generated from your recordings</li>
              <li>Metadata about your recordings (timestamp, duration, application used)</li>
            </ul>
            <p className="mt-2">Voice recordings are processed using AI services (including OpenAI Whisper) and are deleted after transcription unless you opt in to save them for model training purposes.</p>

            <p className="mt-4"><strong>C. Usage Data</strong></p>
            <p>We automatically collect information about how you use the Services, including:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Device information (operating system, device type, unique identifiers)</li>
              <li>IP address and general location</li>
              <li>Usage statistics (features used, frequency, session duration)</li>
              <li>Performance data and error logs</li>
              <li>Application context (which app you were using when transcribing)</li>
            </ul>

            <p className="mt-4"><strong>D. Payment Information</strong></p>
            <p>When you subscribe to paid features, our payment processor Stripe collects and processes your payment information. We do not store your full credit card details. Stripe's privacy policy is available at stripe.com/privacy.</p>

            <p className="mt-4"><strong>E. Cookies and Tracking</strong></p>
            <p>We use cookies and similar technologies to maintain your session, remember your preferences, and analyze how you use our Services. You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong>Provide the Services:</strong> Process voice recordings, generate transcriptions, and deliver core functionality</li>
              <li><strong>Improve our Services:</strong> If you opt in, use your recordings and corrections to train and improve our AI models</li>
              <li><strong>Customer Support:</strong> Respond to your inquiries and provide technical assistance</li>
              <li><strong>Account Management:</strong> Manage your account, process payments, and send service-related communications</li>
              <li><strong>Security:</strong> Detect and prevent fraud, abuse, and security incidents</li>
              <li><strong>Analytics:</strong> Understand usage patterns and improve user experience</li>
              <li><strong>Marketing:</strong> Send promotional emails about new features (you can opt out anytime)</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">4. Data Retention</h2>
            <p>We retain your information for different periods depending on the type of data:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong>Voice Recordings:</strong> Deleted immediately after transcription unless you opt in to save them for model training</li>
              <li><strong>Transcribed Text:</strong> Retained according to your subscription plan (30 days for Basic, unlimited for Pro)</li>
              <li><strong>Account Information:</strong> Retained while your account is active and for a reasonable period after deletion</li>
              <li><strong>Usage Data:</strong> Retained for up to 24 months for analytics purposes</li>
            </ul>
            <p className="mt-4">You can delete your account and associated data at any time through the app settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">5. How We Share Your Information</h2>
            <p>We share your information only in the following circumstances:</p>
            
            <p className="mt-4"><strong>A. Service Providers</strong></p>
            <p>We share information with third-party service providers who help us operate the Services:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>OpenAI Whisper:</strong> Processes voice recordings for transcription (data not used for training their models, deleted after 30 days)</li>
              <li><strong>Firebase/Google Cloud:</strong> Stores account data and transcriptions</li>
              <li><strong>Stripe:</strong> Processes payments</li>
              <li><strong>Vercel:</strong> Hosts our website and analytics</li>
            </ul>

            <p className="mt-4"><strong>B. Legal Requirements</strong></p>
            <p>We may disclose information if required by law, court order, or to protect our rights and the safety of others.</p>

            <p className="mt-4"><strong>C. Business Transfers</strong></p>
            <p>If Oasis is acquired or merged with another company, your information may be transferred to the new owner.</p>

            <p className="mt-4"><strong>D. With Your Consent</strong></p>
            <p>We may share information with other parties with your explicit consent.</p>

            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt out of marketing communications and data training</li>
              <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where we rely on consent</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at support@oaisis.co.uk. We may verify your identity before responding.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">7. UK GDPR & Data Protection</h2>
            <p>If you are in the UK or EU, you have additional rights under GDPR. We process your data based on:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Performance of our contract with you</li>
              <li>Our legitimate interests (unless overridden by your rights)</li>
              <li>Your consent (which you can withdraw)</li>
              <li>Legal obligations</li>
            </ul>
            <p className="mt-4">You have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) or your local data protection authority.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">8. International Data Transfers</h2>
            <p>Your information may be transferred to and stored on servers located outside your country, including the United States. We ensure adequate protections are in place for such transfers in compliance with applicable laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">9. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your information, including encryption, access controls, and secure data storage. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">10. Children's Privacy</h2>
            <p>The Services are not intended for children under 13 (or 16 in the EU/UK). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us at support@oaisis.co.uk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or in-app notification. Continued use of the Services after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">12. Contact Us</h2>
            <p>For questions about this Privacy Policy or to exercise your rights, contact us at:</p>
            <p className="mt-2">Email: support@oaisis.co.uk</p>
          </section>
        </div>
      </div>
    </div>
  );
}