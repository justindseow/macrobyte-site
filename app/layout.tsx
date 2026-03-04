import "./globals.css";
import Header from "./components/Header";
import type { Metadata } from "next";

const SITE_URL = "https://macrobyte.my";
const BRAND = "MacroByte";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${BRAND} | SME Bookkeeping`,
    template: `%s | ${BRAND}`,
  },

  description:
    "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",

  alternates: {
    canonical: "/", // ✅ root canonical at site level
    languages: {
      "x-default": "/en", // ✅ fallback
      "en-MY": "/en",
      "ms-MY": "/bm",
      "zh-Hans-MY": "/zh",

      // optional generic fallbacks
      en: "/en",
      ms: "/bm",
      zh: "/zh",
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // ok if you don’t have it yet (won’t break)
  },

  openGraph: {
    title: `${BRAND} | SME Bookkeeping`,
    description:
      "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",
    url: "/", // relative is fine because metadataBase is set
    siteName: BRAND,
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "/og-image.png", // ok if you don’t have it yet (won’t break)
        width: 1200,
        height: 630,
        alt: BRAND,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | SME Bookkeeping`,
    description:
      "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",
    images: ["/og-image.png"],
  },
};

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Nationwide accounting/bookkeeping schema
  const accountingServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: BRAND,
    url: SITE_URL,
    description:
      "Bookkeeping service for Malaysian SMEs. Monthly reconciliation, categorisation, and clear reports.",
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
    serviceArea: {
      "@type": "Country",
      name: "Malaysia",
    },
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={accountingServiceJsonLd} />
      </head>

      <body>
        <Header />
        {children}

        <footer className="site-footer">
          <div className="container site-footer-inner">
            <p>© {new Date().getFullYear()} {BRAND}</p>
            <p className="muted">Bookkeeping for SMEs across Malaysia</p>
          </div>
        </footer>
      </body>
    </html>
  );
}