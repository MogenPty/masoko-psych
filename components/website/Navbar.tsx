/* eslint-disable @typescript-eslint/no-explicit-any */
/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/data/services";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

const HOME_ANCHOR_LINKS = [
  { label: "Expertise", href: "/#expertise" },
  { label: "Testimonials", href: "/#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    const href = window.location.href;
    const paths = href.split("#");

    if (paths.length > 1) {
      setTimeout(() => {
        document
          .getElementById(paths[1])
          ?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorNav = (href: string) => {
    const [path, hash] = href.split("#");

    if (window.location.pathname !== path) router.push(href);

    if (hash)
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F5F2]/95 backdrop-blur-md shadow-sm "
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/#"
            className="flex flex-col leading-none group"
            style={{ textDecoration: "none" }}
          >
            <span
              className={`font-heading text-[1.35rem] ${menuOpen ? "text-white" : "text-[#121D2F]"} md:text-[#121D2F] tracking-tight group-hover:text-lichen-teal transition-colors duration-300`}
            >
              Ntokozo Masoko
            </span>
            <span className="font-body text-[10px] text-[#0D9488] uppercase tracking-[0.18em] mt-0.5">
              Clinical Psychologist
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* About */}
            <Link href="/about" className="nav-link focus-teal font-body">
              About
            </Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                className="nav-link focus-teal flex items-center gap-1 font-body bg-transparent cursor-pointer p-0"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown
                  size={13}
                  style={{
                    transition: "transform 0.25s ease",
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    color: "#0D9488",
                  }}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 20px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#F8F5F2",
                      border: "1px solid rgba(18,29,47,0.1)",
                      boxShadow: "0 12px 40px rgba(18,29,47,0.1)",
                      minWidth: "260px",
                      zIndex: 50,
                    }}
                  >
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      style={{
                        display: "block",
                        padding: "12px 20px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#0D9488",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(18,29,47,0.08)",
                        fontWeight: 500,
                      }}
                    >
                      All Services →
                    </Link>
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesOpen(false)}
                        style={{
                          display: "block",
                          padding: "11px 20px",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                          color: "#121D2F",
                          textDecoration: "none",
                          borderBottom: "1px solid rgba(18,29,47,0.06)",
                          transition: "background 0.2s ease, color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(13,148,136,0.06)";
                          e.currentTarget.style.color = "#0D9488";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#121D2F";
                        }}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Anchor links */}
            {HOME_ANCHOR_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleAnchorNav(link.href)}
                className="nav-link focus-teal"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            ))}

            {/* Contact */}
            <Link
              href="/contact"
              className="nav-link focus-teal"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="focus-teal"
              style={{
                backgroundColor: "#0D9488",
                color: "#F8F5F2",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "12px 28px",
                border: "2px solid #0D9488",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#0D9488";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0D9488";
                e.currentTarget.style.color = "#F8F5F2";
              }}
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={`lg:hidden focus-teal p-2 min-w-11 min-h-11 ${menuOpen ? "text-white" : "text-[#121D2F]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-30 overflow-y-auto"
            style={{ backgroundColor: "#121D2F", paddingTop: "80px" }}
          >
            <div className="flex flex-col gap-0 px-8 py-12">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 }}
              >
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="text-left block py-6"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.5rem",
                    color: "#F8F5F2",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  About
                </Link>
              </motion.div>

              {/* Services accordion */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 }}
              >
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left py-6 flex items-center cursor-pointer justify-between font-heading text-[#F8F5F2] bg-transparent border-0"
                  style={{
                    fontSize: "1.5rem",
                    borderBottom: mobileServicesOpen
                      ? "none"
                      : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Services
                  <ChevronDown
                    size={20}
                    style={{
                      color: "#0D9488",
                      transition: "transform 0.25s ease",
                      transform: mobileServicesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        overflow: "hidden",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <Link
                        href="/services"
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#0D9488",
                          textDecoration: "none",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        All Services →
                      </Link>
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setMenuOpen(false)}
                          style={{
                            display: "block",
                            padding: "12px 16px",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "1rem",
                            color: "rgba(248,245,242,0.7)",
                            textDecoration: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Expertise & Testimonials */}
              {HOME_ANCHOR_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 2) * 0.06 }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      handleAnchorNav(link.href);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left py-6 font-heading border-0 border-b border-[#ffffff1a] text-[#F8F5F2]"
                    style={{
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.24 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-left block py-6"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.5rem",
                    color: "#F8F5F2",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    backgroundColor: "#0D9488",
                    color: "#F8F5F2",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "18px",
                    textDecoration: "none",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  Book a Session
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
