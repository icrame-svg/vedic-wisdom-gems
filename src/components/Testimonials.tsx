import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Pandit ji's gemstone recommendation completely transformed my career. Within 3 months of wearing the recommended Ruby, I received a major promotion. His Kundli analysis was incredibly accurate.",
    service: "Career Consultation & Gemstone",
  },
  {
    name: "Rajesh Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "The Vastu consultation for my new office brought immediate positive changes. Business deals started flowing smoothly. Highly recommend for anyone starting a new venture.",
    service: "Vastu Consultation",
  },
  {
    name: "Anita Verma",
    location: "Delhi",
    rating: 5,
    text: "Marriage compatibility analysis was spot-on. Pandit ji helped us understand each other better and suggested remedies that strengthened our bond. Forever grateful!",
    service: "Marriage Compatibility",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Numerology consultation changed my life perspective. The name correction brought such positive energy. I feel more confident and successful now.",
    service: "Numerology & Name Correction",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-sacred bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-sacred">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground mt-4">
            Trusted by thousands across India and worldwide
          </p>
          <div className="flex justify-center items-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
            <span className="ml-3 text-lg font-semibold text-foreground">
              4.9/5 from 2,500+ reviews
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-sacred relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-accent/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Service Tag */}
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-4">
                {testimonial.service}
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold gradient-gold bg-clip-text text-transparent mb-2">
              25+
            </p>
            <p className="text-muted-foreground">Years of Practice</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-gold bg-clip-text text-transparent mb-2">
              10,000+
            </p>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-gold bg-clip-text text-transparent mb-2">
              15,000+
            </p>
            <p className="text-muted-foreground">Consultations</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-gold bg-clip-text text-transparent mb-2">
              100%
            </p>
            <p className="text-muted-foreground">Certified Gemstones</p>
          </div>
        </div>

        {/* Media Mentions */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">As Featured In</p>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/60 font-semibold text-lg">
            <span>Times of India</span>
            <span>•</span>
            <span>Hindustan Times</span>
            <span>•</span>
            <span>Aaj Tak</span>
            <span>•</span>
            <span>YouTube (50K+ Subscribers)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
