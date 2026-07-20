import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Zap, BarChart3, Cpu, Brain, Gauge, Radar, TrendingUp, Users, Star } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Advanced AI models that forecast market trends and behavioral patterns with 94.7% accuracy.'
    },
    {
      icon: Radar,
      title: 'Real-time Monitoring',
      description: 'Monitor live data streams and receive instant alerts on critical intelligence events.'
    },
    {
      icon: Gauge,
      title: 'Performance Metrics',
      description: 'Track system performance and prediction confidence across all simulation scenarios.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify emerging patterns and market shifts before they become mainstream.'
    },
    {
      icon: Cpu,
      title: 'AI Simulations',
      description: 'Run unlimited predictive scenarios with customizable parameters and outcomes.'
    },
    {
      icon: Zap,
      title: 'Instant Insights',
      description: 'Get actionable intelligence in real-time with our lightning-fast processing engine.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO, TechVentures',
      quote: 'Aether transformed how we make strategic decisions. The predictive accuracy is unmatched.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Head of Analytics, FinCorp',
      quote: 'The platform\'s intuitive interface combined with powerful AI makes it essential for our team.',
      rating: 5
    },
    {
      name: 'Elena Volkov',
      title: 'Director, Innovation Labs',
      quote: 'Aether\'s cosmic interface isn\'t just beautiful—it makes complex data feel intuitive.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How accurate are the predictions?',
      answer: 'Our AI models achieve 94.7% accuracy across diverse market conditions, validated through rigorous backtesting and real-world deployment.'
    },
    {
      question: 'Can I customize simulation parameters?',
      answer: 'Yes, you can adjust Volatility, Growth Factor, and dozens of other parameters to model specific scenarios tailored to your needs.'
    },
    {
      question: 'What data sources does Aether integrate with?',
      answer: 'Aether connects to market feeds, APIs, databases, and custom data sources. Our flexible integration layer supports virtually any data format.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, the Explorer tier ($49/mo) includes a 14-day free trial with full access to core features and 5,000 predictions per month.'
    },
    {
      question: 'How is my data secured?',
      answer: 'Enterprise-grade encryption, SOC 2 compliance, and on-premise deployment options ensure your data remains secure and private.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Dashboard Mockup */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <div>
              <div className="mb-6 inline-block">
                <span className="text-xs font-mono text-accent uppercase tracking-widest">
                  ◆ Future Intelligence System
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="glow-text">Transform Complex</span>
                <br />
                <span className="glow-text">Data</span>
                <br />
                Into Future-Ready Insights
              </h1>

              <p className="text-lg text-foreground/70 mb-8 max-w-xl">
                A premium, cinematic predictive intelligence platform that combines deep cosmic atmospheres with advanced AI simulations and immersive analytics dashboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/research">
                  <Button className="glow-button px-8 py-6 text-base">
                    Launch Platform
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-8 py-6 text-base border-accent/50 text-accent hover:bg-accent/10"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-effect p-4 rounded-lg">
                  <p className="text-2xl font-bold glow-text">94.7%</p>
                  <p className="text-xs text-foreground/60">Accuracy</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <p className="text-2xl font-bold glow-text">1000+</p>
                  <p className="text-xs text-foreground/60">Users</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <p className="text-2xl font-bold glow-text">24/7</p>
                  <p className="text-xs text-foreground/60">Support</p>
                </div>
              </div>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="hidden lg:block relative">
              <div className="glass-effect p-6 rounded-lg border border-accent/20 backdrop-blur-xl">
                <div className="space-y-4">
                  <div className="h-2 bg-gradient-to-r from-accent to-accent/50 rounded w-24"></div>
                  <div className="space-y-3">
                    <div className="h-20 bg-accent/10 rounded border border-accent/20"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-accent/10 rounded border border-accent/20"></div>
                      <div className="h-16 bg-accent/10 rounded border border-accent/20"></div>
                    </div>
                    <div className="h-24 bg-accent/10 rounded border border-accent/20"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Intelligence Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">◆ Advanced Intelligence</span>
            <h2 className="text-4xl font-bold mt-4 glow-text">Powerful Features</h2>
            <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
              Everything you need to make smarter predictions and better decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="glass-effect p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Command Center Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="glass-effect p-12 rounded-lg border border-accent/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-widest">◆ Command Center</span>
                <h2 className="text-4xl font-bold mt-4 mb-6 glow-text">Unified Intelligence Hub</h2>
                <p className="text-foreground/70 mb-8">
                  Monitor all your predictive systems from a single, intuitive dashboard. Real-time data visualization, instant alerts, and comprehensive analytics in one place.
                </p>
                <Link href="/research">
                  <Button className="glow-button">
                    Explore Dashboard
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="h-64 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg border border-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <Cpu className="w-16 h-16 text-accent/50 mx-auto mb-4" />
                  <p className="text-foreground/40">3D Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forecast the Future Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">◆ Forecast the Future</span>
            <h2 className="text-4xl font-bold mt-4 glow-text">Predictive Scenarios</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Optimistic Scenario</h3>
              <div className="h-40 bg-accent/10 rounded border border-accent/20 mb-4"></div>
              <p className="text-foreground/70">Best-case market conditions with strong growth indicators and favorable conditions.</p>
            </div>
            <div className="glass-effect p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Risk Analysis</h3>
              <div className="h-40 bg-accent/10 rounded border border-accent/20 mb-4"></div>
              <p className="text-foreground/70">Comprehensive risk assessment with downside protection and contingency planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics That Matter Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">◆ Metrics That Matter</span>
            <h2 className="text-4xl font-bold mt-4 glow-text">Key Performance Indicators</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: '2.4M', desc: 'Predictions/Day' },
              { label: '99.1%', desc: 'Uptime' },
              { label: '0.3ms', desc: 'Latency' },
              { label: '96.5%', desc: 'Success Rate' }
            ].map((metric, idx) => (
              <div key={idx} className="glass-effect p-6 rounded-lg text-center border border-accent/20">
                <p className="text-3xl font-bold glow-text">{metric.label}</p>
                <p className="text-foreground/60 text-sm mt-2">{metric.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-effect p-8 rounded-lg border border-accent/20 h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-accent/50 mx-auto mb-4" />
              <p className="text-foreground/40">Performance Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulate Tomorrow Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">◆ Simulate Tomorrow</span>
            <h2 className="text-4xl font-bold mt-4 glow-text">Interactive Simulations</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Market Simulations</h3>
              <div className="h-48 bg-accent/10 rounded border border-accent/20 mb-4"></div>
              <Link href="/simulations">
                <Button variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent/10">
                  Run Simulation
                </Button>
              </Link>
            </div>
            <div className="glass-effect p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Scenario Analysis</h3>
              <div className="h-48 bg-accent/10 rounded border border-accent/20 mb-4"></div>
              <Link href="/simulations">
                <Button variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent/10">
                  Explore Scenarios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">◆ Trusted by Leaders</span>
            <h2 className="text-4xl font-bold mt-4 glow-text">What Our Users Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass-effect p-8 rounded-lg border border-accent/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">◆ Questions</span>
            <h2 className="text-4xl font-bold mt-4 glow-text">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-effect border border-accent/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <h3 className="font-bold text-left">{faq.question}</h3>
                  <span className={`text-accent transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-foreground/70 border-t border-accent/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-3xl">
          <div className="glass-effect p-12 rounded-lg text-center border border-accent/20">
            <h2 className="text-3xl font-bold mb-4 glow-text">Ready to Explore the Future?</h2>
            <p className="text-foreground/70 mb-8">
              Join thousands of organizations using Aether to make better predictions and smarter decisions.
            </p>
            <Link href="/pricing">
              <Button className="glow-button px-8 py-6 text-lg">
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
