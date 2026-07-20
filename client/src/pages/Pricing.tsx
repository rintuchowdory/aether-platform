import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Check } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Explorer',
      price: '$49',
      period: '/month',
      description: 'For individuals and small teams getting started with predictive AI.',
      features: [
        '5,000 predictions/month',
        'Basic analytics dashboard',
        '3 simulation scenarios',
        'Email support',
        'API access',
      ],
      highlighted: false,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For organizations requiring advanced intelligence capabilities.',
      features: [
        'Unlimited predictions',
        'Full intelligence dashboard',
        'Unlimited simulations',
        'Priority support',
        'Custom AI models',
        'Team collaboration',
        'Advanced API',
      ],
      highlighted: true,
    },
    {
      name: 'Sovereign',
      price: 'Custom',
      period: '',
      description: 'For institutions with bespoke requirements and dedicated infrastructure.',
      features: [
        'Dedicated infrastructure',
        'Custom prediction models',
        'White-label platform',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantee',
        'Training included',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              ◆ Transparent Pricing
            </span>
            <h1 className="text-5xl font-bold mt-4 mb-6 glow-text">SELECT YOUR TIER</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Transparent pricing designed to scale with your intelligence needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`glass-effect p-8 rounded-lg transition-all ${
                  tier.highlighted ? 'ring-2 ring-accent md:scale-105' : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="mb-4 inline-block">
                    <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold glow-text">
                    {tier.price === 'Custom' ? tier.price : `${tier.price}/mo`}
                  </span>
                </div>

                <Link href="/contact">
                  <Button
                    className={`w-full mb-8 ${
                      tier.highlighted ? 'glow-button' : 'border border-accent/50 text-accent hover:bg-accent/10'
                    }`}
                  >
                    {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Link>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 glow-text">QUESTIONS</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: 'How does the predictive AI system work?',
                  a: 'Our system uses advanced machine learning algorithms to analyze historical data and identify patterns.',
                },
                {
                  q: 'What types of data can Aether process?',
                  a: 'We support structured data, time series, financial data, and custom data formats through our API.',
                },
                {
                  q: 'How accurate are the predictions?',
                  a: 'Our average prediction accuracy is 94.7%, with variations based on data quality and complexity.',
                },
                {
                  q: 'Can I run custom simulation scenarios?',
                  a: 'Yes, Enterprise and Sovereign tiers include unlimited custom simulations and scenario modeling.',
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
