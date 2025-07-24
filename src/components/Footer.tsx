import { MapPin, Phone, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="font-scoreboard text-2xl text-primary mb-4">
              Final Score
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Stevens Point's premier sports bar, serving great food, cold drinks, 
              and creating unforgettable memories since day one.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>88% Recommend</span>
              <span className="text-primary">★★★★★</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-scoreboard text-primary text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/menu" className="block text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link to="/specials" className="block text-muted-foreground hover:text-primary transition-colors">
                Daily Specials
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-scoreboard text-primary text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>908 Maria Dr</div>
                  <div>Stevens Point, WI</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:715-343-0533" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  715-343-0533
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Final Score Sports Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;