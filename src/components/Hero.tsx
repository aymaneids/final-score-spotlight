import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-sports-bar.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-scoreboard text-4xl md:text-6xl lg:text-7xl text-primary mb-6 text-neon">
            Final Score
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground mb-4 font-semibold">
            Your Home for Great Food, Cold Drinks, and Every Game
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The Best Sports Bar in Stevens Point, WI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/menu" className="flex items-center space-x-2">
                <span>View Our Menu</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="sports" size="lg" asChild>
              <Link to="/specials" className="flex items-center space-x-2">
                <span>See Daily Specials</span>
                <Clock className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="sports-card">
              <h3 className="font-scoreboard text-primary text-lg mb-2">Dine-In</h3>
              <p className="text-muted-foreground">Full service dining with the best view of every game</p>
            </div>
            <div className="sports-card">
              <h3 className="font-scoreboard text-primary text-lg mb-2">Outdoor Seating</h3>
              <p className="text-muted-foreground">Enjoy your meal on our spacious patio</p>
            </div>
            <div className="sports-card">
              <h3 className="font-scoreboard text-primary text-lg mb-2">In-Store Pickup</h3>
              <p className="text-muted-foreground">Quick and convenient takeout service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;