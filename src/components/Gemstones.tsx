import { Button } from "@/components/ui/button";
import rubyImg from "@/assets/gemstone-ruby.jpg";
import pearlImg from "@/assets/gemstone-pearl.jpg";
import emeraldImg from "@/assets/gemstone-emerald.jpg";
import sapphireImg from "@/assets/gemstone-sapphire.jpg";
import { Sparkles } from "lucide-react";

const gemstones = [
  {
    name: "Ruby",
    sanskrit: "माणिक्य (Manikya)",
    planet: "Sun",
    planetSanskrit: "सूर्य",
    benefits: "Leadership, vitality, confidence, royal authority",
    image: rubyImg,
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    name: "Pearl",
    sanskrit: "मोती (Moti)",
    planet: "Moon",
    planetSanskrit: "चंद्र",
    benefits: "Peace, emotional balance, intuition, mental clarity",
    image: pearlImg,
    color: "from-gray-200/20 to-blue-200/20",
  },
  {
    name: "Emerald",
    sanskrit: "पन्ना (Panna)",
    planet: "Mercury",
    planetSanskrit: "बुध",
    benefits: "Intelligence, communication, business success, learning",
    image: emeraldImg,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Blue Sapphire",
    sanskrit: "नीलम (Neelam)",
    planet: "Saturn",
    planetSanskrit: "शनि",
    benefits: "Discipline, focus, wealth, karmic relief",
    image: sapphireImg,
    color: "from-blue-600/20 to-indigo-600/20",
  },
];

export const Gemstones = () => {
  return (
    <section className="section-sacred bg-gradient-to-b from-planetary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-accent text-lg font-semibold">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span>Ratna Pariksha</span>
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
          </div>
          <h2 className="heading-sacred">Sacred Gemstone Remedies</h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Harness the power of Navaratna - Nine sacred gemstones aligned with celestial energies 
            to strengthen beneficial planets and neutralize malefic influences
          </p>
        </div>

        {/* Gemstones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {gemstones.map((gem, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="card-sacred overflow-hidden">
                {/* Image with Glow Effect */}
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gem.color} blur-xl group-hover:blur-2xl transition-sacred gemstone-glow`} />
                  <img 
                    src={gem.image}
                    alt={gem.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-accent/30 group-hover:scale-110 transition-sacred"
                  />
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-sacred">
                    {gem.name}
                  </h3>
                  <p className="text-accent font-serif text-sm">
                    {gem.sanskrit}
                  </p>
                  
                  {/* Planet */}
                  <div className="py-3 border-y border-accent/20">
                    <p className="text-sm text-muted-foreground">Ruling Planet</p>
                    <p className="text-lg font-semibold text-foreground">
                      {gem.planet} <span className="text-accent font-serif">({gem.planetSanskrit})</span>
                    </p>
                  </div>

                  {/* Benefits */}
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px]">
                    {gem.benefits}
                  </p>
                </div>
              </div>

              {/* Decorative Om */}
              <div className="absolute -top-4 -right-4 text-accent/10 text-6xl font-bold pointer-events-none animate-float">
                ॐ
              </div>
            </div>
          ))}
        </div>

        {/* Gemstone Finder CTA */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-sacred rounded-2xl p-12 text-primary-foreground relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 pattern-mandala opacity-20" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Find Your Lucky Gemstone
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Get personalized gemstone recommendations based on your birth chart. 
              <span className="block mt-2 text-accent font-serif">
                रत्नं दिव्यं तेजस्वी च
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Take Gemstone Quiz
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
                Buy Certified Gemstones
              </Button>
            </div>

            <p className="mt-6 text-sm opacity-80">
              ✓ 100% Certified Natural Gemstones | ✓ Lab Tested | ✓ Energized with Vedic Mantras
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
