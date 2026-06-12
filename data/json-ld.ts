import { EXPERTISES } from "./expertise";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Masoko Psychological Clinic",
  alternateName: "MASOKO",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
  description:
    "Full-stack web development, branding & digital marketing for South African businesses.",
  telephone: "+27765207876",
  email: "masoko@mogen.co.za",
  foundingDate: "2018", // ← update to your actual founding year
  currenciesAccepted: "ZAR",
  paymentAccepted: "Cash, EFT, Bank Transfer",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Randburg",
      postalCode: "2064",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Soweto",
      postalCode: "2150",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
  ],
  areaServed: [
    "Soweto",
    "Randburg",
    "Ferndale",
    "Sandton",
    "Bryanston",
    "Fourways",
    "Gauteng",
    "South Africa",
  ],
  serviceType: [...EXPERTISES],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://twitter.com/MogenPty",
    "https://x.com/MogenPty",
    "https://instagram.com/MogenPty",
    "https://www.linkedin.com/in/MogenPty",

    // add Facebook, LinkedIn URLs here when available
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27765207876",
    contactType: "customer service",
    areaServed: "ZA",
    availableLanguage: ["English", "Setswana", "Zulu"],
  },
};
