import Contact from "@/components/blocks/Contact";

export default function ContactPage() {
  const params = {
    heading: {
      part1: "Book a session or",
      part2: "ask a question.",
    },
    subheading:
      "Reach out via WhatsApp, phone, email, or use the form below. All enquiries are treated with strict confidentiality.",
  };
  return (
    <main className="pt-40 pb-20">
      <Contact heading={params.heading} subheading={params.subheading} />
    </main>
  );
}
