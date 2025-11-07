import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Heart, Briefcase, Home, Gem, Calculator, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Star,
    title: "Personal Horoscope & Kundli",
    sanskrit: "जन्म कुंडली विश्लेषण",
    description: "Complete birth chart analysis with detailed insights into your personality, strengths, challenges, and life path. Includes planetary positions, dashas, and personalized predictions.",
    features: ["Birth chart analysis", "Dasha predictions", "Life path guidance", "Career & health insights"],
    price: "₹999",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Kundli Matching (Marriage)",
    sanskrit: "विवाह मिलान",
    description: "Traditional Ashtakoot Gun Milan for marriage compatibility. Detailed analysis of Guna matching, Mangal Dosha, and relationship harmony to ensure a blessed union.",
    features: ["36 Guna matching", "Mangal Dosha check", "Compatibility report", "Remedy suggestions"],
    price: "₹1,499",
    color: "text-secondary",
  },
  {
    icon: Gem,
    title: "Gemstone Recommendation",
    sanskrit: "रत्न परामर्श",
    description: "Personalized gemstone (Ratna) consultation based on your birth chart. Strengthen beneficial planets and neutralize malefic influences with authentic certified gemstones.",
    features: ["Planetary analysis", "Gemstone selection", "Wearing method", "Mantra guidance"],
    price: "₹799",
    color: "text-accent",
  },
  {
    icon: Home,
    title: "Vastu Shastra Consultation",
    sanskrit: "वास्तु परामर्श",
    description: "Ancient Vastu principles for homes and workplaces. Balance the five elements and directional energies to attract prosperity, health, and positive vibrations.",
    features: ["Home/office analysis", "Directional guidance", "Element balancing", "Remedy solutions"],
    price: "₹2,499",
    color: "text-primary",
  },
  {
    icon: Briefcase,
    title: "Career & Finance Forecast",
    sanskrit: "करियर और वित्त",
    description: "Detailed planetary analysis for career growth, business ventures, and financial prosperity. Best timing for job changes, investments, and entrepreneurial decisions.",
    features: ["Career path analysis", "Business timing", "Investment guidance", "Promotion periods"],
    price: "₹1,299",
    color: "text-secondary",
  },
  {
    icon: Calculator,
    title: "Numerology & Name Correction",
    sanskrit: "अंक ज्योतिष",
    description: "Numerological consultation based on your birth date and name. Correct name spelling and vibrations to align with your life path number for success and harmony.",
    features: ["Life path number", "Name analysis", "Lucky numbers", "Name correction"],
    price: "₹899",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "Muhurat (Auspicious Timing)",
    sanskrit: "शुभ मुहूर्त",
    description: "Find the most auspicious dates and times for important life events like marriage, business launch, house warming, vehicle purchase, and travel.",
    features: ["Event timing", "Panchang analysis", "Nakshatra selection", "Planetary support"],
    price: "₹699",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Health & Wellness Astrology",
    sanskrit: "स्वास्थ्य ज्योतिष",
    description: "Understand health patterns and vulnerabilities through your birth chart. Planetary remedies, lifestyle adjustments, and preventive guidance for well-being.",
    features: ["Health analysis", "Disease prediction", "Preventive remedies", "Wellness timing"],
    price: "₹1,199",
    color: "text-secondary",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-cosmic overflow-hidden">
        <div className="absolute inset-0 pattern-mandala opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="text-accent text-6xl font-bold mb-4 animate-glow">✦</div>
          <h1 className="heading-sacred">Sacred Services</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Authentic Vedic guidance for every aspect of your life journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-sacred">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-sacred group hover:scale-105 transition-sacred">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${service.color}`}>
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-sacred">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{service.price}</p>
                      <p className="text-xs text-muted-foreground">per session</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-accent font-serif text-sm mb-4">
                    {service.sanskrit}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/book">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center card-sacred bg-gradient-sacred text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Book a general consultation and let us guide you to the right path
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/contact">
                Contact Us for Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
