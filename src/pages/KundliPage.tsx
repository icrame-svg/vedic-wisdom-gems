import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Star, Download } from "lucide-react";

export default function KundliPage() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "male",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.name || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth) {
      toast.error("Please fill all required fields");
      return;
    }

    // Show success message
    toast.success("Kundli generated! Check your email for the detailed report.");
    
    // In a real app, this would generate the kundli
    console.log("Generating Kundli for:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-cosmic overflow-hidden">
        <div className="absolute inset-0 pattern-mandala opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="text-accent text-6xl font-bold mb-4 animate-glow">
            ॐ
          </div>
          <h1 className="heading-sacred">Free Janam Kundli</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Generate your Vedic birth chart instantly
          </p>
          <p className="text-accent font-serif text-lg mt-2">
            जन्म कुंडली
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-sacred">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card-sacred">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Enter Your Birth Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <Label>Gender *</Label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="text-primary"
                      />
                      <span className="text-foreground">Male</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="text-primary"
                      />
                      <span className="text-foreground">Female</span>
                    </label>
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                {/* Time of Birth */}
                <div>
                  <Label htmlFor="tob">Time of Birth *</Label>
                  <Input
                    id="tob"
                    type="time"
                    value={formData.timeOfBirth}
                    onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                    className="mt-2"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Exact time is important for accurate predictions
                  </p>
                </div>

                {/* Place of Birth */}
                <div>
                  <Label htmlFor="pob">Place of Birth *</Label>
                  <Input
                    id="pob"
                    type="text"
                    placeholder="City, State, Country"
                    value={formData.placeOfBirth}
                    onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Star className="mr-2 h-5 w-5" />
                  Generate Free Kundli
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to receive your Kundli report via email
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* What's Included */}
              <div className="card-sacred bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  What's Included in Free Kundli
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">Complete birth chart (Lagna Chart)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">Planetary positions and houses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">Nakshatra and Rashi details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">Dasha periods (Vimshottari)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">Basic personality insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">Downloadable PDF report</span>
                  </li>
                </ul>
              </div>

              {/* Detailed Report CTA */}
              <div className="card-sacred bg-gradient-sacred text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 pattern-mandala opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">
                    Want a Detailed Analysis?
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get comprehensive predictions, remedies, and personalized guidance from our expert astrologer
                  </p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <span>✦</span> Career & Finance Predictions
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✦</span> Health & Wellness Guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✦</span> Marriage & Relationship Insights
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✦</span> Gemstone & Remedy Suggestions
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Download className="mr-2 h-4 w-4" />
                    Detailed Report - ₹999
                  </Button>
                </div>
              </div>

              {/* Why Accurate Details Matter */}
              <div className="card-sacred">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Why Accurate Details Matter
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your birth time determines the Lagna (Ascendant) and house cusps, which are crucial 
                  for accurate predictions. Even a few minutes difference can significantly alter your 
                  chart. If exact time is unknown, consult with us for rectification methods.
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
