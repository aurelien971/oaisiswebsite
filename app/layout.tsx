import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Oasis - Voice Transcription",
  description: "Transcribe your voice instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        <div className="fixed inset-0 bg-black -z-50" />
        
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl">
          {/* Added min-w-max to ensure items don't compress on small widths */}
          <div className="max-w-8xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center min-w-max">
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="/" className="flex items-center">
                <img src="/wordmark.png" alt="Oasis" className="h-3 md:h-5 w-auto" />
              </a>
            </div>
            
            <div className="flex items-center gap-4 md:gap-8 ml-4">
              <a href="/pricing" className="text-sm md:text-base text-white/70 hover:text-white transition font-normal whitespace-nowrap" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                Pricing
              </a>
              <a href="/privacy" className="text-sm md:text-base text-white/70 hover:text-white transition font-normal whitespace-nowrap" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                Privacy
              </a>
              <a href="/terms" className="text-sm md:text-base text-white/70 hover:text-white transition font-normal whitespace-nowrap" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                Terms
              </a>
              <a 
  href="/api/download"
  className="bg-white text-black px-4 md:px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-1 md:gap-2 text-sm md:text-base whitespace-nowrap flex-shrink-0"
  style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}
>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
  <span className="hidden lg:inline">Download for MacOS</span>
  <span className="lg:hidden">Download</span>
</a>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          {children}
        </main>
<Analytics />
<SpeedInsights />
      </body>
    </html>
  );
}