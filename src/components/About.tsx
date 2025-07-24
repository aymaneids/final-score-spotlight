import { Star, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Your Neighborhood Sports Bar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Final Score, we're more than just a sports bar – we're your home away from home. 
                Located in the heart of Stevens Point, WI, we've been serving up great food, cold drinks, 
                and unforgettable memories since our doors first opened.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you're catching the big game with friends, enjoying a family dinner, or just 
                looking for a place to unwind after work, Final Score has something for everyone. 
                Our commitment to quality food and exceptional service has made us a local favorite.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="text-foreground font-semibold ml-2">
                  88% Recommend (Facebook Reviews)
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="sports-card text-center">
                <div className="feature-icon mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-scoreboard text-primary text-sm mb-1">Community</h4>
                <p className="text-xs text-muted-foreground">Local favorite since day one</p>
              </div>
              <div className="sports-card text-center">
                <div className="feature-icon mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-scoreboard text-primary text-sm mb-1">Quality</h4>
                <p className="text-xs text-muted-foreground">Fresh ingredients daily</p>
              </div>
              <div className="sports-card text-center">
                <div className="feature-icon mx-auto mb-3">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-scoreboard text-primary text-sm mb-1">Passion</h4>
                <p className="text-xs text-muted-foreground">We love what we do</p>
              </div>
              <div className="sports-card text-center">
                <div className="feature-icon mx-auto mb-3">
                  <Star className="w-6 h-6" />
                </div>
                <h4 className="font-scoreboard text-primary text-sm mb-1">Experience</h4>
                <p className="text-xs text-muted-foreground">Every visit is special</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;