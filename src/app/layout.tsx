import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { siteContent } from "@/content/site-content";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5A623",
};

// All SEO strings come from `siteContent.seo` and `siteContent.brand`.
// `metadataBase` keeps its existing fallback chain (env var → capyco.dev) —
// the brief said canonical domain is out of scope for this PR.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://capyco.dev"),
  title: {
    default: siteContent.brand.fullName,
    template: `%s | ${siteContent.brand.shortName}`,
  },
  description: siteContent.seo.description,
  // Cast through `unknown` to drop the `readonly` modifier that comes from
  // the `as const` siteContent export. Next.js Metadata expects a mutable
  // `string[]`; the cast keeps the data in the content store and lets the
  // framework type check pass.
  keywords: siteContent.seo.keywords as unknown as string[],
  authors: [{ name: siteContent.brand.shortName }],
  creator: "Capybara Corporation",
  publisher: "Capybara Corporation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://capyco.dev",
    siteName: siteContent.brand.shortName,
    title: siteContent.brand.fullName,
    description: siteContent.seo.description,
    images: [
      {
        url: siteContent.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteContent.brand.shortName} — We build, launch, and grow your product.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.brand.fullName,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage],
    creator: siteContent.seo.twitterHandle,
  },
  alternates: {
    canonical: "https://capyco.dev",
  },
  icons: {
    icon: "/images/favicon-32x32.png",
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  other: {
    "msapplication-TileColor": "#F5A623",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
