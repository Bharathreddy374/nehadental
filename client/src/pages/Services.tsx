import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Smile, 
  Award, 
  Zap, 
  Clock, 
  Heart, 
  Users, 
  CheckCircle,
  Calendar
} from "lucide-react";

const Services = () => {
  const handleBookService = (service: string) => {
    const message = `Hi! I'd like to book an appointment for ${service} at Dr. Neha's Dental Care.`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const services = [
    {
      icon: Shield,
      title: "Root Canal Treatment",
      description: "Pain-free root canal therapy using advanced rotary endodontics",
      features: ["Single sitting treatment", "Digital X-rays", "Laser therapy", "Pain management"],
      duration: "1-2 visits",
      price: "Starting ₹3,500",
      color: "bg-blue-500"
    },
    {
      icon: Smile,
      title: "Orthodontic Braces",
      description: "Transform your smile with metal, ceramic, or invisible braces",
      features: ["Free consultation", "3D treatment planning", "Regular monitoring", "Retention care"],
      duration: "12-24 months",
      price: "Starting ₹25,000",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Dental Implants",
      description: "Permanent tooth replacement with titanium implants",
      features: ["German quality implants", "Computer-guided surgery", "Immediate loading", "Lifetime warranty"],
      duration: "3-6 months",
      price: "Starting ₹35,000",
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter, confident smile",
      features: ["In-office bleaching", "Custom trays", "Sensitivity-free", "Instant results"],
      duration: "1 hour",
      price: "Starting ₹8,000",
      color: "bg-yellow-500"
    },
    {
      icon: Heart,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, crowns, and aesthetic treatments",
      features: ["Porcelain veneers", "Smile design", "Digital preview", "Natural results"],
      duration: "2-3 visits",
      price: "Starting ₹15,000",
      color: "bg-pink-500"
    },
    {
      icon: Users,
      title: "Pediatric Dentistry",
      description: "Gentle dental care for children in a fun, comfortable environment",
      features: ["Child-friendly approach", "Preventive care", "Fluoride treatment", "Habit counseling"],
      duration: "30-45 minutes",
      price: "Starting ₹1,500",
      color: "bg-orange-500"
    }
  ];

  const additionalServices = [
    "Oral Surgery & Extractions",
    "Gum Disease Treatment",
    "Dentures & Partial Dentures", 
    "Emergency Dental Care",
    "Oral Cancer Screening",
    "TMJ Treatment"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Dental Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dental care using the latest technology and techniques. 
            We provide personalized treatment plans to meet your unique needs.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${service.color} rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <Button 
                    onClick={() => handleBookService(service.title)}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Neha and discover the best treatment plan for your dental needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open("https://calendly.com/nehadental", "_blank")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => handleBookService("general consultation")}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;