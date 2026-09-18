import type { Metadata } from "next/types";
import ServiceDetails from "@/components/website/ServiceDetails";
import { SERVICES } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE_URL = "https://www.masokopsychology.co.za";
const SITE_NAME = "Ntokozo Masoko Clinical Psychologist";

type Params = { slug: string };

// ---------------------------------------------------------------------------
// Pre-render every service page at build time (SSG) — good for SEO + speed.
// ---------------------------------------------------------------------------
export function generateStaticParams(): Params[] {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

// ---------------------------------------------------------------------------
// Per-page metadata, driven entirely by each SERVICE_OBJECT.
// This is what replaces the single site-wide meta-keywords/description
// that was being reused across every page.
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return {};

  const description = service.short.replace(/\s+/g, " ").trim();
  const url = `${SITE_URL}/services/${service.slug}`;

  return {
    title: service.title,
    description,
    keywords: service.keywords, // Next merges this into <meta name="keywords">
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_ZA",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceDetailPage({ params }: Readonly<Props>) {
  const { slug } = await params;

  return <ServiceDetails slug={slug} />;
}
