/** biome-ignore-all lint/suspicious/noExplicitAny: TODO: Find a solution for the use of any */
/** biome-ignore-all lint/suspicious/noAssignInExpressions: TODO: Remove the use of inline css */
"use client";

import { Mail, Phone, WhatsApp } from "@deemlol/next-icons";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AddressSection from "@/components/ui/AddressSection";
import { ContactDetails } from "@/data/contact-details";

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

interface Props {
  heading: {
    part1: string;
    part2?: string;
  };
  subheading: string;
}

export default function Contact({
  heading = { part1: "Ready to take", part2: "the first step?" },
  subheading = "Reach out to book a session or ask any questions. I will respond within one business day.",
}: Props) {
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

    setTimeout(() => {
      setForm({
        name: "",
        email: "",
        phone: "",
        preferred_service: "",
        message: "",
      });
      setSubmitted(false);
    }, 10000);
  };

  return (
    <section id={"contact"} ref={ref} className="bg-[#F8F5F2] px-32 py-0">
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
              <div className="w-10 h-px bg-common-green" />
              <h1 className="text-common-green text-xs font-body uppercase tracking-[0.2em]">
                Get in Touch
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h2-clamp"
            >
              {heading.part1}
              {heading.part2 && (
                <>
                  <br />
                  <em className="emphasis">{heading.part2}</em>
                </>
              )}
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
              {subheading}
            </motion.p>

            {/* Contact channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col gap-4"
            >
              {ContactDetails?.whatsAppNumber && (
                <Link
                  href={`https://wa.me/${ContactDetails.whatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group focus-teal bg-[#25D366] hover:bg-[#1ea855]"
                  style={{
                    padding: "16px 20px",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    minHeight: "44px",
                  }}
                >
                  <WhatsApp
                    size={24}
                    fill="#fff"
                    fillOpacity={1}
                    fillRule="nonzero"
                    strokeWidth={0}
                  />
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
              )}

              {ContactDetails?.phoneNumber && (
                <Link
                  href={`tel:+${ContactDetails.phoneNumber}`}
                  className="flex items-center gap-4 focus-teal min-h-11 px-5 py-4 border border-clamp/15 text-clamp hover:border-primary hover:text-primary bg-transparent uppercase"
                  style={{
                    transition: "all 0.3s ease",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                  }}
                >
                  <Phone size={24} />
                  Call the Practice
                </Link>
              )}

              {ContactDetails?.emailAddress && (
                <Link
                  href={`mailto:${ContactDetails.emailAddress}`}
                  className="flex items-center gap-4 focus-teal min-h-11 font-body text-sm  px-5 py-4 border border-clamp/15 text-clamp hover:border-primary hover:text-primary bg-transparent uppercase"
                  style={{
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                  }}
                >
                  <Mail size={24} />
                  Send an Email
                </Link>
              )}
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 md:mt-22">
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
                        title="services"
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

        {/* Address sections with maps */}
        {ContactDetails.addresses?.map((address, index) => (
          <motion.div
            key={address.line1.replaceAll(" ", "-")}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
            className="mt-16"
          >
            <AddressSection
              address={address}
              mapPosition={index % 2 === 0 ? "right" : "left"}
              label={
                address.town
                  ? `${address.town} Practice`
                  : address.city
                    ? `${address.city} Practice`
                    : "Our Address"
              }
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
