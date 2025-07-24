import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import DailySpecials from '@/components/DailySpecials';
import MenuTeaser from '@/components/MenuTeaser';
import About from '@/components/About';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DailySpecials />
      <MenuTeaser />
      <About />
      <LocationHours />
      <Footer />
    </div>
  );
};

export default Index;
