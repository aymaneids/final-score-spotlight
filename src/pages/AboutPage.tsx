import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Star, Users, Award, Heart, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-sports-bar.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Header with Image */}
        <section className="relative py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            <div className="absolute inset-0 bg-background/85" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="section-title text-5xl">About Final Score</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than just a sports bar – we're your home away from home in Stevens Point, WI
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-scoreboard text-3xl text-primary mb-6">Our Story</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Final Score opened its doors with a simple mission: to create a place where 
                    Stevens Point residents could come together to enjoy great food, cold drinks, 
                    and the thrill of watching their favorite teams compete.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    What started as a dream to build the perfect neighborhood sports bar has 
                    grown into a beloved community gathering place. We take pride in serving 
                    fresh, quality food and providing an atmosphere where everyone feels welcome.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    From championship celebrations to casual weeknight dinners, Final Score 
                    has been part of countless memories. We're not just serving food and drinks – 
                    we're building a community, one game at a time.
                  </p>
                </div>
                
                <div className="sports-card">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-1 text-primary text-3xl mb-2">
                      <Star className="w-8 h-8 fill-current" />
                      <Star className="w-8 h-8 fill-current" />
                      <Star className="w-8 h-8 fill-current" />
                      <Star className="w-8 h-8 fill-current" />
                      <Star className="w-8 h-8 fill-current" />
                    </div>
                    <p className="text-2xl font-scoreboard text-primary">88% Recommend</p>
                    <p className="text-muted-foreground">Based on Facebook Reviews</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-border/30">
                      <span className="text-foreground font-medium">Location</span>
                      <span className="text-muted-foreground">Stevens Point, WI</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border/30">
                      <span className="text-foreground font-medium">Atmosphere</span>
                      <span className="text-muted-foreground">Family Friendly</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border/30">
                      <span className="text-foreground font-medium">Specialty</span>
                      <span className="text-muted-foreground">Sports Viewing</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-foreground font-medium">Dining</span>
                      <span className="text-muted-foreground">Dine-in & Pickup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-scoreboard text-3xl text-primary mb-6">What Makes Us Special</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="sports-card text-center">
                <div className="feature-icon mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-scoreboard text-primary text-lg mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We're proud to be a local gathering place where neighbors become friends 
                  and every customer is part of our family.
                </p>
              </div>
              
              <div className="sports-card text-center">
                <div className="feature-icon mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-scoreboard text-primary text-lg mb-3">Quality Food</h3>
                <p className="text-muted-foreground">
                  Fresh ingredients, made-to-order dishes, and recipes perfected over time. 
                  Every plate is prepared with care and attention.
                </p>
              </div>
              
              <div className="sports-card text-center">
                <div className="feature-icon mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-scoreboard text-primary text-lg mb-3">Passionate Service</h3>
                <p className="text-muted-foreground">
                  Our team genuinely loves what they do. From the kitchen to the front of house, 
                  we're committed to making your experience exceptional.
                </p>
              </div>
              
              <div className="sports-card text-center">
                <div className="feature-icon mx-auto mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="font-scoreboard text-primary text-lg mb-3">Game Day Atmosphere</h3>
                <p className="text-muted-foreground">
                  Multiple big screens, comfortable seating, and an electric atmosphere 
                  that makes every game feel like you're in the stadium.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Community */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-scoreboard text-3xl text-primary mb-6">Proud to Call Stevens Point Home</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Stevens Point is more than our location – it's our community. We're proud to be part 
                of this vibrant city and committed to supporting local events, teams, and causes that 
                make our community stronger.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-primary mb-8">
                <MapPin className="w-6 h-6" />
                <span className="text-xl font-semibold">908 Maria Dr, Stevens Point, WI</span>
              </div>
              
              <p className="text-muted-foreground">
                Whether you're a lifelong local or just visiting Stevens Point, we invite you to 
                experience what makes Final Score special. Come for the food, stay for the atmosphere, 
                and leave as part of our family.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;