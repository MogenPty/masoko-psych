"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6a25956cb80a77444ddbd51c/0717b604e_generated_image.png";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex"
      style={{ backgroundColor: "#F8F5F2" }}
    >
      {/* Left — Typography block */}
      <div className="flex flex-col justify-end pb-20 px-6 lg:px-16 xl:px-24 pt-32 w-full lg:w-[52%] z-10 relative">
        {/* Thin vertical rule */}
        <div
          className="hidden lg:block absolute left-8 top-0 bottom-0 w-px opacity-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0D9488 30%, #0D9488 70%, transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <p
            className="uppercase tracking-[0.2em] mb-6 text-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#0D9488",
              fontSize: "12px",
            }}
          >
            Clinical Psychology · Randburg & Soweto, Johannesburg
          </p>
          <h1
            className="mb-8"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "#121D2F",
            }}
          >
            A space
            <br />
            <em style={{ fontStyle: "italic" }}>to heal,</em>
            <br />
            to grow.
          </h1>
          <p
            className="mb-12 max-w-md"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "rgba(18, 29, 47, 0.65)",
              fontWeight: 300,
            }}
          >
            Professional psychological care for individuals, couples, families,
            and adolescents. Over 10 years of experience creating lasting
            change.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={scrollToContact}
              className="focus-teal hover-expand"
              style={{
                backgroundColor: "#0D9488",
                color: "#F8F5F2",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "18px 40px",
                border: "2px solid #0D9488",
                cursor: "pointer",
                transition: "all 0.35s ease",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#121D2F";
                e.currentTarget.style.borderColor = "#121D2F";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0D9488";
                e.currentTarget.style.borderColor = "#0D9488";
              }}
            >
              Book a Session
            </button>
            <button
              type="button"
              onClick={scrollToAbout}
              className="focus-teal"
              style={{
                backgroundColor: "transparent",
                color: "#121D2F",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "18px 40px",
                border: "2px solid rgba(18, 29, 47, 0.25)",
                cursor: "pointer",
                transition: "all 0.35s ease",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0D9488";
                e.currentTarget.style.color = "#0D9488";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(18, 29, 47, 0.25)";
                e.currentTarget.style.color = "#121D2F";
              }}
            >
              Learn More
            </button>
          </div>

          {/* Credentials strip */}
          <div className="mt-16 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <div
                className="w-px h-8"
                style={{ backgroundColor: "#D4A373" }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#0D9488",
                  }}
                >
                  HPCSA Registered
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(18,29,47,0.5)",
                    marginTop: "2px",
                  }}
                >
                  BHF Registered
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-px h-8"
                style={{ backgroundColor: "#D4A373" }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#0D9488",
                  }}
                >
                  10+ Years
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(18,29,47,0.5)",
                    marginTop: "2px",
                  }}
                >
                  Experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-6 lg:left-16 xl:left-24 flex items-center gap-3 focus-teal"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(18, 29, 47, 0.4)",
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
          Scroll to explore
        </motion.button>
      </div>

      {/* Right — Full-bleed image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%]"
        style={{ overflow: "hidden" }}
      >
        <Image
          src={HERO_IMAGE}
          width={1024}
          height={1024}
          alt="Modern therapy room with natural light"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.97) contrast(1.02)" }}
          loading="eager"
        />
        {/* Overlay gradient blend */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #F8F5F2 0%, transparent 15%)",
          }}
        />
      </motion.div>

      {/* Mobile hero image */}
      <div className="lg:hidden absolute inset-0 z-0" style={{ opacity: 0.12 }}>
        <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
