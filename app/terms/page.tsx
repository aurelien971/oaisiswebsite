export default function Terms() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-20">
        
        <h1 
          className="text-4xl md:text-5xl font-normal text-white mb-8"
          style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}
        >
          Terms of Service
        </h1>
        
        <div 
          className="text-white/70 space-y-6 leading-relaxed"
          style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}
        >
          <p className="text-white/50 text-sm">Last Updated: January 2026</p>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">Welcome to Oasis</h2>
            <p>Oasis provides voice transcription software for macOS ("Services") to help users convert speech to text efficiently. These Terms of Service ("Terms") govern your access to and use of the Services. By using Oasis, you agree to these Terms and our Privacy Policy.</p>
            <p className="mt-4">To use the Services, you must be at least 13 if you reside in the United States, and 16 if you reside anywhere else. If you are under 18, you may need parental or guardian consent depending on your location.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">1. Your Account</h2>
            <p>You must create an account to use certain features. You agree to provide accurate information and maintain the confidentiality of your account credentials. You are responsible for all activity under your account. Notify us immediately if you suspect unauthorized access.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">2. Your Content</h2>
            <p><strong>A. Ownership.</strong> You retain ownership of all content you create using Oasis, including voice recordings and transcribed text ("Your Content"). However, to provide the Services, you grant Oasis a limited license to process, store, and transmit Your Content.</p>
            <p className="mt-4"><strong>B. AI Features.</strong> Oasis uses AI models (including OpenAI Whisper and potentially others) to transcribe your voice recordings ("Input") into text ("Output"). Input and Output are collectively "Customer Content." You own all Customer Content. Oasis may use Customer Content to improve our Services and train AI models if you opt in via settings. You can control whether your content is used for training at any time.</p>
            <p className="mt-4"><strong>C. No Warranties on Outputs.</strong> OASIS MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE ACCURACY OF TRANSCRIPTIONS. YOU SHOULD VERIFY OUTPUTS INDEPENDENTLY. TRANSCRIPTIONS MAY CONTAIN ERRORS EVEN IF THEY APPEAR ACCURATE.</p>
            <p className="mt-4"><strong>D. Recording Consent.</strong> You may not use Oasis to record or transcribe another person's speech without their explicit consent. You are solely responsible for obtaining necessary permissions before recording others.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">3. Restrictions</h2>
            <p>You agree not to:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Reverse engineer, decompile, or attempt to extract source code from the Services</li>
              <li>Use the Services for illegal purposes or to violate others' rights</li>
              <li>Record or transcribe others without their consent</li>
              <li>Circumvent security measures or access restrictions</li>
              <li>Use the Services to create competing products or train other AI models</li>
              <li>Share content that is illegal, harmful, or infringes intellectual property rights</li>
              <li>Engage in payment fraud or unauthorized use of payment methods</li>
            </ul>
            <p className="mt-4">We reserve the right to suspend or terminate accounts that violate these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">4. The Services</h2>
            <p>Subject to your compliance with these Terms and payment of applicable fees, Oasis grants you a limited, non-exclusive, non-transferable right to use the Services. The Services may update automatically. We reserve the right to modify, suspend, or discontinue any part of the Services at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">5. Third-Party Services</h2>
            <p>Oasis uses third-party services including OpenAI Whisper, Firebase, and Stripe for payments. These providers do not use your data to train their models. Voice recordings are processed securely and deleted according to our data retention policies. Third-party services are subject to their own terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">6. Intellectual Property</h2>
            <p>The Services, including all software, designs, and trademarks, are owned by Oasis and protected by UK and international intellectual property laws. These Terms do not grant you ownership of the Services. You may provide feedback, which we may use without obligation to you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">7. Privacy</h2>
            <p>By using the Services, you agree to our Privacy Policy, which describes how we collect and use your information, including voice recordings and transcribed text.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">8. Paid Services</h2>
            <p><strong>A. Payment.</strong> Certain features require payment ("Paid Services"). We use Stripe to process payments. You will be billed automatically on each renewal period until you cancel. You are responsible for all applicable taxes.</p>
            <p className="mt-4"><strong>B. Cancellation.</strong> You may cancel Paid Services at any time from within the app. Refunds are only issued as required by law. Paid Services remain active until the end of your billing period.</p>
            <p className="mt-4"><strong>C. Changes.</strong> We may change pricing on renewal with reasonable advance notice. You can cancel before new pricing takes effect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">9. Termination</h2>
            <p>You may stop using the Services at any time. We may suspend or terminate your access if you breach these Terms, pose a risk to other users, or don't access the Services for 12 consecutive months (for free accounts). If we discontinue the Services, we will provide reasonable notice and refund any prepaid fees for unused service periods.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">10. WARRANTY DISCLAIMERS</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OASIS PROVIDES THE SERVICES "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR MEET YOUR REQUIREMENTS.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">11. LIMITATION OF LIABILITY</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OASIS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICES. THIS LIMITATION APPLIES EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <p className="mt-4">IF YOU ARE A UK OR EU CONSUMER, OASIS IS LIABLE UNDER STATUTORY PROVISIONS FOR INTENT AND GROSS NEGLIGENCE.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">12. Indemnification</h2>
            <p>You agree to indemnify Oasis from claims arising from your breach of these Terms, your content, or your violation of laws. This does not apply to claims directly caused by our breach or, for UK/EU consumers, consequences that were not reasonably foreseeable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">13. Dispute Resolution</h2>
            <p>These Terms are governed by the laws of England and Wales. Any disputes shall be resolved in the courts of England and Wales. If you are a consumer in the UK or EU, you retain any rights under mandatory local consumer protection laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">14. Changes to Terms</h2>
            <p>We may modify these Terms from time to time. We will notify you of material changes via email or in-app notice. Continued use after changes constitute acceptance of the modified Terms. If you disagree, you must stop using the Services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">15. General</h2>
            <p>These Terms constitute the entire agreement between you and Oasis. Our failure to enforce any provision is not a waiver. If any provision is unenforceable, the remaining provisions remain in effect. You may not assign your rights under these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-white mb-4">16. Contact Us</h2>
            <p>For questions about these Terms, contact us at: support@oaisis.co.uk</p>
          </section>
        </div>
      </div>
    </div>
  );
}