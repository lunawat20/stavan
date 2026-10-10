import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Stavan — AI Automation & Custom AI Solutions",
  description:
    "Stavan helps businesses automate repetitive work and build custom AI-powered solutions that make business simpler, faster and smarter. Founded by Pariyushna Lunawat.",
  keywords: [
    "AI automation",
    "business automation",
    "custom AI solutions",
    "workflow automation",
    "WhatsApp automation",
    "CRM automation",
    "AI agents",
    "Stavan",
    "Pariyushna Lunawat",
  ],
  authors: [{ name: "Pariyushna Lunawat", url: "https://stavan.agency" }],
  creator: "Pariyushna Lunawat",
  publisher: "Stavan",
  metadataBase: new URL("https://stavan.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stavan — AI Automation & Custom AI Solutions",
    description:
      "If it can be done manually, it can probably be automated. Custom AI-powered systems for businesses.",
    url: "https://stavan.agency",
    siteName: "STAVAN",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stavan — AI Automation & Custom AI Solutions",
    description:
      "We turn business problems into intelligent systems. Custom AI automation by Stavan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#090909] text-[#F7F2E8] selection:bg-[#FF4B2B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
