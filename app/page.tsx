import About from "@/components/blocks/About";
import Expertise from "@/components/blocks/Expertise";
import FloatingActions from "@/components/blocks/FloatingActions";
import Hero from "@/components/blocks/Hero";
import Pricing from "@/components/blocks/Pricing";
import Testimonials from "@/components/blocks/Testimonials";
import Services from "@/components/website/Services";

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
