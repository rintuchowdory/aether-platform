import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              ◆ Get in Touch
            </span>
            <h1 className="text-5xl font-bold mt-4 mb-6 glow-text">CONTACT US</h1>
            <p className="text-xl text-foreground/70">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="glass-effect p-8 rounded-lg">
              <Mail className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-foreground/70 text-sm">hello@aether.ai</p>
            </div>
            <div className="glass-effect p-8 rounded-lg">
              <Phone className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-foreground/70 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="glass-effect p-8 rounded-lg">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-foreground/70 text-sm">San Francisco, CA</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-12 rounded-lg max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-input border-accent/30 focus:border-accent text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-input border-accent/30 focus:border-accent text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  required
                  rows={6}
                  className="bg-input border-accent/30 focus:border-accent text-foreground placeholder:text-foreground/40"
                />
              </div>

            <Button type="submit" className="glow-button w-full" disabled={submitted}>
              {submitted ? '✓ Message Sent' : 'Send Message'}
            </Button>
            </form>

            {submitted && (
              <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-lg text-center">
                <p className="text-accent font-medium">Thank you! We'll get back to you soon.</p>
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 glow-text">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: 'Is my data secure?',
                  a: 'Yes, we use enterprise-grade encryption and comply with all major data protection regulations.',
                },
                {
                  q: 'What support is available?',
                  a: 'We offer email support for all tiers, with priority and 24/7 support available for Enterprise and Sovereign plans.',
                },
                {
                  q: 'Can I integrate with existing systems?',
                  a: 'Yes, our API supports integration with most modern platforms and data sources.',
                },
                {
                  q: 'How do I get started?',
                  a: 'Choose a pricing tier and follow our onboarding process. You can be up and running in minutes.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="glass-effect p-6 rounded-lg">
                  <h4 className="font-semibold text-accent mb-3">{faq.q}</h4>
                  <p className="text-foreground/70 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
