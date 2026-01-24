import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://oaisis.co.uk"),
  title: "Oasis - Voice Transcription",
  description: "Transcribe your voice instantly",
  openGraph: {
    title: "Oasis - Voice Transcription",
    description: "Transcribe your voice instantly",
    url: "https://oaisis.co.uk",
    siteName: "Oasis",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Oasis",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasis - Voice Transcription",
    description: "Transcribe your voice instantly",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
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

        <Navbar />

        <main className="pt-20">
          {children}
          <Footer />
        </main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}