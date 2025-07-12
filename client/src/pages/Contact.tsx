import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Car,
  Bus,
  Navigation
} from "lucide-react";

const Contact = () => {
  const handlePhoneCall = () => {
    window.open("tel:+919766606154", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to get in touch with Dr. Neha's Dental Care.";
    const whatsappUrl = `https://wa.me/+919766606154?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:info@nehadentalclinic.com", "_self");
  };

  const handleDirections = () => {
    // Replace with actual Google Maps link for the clinic
    const address = "Dr. Neha's Dental Care, Kandev Nagar, Pune, Maharashtra";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, "_blank");
  };

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Ample parking space available in front of the clinic"
    },
    {
      icon: Bus,
      title: "Public Transport",
      description: "Bus stop nearby - Route 106, 132, 145"
    },
    {
      icon: Navigation,
      title: "Landmarks",
      description: "Near XYZ Mall, opposite ABC Bank"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for appointments, inquiries, or emergency dental care. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handlePhoneCall}>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+91 97666 06154</p>
                      <p className="text-sm text-primary">Click to call</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleWhatsApp}>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-green-500/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">+91 97666 06154</p>
                      <p className="text-sm text-green-600">Message us instantly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleEmail}>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@nehadentalclinic.com</p>
                      <p className="text-sm text-blue-600">Send us an email</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Clinic Hours */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Clinic Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Emergency</span>
                      <span className="font-medium text-red-500">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  How to Reach Us
                </h3>
                <div className="space-y-4">
                  {transportOptions.map((option, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                        <option.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Address */}
          <div className="space-y-8">
            {/* Address */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Our Location
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Dr. Neha's Dental Care</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Shop No. 15, Ground Floor<br />
                      Kandev Nagar, Near City Mall<br />
                      Pune, Maharashtra 411014<br />
                      India
                    </p>
                  </div>
                  <Button 
                    onClick={handleDirections}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Find Us on the Map
                </h3>
                {/* Google Maps Embed Placeholder */}
                <div className="bg-primary/5 rounded-lg p-8 text-center border-2 border-dashed border-primary/20 min-h-[300px] flex items-center justify-center">
                  <div>
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Interactive Google Maps will appear here
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={handleDirections}
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
                {/* 
                Actual Google Maps embed would look like:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1234567890!2d73.8567890!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjUiTiA3M8KwNTEnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
                */}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Dental Emergency?
                </h3>
                <p className="opacity-90 mb-4">
                  For urgent dental care outside regular hours, call our emergency hotline.
                </p>
                <Button 
                  onClick={handlePhoneCall}
                  variant="secondary"
                  className="w-full bg-white text-red-600 hover:bg-white/90"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: +91 97666 06154
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to book your appointment or get answers to your dental care questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open("https://calendly.com/nehadental", "_blank")}
              size="lg" 
              className="bg-primary hover:bg-primary/90"
            >
              Book Online
            </Button>
            <Button 
              onClick={handleWhatsApp}
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;