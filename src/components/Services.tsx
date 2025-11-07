import { Button } from "@/components/ui/button";
import { Star, Heart, Briefcase, Home, Gem, Calculator, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Janam Kundli Analysis",
    sanskrit: "जन्म कुंडली विश्लेषण",
    description: "Comprehensive birth chart analysis revealing your life path, strengths, and karmic patterns according to Vedic astrology.",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Marriage & Compatibility",
    sanskrit: "विवाह मिलान",
    description: "Kundli matching (Gun Milan) and relationship analysis to ensure harmonious union blessed by the stars.",
    color: "text-secondary",
  },
  {
    icon: Briefcase,
    title: "Career & Finance Forecast",
    sanskrit: "करियर और वित्त",
    description: "Planetary guidance for career decisions, business ventures, and financial prosperity through dasha analysis.",
    color: "text-accent",
  },
  {
    icon: Home,
    title: "Vastu Consultation",
    sanskrit: "वास्तु परामर्श",
    description: "Ancient Vastu Shastra wisdom to harmonize your living and working spaces with cosmic energies.",
    color: "text-primary",
  },
  {
    icon: Gem,
    title: "Gemstone Recommendation",
    sanskrit: "रत्न परामर्श",
    description: "Authentic gemstone remedies (Ratna Pariksha) to strengthen beneficial planets and neutralize negative influences.",
    color: "text-secondary",
  },
  {
    icon: Calculator,
    title: "Numerology & Name Correction",
    sanskrit: "अंक ज्योतिष",
    description: "Numerological analysis and name corrections to align your vibrations with prosperity and success.",
    color: "text-accent",
  },
];

export const Services = () => {
  return (
    <section className="section-sacred bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-sacred">Sacred Services</h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Authentic Vedic guidance for every aspect of your life journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="card-sacred group cursor-pointer"
              >
                {/* Icon */}
                <div className={`${service.color} mb-4 relative`}>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-sacred">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-accent/20 text-4xl font-bold animate-float">
                    ॐ
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-sacred">
                  {service.title}
                </h3>
                <p className="text-accent font-serif text-sm mb-3">
                  {service.sanskrit}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* CTA */}
                <Button variant="ghost" className="group-hover:text-primary transition-sacred p-0">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-sacred" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to unlock your cosmic potential?
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg shadow-xl transition-sacred">
            Book Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
