"use client";

import { motion } from "framer-motion";
import Contact from "@/components/website/Contact";

/**
 * Renders the contact page with an animated hero section and the site's contact UI.
 *
 * @returns The page React element containing the animated heading/intro and the reusable `Contact` section (form and channels).
 */
export default function ContactPage() {
  return (
    <main style={{ paddingTop: "100px" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
              Get in Touch
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#121D2F",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Book a session or
            <br />
            <em style={{ fontStyle: "italic" }}>ask a question.</em>
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
            Reach out via WhatsApp, phone, email, or use the form below. All
            enquiries are treated with strict confidentiality.
          </p>
        </motion.div>
      </div>

      {/* Reuse the existing Contact section (includes form + channels) */}
      <Contact />
    </main>
  );
}
