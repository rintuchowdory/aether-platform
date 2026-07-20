import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Play, Pause } from 'lucide-react';

export default function Simulations() {
  const [volatility, setVolatility] = useState(50);
  const [growthFactor, setGrowthFactor] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [iterations, setIterations] = useState(0);
  const [scenarioIndex, setScenarioIndex] = useState(0);

  const scenarios = ['Optimistic', 'Baseline', 'Pessimistic'];

  // Generate simulation data based on parameters
  const generateSimulationData = () => {
    const baseGrowth = (growthFactor - 50) / 100;
    const volatilityFactor = volatility / 100;
    const data = [];

    for (let i = 0; i < 24; i++) {
      const optimistic = 100 + i * (5 + baseGrowth * 10) + Math.random() * volatilityFactor * 5;
      const baseline = 100 + i * (3 + baseGrowth * 5) + Math.random() * volatilityFactor * 3;
      const pessimistic = 100 + i * (1 + baseGrowth * 2) + Math.random() * volatilityFactor * 2;

      data.push({
        iteration: i,
        Optimistic: Math.max(0, optimistic),
        Baseline: Math.max(0, baseline),
        Pessimistic: Math.max(0, pessimistic),
      });
    }

    return data;
  };

  const simulationData = generateSimulationData();

  const handleRunSimulation = () => {
    setIsRunning(true);
    setIterations(0);

    let currentIteration = 0;
    let currentScenario = 0;

    const interval = setInterval(() => {
      currentIteration++;
      if (currentIteration > 24) {
        currentIteration = 0;
        currentScenario = (currentScenario + 1) % 3;
      }

      setIterations(currentIteration);
      setScenarioIndex(currentScenario);

      if (currentIteration === 24 && currentScenario === 2) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              ◆ Predictive Scenarios
            </span>
            <h1 className="text-5xl font-bold mt-4 mb-6 glow-text">FUTURE SIMULATIONS</h1>
            <p className="text-xl text-foreground/70">
              Run predictive scenario analyses in real-time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Chart */}
            <div className="md:col-span-2 glass-effect p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-accent mb-4">Scenario Projection</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-foreground/60">Iterations:</span>
                  <span className="text-2xl font-bold glow-text">{iterations}</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={simulationData}>
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
                  <Legend />
                  <Line type="monotone" dataKey="Optimistic" stroke="#00d9ff" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Baseline" stroke="#0066ff" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Pessimistic" stroke="#9d00ff" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Parameters */}
            <div className="glass-effect p-8 rounded-lg h-fit">
              <h3 className="text-lg font-semibold text-accent mb-6">Parameters</h3>

              <div className="space-y-8">
                {/* Volatility Slider */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium">Volatility</label>
                    <span className="text-accent font-mono">{volatility}%</span>
                  </div>
                  <Slider
                    value={[volatility]}
                    onValueChange={(value) => setVolatility(value[0])}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Growth Factor Slider */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium">Growth Factor</label>
                    <span className="text-accent font-mono">{growthFactor}%</span>
                  </div>
                  <Slider
                    value={[growthFactor]}
                    onValueChange={(value) => setGrowthFactor(value[0])}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Status */}
                <div className="border-t border-accent/20 pt-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-foreground/60 mb-1">Status</p>
                      <p className="text-sm font-medium text-accent">
                        {isRunning ? 'Running' : 'Idle'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 mb-1">Current Outcome</p>
                      <p className="text-sm font-medium text-accent">{scenarios[scenarioIndex]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 mb-1">Confidence</p>
                      <p className="text-sm font-medium glow-text">94.7%</p>
                    </div>
                  </div>
                </div>

                {/* Run Button */}
                <Button
                  onClick={handleRunSimulation}
                  disabled={isRunning}
                  className="glow-button w-full"
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Run Simulation
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Scenario Outcomes */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-8 rounded-lg">
              <h4 className="text-lg font-semibold text-accent mb-4">Quantum Simulation Engine</h4>
              <p className="text-foreground/70">
                Process complex multi-variable scenarios at quantum speed. Our advanced simulation engine
                analyzes thousands of variables simultaneously to generate accurate predictions.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-lg">
              <h4 className="text-lg font-semibold text-accent mb-4">Advanced Workspace</h4>
              <p className="text-foreground/70">
                Collaborative environment for building and testing prediction models. Share insights with
                your team and iterate on scenarios in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
