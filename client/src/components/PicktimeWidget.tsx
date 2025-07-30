import { useEffect, useState } from "react";
import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PicktimeWidgetProps {
  businessUrl?: string;
  height?: number;
  className?: string;
}

const PicktimeWidget = ({ 
  businessUrl = "dr-neha-dental-care", 
  height = 600,
  className = "" 
}: PicktimeWidgetProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const picktimeUrl = `https://www.picktime.com/booking/${businessUrl}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true);
      }
    }, 10000); // Show fallback if iframe doesn't load within 10 seconds

    return () => clearTimeout(timer);
  }, [isLoaded]);

  const handleDirectBooking = () => {
    window.open(picktimeUrl, "_blank", "noopener,noreferrer");
  };

  if (hasError) {
    return (
      <div className={`bg-white rounded-lg border border-primary/20 overflow-hidden ${className}`}>
        <div className="bg-primary/5 p-4 border-b border-primary/10">
          <div className="flex items-center justify-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Book Your Appointment</span>
          </div>
        </div>
        
        <div className="p-8 text-center space-y-4">
          <Calendar className="h-16 w-16 text-primary mx-auto" />
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Book?</h3>
            <p className="text-muted-foreground mb-6">
              Click below to access our free online booking system
            </p>
            <Button 
              onClick={handleDirectBooking}
              className="bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p>✓ Choose your preferred date and time</p>
            <p>✓ Select consultation type</p>
            <p>✓ Instant confirmation</p>
            <p>✓ Automatic reminders</p>
          </div>
        </div>
        
        <div className="bg-primary/5 p-3 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by Picktime - Free & Secure Booking System
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg border border-primary/20 overflow-hidden ${className}`}>
      <div className="bg-primary/5 p-4 border-b border-primary/10">
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span className="font-semibold text-primary">Book Your Appointment</span>
        </div>
      </div>
      
      <div className="relative">
        <iframe 
          src={picktimeUrl}
          width="100%" 
          height={height}
          style={{ border: 'none', minHeight: `${height}px` }}
          title="Book Appointment with Dr. Neha's Dental Care"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
        
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
              <p className="text-sm text-muted-foreground">Loading booking system...</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-primary/5 p-3 text-center">
        <p className="text-xs text-muted-foreground">
          Powered by Picktime - Free & Secure Booking System
        </p>
      </div>
    </div>
  );
};

export default PicktimeWidget;