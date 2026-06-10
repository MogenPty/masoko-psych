"use client";

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#0A1520", borderTop: "1px solid rgba(248,245,242,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.5rem", color: "#F8F5F2", letterSpacing: "-0.01em" }}>
                Ntokozo Masoko
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#0D9488", marginTop: "4px" }}>
                Clinical Psychologist
              </p>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(248,245,242,0.4)", lineHeight: 1.7, fontWeight: 300, maxWidth: "280px" }}>
              A safe, professional, and nurturing therapeutic environment for individuals, couples, families, and adolescents in Johannesburg.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(248,245,242,0.35)", letterSpacing: "0.05em" }}>
                HPCSA Registered
              </span>
              <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "#0D9488" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(248,245,242,0.35)", letterSpacing: "0.05em" }}>
                BHF Registered
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,245,242,0.4)", marginBottom: "24px" }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", id: "#about" },
                { label: "Services", id: "#services" },
                { label: "Expertise", id: "#expertise" },
                { label: "Testimonials", id: "#testimonials" },
                { label: "Pricing", id: "#pricing" },
                { label: "Contact", id: "#contact" },
              ].map(link => (
                <button
												type="button"
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(248,245,242,0.55)",
                    cursor: "pointer",
                    padding: "0",
                    transition: "color 0.3s ease",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#0D9488"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(248,245,242,0.55)"}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3">
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,245,242,0.4)", marginBottom: "24px" }}>
              Locations & Hours
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", color: "#F8F5F2" }}>Randburg, Johannesburg</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(248,245,242,0.4)", marginTop: "2px" }}>Private Practice</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", color: "#F8F5F2" }}>Soweto, Johannesburg</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(248,245,242,0.4)", marginTop: "2px" }}>Private Practice</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(248,245,242,0.08)", paddingTop: "16px" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(248,245,242,0.5)" }}>Mon – Fri: 09:00 – 18:00</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(248,245,242,0.5)", marginTop: "4px" }}>Saturday: 09:00 – 13:00</p>
              </div>
              <div>
                <a
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    color: "#0D9488",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(248,245,242,0.06)",
            marginTop: "60px",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(248,245,242,0.25)" }}>
            © {new Date().getFullYear()} Ntokozo Masoko Clinical Psychology. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(248,245,242,0.25)" }}>
            Randburg & Soweto, Johannesburg, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}