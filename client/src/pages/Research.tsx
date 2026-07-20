import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Activity, Zap, Target } from 'lucide-react';

export default function Research() {
  // Sample data for charts
  const trendData = [
    { month: 'Jan', value: 65, forecast: 70 },
    { month: 'Feb', value: 72, forecast: 75 },
    { month: 'Mar', value: 68, forecast: 72 },
    { month: 'Apr', value: 81, forecast: 85 },
    { month: 'May', value: 78, forecast: 82 },
    { month: 'Jun', value: 92, forecast: 88 },
  ];

  const performanceData = [
    { category: 'Accuracy', value: 94.7 },
    { category: 'Speed', value: 98.2 },
    { category: 'Reliability', value: 96.5 },
    { category: 'Efficiency', value: 91.3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              ◆ Intelligence Dashboard
            </span>
            <h1 className="text-5xl font-bold mt-4 mb-6 glow-text">RESEARCH DASHBOARD</h1>
            <p className="text-xl text-foreground/70">
              Advanced analytics and predictive intelligence in real-time.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: TrendingUp, label: 'Prediction Accuracy', value: '94.7%', color: 'text-cyan-400' },
              { icon: Activity, label: 'Active Simulations', value: '1,247', color: 'text-blue-400' },
              { icon: Zap, label: 'Processing Speed', value: '98.2%', color: 'text-purple-400' },
              { icon: Target, label: 'Success Rate', value: '96.5%', color: 'text-pink-400' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="glass-effect p-6 rounded-lg">
                  <Icon className={`w-8 h-8 ${stat.color} mb-4`} />
                  <p className="text-foreground/60 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold glow-text">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Trend Chart */}
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-6 text-accent">Prediction Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
                  <XAxis stroke="rgba(255, 255, 255, 0.5)" />
                  <YAxis stroke="rgba(255, 255, 255, 0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(13, 27, 42, 0.9)',
                      border: '1px solid rgba(0, 217, 255, 0.3)',
                      borderRadius: '8px',
                    }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#00d9ff" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="forecast" stroke="#0066ff" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Performance Chart */}
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-6 text-accent">System Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 217, 255, 0.1)" />
                  <XAxis stroke="rgba(255, 255, 255, 0.5)" />
                  <YAxis stroke="rgba(255, 255, 255, 0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(13, 27, 42, 0.9)',
                      border: '1px solid rgba(0, 217, 255, 0.3)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="value" fill="#00d9ff" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quantum Simulation Engine',
                description: 'Process complex multi-variable scenarios at quantum speed.',
              },
              {
                title: 'Advanced Workspace',
                description: 'Collaborative environment for building and testing prediction models.',
              },
              {
                title: 'Real-time Intelligence',
                description: 'Live data processing with instant insights and actionable forecasts.',
              },
            ].map((insight, idx) => (
              <div key={idx} className="glass-effect p-8 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-accent">{insight.title}</h4>
                <p className="text-foreground/70">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
