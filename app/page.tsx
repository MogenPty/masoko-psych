import About from "@/components/website/About";
import Expertise from "@/components/website/Expertise";
import FloatingActions from "@/components/website/FloatingActions";
import Hero from "@/components/website/Hero";
import Pricing from "@/components/website/Pricing";
import Services from "@/components/website/Services";
import Testimonials from "@/components/website/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Testimonials />
      <Pricing />
      <FloatingActions />
    </main>
  );
}
