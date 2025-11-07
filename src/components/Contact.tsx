import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const Contact = () => {
  const whatsappNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = "Namaste! I would like to book a consultation.";

  return (
    <section className="section-sacred bg-gradient-to-b from-background to-planetary/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-sacred">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mt-4">
            Begin your journey to cosmic clarity
          </p>
          <p className="text-accent font-serif text-lg mt-2">
            ॐ सर्वे भवन्तु सुखिनः
          </p>
          <p className="text-sm text-muted-foreground">
            May all beings be happy
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-sacred">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Jyotish Kendra
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Visit Us</p>
                    <p className="text-muted-foreground">
                      123 Dharma Path, Vedic Nagar<br />
                      Near Ancient Temple<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Call Us</p>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email Us</p>
                    <p className="text-muted-foreground">
                      contact@vedicastrology.com<br />
                      gemstones@vedicastrology.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Consultation Hours</p>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 pt-8 border-t border-border">
                <Button 
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  onClick={() => {
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Quick response • Online consultation available
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="card-sacred bg-gradient-sacred text-primary-foreground">
              <h4 className="text-xl font-bold mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ 25+ years of authentic Vedic practice</li>
                <li>✓ 100% certified natural gemstones</li>
                <li>✓ Lab-tested and energized with mantras</li>
                <li>✓ Online & in-person consultations</li>
                <li>✓ Lifetime support for gemstone clients</li>
                <li>✓ Trusted by 10,000+ clients worldwide</li>
              </ul>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="card-sacred h-full min-h-[500px]">
            <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Decorative mandala pattern */}
              <div className="absolute inset-0 pattern-mandala opacity-50" />
              <div className="relative z-10 text-center p-8">
                <MapPin className="h-16 w-16 text-accent mx-auto mb-4 animate-float" />
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  Visit Our Sacred Space
                </h4>
                <p className="text-muted-foreground mb-6">
                  Experience the divine atmosphere of our Jyotish Kendra
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">We Accept</p>
          <div className="flex flex-wrap justify-center gap-6 items-center text-sm font-semibold text-muted-foreground/60">
            <span>UPI</span>
            <span>•</span>
            <span>Paytm</span>
            <span>•</span>
            <span>PhonePe</span>
            <span>•</span>
            <span>Google Pay</span>
            <span>•</span>
            <span>Card Payments</span>
            <span>•</span>
            <span>Net Banking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
