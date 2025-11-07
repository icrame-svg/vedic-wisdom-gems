import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import rubyImg from "@/assets/gemstone-ruby.jpg";
import pearlImg from "@/assets/gemstone-pearl.jpg";
import emeraldImg from "@/assets/gemstone-emerald.jpg";
import sapphireImg from "@/assets/gemstone-sapphire.jpg";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const navaratna = [
  {
    name: "Ruby",
    sanskrit: "माणिक्य (Manikya)",
    planet: "Sun",
    planetSanskrit: "सूर्य (Surya)",
    benefits: "Leadership, vitality, confidence, royal authority, father's blessings",
    wearingDay: "Sunday",
    finger: "Ring finger",
    mantra: "Om Suryaya Namaha",
    image: rubyImg,
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    name: "Pearl",
    sanskrit: "मोती (Moti)",
    planet: "Moon",
    planetSanskrit: "चंद्र (Chandra)",
    benefits: "Peace, emotional balance, intuition, mental clarity, mother's blessings",
    wearingDay: "Monday",
    finger: "Little finger",
    mantra: "Om Chandraya Namaha",
    image: pearlImg,
    color: "from-gray-200/20 to-blue-200/20",
  },
  {
    name: "Red Coral",
    sanskrit: "मूंगा (Moonga)",
    planet: "Mars",
    planetSanskrit: "मंगल (Mangal)",
    benefits: "Courage, energy, passion, property gains, sibling harmony",
    wearingDay: "Tuesday",
    finger: "Ring finger",
    mantra: "Om Mangalaya Namaha",
    image: rubyImg,
    color: "from-red-400/20 to-pink-400/20",
  },
  {
    name: "Emerald",
    sanskrit: "पन्ना (Panna)",
    planet: "Mercury",
    planetSanskrit: "बुध (Budha)",
    benefits: "Intelligence, communication, business success, learning, speech",
    wearingDay: "Wednesday",
    finger: "Little finger",
    mantra: "Om Budhaya Namaha",
    image: emeraldImg,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Yellow Sapphire",
    sanskrit: "पुखराज (Pukhraj)",
    planet: "Jupiter",
    planetSanskrit: "गुरु (Guru)",
    benefits: "Wisdom, prosperity, marriage, children, spiritual growth",
    wearingDay: "Thursday",
    finger: "Index finger",
    mantra: "Om Gurave Namaha",
    image: sapphireImg,
    color: "from-yellow-400/20 to-amber-400/20",
  },
  {
    name: "Diamond",
    sanskrit: "हीरा (Heera)",
    planet: "Venus",
    planetSanskrit: "शुक्र (Shukra)",
    benefits: "Luxury, love, beauty, artistic talents, marital bliss",
    wearingDay: "Friday",
    finger: "Middle finger",
    mantra: "Om Shukraya Namaha",
    image: pearlImg,
    color: "from-gray-100/20 to-white/20",
  },
  {
    name: "Blue Sapphire",
    sanskrit: "नीलम (Neelam)",
    planet: "Saturn",
    planetSanskrit: "शनि (Shani)",
    benefits: "Discipline, focus, wealth, karmic relief, longevity",
    wearingDay: "Saturday",
    finger: "Middle finger",
    mantra: "Om Shanaye Namaha",
    image: sapphireImg,
    color: "from-blue-600/20 to-indigo-600/20",
  },
  {
    name: "Hessonite (Gomed)",
    sanskrit: "गोमेद (Gomed)",
    planet: "Rahu",
    planetSanskrit: "राहु (Rahu)",
    benefits: "Protection from enemies, sudden gains, foreign connections",
    wearingDay: "Saturday",
    finger: "Middle finger",
    mantra: "Om Rahave Namaha",
    image: emeraldImg,
    color: "from-orange-600/20 to-brown-500/20",
  },
  {
    name: "Cat's Eye",
    sanskrit: "लहसुनिया (Lehsunia)",
    planet: "Ketu",
    planetSanskrit: "केतु (Ketu)",
    benefits: "Spiritual insight, moksha, intuition, hidden knowledge",
    wearingDay: "Thursday",
    finger: "Middle finger",
    mantra: "Om Ketave Namaha",
    image: pearlImg,
    color: "from-green-700/20 to-gray-600/20",
  },
];

export default function GemstonesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-planetary/10 to-background overflow-hidden">
        <div className="absolute inset-0 pattern-mandala opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-accent text-lg font-semibold">
              <Sparkles className="h-6 w-6 animate-pulse" />
              <span className="text-2xl font-serif">नवरत्न (Navaratna)</span>
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>
          </div>
          <h1 className="heading-sacred">Sacred Gemstone Remedies</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            The Nine Sacred Gemstones of Vedic Astrology — powerful planetary remedies 
            blessed by ancient wisdom and cosmic energies
          </p>
          <p className="text-accent font-serif text-lg mt-4">
            रत्नं दिव्यं तेजस्वी च
          </p>
        </div>
      </section>

      {/* Gemstones Grid */}
      <section className="section-sacred">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {navaratna.map((gem, index) => (
              <div key={index} className="group relative">
                <div className="card-sacred h-full flex flex-col">
                  {/* Image with Glow */}
                  <div className="relative mb-6 mx-auto w-48 h-48">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gem.color} blur-xl group-hover:blur-2xl transition-sacred gemstone-glow`} />
                    <img 
                      src={gem.image}
                      alt={gem.name}
                      className="relative w-full h-full object-cover rounded-full border-4 border-accent/30 group-hover:scale-110 transition-sacred"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {gem.name}
                    </h3>
                    <p className="text-accent font-serif text-sm">
                      {gem.sanskrit}
                    </p>
                    
                    {/* Planet */}
                    <div className="py-3 border-y border-accent/20">
                      <p className="text-sm text-muted-foreground">Ruling Planet</p>
                      <p className="text-lg font-semibold text-foreground">
                        {gem.planet}
                      </p>
                      <p className="text-accent font-serif text-sm">
                        {gem.planetSanskrit}
                      </p>
                    </div>

                    {/* Benefits */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {gem.benefits}
                    </p>

                    {/* Details */}
                    <div className="text-xs text-muted-foreground space-y-1 pt-3">
                      <p><span className="text-accent font-semibold">Wear on:</span> {gem.wearingDay}</p>
                      <p><span className="text-accent font-semibold">Finger:</span> {gem.finger}</p>
                      <p className="font-serif text-accent">{gem.mantra}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Om */}
                <div className="absolute -top-4 -right-4 text-accent/10 text-6xl font-bold pointer-events-none animate-float">
                  ॐ
                </div>
              </div>
            ))}
          </div>

          {/* Information Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card-sacred">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                How Gemstones Work
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="leading-relaxed">
                  In Vedic astrology, gemstones are believed to absorb cosmic energies from their 
                  ruling planets and transmit them to the wearer's body through subtle vibrations.
                </p>
                <p className="leading-relaxed">
                  Each gemstone strengthens its corresponding planet in your birth chart, helping 
                  to balance planetary doshas and enhance positive influences.
                </p>
                <p className="leading-relaxed">
                  Wearing the right gemstone at the right time, energized with proper mantras, 
                  can bring profound positive changes in health, wealth, relationships, and spiritual growth.
                </p>
              </div>
            </div>

            <div className="card-sacred bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Our Gemstones?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">100% Natural & Certified gemstones from trusted sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">Lab-tested with authenticity certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">Energized with Vedic mantras before delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">Personalized recommendation based on your Kundli</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-muted-foreground">Lifetime support and re-energization guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-sacred rounded-2xl p-12 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 pattern-mandala opacity-20" />
            
            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-glow">✦</div>
              <h3 className="text-3xl font-bold mb-4">
                Find Your Perfect Gemstone
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Get a personalized gemstone recommendation based on your unique birth chart
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg">
                  <Link to="/book">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Book Gemstone Consultation
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
                  <Link to="/contact">
                    Contact for Purchase
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
