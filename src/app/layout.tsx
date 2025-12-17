import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  adjustFontFallback: false,
  fallback: ["serif"],
});

export const metadata: Metadata = {
  title: "Daya Arsana - Innovative Technology Solutions for Business Growth",
  description: "Daya Arsana provides end-to-end agile development, cyber security, brand activation, and digital marketing solutions to transform businesses and drive long-term success.",
  keywords: ["technology solutions", "product development", "cyber security", "brand activation", "digital marketing", "business transformation"],
  authors: [{ name: "Daya Arsana Team" }],
  creator: "Daya Arsana",
  publisher: "Daya Arsana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daya-arsana.com"), // Ganti dengan domain aktual
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daya Arsana - Innovative Technology Solutions",
    description: "Transform your business with our comprehensive technology solutions including product development, cyber security, and digital marketing.",
    url: "https://daya-arsana.com",
    siteName: "Daya Arsana",
    images: [
      {
        url: "/images/og-image.jpg", // Pastikan ada gambar OG
        width: 1200,
        height: 630,
        alt: "Daya Arsana - Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daya Arsana - Innovative Technology Solutions",
    description: "Transform your business with our comprehensive technology solutions.",
    images: ["/images/twitter-image.jpg"], // Pastikan ada gambar Twitter
    creator: "@dayaarsana", // Jika ada Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Ganti dengan kode verifikasi Google
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
