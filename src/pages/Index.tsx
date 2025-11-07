import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gemstones } from "@/components/Gemstones";
import { FreeTools } from "@/components/FreeTools";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Gemstones />
      <FreeTools />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
