import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-planetary text-planetary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-accent mb-4">
              ॐ Vedic Jyotish
            </div>
            <p className="text-planetary-foreground/80 mb-6 leading-relaxed">
              Authentic Vedic astrology guidance rooted in Sanatana Dharma. 
              Transforming lives through sacred gemstone remedies, Kundli analysis, 
              and timeless wisdom for over 25 years.
            </p>
            <p className="text-accent font-serif text-lg">
              ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
            </p>
            <p className="text-sm text-planetary-foreground/60 mt-2">
              May all be happy, may all be free from disease
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-planetary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-planetary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-planetary-foreground/80 hover:text-accent transition-colors">
                  Gemstones
                </a>
              </li>
              <li>
                <a href="#" className="text-planetary-foreground/80 hover:text-accent transition-colors">
                  Free Kundli
                </a>
              </li>
              <li>
                <a href="#" className="text-planetary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-planetary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-planetary-foreground/80">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-planetary-foreground/80">
                  contact@vedicastrology.com
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-accent mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-planetary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-planetary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-planetary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-planetary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-planetary-foreground/60">
            <p>
              © {currentYear} Vedic Jyotish. All rights reserved. Made with devotion ॐ
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
