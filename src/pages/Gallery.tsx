import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-sports-bar.jpg';
import burgerImage from '@/assets/burger-delicious.jpg';
import pizzaImage from '@/assets/pizza-16-inch.jpg';
import fishImage from '@/assets/fish-fry-special.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      src: heroImage,
      alt: "Final Score Sports Bar Interior",
      category: "Atmosphere"
    },
    {
      src: burgerImage,
      alt: "The California Burger",
      category: "Food"
    },
    {
      src: pizzaImage,
      alt: "16-inch Deluxe Pizza",
      category: "Food"
    },
    {
      src: fishImage,
      alt: "Friday Fish Fry Special",
      category: "Food"
    },
    {
      src: heroImage,
      alt: "Game Day Atmosphere",
      category: "Events"
    },
    {
      src: burgerImage,
      alt: "Signature Burgers",
      category: "Food"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title">Gallery</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a visual tour of Final Score - from our delicious food to our 
              energetic atmosphere and memorable moments.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg bg-muted">
                    <div className="aspect-square">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-2">
                          {image.category}
                        </div>
                        <h3 className="text-foreground font-semibold text-lg">
                          {image.alt}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-scoreboard text-3xl text-primary text-center mb-12">
                Capture Your Own Memories
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="sports-card text-center">
                  <h3 className="font-scoreboard text-primary text-xl mb-4">Food & Drinks</h3>
                  <p className="text-muted-foreground">
                    Our mouth-watering dishes and ice-cold beverages are always photo-ready. 
                    From juicy burgers to crispy pizza, every plate tells a story.
                  </p>
                </div>
                
                <div className="sports-card text-center">
                  <h3 className="font-scoreboard text-primary text-xl mb-4">Game Day Fun</h3>
                  <p className="text-muted-foreground">
                    The energy during big games is electric! Capture the excitement, 
                    the cheers, and the unforgettable moments with friends.
                  </p>
                </div>
                
                <div className="sports-card text-center">
                  <h3 className="font-scoreboard text-primary text-xl mb-4">Good Times</h3>
                  <p className="text-muted-foreground">
                    Whether it's a casual dinner or a special celebration, 
                    Final Score provides the perfect backdrop for lasting memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-scoreboard text-3xl text-primary mb-4">
              Share Your Final Score Experience
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Tag us in your photos and show the world what makes Final Score special. 
              We love seeing our customers enjoying great food and good times!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
              >
                Follow Us on Facebook
              </a>
              <a 
                href="tel:715-343-0533"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Visit Us Today
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;