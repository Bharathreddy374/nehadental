import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  GraduationCap, 
  Users, 
  Clock, 
  Heart, 
  Shield,
  Star,
  Calendar,
  CheckCircle
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "BDS",
      description: "Advanced degree in Conservative Dentistry"
    },
    {
      icon: Users,
      title: "5000+",
      description: "Happy patients treated"
    },
    {
      icon: Clock,
      title: "8+ Years",
      description: "Professional experience"
    },
    {
      icon: Award,
      title: "Certified",
      description: "Advanced dental procedures"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is personalized to meet individual needs and comfort levels."
    },
    {
      icon: Shield,
      title: "Safety & Hygiene",
      description: "Strict sterilization protocols and international safety standards maintained."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Committed to providing the highest quality dental care with latest technology."
    }
  ];

  const services = [
    "Pain-free treatments",
    "Digital X-rays & diagnosis",
    "Laser dentistry",
    "Cosmetic smile makeovers",
    "Emergency dental care",
    "Pediatric dentistry"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Dr. Neha
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated to providing exceptional dental care with a gentle touch and modern approach
          </p>
        </div>

        {/* Doctor Profile */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Dr. Neha Prithviraj Thorat
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Dr. Neha is a highly qualified dental professional with over 8 years of experience 
                in providing comprehensive dental care. She completed her Bachelor of Dental Surgery (BDS) 
                from a prestigious dental college and further specialized 
                in Conservative Dentistry and Endodontics.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Her passion for dentistry stems from her belief that a healthy smile can transform 
                lives. She stays updated with the latest advancements in dental technology and 
                techniques to provide the best possible care to her patients.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary">Conservative Dentistry</Badge>
                <Badge className="bg-primary/10 text-primary">Endodontics</Badge>
                <Badge className="bg-primary/10 text-primary">Cosmetic Dentistry</Badge>
                <Badge className="bg-primary/10 text-primary">Pediatric Care</Badge>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-primary">DN</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Neha Prithviraj Thorat</h3>
                <p className="text-primary font-semibold mb-4">BDS - Conservative Dentistry</p>
                <p className="text-muted-foreground">
                  "Your smile is my priority"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Professional Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold ml-2">4.9</span>
                </div>
                <p className="text-muted-foreground mb-2">Patient Satisfaction</p>
                <p className="text-sm text-muted-foreground">Based on 150+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Quality Dental Care?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book your consultation with Dr. Neha and take the first step towards a healthier, more confident smile.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open("https://calendly.com/nehadental", "_blank")}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;