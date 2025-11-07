import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroBackground from "@/assets/hero-cosmic-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-planetary/80 via-planetary/60 to-background/95" />
      </div>

      {/* Animated Om Symbol */}
      <div className="absolute top-20 right-10 text-accent/20 text-9xl font-bold animate-float hidden lg:block">
        ॐ
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Sanskrit Blessing */}
        <div className="mb-6 animate-glow">
          <p className="text-accent text-2xl md:text-3xl font-serif tracking-wide">
            ॐ श्री गणेशाय नमः
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
          Transform Your Life Through
          <span className="block mt-2 gradient-gold bg-clip-text text-transparent">
            Vedic Astrology & Gemstone Remedies
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-serif">
          Guided by Sanatana wisdom, powered by authentic insights. 
          <span className="block mt-2 text-accent font-semibold">धर्मो रक्षति रक्षितः</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-xl transition-sacred">
            <Star className="mr-2 h-5 w-5" />
            Free Kundli Analysis
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-accent text-primary-foreground hover:bg-accent/20 px-8 py-6 text-lg shadow-xl transition-sacred">
            <Sparkles className="mr-2 h-5 w-5" />
            Find Your Gemstone
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-accent">25+</p>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-accent">10K+</p>
            <p className="text-sm">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-accent">100%</p>
            <p className="text-sm">Certified Gemstones</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
