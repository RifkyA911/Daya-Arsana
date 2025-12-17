import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Daya Arsana",
  description: "The page you're looking for doesn't exist. Visit Daya Arsana for innovative technology solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found",
    "description": "The page you're looking for doesn't exist",
    "url": "https://daya-arsana.com/404",
    "publisher": {
      "@type": "Organization",
      "name": "Daya Arsana",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md mx-4 text-center border border-gray-200 shadow-lg animate-fade-in">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center mb-4 gap-2">
              <AlertCircle className="h-12 w-12 text-red-500" />
              <h1 className="text-2xl mt-4 font-bold text-gray-900">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Did you forget to add the page to the router?
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
