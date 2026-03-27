import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://capyco.dev"),
  title: {
    default: "CapyCo - Capybara Corporation",
    template: "%s | CapyCo",
  },
  description: "Build. Ship. Grow. A vibe-first coding & marketing agency founded by Brazilians in Canada. We turn wild ideas into digital magic.",
  keywords: [
    "web development",
    "marketing agency",
    "SaaS products",
    "vibe coding",
    "digital marketing",
    "custom development",
    "Toronto agency",
    "Brazilian developers",
  ],
  authors: [{ name: "CapyCo" }],
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
    siteName: "CapyCo",
    title: "CapyCo - Capybara Corporation",
    description: "Build. Ship. Grow. A vibe-first coding & marketing agency founded by Brazilians in Canada.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CapyCo - Build. Ship. Grow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CapyCo - Capybara Corporation",
    description: "Build. Ship. Grow. A vibe-first coding & marketing agency.",
    images: ["/images/og-image.png"],
    creator: "@capyco",
  },
  alternates: {
    canonical: "https://capyco.dev",
  },
  icons: {
    icon: "/favicon-capy.png",
    shortcut: "/favicon-capy.png",
    apple: "/apple-touch-icon-capy.png",
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
