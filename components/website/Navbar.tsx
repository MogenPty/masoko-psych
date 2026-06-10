"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F5F2]/95 backdrop-blur-md shadow-sm border-b border-[#121D2F]/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col leading-none group"
          >
            <span
              className="font-instrument text-[1.35rem] text-slate-indigo tracking-tight group-hover:text-lichen-teal transition-colors duration-300"
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: "#121D2F",
              }}
            >
              Ntokozo Masoko
            </span>
            <span
              className="font-inter text-[10px] uppercase tracking-[0.18em] mt-0.5"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#0D9488",
                fontSize: "10px",
              }}
            >
              Clinical Psychologist
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link focus-teal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNav("#contact")}
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
                cursor: "pointer",
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
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden focus-teal p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ minHeight: "44px", minWidth: "44px", color: "#121D2F" }}
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
            className="fixed inset-0 z-30 flex flex-col"
            style={{ backgroundColor: "#121D2F", paddingTop: "80px" }}
          >
            <div className="flex flex-col gap-0 px-8 py-12">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left border-b border-white/10 py-6 focus-teal"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "2.2rem",
                    color: "#F8F5F2",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNav("#contact")}
                className="mt-10 w-full focus-teal"
                style={{
                  backgroundColor: "#0D9488",
                  color: "#F8F5F2",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "18px",
                  border: "none",
                  cursor: "pointer",
                  minHeight: "44px",
                }}
              >
                Book a Session
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
