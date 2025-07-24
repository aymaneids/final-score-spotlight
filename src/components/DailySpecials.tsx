import { Button } from '@/components/ui/button';
import { Calendar, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const DailySpecials = () => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  // Get current day for dynamic special
  const dayOfWeek = new Date().getDay();
  const todaysSpecial = getTodaysSpecial(dayOfWeek);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Today's Special</h2>
          <p className="text-muted-foreground text-lg">{today}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="special-highlight text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-primary mr-3" />
              <h3 className="font-scoreboard text-2xl md:text-3xl text-primary">
                {todaysSpecial.name}
              </h3>
              <Star className="w-8 h-8 text-primary ml-3" />
            </div>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
              {todaysSpecial.description}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {todaysSpecial.details}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="sports" size="lg" asChild>
                <Link to="/menu" className="flex items-center space-x-2">
                  <span>View Full Menu</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/specials" className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>All Specials</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Weekly Specials Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="sports-card text-center">
              <div className="feature-icon mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-scoreboard text-primary text-lg mb-2">Meathead Monday</h4>
              <p className="text-muted-foreground">$3.00 off any burger</p>
            </div>
            <div className="sports-card text-center">
              <div className="feature-icon mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-scoreboard text-primary text-lg mb-2">Wing Wednesday</h4>
              <p className="text-muted-foreground">50¢ wings all day</p>
            </div>
            <div className="sports-card text-center">
              <div className="feature-icon mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-scoreboard text-primary text-lg mb-2">Fish Fry Friday</h4>
              <p className="text-muted-foreground">Fresh catch special</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function getTodaysSpecial(dayOfWeek: number) {
  const specials = [
    { // Sunday
      name: "Sunday Funday",
      description: "Game Day Combo Special",
      details: "Get any burger and beer for just $15. Perfect for watching the big game!"
    },
    { // Monday
      name: "Meathead Monday",
      description: "$3.00 Off Any Burger",
      details: "Choose from our signature burgers including The California and The Final Score Burger"
    },
    { // Tuesday
      name: "Taco Tuesday",
      description: "Build Your Own Tacos",
      details: "$2 tacos with your choice of chicken, beef, or fish. Load them up with our fresh toppings!"
    },
    { // Wednesday
      name: "Wing Wednesday",
      description: "50¢ Wings All Day",
      details: "Choose from 12 different sauce options. Perfect with a cold beer!"
    },
    { // Thursday
      name: "Thirsty Thursday",
      description: "$2 Off All Craft Beers",
      details: "Try our local Wisconsin brews and national favorites at a great price"
    },
    { // Friday
      name: "Fish Fry Friday",
      description: "Traditional Wisconsin Fish Fry",
      details: "Beer-battered cod with fries, coleslaw, and tartar sauce. A Stevens Point tradition!"
    },
    { // Saturday
      name: "Saturday Game Day",
      description: "Pizza & Pitcher Special",
      details: "Any 16\" pizza and a pitcher of beer for $25. Perfect for sharing with friends!"
    }
  ];

  return specials[dayOfWeek];
}

export default DailySpecials;