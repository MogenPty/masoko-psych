import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/website/Footer";
import Navbar from "@/components/website/Navbar";
import { jsonLd } from "@/data/json-ld";
import { BASE_KEYWORDS } from "@/data/seo";

const inter = Inter({
  variable: "--inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
});

const intrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Ntokozo Masoko Clinical Psychologist | Professional psychological care for Individuals, Couples, Families, and Adolescents",
    template: "%s | Ntokozo Masoko Clinical Psychologist",
  },
  description:
    "Professional psychological care for individuals, couples, families, and adolescents. Over 10 years of experience creating lasting change.",
  keywords: BASE_KEYWORDS,
  authors: [{ name: "MASOKO" }],
  creator: "MASOKO",
  publisher: "MASOKO",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL!,
    siteName: "MASOKO",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MogenPty",
    creator: "@MogenPty",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL!,
  },
};

/**
 * Application root layout that wraps each page with site chrome, structured metadata, and analytics.
 *
 * @param children - Page content rendered between the site navigation and footer
 * @returns The root `<html>` element for the application containing font classes, a JSON-LD script, the page chrome (Navbar and Footer), and analytics components
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${intrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Needed for the JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div style={{ backgroundColor: "#F8F5F2", minHeight: "100vh" }}>
          <Navbar />
          {children}

          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
