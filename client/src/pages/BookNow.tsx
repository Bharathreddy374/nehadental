import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MessageCircle, 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle,
  AlertCircle
} from "lucide-react";

const BookNow = () => {
  const handleWhatsAppBooking = () => {
    const message = "Hi! I'd like to book an appointment at Dr. Neha's Dental Care. Could you please help me with available slots?";
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePhoneCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const bookingSteps = [
    "Select your preferred date and time",
    "Choose the type of consultation",
    "Fill in your contact details",
    "Receive confirmation via SMS/WhatsApp"
  ];

  const emergencyServices = [
    "Severe toothache",
    "Dental trauma/injury",
    "Broken or knocked-out tooth",
    "Swelling or infection",
    "Lost filling or crown"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your visit with Dr. Neha. Choose from online booking or contact us directly for immediate assistance.
          </p>
        </div>

        {/* Booking Options */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Calendly Booking */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Online Booking
                </h2>
                <p className="text-muted-foreground">
                  Schedule instantly with our online calendar
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {bookingSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>

              {/* Calendly Embed Placeholder */}
              <div className="bg-primary/5 rounded-lg p-8 text-center mb-6 border-2 border-dashed border-primary/20">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Calendly booking widget will appear here
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open("https://calendly.com/nehadental", "_blank")}
                >
                  Open Booking Calendar
                </Button>
              </div>

              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Instant confirmation & reminders
              </div>
            </CardContent>
          </Card>

          {/* Contact Booking */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="bg-green-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Direct Contact
                </h2>
                <p className="text-muted-foreground">
                  Speak with our team for personalized assistance
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <Button 
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </Button>
                
                <Button 
                  onClick={handlePhoneCall}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +91 98765 43210
                </Button>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-amber-800 mb-1">
                      Preferred for urgent appointments
                    </p>
                    <p className="text-sm text-amber-700">
                      For same-day or emergency appointments, contact us directly for faster scheduling.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Need Help Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Need Help Booking?</h3>
              <p className="opacity-90">
                Our friendly team is here to assist you with scheduling and answer any questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handlePhoneCall}
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Button>
              <Button 
                onClick={handleWhatsAppBooking}
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Emergency Dental Care
              </h2>
              <p className="text-muted-foreground">
                Experiencing a dental emergency? We provide urgent care for:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {emergencyServices.map((service, index) => (
                <div key={index} className="flex items-center bg-red-50 rounded-lg p-3 border border-red-100">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Badge className="bg-red-100 text-red-800 mb-4 px-4 py-2">
                Emergency Hotline: +91 98765 43210
              </Badge>
              <p className="text-sm text-muted-foreground">
                Available 24/7 for dental emergencies
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Clinic Hours */}
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Clinic Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency</span>
                    <span className="font-medium text-red-500">24/7 Available</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Location
                </h3>
                <p className="text-muted-foreground mb-4">
                  Dr. Neha's Dental Care<br />
                  123, Kandev Nagar<br />
                  Pune, Maharashtra 411014
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open("https://maps.google.com/", "_blank")}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookNow;