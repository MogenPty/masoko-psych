"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/website/Footer";
import Navbar from "@/components/website/Navbar";
import { SERVICES } from "@/data/services";

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px" style={{ backgroundColor: "#0D9488" }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#0D9488",
              }}
            >
              Services
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#121D2F",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Thoughtful care
            <br />
            <em style={{ fontStyle: "italic" }}>for every stage of life.</em>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              color: "rgba(18,29,47,0.6)",
              fontWeight: 300,
              maxWidth: "560px",
            }}
          >
            A comprehensive range of psychological services tailored to
            individuals, couples, families, and adolescents in Randburg, Soweto,
            and online.
          </p>
        </motion.div>

        {/* Service list */}
        <div>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="service-line"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group w-full flex items-start gap-6 lg:gap-10 py-7 focus-teal"
                style={{ textDecoration: "none", display: "flex" }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    color: "#0D9488",
                    letterSpacing: "0.1em",
                    paddingTop: "6px",
                    minWidth: "28px",
                    flexShrink: 0,
                  }}
                >
                  {service.number}
                </span>
                <div className="flex-1">
                  <span
                    className="group-hover:text-lichen-teal"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      color: "#121D2F",
                      display: "block",
                      lineHeight: 1.2,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      color: "rgba(18,29,47,0.5)",
                      marginTop: "6px",
                      fontWeight: 300,
                    }}
                  >
                    {service.short}
                  </p>
                </div>
                <div
                  className="shrink-0 mt-1 group-hover:bg-[#0D9488] group-hover:border-[#0D9488] transition-all duration-300"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(18,29,47,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRight
                    size={14}
                    style={{ color: "#121D2F" }}
                    className="group-hover:text-[#F8F5F2] transition-colors duration-300"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
