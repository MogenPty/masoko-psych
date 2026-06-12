"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { TESTIMONIALS } from "@/data/testimonials";

/**
 * Render the testimonials section with an animated header, a responsive grid of testimonial cards, and a confidentiality note.
 *
 * The component observes its section entering the viewport and triggers entrance animations for the header, each card, and the disclaimer when visible.
 *
 * @returns The testimonials section as a JSX element
 */
export default function Testimonials() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={"testimonials"}
      ref={ref}
      style={{ backgroundColor: "#121D2F", padding: "120px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-6 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div
                className="w-10 h-px"
                style={{ backgroundColor: "#D4A373" }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#D4A373",
                }}
              >
                Testimonials
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#F8F5F2",
                lineHeight: 1.1,
              }}
            >
              Voices of
              <br />
              <em style={{ fontStyle: "italic" }}>healing.</em>
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid md:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(248,245,242,0.08)" }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{
                backgroundColor: "#121D2F",
                padding: "48px 36px",
              }}
            >
              {/* Opening quote mark */}
              <div
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "5rem",
                  lineHeight: 0.8,
                  color: "#0D9488",
                  opacity: 0.4,
                  marginBottom: "24px",
                  userSelect: "none",
                }}
              >
                &quot;
              </div>

              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                  lineHeight: 1.65,
                  color: "rgba(248,245,242,0.85)",
                  marginBottom: "32px",
                }}
              >
                {t.quote}
              </p>

              <div
                className="flex items-center gap-4"
                style={{
                  borderTop: "1px solid rgba(248,245,242,0.08)",
                  paddingTop: "24px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#0D9488",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.1rem",
                      color: "#F8F5F2",
                    }}
                  >
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#F8F5F2",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      color: "rgba(248,245,242,0.4)",
                      marginTop: "2px",
                    }}
                  >
                    {t.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "rgba(248,245,242,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          * Testimonials represent real experiences. Names have been anonymised
          to protect client confidentiality.
        </motion.p>
      </div>
    </section>
  );
}
