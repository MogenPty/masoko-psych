"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageTitle from "../blocks/PageTitle";

const NTOKOZO_MASOKO = "/images/ntokozo-masoko.png";

const CREDENTIALS = [
  {
    label: "HPCSA Registered",
    sub: "Health Professions Council of South Africa",
  },
  { label: "BHF Registered", sub: "Board of Healthcare Funders" },
  {
    label: "Private Practice",
    sub: "Randburg & Soweto, Johannesburg",
  },
];

export default function AboutPage() {
  return (
    <main className="py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <PageTitle title="About" />

          <h1
            className="font-heading text-[#121D2F] mb-10 tracking-wide leading-[1.1]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            About Ntokozo Masoko,
            <br />
            <em className="italic">Clinical Psychologist</em>
          </h1>

          {/* Placeholder image */}
          <div
            className="w-full overflow-hidden mb-10"
            style={{ height: "clamp(260px, 40vw, 480px)" }}
          >
            <Image
              height={1024}
              width={1024}
              src={NTOKOZO_MASOKO}
              alt="Therapist in a calm consultation session"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.95)" }}
            />
          </div>

          <div className="flex flex-col gap-6 font-light text-[rgba(18, 29, 47, 0.72)] text-lg/[1.8]">
            <div className="pl-6 font-heading italic leading-6 text-primary text-2xl flex gap-3 items-start border-l-common-green border-l">
              I completed my professional psychology training at the University
              of Zululand, where I obtained a Master’s degree in Clinical
              Psychology. I completed my internship at Sterkfontein Psychiatric
              Hospital and my community service at Leratong Hospital.
              <br />
              <br />I employ an integrative framework, with CBT being the
              modality in which I am deeply rooted. I am currently also training
              in Imago therapy, and I am very excited to be embarking on this
              new journey of training and professional development.
            </div>
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
            <p className="font-heading italic leading-6 text-[#D4A373] text-2xl">
              &quot;Professionalism and working towards a desired end with
              purpose is my highest value.&quot;
            </p>
            <p className="text-xs mt-3 text-[rgba(18,29,47,0.35)] uppercase tracking-[0.12em]">
              — Ntokozo Masoko, Clinical Psychologist
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="flex gap-3 items-start">
                <div className="w-px shrink-0 bg-common-green mt-0.5 h-10" />
                <div>
                  <p className="font-medium text-sm text-[#121D2F]">
                    {item.label}
                  </p>
                  <p className="mt-0.75 text-xs text-[rgba(18,29,47,0.5)]">
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
