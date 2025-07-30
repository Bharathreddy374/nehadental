import { useState } from "react";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PicktimeWidget from "./PicktimeWidget";

const FloatingBookingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={toggleWidget}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white shadow-lg rounded-full w-14 h-14 p-0"
        size="lg"
        aria-label="Book Appointment"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Calendar className="h-6 w-6" />
        )}
      </Button>

      {/* Overlay and Widget */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:h-auto z-50">
            <Card className="h-full md:h-auto max-h-[90vh] overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Book Your Appointment</span>
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleWidget}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <div className="h-[500px] md:h-[600px]">
                  <PicktimeWidget height={500} className="h-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingBookingButton;