import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import astrologerProfile from "@/assets/astrologer-profile.jpg";
import { Award, BookOpen, Users, Star } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    { year: "1998", event: "Began Vedic studies at Varanasi under Guru Parampara" },
    { year: "2005", event: "Certified in Jyotish Shastra & Vastu" },
    { year: "2010", event: "Established Lovable Jyotish consultation center" },
    { year: "2015", event: "Featured on national television & media" },
    { year: "2020", event: "Reached 10,000+ client consultations worldwide" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-cosmic overflow-hidden">
        <div className="absolute inset-0 pattern-mandala opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="text-accent text-6xl font-bold mb-4 animate-glow">ॐ</div>
          <h1 className="heading-sacred">About Pandit Rajesh Sharma</h1>
          <p className="text-xl text-muted-foreground mt-4 font-serif">
            धर्मो रक्षति रक्षितः
          </p>
          <p className="text-muted-foreground mt-2">
            Dharma protects those who protect it
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-sacred">
        <div className="max-w-6xl mx-auto">
          {/* Profile Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-sacred">
                <img 
                  src={astrologerProfile} 
                  alt="Pandit Rajesh Sharma" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-planetary/40 to-transparent" />
              </div>
              <div className="absolute -top-6 -left-6 text-accent/30 text-8xl animate-rotate-slow">
                ॐ
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Journey Through the Stars
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My spiritual journey began in the sacred ghats of Varanasi, where ancient 
                  wisdom flows like the eternal Ganga. Under the guidance of revered Jyotish 
                  gurus, I immersed myself in the profound sciences of Vedic Astrology, 
                  Vastu Shastra, and sacred gemstone remedies.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                For over 25 years, I have dedicated my life to helping individuals navigate 
                their karmic paths with clarity and purpose. Every consultation is a sacred 
                dialogue between cosmic energies and human destiny, guided by the timeless 
                principles of Sanatana Dharma.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My practice combines traditional Vedic methodologies with compassionate 
                counseling, offering not just predictions, but pathways to spiritual growth, 
                prosperity, and inner peace.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="card-sacred">
                  <Award className="h-8 w-8 text-accent mb-2" />
                  <p className="font-semibold text-foreground">Certified Astrologer</p>
                  <p className="text-sm text-muted-foreground">Jyotish Acharya</p>
                </div>
                <div className="card-sacred">
                  <BookOpen className="h-8 w-8 text-accent mb-2" />
                  <p className="font-semibold text-foreground">25+ Years</p>
                  <p className="text-sm text-muted-foreground">Practice</p>
                </div>
                <div className="card-sacred">
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <p className="font-semibold text-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
                <div className="card-sacred">
                  <Star className="h-8 w-8 text-accent mb-2" />
                  <p className="font-semibold text-foreground">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="heading-sacred mb-12">Spiritual Journey Timeline</h2>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

              {/* Milestones */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Year Badge */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-sacred flex items-center justify-center text-primary-foreground font-bold shadow-xl z-10">
                      {milestone.year}
                    </div>
                    
                    {/* Content */}
                    <div className="card-sacred flex-1 hover:scale-105 transition-sacred">
                      <p className="text-lg text-foreground font-semibold">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="card-sacred bg-gradient-to-br from-secondary/20 to-primary/20 border-sacred">
            <div className="text-center mb-6">
              <div className="text-accent text-5xl mb-4">✦</div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                My Philosophy
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <p className="text-lg text-foreground leading-relaxed font-serif italic">
                "Jyotish is not merely the art of prediction, but a sacred science that 
                illuminates the path of dharma. Every star carries a message, every planet 
                holds a lesson, and every soul has a unique cosmic blueprint waiting to be 
                understood."
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I believe that astrology, when practiced with devotion and authenticity, 
                becomes a bridge between the material and spiritual realms. My role is not 
                to create fear or dependency, but to empower you with knowledge, guide you 
                with remedies, and remind you that you are the co-creator of your destiny.
              </p>

              <div className="pt-6 border-t border-accent/20 mt-6">
                <p className="text-accent font-serif text-xl">
                  ॐ शान्तिः शान्तिः शान्तिः
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Om Peace, Peace, Peace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
