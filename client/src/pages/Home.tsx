import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Zap, BarChart3, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              ◆ Predictive Intelligence Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="glow-text">Transform Complex Data</span>
            <br />
            Into Future-Ready Insights
          </h1>

          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            A premium, cinematic predictive intelligence platform that combines deep cosmic atmospheres
            with advanced AI simulations, immersive analytics dashboards, and futuristic visual architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/research">
              <Button className="glow-button px-8 py-6 text-lg">
                Launch Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-accent/50 text-accent hover:bg-accent/10"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-20">
            <div className="glass-effect p-6 rounded-lg">
              <div className="text-3xl font-bold glow-text mb-2">94.7%</div>
              <p className="text-foreground/60 text-sm">Prediction Accuracy</p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <div className="text-3xl font-bold glow-text mb-2">1000+</div>
              <p className="text-foreground/60 text-sm">Active Users</p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <div className="text-3xl font-bold glow-text mb-2">24/7</div>
              <p className="text-foreground/60 text-sm">Real-time Analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 glow-text">Core Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-effect p-8 rounded-lg hover:border-accent/60 transition-all">
              <Cpu className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Forecasting</h3>
              <p className="text-foreground/70">
                Advanced predictive algorithms that analyze complex datasets and generate accurate forecasts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-effect p-8 rounded-lg hover:border-accent/60 transition-all">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
              <p className="text-foreground/70">
                Immersive visualization tools that transform raw data into actionable intelligence.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-effect p-8 rounded-lg hover:border-accent/60 transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quantum Speed</h3>
              <p className="text-foreground/70">
                Process multi-variable scenarios at unprecedented speed with our simulation engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-3xl">
          <div className="glass-effect p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h2>
            <p className="text-foreground/70 mb-8">
              Join thousands of organizations using Aether to make better predictions and smarter decisions.
            </p>
            <Link href="/research">
              <Button className="glow-button px-8 py-6 text-lg">
                Start Your Journey
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
