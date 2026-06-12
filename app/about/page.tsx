"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
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
              About
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#121D2F",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            About Ntokozo Masoko,
            <br />
            <em style={{ fontStyle: "italic" }}>Clinical Psychologist</em>
          </h1>

          {/* Placeholder image */}
          <div
            className="w-full overflow-hidden mb-10"
            style={{ height: "clamp(260px, 40vw, 480px)" }}
          >
            <Image
              height={1024}
              width={1024}
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80"
              alt="Therapist in a calm consultation session"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.95)" }}
            />
          </div>

          <div
            className="flex flex-col gap-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "rgba(18, 29, 47, 0.72)",
              fontWeight: 300,
            }}
          >
            <p>
              Ntokozo Masoko is a qualified Clinical Psychologist working in
              private practice across Randburg and Soweto, Johannesburg. With
              over ten years of clinical experience spanning a wide range of
              settings and populations, Ntokozo brings both professional rigour
              and genuine compassion to every therapeutic relationship.
            </p>
            <p>
              This practice exists to make high-quality psychological care
              accessible to individuals, couples, families, and adolescents who
              are ready to invest in their mental health and personal growth.
              Whether you are navigating anxiety, depression, relationship
              difficulties, life transitions, trauma, or simply seeking greater
              self-understanding, this practice offers a structured,
              evidence-informed space to do that work.
            </p>
            <p>
              Ntokozo is registered with the Health Professions Council of South
              Africa (HPCSA) and the Board of Healthcare Funders (BHF), ensuring
              that all services meet the highest standards of professional and
              ethical practice. Medical aid claims are supported for qualifying
              members.
            </p>
            <p>
              The practice offers individual therapy, couples counselling,
              family therapy, group therapy, adolescent support, psychological
              assessments, and flexible online sessions via Microsoft Teams or
              Zoom — designed to remove barriers to access and meet clients
              wherever they are.
            </p>
            <p>
              At the heart of this work is a simple belief: that every person
              deserves a safe, respectful, and nurturing space in which to heal,
              grow, and thrive. Ntokozo&apos;s highest value is professionalism
              paired with purposeful, results-oriented care.
            </p>
          </div>

          {/* Divider + quote */}
          <div
            className="mt-16 pt-12"
            style={{ borderTop: "1px solid rgba(18,29,47,0.12)" }}
          >
            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontSize: "1.5rem",
                color: "#D4A373",
                lineHeight: 1.5,
              }}
            >
              &quot;Professionalism and working towards a desired end with
              purpose is my highest value.&quot;
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(18,29,47,0.35)",
                marginTop: "12px",
              }}
            >
              — Ntokozo Masoko, Clinical Psychologist
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "HPCSA Registered",
                sub: "Health Professions Council of South Africa",
              },
              { label: "BHF Registered", sub: "Board of Healthcare Funders" },
              {
                label: "Private Practice",
                sub: "Randburg & Soweto, Johannesburg",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 items-start">
                <div className="w-px shrink-0 bg-[#0D9488] mt-0.5 h-10" />
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#121D2F",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      color: "rgba(18,29,47,0.5)",
                      marginTop: "3px",
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
