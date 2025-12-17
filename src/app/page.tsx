import { Analytics } from "@vercel/analytics/next"
import AnimatedBackground from "./_components/AnimatedBackground";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Partnership from "./_components/Partnership";
import InfiniteMarquee from "./_components/InfiniteMarquee";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export const metadata = {
  title: "Daya Arsana - Home",
  description: "Welcome to Daya Arsana, your partner in innovative technology solutions.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Daya Arsana",
    "url": "https://daya-arsana.com",
    "logo": "https://daya-arsana.com/images/logo.png",
    "description": "Daya Arsana provides end-to-end agile development, cyber security, brand activation, and digital marketing solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX", // Ganti dengan nomor telepon aktual
      "contactType": "customer service",
    },
    "sameAs": [
      "https://www.facebook.com/dayaarsana", // Jika ada
      "https://www.twitter.com/dayaarsana",
      "https://www.linkedin.com/company/dayaarsana",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Daya Arsana transformed our business operations completely. Their agile development approach and cyber security expertise gave us peace of mind and significant growth."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The brand activation strategies implemented by Daya Arsana increased our market presence by 300%. Their digital marketing team is exceptional."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding cyber security protocols. Their penetration testing and enterprise-grade security solutions protected us from potential threats effectively."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Analytics />
      <div className="xcontainer mx-auto min-h-screen max-w-[1580px] font-sans">
        <div className="p-4">
          <AnimatedBackground />
          <Navbar />
          <Hero />
          <Features />
          <Partnership />
          <InfiniteMarquee />
          <CTA />
        </div>
        <Footer />
      </div>
    </>
  );
}

