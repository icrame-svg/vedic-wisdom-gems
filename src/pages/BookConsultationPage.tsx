import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Video, Phone, MapPin, Clock } from "lucide-react";

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.consultationType) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Consultation request received! We'll contact you shortly via WhatsApp.");
    
    // In a real app, this would send the booking to backend
    const whatsappNumber = "919876543210";
    const message = `Namaste! I would like to book a ${formData.service} consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.consultationType}\nPreferred Date: ${formData.preferredDate || "Flexible"}\n\nMessage: ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-cosmic overflow-hidden">
        <div className="absolute inset-0 pattern-mandala opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="text-accent text-6xl font-bold mb-4 animate-glow">
            ✦
          </div>
          <h1 className="heading-sacred">Book Your Consultation</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Take the first step towards cosmic clarity and divine guidance
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-sacred">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 card-sacred">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Consultation Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service */}
                  <div>
                    <Label htmlFor="service">Select Service *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kundli">Kundli Analysis</SelectItem>
                        <SelectItem value="matching">Marriage Matching</SelectItem>
                        <SelectItem value="gemstone">Gemstone Consultation</SelectItem>
                        <SelectItem value="vastu">Vastu Consultation</SelectItem>
                        <SelectItem value="career">Career Forecast</SelectItem>
                        <SelectItem value="numerology">Numerology</SelectItem>
                        <SelectItem value="muhurat">Muhurat Selection</SelectItem>
                        <SelectItem value="health">Health Astrology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <Label htmlFor="type">Consultation Type *</Label>
                    <Select value={formData.consultationType} onValueChange={(value) => setFormData({ ...formData, consultationType: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Call</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="inperson">In-Person (Mumbai)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="mt-2"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <Label htmlFor="time">Preferred Time Slot</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                        <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Your Concerns / Questions</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your specific concerns or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Confirm Booking via WhatsApp
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  After clicking, you'll be redirected to WhatsApp to confirm your booking
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Consultation Types */}
              <div className="card-sacred">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Consultation Options
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Video className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Video Call</p>
                      <p className="text-sm text-muted-foreground">Face-to-face consultation via Zoom/Google Meet</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Phone Call</p>
                      <p className="text-sm text-muted-foreground">Direct phone consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">In-Person</p>
                      <p className="text-sm text-muted-foreground">Visit our center in Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Prepare */}
              <div className="card-sacred bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  What to Prepare
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    Exact birth date, time, and place
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    List of specific questions/concerns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    Previous astrology reports (if any)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    Quiet environment for consultation
                  </li>
                </ul>
              </div>

              {/* Timing */}
              <div className="card-sacred">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-bold text-foreground">
                    Consultation Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Mon - Sat:</span> 9:00 AM - 7:00 PM</p>
                  <p><span className="font-semibold text-foreground">Sunday:</span> 10:00 AM - 5:00 PM</p>
                  <p className="text-xs pt-2 text-accent">
                    ⚡ Usually respond within 1 hour
                  </p>
                </div>
              </div>

              {/* Payment Info */}
              <div className="card-sacred bg-gradient-sacred text-primary-foreground">
                <h3 className="text-lg font-bold mb-3">
                  Payment Options
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  We accept all major payment methods
                </p>
                <div className="text-xs space-y-1">
                  <p>• UPI / PhonePe / GPay / Paytm</p>
                  <p>• Credit / Debit Cards</p>
                  <p>• Net Banking</p>
                  <p>• Cash (In-person only)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
