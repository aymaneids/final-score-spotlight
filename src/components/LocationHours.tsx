import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationHours = () => {
  const hours = [
    { day: 'Monday', time: '11:00 AM - 10:00 PM' },
    { day: 'Tuesday', time: '11:00 AM - 10:00 PM' },
    { day: 'Wednesday', time: '11:00 AM - 10:00 PM' },
    { day: 'Thursday', time: '11:00 AM - 10:00 PM' },
    { day: 'Friday', time: '11:00 AM - 11:00 PM' },
    { day: 'Saturday', time: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '12:00 PM - 9:00 PM' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Visit Us Today</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location & Contact */}
            <div className="space-y-8">
              <div className="sports-card">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="feature-icon">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-scoreboard text-primary text-xl mb-2">Location</h3>
                    <p className="text-foreground text-lg font-medium">908 Maria Dr</p>
                    <p className="text-foreground text-lg font-medium">Stevens Point, WI</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="feature-icon">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-scoreboard text-primary text-xl mb-2">Call Us</h3>
                    <Button variant="sports" asChild>
                      <a href="tel:715-343-0533" className="text-lg">
                        715-343-0533
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="sports-card">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="feature-icon">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-scoreboard text-primary text-xl">Hours</h3>
                </div>
                <div className="space-y-3">
                  {hours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                      <span className="font-medium text-foreground">{item.day}</span>
                      <span className="text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="sports-card">
              <h3 className="font-scoreboard text-primary text-xl mb-6">Find Us</h3>
              <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.123456789!2d-89.5123456!3d44.5234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s908%20Maria%20Dr%2C%20Stevens%20Point%2C%20WI!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Final Score Sports Bar Location"
                />
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" asChild>
                  <a 
                    href="https://maps.google.com/?q=908+Maria+Dr,+Stevens+Point,+WI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;