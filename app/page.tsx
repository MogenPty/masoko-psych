import About from "@/components/website/About";
import Contact from "@/components/website/Contact";
import Expertise from "@/components/website/Expertise";
import FloatingActions from "@/components/website/FloatingActions";
import Footer from "@/components/website/Footer";
import Hero from "@/components/website/Hero";
import Navbar from "@/components/website/Navbar";
import Pricing from "@/components/website/Pricing";
import Services from "@/components/website/Services";
import Testimonials from "@/components/website/Testimonials";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#F8F5F2", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <About />

        <Services />
        <Expertise />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
