import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LocationHours from '@/components/LocationHours';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Facebook, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Final Score. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="section-title">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions? Want to make a reservation? Get in touch with us - 
              we'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="sports-card">
                <h2 className="font-scoreboard text-2xl text-primary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button type="submit" variant="sports" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="sports-card">
                  <h2 className="font-scoreboard text-2xl text-primary mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="feature-icon">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-scoreboard text-primary text-lg mb-2">Call Us</h3>
                        <p className="text-muted-foreground mb-2">
                          For reservations, takeout orders, or general questions
                        </p>
                        <Button variant="sports" asChild>
                          <a href="tel:715-343-0533">715-343-0533</a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="feature-icon">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-scoreboard text-primary text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground mb-2">
                          Send us your feedback or questions
                        </p>
                        <Button variant="outline" asChild>
                          <a href="mailto:info@finalscore.com">info@finalscore.com</a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="feature-icon">
                        <Facebook className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-scoreboard text-primary text-lg mb-2">Follow Us</h3>
                        <p className="text-muted-foreground mb-2">
                          Stay updated with our latest specials and events
                        </p>
                        <Button variant="outline" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            Facebook Page
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sports-card">
                  <h3 className="font-scoreboard text-primary text-xl mb-4">Important Notes</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>• We don't take reservations, but call ahead for large groups</p>
                    <p>• Online ordering coming soon!</p>
                    <p>• Follow us on Facebook for daily special updates</p>
                    <p>• Private event inquiries welcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <LocationHours />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;