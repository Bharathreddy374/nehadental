import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import logoPath from "@assets/Final dental logo_1753720672688.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoPath} 
                alt="Dr. Neha's Dental Care" 
                className="h-16 w-auto object-contain logo-enhanced logo-no-bg"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">Dr. Neha's Dental Care</h3>
                <p className="text-sm text-muted-foreground">Your Trusted Smile Partner</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Experience world-class dental care with a gentle touch. We provide comprehensive 
              dental services using modern technology and personalized treatment approaches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Dr. Neha
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 9AM - 8PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">info@nehadentalcare.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">123 Health Street</p>
                  <p className="text-muted-foreground">Pune, Maharashtra 411001</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Emergency: 24/7</p>
                  <p className="text-sm text-muted-foreground">Call for urgent care</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Dr. Neha's Dental Care. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;