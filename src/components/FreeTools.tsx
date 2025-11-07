import { Button } from "@/components/ui/button";
import { FileText, Calendar, Sun, Clock, Sparkles } from "lucide-react";

const tools = [
  {
    icon: FileText,
    title: "Free Kundli",
    description: "Generate your complete Vedic birth chart instantly",
    sanskritText: "जन्म कुंडली",
  },
  {
    icon: Sun,
    title: "Daily Horoscope",
    description: "Your personalized rashifal for today",
    sanskritText: "दैनिक राशिफल",
  },
  {
    icon: Calendar,
    title: "Panchang",
    description: "Hindu calendar with tithis and auspicious timings",
    sanskritText: "पंचांग",
  },
  {
    icon: Clock,
    title: "Shubh Muhurat",
    description: "Find auspicious times for important events",
    sanskritText: "शुभ मुहूर्त",
  },
  {
    icon: Sparkles,
    title: "Gem Finder",
    description: "Discover your lucky gemstone remedy",
    sanskritText: "रत्न परामर्श",
  },
];

export const FreeTools = () => {
  return (
    <section className="section-sacred bg-gradient-cosmic">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-sacred">Free Vedic Tools</h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Access sacred knowledge and cosmic insights at no cost
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                <div className="card-sacred text-center h-full flex flex-col justify-between hover:scale-105 transition-sacred cursor-pointer">
                  {/* Icon */}
                  <div>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-sacred flex items-center justify-center group-hover:rotate-12 transition-sacred">
                      <Icon className="h-10 w-10 text-primary-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-sacred">
                      {tool.title}
                    </h3>

                    {/* Sanskrit */}
                    <p className="text-accent font-serif text-sm mb-3">
                      {tool.sanskritText}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </div>

                  {/* Button */}
                  <Button variant="ghost" className="w-full group-hover:text-primary transition-sacred">
                    Access Now
                  </Button>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-3 -right-3 text-accent/20 text-4xl font-bold animate-glow pointer-events-none">
                  ✦
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20">
          <p className="text-lg text-muted-foreground mb-4">
            Want personalized guidance from our expert astrologer?
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg shadow-xl transition-sacred">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
