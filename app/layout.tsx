import "./globals.css";
import Header from "./components/Header";
import type { Metadata } from "next";

// You can edit these anytime
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

  // Canonical should usually be the root (/) for the root layout.
  // Each page can override canonical if needed.
  alternates: {
    canonical: "/",
    languages: {
      "en-MY": "/en",
      "ms-MY": "/bm",
      "zh-Hans-MY": "/zh", // Chinese (Simplified) for Malaysia

      // optional generic fallbacks
      en: "/en",
      ms: "/bm",
      zh: "/zh",
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: `${BRAND} | SME Bookkeeping`,
    description:
      "Bookkeeping for SMEs across Malaysia. Perakaunan untuk SME di Malaysia.",
    url: "/",
    siteName: BRAND,
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
      // JSON-LD must be a string
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Minimal LocalBusiness schema. Add fields only if you’re comfortable.
  // If you don't want to show a phone/address yet, leave them out.
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    url: SITE_URL,
    description:
      "Professional bookkeeping for Malaysian SMEs. Monthly reconciliation, categorisation, and clear reports.",
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
    // Optional but helpful if true:
    // telephone: "+60XXXXXXXXX",
    // email: "hello@macrobyte.my",
    // address: {
    //   "@type": "PostalAddress",
    //   addressCountry: "MY",
    // },
    sameAs: [
      // Put your socials here if you have them, otherwise remove this whole field
      // "https://www.linkedin.com/company/....",
      // "https://www.instagram.com/....",
    ],
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={localBusinessJsonLd} />
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