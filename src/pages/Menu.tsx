import { Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import burgerImage from '@/assets/burger-delicious.jpg';
import pizzaImage from '@/assets/pizza-16-inch.jpg';
import fishImage from '@/assets/fish-fry-special.jpg';

const Menu = () => {
  const menuSections = [
    {
      title: "From The Bullpen",
      subtitle: "Appetizers & Starters",
      items: [
        { name: "Buffalo Wings", description: "1 lb of wings with your choice of sauce", price: "$12.99" },
        { name: "Loaded Nachos", description: "House-made chips with cheese, jalapeños, and sour cream", price: "$11.99" },
        { name: "Mozzarella Sticks", description: "Golden fried with marinara dipping sauce", price: "$8.99" },
        { name: "Onion Rings", description: "Beer-battered and crispy", price: "$7.99" },
        { name: "Potato Skins", description: "Loaded with cheese, bacon, and chives", price: "$9.99" },
      ]
    },
    {
      title: "From The Yard",
      subtitle: "Burgers & Sandwiches",
      items: [
        { name: "The California Burger", description: "Avocado, bacon, Swiss cheese, lettuce, tomato, special sauce", price: "$14.99", featured: true, image: burgerImage },
        { name: "Final Score Burger", description: "Double patty, cheddar, bacon, BBQ sauce, onion rings", price: "$16.99" },
        { name: "Buffalo Chicken Sandwich", description: "Crispy chicken breast tossed in buffalo sauce", price: "$13.99" },
        { name: "Philly Cheesesteak", description: "Sliced ribeye with peppers, onions, and provolone", price: "$15.99" },
        { name: "Fish Sandwich", description: "Beer-battered cod with tartar sauce and coleslaw", price: "$12.99" },
      ]
    },
    {
      title: "16\" Pizza",
      subtitle: "Large Pizzas Perfect for Sharing",
      items: [
        { name: "Deluxe Pizza", description: "Pepperoni, sausage, mushrooms, green peppers, onions", price: "$18.99", featured: true, image: pizzaImage },
        { name: "Meat Lovers", description: "Pepperoni, sausage, bacon, ham", price: "$19.99" },
        { name: "Veggie Supreme", description: "Mushrooms, peppers, onions, olives, tomatoes", price: "$17.99" },
        { name: "Buffalo Chicken", description: "Buffalo chicken, red onions, mozzarella, ranch drizzle", price: "$18.99" },
        { name: "BBQ Pulled Pork", description: "BBQ sauce, pulled pork, red onions, cheddar", price: "$19.99" },
      ]
    },
    {
      title: "Fishing Night Fish Fry",
      subtitle: "Wisconsin Tradition",
      items: [
        { name: "Beer-Battered Cod", description: "Fresh cod with fries, coleslaw, and tartar sauce", price: "$16.99", featured: true, image: fishImage },
        { name: "Grilled Salmon", description: "Atlantic salmon with rice pilaf and vegetables", price: "$19.99" },
        { name: "Fish Tacos", description: "Three soft tacos with crispy fish and slaw", price: "$14.99" },
        { name: "Shrimp Basket", description: "Breaded shrimp with fries and cocktail sauce", price: "$15.99" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title">Our Menu</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              From game-day appetizers to championship burgers, every dish is prepared 
              with fresh ingredients and served with a winning attitude.
            </p>
            <Button variant="outline" className="flex items-center space-x-2 mx-auto">
              <Download className="w-4 h-4" />
              <span>Download PDF Menu</span>
            </Button>
          </div>
        </section>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-scoreboard text-3xl text-primary mb-2">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-lg">{section.subtitle}</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`menu-item ${item.featured ? 'border-primary' : ''}`}>
                      {item.image && (
                        <div className="relative mb-4 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-32 object-cover"
                          />
                          {item.featured && (
                            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                              <Star className="w-3 h-3" />
                              <span>Featured</span>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-scoreboard text-lg text-primary">
                          {item.name}
                        </h3>
                        <span className="text-foreground font-semibold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-scoreboard text-3xl text-primary mb-4">
              Ready to Order?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Call ahead for pickup or stop by for dine-in service
            </p>
            <Button variant="sports" size="lg" asChild>
              <a href="tel:715-343-0533" className="flex items-center space-x-2">
                <span>Call: 715-343-0533</span>
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;