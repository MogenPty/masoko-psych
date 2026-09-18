import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import favicon from "@/app/assets/favicon.png";
import Footer from "@/components/blocks/Footer";
import Navbar from "@/components/blocks/Navbar";
import { jsonLd } from "@/data/json-ld";
import { SERVICES } from "@/data/services";

const inter = Inter({
  variable: "--inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
});

const intrumentSerif = Instrument_Serif({
  variable: "--instrument-serif",
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://masoko.mogen.co.za";

const GENERAL_KEYWORDS = [
  "clinical psychologist Randburg",
  "clinical psychologist Soweto",
  "psychologist Johannesburg",
  "HPCSA registered psychologist",
  "BHF registered psychologist",
  "private practice psychologist Johannesburg",
  "online therapy South Africa",
  "Ntokozo Masoko psychologist",
  "mental health services Johannesburg",
  "therapist near me Randburg",
  "therapist near me Soweto",
];

const allKeywords = Array.from(
  new Set([...GENERAL_KEYWORDS, ...SERVICES.flatMap((s) => s.keywords)]),
);

export const metadata: Metadata = {
  title: {
    default:
      "Ntokozo Masoko Clinical Psychologist | Professional psychological care for Individuals, Couples, Families, and Adolescents",
    template: "%s | Ntokozo Masoko Clinical Psychologist",
  },
  description:
    "Professional psychological care for individuals, couples, families, and adolescents. Over 10 years of experience creating lasting change.",
  keywords: allKeywords,
  authors: [{ name: "MASOKO" }],
  creator: "Masoko Psychological Clinic",
  publisher: "MASOKO",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    url: SITE_URL,
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
    icon: favicon.src,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

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
        <div className="bg-link min-h-full">
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
