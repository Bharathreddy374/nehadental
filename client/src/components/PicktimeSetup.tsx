import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  Users, 
  Phone,
  Mail,
  CreditCard,
  Settings,
  Globe
} from "lucide-react";

const PicktimeSetup = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const setupSteps = [
    {
      title: "Create Picktime Account",
      description: "Sign up for a free Picktime account",
      icon: Users,
      color: "bg-blue-500",
      action: () => window.open("https://www.picktime.com/", "_blank"),
      actionText: "Sign Up Free"
    },
    {
      title: "Configure Business Profile",
      description: "Set up Dr. Neha's Dental Care business information",
      icon: Settings,
      color: "bg-green-500",
      details: [
        "Business Name: Dr. Neha's Dental Care",
        "Business Type: Healthcare - Dental",
        "Hours: 9:00 AM - 6:30 PM (Mon-Sat)",
        "Break: 12:00 PM - 2:00 PM"
      ]
    },
    {
      title: "Add Dental Services",
      description: "Configure appointment types and durations",
      icon: Calendar,
      color: "bg-purple-500",
      details: [
        "General Consultation (30 min)",
        "Dental Cleaning (45 min)",
        "Root Canal Treatment (60 min)",
        "Dental Filling (30 min)",
        "Emergency Appointment (30 min)"
      ]
    },
    {
      title: "Customize Booking Page",
      description: "Brand your booking page with logo and colors",
      icon: Globe,
      color: "bg-orange-500",
      details: [
        "Upload clinic logo",
        "Use teal color scheme (#14b8a6)",
        "Add welcome message",
        "Configure booking form fields"
      ]
    },
    {
      title: "Set Up Notifications",
      description: "Configure email and SMS reminders",
      icon: Mail,
      color: "bg-red-500",
      details: [
        "Email confirmations",
        "24-hour reminder emails",
        "2-hour reminder emails",
        "SMS reminders (optional)"
      ]
    },
    {
      title: "Get Booking URL",
      description: "Copy your public booking page URL",
      icon: ExternalLink,
      color: "bg-indigo-500",
      details: [
        "Go to Online Booking section",
        "Copy public booking page link",
        "Format: picktime.com/booking/your-clinic-name",
        "Update website integration"
      ]
    },
    {
      title: "Test Integration",
      description: "Verify booking system works correctly",
      icon: CheckCircle,
      color: "bg-teal-500",
      details: [
        "Make a test appointment",
        "Check email confirmations",
        "Verify calendar sync",
        "Test on mobile devices"
      ]
    }
  ];

  const benefits = [
    { icon: CreditCard, text: "Completely free forever" },
    { icon: Clock, text: "24/7 online booking" },
    { icon: Phone, text: "Automated reminders" },
    { icon: Users, text: "Patient management" },
    { icon: Calendar, text: "Calendar integration" },
    { icon: Settings, text: "Easy administration" }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <span>Picktime Booking System Setup</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Why Picktime?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <benefit.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button 
                  onClick={() => window.open("https://www.picktime.com/", "_blank")}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get Started with Picktime
                </Button>
              </div>
            </div>

            {/* Setup Progress */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Setup Progress</h3>
              <div className="space-y-3">
                {setupSteps.map((step, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-start space-x-3">
                      <button
                        onClick={() => toggleStep(index)}
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          completedSteps.includes(index)
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {completedSteps.includes(index) && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </button>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <div className={`p-1 rounded ${step.color} bg-opacity-20`}>
                            <step.icon className={`h-4 w-4 ${step.color.replace('bg-', 'text-')}`} />
                          </div>
                          <h4 className="font-medium text-sm">{step.title}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                        
                        {step.details && (
                          <ul className="mt-2 space-y-1">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {step.action && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={step.action}
                            className="mt-2 text-xs"
                          >
                            {step.actionText}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Integration Complete!</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Once you complete the setup, patients can book appointments directly from your website 
                  using the embedded booking widget on the "Book Now" page and the floating booking button.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PicktimeSetup;