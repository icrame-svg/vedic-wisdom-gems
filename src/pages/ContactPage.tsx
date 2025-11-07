import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-cosmic overflow-hidden">
        <div className="absolute inset-0 pattern-mandala opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="text-accent text-6xl font-bold mb-4 animate-glow">
            ॐ
          </div>
          <h1 className="heading-sacred">Contact Us</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Reach out for guidance, consultations, or gemstone inquiries
          </p>
          <p className="text-accent font-serif text-lg mt-2">
            ॐ सर्वे भवन्तु सुखिनः
          </p>
        </div>
      </section>

      <Contact />
      
      <Footer />
    </div>
  );
}
