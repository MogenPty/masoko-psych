"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/data/services";

interface Props {
  slug: string;
}

const SITE_URL = "https://www.masokopsychology.co.za";
const SITE_NAME = "Ntokozo Masoko Clinical Psychologist";

export default function ServiceDetails({ slug }: Readonly<Props>) {
  const service = SERVICES.find((s) => s.slug === slug);
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);

  const prev = SERVICES[currentIndex - 1] || null;
  const next = SERVICES[currentIndex + 1] || null;

  if (!service) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy", // schema.org type for a therapeutic service
    name: service.title,
    description: service.short.replace(/\s+/g, " ").trim(),
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Person",
      name: "Ntokozo Masoko",
      jobTitle: "Clinical Psychologist",
      worksFor: {
        "@type": "MedicalOrganization",
        name: SITE_NAME,
        url: SITE_URL,
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "567 Honeydew Rd W",
            addressLocality: "Randburg",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "9625 Tshipo St",
            addressLocality: "Soweto",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
        ],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: No Danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero image banner */}
        <div
          className="relative w-full overflow-hidden mt-20"
          style={{ height: "clamp(280px, 45vw, 500px)" }}
        >
          <Image
            height={1024}
            width={1024}
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(18,29,47,0.75) 0%, rgba(18,29,47,0.2) 60%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-16 xl:px-24 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/services"
                className="flex items-center gap-2 mb-6 uppercase text-xs tracking-[1.5em] font-body text-[rgba(248,245,242,0.6)]"
                style={{
                  textDecoration: "none",
                }}
              >
                <ArrowLeft size={14} /> All Services
              </Link>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-common-green mb-3">
                {service.number} / 07
              </p>
              <h1
                className="font-heading text-link leading-[1.1] tracking-[-0.02em] max-w-160"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                }}
              >
                {service.title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid lg:grid-cols-3 gap-16"
          >
            {/* Main description */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.2rem",
                    color: "#D4A373",
                    fontWeight: 300,
                    fontStyle: "italic",
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.short}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                    color: "rgba(18,29,47,0.72)",
                    fontWeight: 300,
                  }}
                >
                  {service.full}
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(18,29,47,0.1)",
                  paddingTop: "2rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.6rem",
                    color: "#121D2F",
                    marginBottom: "0.75rem",
                  }}
                >
                  What to expect
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "rgba(18,29,47,0.7)",
                    fontWeight: 300,
                  }}
                >
                  {service.whatToExpect}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 focus-teal py-4 px-8 text-sm font-body uppercase text-link bg-common-green hover:bg-clamp"
                style={{
                  alignSelf: "flex-start",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  transition: "background 0.3s ease",
                  minHeight: "44px",
                }}
              >
                Book this service <ArrowRight size={15} />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              {/* Who is it for */}
              <div style={{ backgroundColor: "#121D2F", padding: "28px" }}>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#0D9488",
                    marginBottom: "12px",
                  }}
                >
                  Who is this for?
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "rgba(248,245,242,0.72)",
                    fontWeight: 300,
                  }}
                >
                  {service.whoIsItFor}
                </p>
              </div>

              {/* Other services */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#0D9488",
                    marginBottom: "16px",
                  }}
                >
                  Other services
                </h3>
                {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between py-3 group"
                    style={{
                      borderBottom: "1px solid rgba(18,29,47,0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      className="group-hover:text-lichen-teal transition-colors duration-200"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        color: "#121D2F",
                      }}
                    >
                      {s.title}
                    </span>
                    <ArrowRight
                      size={13}
                      style={{
                        color: "#0D9488",
                        opacity: 0,
                        transition: "opacity 0.2s",
                      }}
                      className="group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Prev / Next navigation */}
          <div
            className="flex justify-between gap-6 mt-20 pt-10"
            style={{ borderTop: "1px solid rgba(18,29,47,0.1)" }}
          >
            {prev ? (
              <Link
                href={`/services/${prev.slug}`}
                className="flex items-center gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <ArrowLeft size={16} style={{ color: "#0D9488" }} />
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(18,29,47,0.4)",
                    }}
                  >
                    Previous
                  </p>
                  <p
                    className="group-hover:text-lichen-teal transition-colors duration-200"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.1rem",
                      color: "#121D2F",
                    }}
                  >
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/services/${next.slug}`}
                className="flex items-center gap-3 group text-right"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(18,29,47,0.4)",
                    }}
                  >
                    Next
                  </p>
                  <p
                    className="group-hover:text-lichen-teal transition-colors duration-200"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.1rem",
                      color: "#121D2F",
                    }}
                  >
                    {next.title}
                  </p>
                </div>
                <ArrowRight size={16} style={{ color: "#0D9488" }} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
