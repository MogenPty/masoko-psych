"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PROTEA_IMAGE =
  "https://media.base44.com/images/public/6a25956cb80a77444ddbd51c/c0d024aa2_generated_image.png";
const LINEN_IMAGE =
  "https://media.base44.com/images/public/6a25956cb80a77444ddbd51c/a4f3dab7c_generated_image.png";

const SERVICES = [
  {
    number: "01",
    title: "Individual Therapy",
    short:
      "One-on-one support in a safe, confidential environment to explore your challenges and find lasting change.",
    full: "Individual therapy offers a dedicated space to explore one's challenges and difficulties, gain deeper self-understanding, and develop effective coping strategies and better communication styles. Through a supportive and confidential relationship, adults can work through emotional difficulties, build resilience, and foster personal growth. Whether you're seeking relief from anxiety or depression, navigating major life changes, or simply wanting to better understand yourself, therapy can empower you to live a more balanced and fulfilling life.",
    image: PROTEA_IMAGE,
  },
  {
    number: "02",
    title: "Couples Therapy",
    short:
      "A safe space for partners to improve communication, resolve conflict, and deepen connection.",
    full: "Couples counselling provides a safe and supportive space for partners to explore their relationship, improve communication, and resolve conflicts. It helps couples deepen their understanding of each other's needs, feelings, and perspectives, fostering greater empathy and connection. Through counselling, couples can learn effective problem-solving skills, rebuild trust, and navigate life's challenges together — whether married, engaged, or dating.",
    image: LINEN_IMAGE,
  },
  {
    number: "03",
    title: "Family Therapy",
    short:
      "Helping families reconnect, communicate, and navigate life's most difficult challenges together.",
    full: "Family therapy is a form of counselling that involves multiple family members working together to improve communication, resolve conflicts, and strengthen relationships within the family unit. It recognises that families function as interconnected systems, where changes in one member can impact the whole family. Family therapy can help address conflictual relationships and find sustainable solutions.",
    image: PROTEA_IMAGE,
  },
  {
    number: "04",
    title: "Group Therapy",
    short:
      "Shared healing — connecting with others facing similar challenges in a confidential group setting.",
    full: "Group therapy is a form of psychotherapy where one or more mental health professionals treat several people simultaneously. It creates a safe confidential environment where participants can share their struggles, learn new coping strategies, and practice social skills alongside others facing similar challenges. Group therapy may focus on skills training and psycho-education, or may be for the purpose of mutual support.",
    image: LINEN_IMAGE,
  },
  {
    number: "05",
    title: "Adolescent Therapy",
    short:
      "Guiding teens through the complexities of identity, emotion, and social pressure with specialist support.",
    full: "Adolescence is a volatile transition period from childhood to adulthood, marked by rapid physical, emotional, and cognitive changes. Key challenges include managing mental health disorders, navigating intense peer pressure and identity development, coping with body image issues, and balancing risky behaviours with developing autonomy. It is a very critical transition phase as teenagers explore their independence, values, and beliefs. Therapy can be essential in helping a young person navigate this crucial period.",
    image: PROTEA_IMAGE,
  },
  {
    number: "06",
    title: "Psychological Assessment",
    short:
      "Comprehensive assessments to understand individual characteristics, capabilities, and needs.",
    full: "Psychological assessment contributes important information to the understanding of individual characteristics and capabilities, through the collection, integration, and interpretation of information about an individual. Such information is obtained through a variety of methods and measures, providing a thorough picture to inform treatment, support academic and workplace placement, and guide personal development.",
    image: LINEN_IMAGE,
  },
  {
    number: "07",
    title: "Online Sessions",
    short:
      "Flexible, accessible therapy via Microsoft Teams or Zoom — from the comfort of your own space.",
    full: "Online therapy has become an increasingly popular and accessible way to receive psychological support. It allows individuals to connect with their therapist from the comfort and safety of their homes, removing barriers such as travel, scheduling conflicts, and geographical limitations. Whether you want video calls or phone sessions, online therapy provides a flexible, supportive environment to work on your mental health goals without compromising safety or accessibility.",
    image: PROTEA_IMAGE,
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={"services"}
      ref={ref}
      style={{ backgroundColor: "#F8F5F2", padding: "120px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
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
                Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "#121D2F",
                lineHeight: 1.1,
              }}
            >
              Thoughtful care
              <br />
              <em style={{ fontStyle: "italic" }}>for every stage of life.</em>
            </motion.h2>
          </div>
        </div>

        {/* Service list */}
        <div>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="service-line"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-7 flex items-start gap-6 lg:gap-10 focus-teal group"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  minHeight: "44px",
                }}
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
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      color: "#121D2F",
                      display: "block",
                      lineHeight: 1.2,
                      transition: "color 0.3s ease",
                    }}
                    className="group-hover:text-lichen-teal"
                  >
                    {service.title}
                  </span>
                  <AnimatePresence>
                    {openIndex !== i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "1rem",
                          color: "rgba(18, 29, 47, 0.5)",
                          marginTop: "6px",
                          fontWeight: 300,
                        }}
                      >
                        {service.short}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div
                  className="shrink-0 mt-1"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(18, 29, 47, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    backgroundColor:
                      openIndex === i ? "#0D9488" : "transparent",
                    borderColor:
                      openIndex === i ? "#0D9488" : "rgba(18,29,47,0.2)",
                  }}
                >
                  {openIndex === i ? (
                    <Minus size={14} style={{ color: "#F8F5F2" }} />
                  ) : (
                    <Plus size={14} style={{ color: "#121D2F" }} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="grid lg:grid-cols-2 gap-10 pb-10 pl-0 lg:pl-16">
                      <div>
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "1.125rem",
                            lineHeight: 1.75,
                            color: "rgba(18, 29, 47, 0.7)",
                            fontWeight: 300,
                          }}
                        >
                          {service.full}
                        </p>
                        <button
                          type="button"
                          onClick={scrollToContact}
                          className="focus-teal mt-6"
                          style={{
                            backgroundColor: "transparent",
                            color: "#0D9488",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12px",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "12px 24px",
                            border: "1px solid #0D9488",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            minHeight: "44px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#0D9488";
                            e.currentTarget.style.color = "#F8F5F2";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = "#0D9488";
                          }}
                        >
                          Book this service
                        </button>
                      </div>
                      <div
                        className="hidden lg:block rounded-none overflow-hidden"
                        style={{ height: "220px" }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={1024}
                          height={1024}
                          className="w-full h-full object-cover"
                          style={{ filter: "brightness(0.95)" }}
                          loading="eager"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
