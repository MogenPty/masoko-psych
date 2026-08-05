/** biome-ignore-all lint/suspicious/noAssignInExpressions: TODO: Find a way to deal with hover functions */
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Title from "./Title";

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={"about"} ref={ref} className="bg-clamp py-32 px-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <Title title="About" color="common-green" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Large years number — background motif */}
          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="select-none font-heading leading-[0.85] text-transparent tracking-tighter pointer-events-none"
              style={{
                fontSize: "clamp(8rem, 18vw, 16rem)",
                WebkitTextStroke: "1px rgba(13, 148, 136, 0.2)",
              }}
            >
              10+
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-body text-sm tracking-widest uppercase -mt-0.5 text-[#D4A373]"
            >
              Years of expertise
            </motion.p>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 flex flex-col gap-5"
            >
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
                  <div className="w-px mt-1 shrink-0 bg-common-green h-9" />
                  <div>
                    <p className="font-body text-sm text-link font-medium">
                      {item.label}
                    </p>
                    <p className="font-body text-xs mt-0.5 text-muted-link">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-8 lg:pt-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-link mb-8 leading-[1.1]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Hello, I&apos;m Ntokozo Masoko.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col gap-5 font-body text-lg/[1.75] font-light text-link-light"
            >
              <p>
                I am a Clinical Psychologist working in private practice in
                Randburg and Soweto, Johannesburg. I have a deep passion for
                mental health and a genuine commitment to working with people —
                creating meaningful and lasting change in people&apos;s lives.
              </p>
              <p>
                Over more than a decade, I have worked across many different
                sectors and gained expertise in working with individuals,
                couples, families, and groups, as well as conducting
                psychometric assessments.
              </p>
              <p>
                My main goal is always to provide a safe, respectful, nurturing,
                and containing therapeutic environment — where you feel truly
                seen and supported. Whether you are navigating personal
                challenges, life difficulties, or striving for meaningful
                changes, I am here to walk alongside you with compassion,
                understanding, and support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 pt-10"
              style={{ borderTop: "1px solid rgba(248,245,242,0.1)" }}
            >
              <p className="font-heading italic text-[1.4rem]/normal text-highlight">
                &quot;Professionalism and working towards a desired end with
                purpose is my highest value.&quot;
              </p>
              <p className="author">— Ntokozo Masoko</p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 group focus-teal text-muted-link hover:text-common-green uppercase text-sm font-body"
                style={{
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Read full profile <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
