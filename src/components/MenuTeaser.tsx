import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import burgerImage from '@/assets/burger-delicious.jpg';
import pizzaImage from '@/assets/pizza-16-inch.jpg';
import fishImage from '@/assets/fish-fry-special.jpg';

const MenuTeaser = () => {
  const featuredItems = [
    {
      name: "The California Burger",
      description: "Our signature burger with avocado, bacon, Swiss cheese, and special sauce",
      price: "$14.99",
      image: burgerImage,
      category: "From The Yard"
    },
    {
      name: "16\" Deluxe Pizza",
      description: "Large pizza loaded with pepperoni, sausage, mushrooms, and mozzarella",
      price: "$18.99",
      image: pizzaImage,
      category: "16\" Pizza"
    },
    {
      name: "Friday Fish Fry",
      description: "Beer-battered cod with fries, coleslaw, and homemade tartar sauce",
      price: "$16.99",
      image: fishImage,
      category: "Fishing Night"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Fan Favorites</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover why our customers keep coming back for these championship dishes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <div key={index} className="menu-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                  {item.price}
                </div>
                <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>
              </div>
              <h3 className="font-scoreboard text-xl text-primary mb-2">
                {item.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="sports" size="lg" asChild>
            <Link to="/menu" className="flex items-center space-x-2">
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuTeaser;