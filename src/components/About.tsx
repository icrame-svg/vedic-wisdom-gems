import astrologerProfile from "@/assets/astrologer-profile.jpg";
import { Award, BookOpen, Users } from "lucide-react";

export const About = () => {
  return (
    <section className="section-sacred bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-sacred">About the Astrologer</h2>
          <div className="mt-4 text-accent text-xl font-serif">
            धर्मो रक्षति रक्षितः
          </div>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Dharma protects those who protect it
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-sacred">
              <img 
                src={astrologerProfile} 
                alt="Vedic Astrologer" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-planetary/40 to-transparent" />
            </div>
            <div className="absolute -top-6 -left-6 text-accent/30 text-8xl animate-rotate-slow">
              ॐ
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Pandit Rajesh Sharma
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 25 years of dedicated practice in Vedic Astrology (Jyotish Shastra), 
                I serve as a bridge between ancient Sanatana wisdom and modern life challenges. 
                My journey began at the sacred temples of Varanasi, where I studied under renowned Jyotish gurus.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Specializing in Kundli analysis, gemstone remedies (Ratna Pariksha), Vastu Shastra, 
              and numerology, I've guided thousands of individuals toward prosperity, peace, and spiritual growth. 
              Every consultation is rooted in authentic Vedic principles and personalized to your unique cosmic blueprint.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Certified</p>
                  <p className="text-sm text-muted-foreground">Vedic Astrologer</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">25+ Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">10K+ Clients</p>
                  <p className="text-sm text-muted-foreground">Worldwide</p>
                </div>
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="border-l-4 border-accent pl-6 py-4 bg-muted/50 rounded-r-lg mt-8">
              <p className="text-lg italic text-foreground font-serif">
                "Jyotish is not fortune-telling, it is a sacred science that illuminates 
                your karma and dharma, empowering you to walk the path of righteousness 
                with clarity and grace."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
