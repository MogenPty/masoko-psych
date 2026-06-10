/** biome-ignore-all lint/suspicious/noExplicitAny: TODO: Find a solution for the use of any */
/** biome-ignore-all lint/suspicious/noAssignInExpressions: TODO: Remove the use of inline css */
"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// import { base44 } from "@/api/base44Client";

const SERVICES = [
  "Individual Therapy",
  "Couples Therapy",
  "Family Therapy",
  "Group Therapy",
  "Adolescent Therapy",
  "Psychological Assessment",
  "Online Sessions",
  "Not Sure Yet",
];

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferred_service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (field: string, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    // const data = await base44.entities.BookingRequest.create(form);
    const data = {};
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id={"contact"}
      ref={ref}
      style={{ backgroundColor: "#F8F5F2", padding: "120px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div
                className="w-10 h-px"
                style={{ backgroundColor: "#0D9488" }}
              />
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
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#121D2F",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Ready to take
              <br />
              <em style={{ fontStyle: "italic" }}>the first step?</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                color: "rgba(18,29,47,0.6)",
                lineHeight: 1.7,
                fontWeight: 300,
                marginBottom: "3rem",
              }}
            >
              Reach out to book a session or ask any questions. I will respond
              within one business day.
            </motion.p>

            {/* Contact channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col gap-4"
            >
              <Link
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group focus-teal"
                style={{
                  padding: "16px 20px",
                  backgroundColor: "#25D366",
                  color: "#fff",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1ea855")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#25D366")
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <title>Image</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  WhatsApp Us
                </span>
              </Link>

              <Link
                href="tel:+27000000000"
                className="flex items-center gap-4 focus-teal"
                style={{
                  padding: "16px 20px",
                  border: "1px solid rgba(18,29,47,0.15)",
                  color: "#121D2F",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease",
                  minHeight: "44px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0D9488";
                  e.currentTarget.style.color = "#0D9488";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(18,29,47,0.15)";
                  e.currentTarget.style.color = "#121D2F";
                }}
              >
                📞 Call the Practice
              </Link>

              <Link
                href="mailto:info@ntokozomасоko.co.za"
                className="flex items-center gap-4 focus-teal"
                style={{
                  padding: "16px 20px",
                  border: "1px solid rgba(18,29,47,0.15)",
                  color: "#121D2F",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease",
                  minHeight: "44px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0D9488";
                  e.currentTarget.style.color = "#0D9488";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(18,29,47,0.15)";
                  e.currentTarget.style.color = "#121D2F";
                }}
              >
                ✉ Send an Email
              </Link>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {submitted ? (
                <div
                  style={{
                    padding: "60px 40px",
                    backgroundColor: "#121D2F",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "16px",
                  }}
                >
                  <CheckCircle size={48} style={{ color: "#0D9488" }} />
                  <h3
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "2rem",
                      color: "#F8F5F2",
                    }}
                  >
                    Thank you for reaching out.
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.125rem",
                      color: "rgba(248,245,242,0.65)",
                      lineHeight: 1.7,
                      fontWeight: 300,
                      maxWidth: "400px",
                    }}
                  >
                    Your message has been received. I will be in touch within
                    one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="full-name"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "rgba(18,29,47,0.5)",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        name="full-name"
                        type="text"
                        required
                        className="underline-input focus-teal"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "rgba(18,29,47,0.5)",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="underline-input focus-teal"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="tel"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "rgba(18,29,47,0.5)",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Phone Number *
                      </label>
                      <input
                        name="tel"
                        type="tel"
                        required
                        className="underline-input focus-teal"
                        placeholder="+27 ..."
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="services"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "rgba(18,29,47,0.5)",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Service Interested In
                      </label>
                      <select
                        name="services"
                        className="underline-input focus-teal"
                        value={form.preferred_service}
                        onChange={(e) =>
                          handleChange("preferred_service", e.target.value)
                        }
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "18px",
                          color: form.preferred_service
                            ? "#121D2F"
                            : "rgba(18,29,47,0.4)",
                          cursor: "pointer",
                          WebkitAppearance: "none",
                          appearance: "none",
                        }}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICES.map((s) => (
                          <option
                            key={s}
                            value={s}
                            style={{ color: "#121D2F" }}
                          >
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(18,29,47,0.5)",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="underline-input focus-teal"
                      placeholder="Tell me a little about what brings you here..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      style={{ resize: "none" }}
                    />
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        color: "rgba(18,29,47,0.4)",
                        maxWidth: "300px",
                        lineHeight: 1.6,
                      }}
                    >
                      Your information is kept strictly confidential and will
                      only be used to respond to your enquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="focus-teal"
                      style={{
                        backgroundColor: submitting
                          ? "rgba(13,148,136,0.6)"
                          : "#0D9488",
                        color: "#F8F5F2",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "18px 40px",
                        border: "none",
                        cursor: submitting ? "not-allowed" : "pointer",
                        transition: "all 0.3s ease",
                        minHeight: "44px",
                        minWidth: "180px",
                      }}
                      onMouseEnter={(e) => {
                        if (!submitting)
                          e.currentTarget.style.backgroundColor = "#121D2F";
                      }}
                      onMouseLeave={(e) => {
                        if (!submitting)
                          e.currentTarget.style.backgroundColor = "#0D9488";
                      }}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
