import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, Star } from 'lucide-react';

const Specials = () => {
  const weeklySpecials = [
    {
      day: "Monday",
      name: "Meathead Monday",
      description: "$3.00 Off Any Burger",
      details: "Choose from our signature burgers including The California and The Final Score Burger. Perfect way to beat the Monday blues!",
      time: "All Day"
    },
    {
      day: "Tuesday", 
      name: "Taco Tuesday",
      description: "Build Your Own Tacos - $2 Each",
      details: "Choose from chicken, beef, or fish. Load them up with our fresh toppings including lettuce, tomatoes, cheese, and sour cream.",
      time: "All Day"
    },
    {
      day: "Wednesday",
      name: "Wing Wednesday", 
      description: "50¢ Wings All Day",
      details: "Choose from 12 different sauce options including Buffalo, BBQ, Honey Garlic, and our signature Final Score sauce.",
      time: "All Day"
    },
    {
      day: "Thursday",
      name: "Thirsty Thursday",
      description: "$2 Off All Craft Beers",
      details: "Try our local Wisconsin brews and national favorites. Perfect pairing with any of our appetizers.",
      time: "4 PM - Close"
    },
    {
      day: "Friday",
      name: "Fish Fry Friday",
      description: "Traditional Wisconsin Fish Fry",
      details: "Beer-battered cod with fries, coleslaw, and tartar sauce. A Stevens Point tradition you can't miss!",
      time: "4 PM - Close"
    },
    {
      day: "Saturday",
      name: "Saturday Game Day",
      description: "Pizza & Pitcher Special",
      details: "Any 16\" pizza and a pitcher of beer for just $25. Perfect for sharing with friends during the big game!",
      time: "All Day"
    },
    {
      day: "Sunday",
      name: "Sunday Funday",
      description: "Game Day Combo Special",
      details: "Any burger and beer for just $15. Relax and enjoy the games with this unbeatable combo.",
      time: "12 PM - Close"
    }
  ];

  const events = [
    {
      title: "March Madness Watch Parties",
      description: "Join us for all the tournament action with special drink prices and bracket contests",
      date: "March 2024"
    },
    {
      title: "Super Bowl Party",
      description: "The biggest game of the year with food specials, prize giveaways, and the best atmosphere in town",
      date: "February 2024"
    },
    {
      title: "UFC Fight Nights",
      description: "Watch all the big fights on our big screens with fight night drink specials",
      date: "Monthly"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title">Daily Specials & Events</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every day brings something special at Final Score. From Monday burger deals 
              to Friday fish fry, we've got your week covered with great food and unbeatable prices.
            </p>
          </div>
        </section>

        {/* Weekly Specials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-scoreboard text-3xl text-primary text-center mb-12">
              Weekly Specials
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {weeklySpecials.map((special, index) => (
                <div key={index} className="sports-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="font-scoreboard text-primary text-sm">
                            {special.day.substring(0, 3).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-scoreboard text-xl text-primary">
                            {special.name}
                          </h3>
                          <p className="text-muted-foreground text-sm flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {special.time}
                          </p>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {special.description}
                      </h4>
                      <p className="text-muted-foreground">
                        {special.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Events */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-scoreboard text-3xl text-primary text-center mb-12">
              Special Events
            </h2>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="sports-card text-center">
                  <div className="feature-icon mx-auto mb-4">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="font-scoreboard text-primary text-lg mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <div className="inline-flex items-center space-x-1 text-sm text-primary font-semibold">
                    <Star className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-scoreboard text-3xl text-primary mb-4">
              Never Miss a Special
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Follow us on Facebook to stay updated with our latest specials, 
              events, and game-day promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
              >
                Follow on Facebook
              </a>
              <a 
                href="tel:715-343-0533"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Call: 715-343-0533
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Specials;