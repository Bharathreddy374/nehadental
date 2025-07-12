import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Calendar, Shield, Zap, Smile, Award } from "lucide-react";
import dentalHero from "@/assets/dental-hero.jpg";

const Home = () => {
  const handleBookNow = () => {
    // This will be replaced with actual Calendly integration
    window.open("https://calendly.com/nehadental", "_blank");
  };

  const services = [
    {
      icon: Shield,
      title: "Root Canal",
      description: "Pain-free root canal treatment with advanced technology"
    },
    {
      icon: Smile,
      title: "Braces",
      description: "Invisible and traditional braces for perfect smile alignment"
    },
    {
      icon: Award,
      title: "Implants",
      description: "Permanent tooth replacement with natural-looking results"
    },
    {
      icon: Zap,
      title: "Whitening",
      description: "Professional teeth whitening for a brighter smile"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Pune's Trusted{" "}
                <span className="text-primary">Smile Partner</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Experience world-class dental care with a gentle touch. We make your smile our priority with modern technology and personalized treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleBookNow}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Online Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={dentalHero}
                alt="Modern dental clinic interior"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Dental Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care with state-of-the-art technology and experienced professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              What Our Patients Say
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold">4.9</span>
                  <span className="text-muted-foreground">/ 5</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-4">
                "Excellent service and care! Dr. Neha and her team made my dental experience comfortable and stress-free. Highly recommended!"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">R</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Rahul Sharma</p>
                  <p className="text-sm text-muted-foreground">Verified Google Review</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                Based on 150+ Google Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for Your Best Smile?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Book your consultation today and take the first step towards a healthier, brighter smile.
          </p>
          <Button 
            onClick={handleBookNow}
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Your Visit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;