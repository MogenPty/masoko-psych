"use client";

import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-48 pb-32 text-center">
      <h1
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "3rem",
          color: "#121D2F",
        }}
      >
        Service not found
      </h1>
      <Link
        href="/services"
        style={{
          color: "#0D9488",
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          marginTop: "24px",
          display: "inline-block",
        }}
      >
        ← Back to Services
      </Link>
    </div>
  );
}
