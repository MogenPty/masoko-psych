"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import ServiceNotFound from "./ServiceNotFound";

interface Props {
  slug: string;
}

/**
 * Renders the detailed page for the service identified by `slug`.
 *
 * Looks up the service by `slug` and renders the hero, content, sidebar, and previous/next navigation; renders `ServiceNotFound` when no matching service exists.
 *
 * @param slug - The service slug used to find and display the corresponding service
 * @returns The rendered service detail page element, or the `ServiceNotFound` element when no matching service is found
 */
export default function ServiceDetails({ slug }: Props) {
  const service = SERVICES.find((s) => s.slug === slug);
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const prev = SERVICES[currentIndex - 1] || null;
  const next = SERVICES[currentIndex + 1] || null;

  if (!service) return <ServiceNotFound />;

  return (
    <main>
      {/* Hero image banner */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(280px, 45vw, 500px)", marginTop: "80px" }}
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
              className="flex items-center gap-2 mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(248,245,242,0.6)",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={14} /> All Services
            </Link>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#0D9488",
                marginBottom: "12px",
              }}
            >
              {service.number} / 07
            </p>
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "#F8F5F2",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: "640px",
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
              className="inline-flex items-center gap-3 focus-teal py-4 px-8 text-sm font-body uppercase text-[#F8F5F2] bg-[#0D9488] hover:bg-[#121D2F]"
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
  );
}
