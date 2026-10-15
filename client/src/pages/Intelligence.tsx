import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  Bot,
  Clock3,
  RefreshCw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { AIChatBox, type Message } from "@/components/AIChatBox";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import {
  fetchMarketAssets,
  formatMarketPrice,
  formatMarketValue,
  type MarketAsset,
} from "@/lib/marketData";
import { Button } from "@/components/ui/button";

const initialMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi — I’m Aether Intelligence. Ask me about the live market snapshot, momentum, or risk signals. I’ll clearly separate data from interpretation.",
  },
];

function createMarketReply(question: string, assets: MarketAsset[]) {
  const lowerQuestion = question.toLowerCase();
  const topMover = [...assets].sort(
    (a, b) =>
      (b.price_change_percentage_24h ?? 0) -
      (a.price_change_percentage_24h ?? 0)
  )[0];
  const weakest = [...assets].sort(
    (a, b) =>
      (a.price_change_percentage_24h ?? 0) -
      (b.price_change_percentage_24h ?? 0)
  )[0];
  const totalVolume = assets.reduce(
    (sum, asset) => sum + asset.total_volume,
    0
  );

  if (assets.length === 0) {
    return "The live market feed is not available yet. Refresh the dashboard and I’ll analyze the latest snapshot.";
  }

  if (lowerQuestion.includes("risk") || lowerQuestion.includes("risiko")) {
    return `Current snapshot: ${topMover.symbol.toUpperCase()} is the strongest 24h mover at ${(topMover.price_change_percentage_24h ?? 0).toFixed(2)}%, while ${weakest.symbol.toUpperCase()} is the weakest at ${(weakest.price_change_percentage_24h ?? 0).toFixed(2)}%. Combined tracked volume is ${formatMarketValue(totalVolume)}. This is a market signal, not financial advice.`;
  }

  if (lowerQuestion.includes("bitcoin") || lowerQuestion.includes("btc")) {
    const bitcoin = assets.find(asset => asset.id === "bitcoin");
    return bitcoin
      ? `Bitcoin is trading at ${formatMarketPrice(bitcoin.current_price)} with a 24h change of ${(bitcoin.price_change_percentage_24h ?? 0).toFixed(2)}%. Its tracked market cap is ${formatMarketValue(bitcoin.market_cap)}. The data is live; any outlook is uncertain.`
      : "Bitcoin is not present in the current market response.";
  }

  return `The strongest tracked mover is ${topMover.name} (${(topMover.price_change_percentage_24h ?? 0).toFixed(2)}% in 24h). The weakest is ${weakest.name} (${(weakest.price_change_percentage_24h ?? 0).toFixed(2)}%). Ask me about Bitcoin, risk, or the current market snapshot for a more focused read.`;
}

export default function Intelligence() {
  const [assets, setAssets] = useState<MarketAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isChatLoading, setIsChatLoading] = useState(false);

  const loadMarketData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const controller = new AbortController();
    try {
      const nextAssets = await fetchMarketAssets(controller.signal);
      setAssets(nextAssets);
      setLastUpdated(new Date());
    } catch (requestError) {
      if (
        requestError instanceof DOMException &&
        requestError.name === "AbortError"
      )
        return;
      setError(
        "Live market data is temporarily unavailable. Please try again shortly."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadMarketData();
    const interval = window.setInterval(() => void loadMarketData(), 60_000);
    return () => window.clearInterval(interval);
  }, [loadMarketData]);

  const marketSummary = useMemo(() => {
    if (!assets.length) return null;
    const gainers = assets.filter(
      asset => (asset.price_change_percentage_24h ?? 0) >= 0
    ).length;
    return `${gainers}/${assets.length} tracked assets are positive over 24h`;
  }, [assets]);

  const handleSendMessage = (content: string) => {
    setMessages(previous => [...previous, { role: "user", content }]);
    setIsChatLoading(true);
    window.setTimeout(() => {
      setMessages(previous => [
        ...previous,
        { role: "assistant", content: createMarketReply(content, assets) },
      ]);
      setIsChatLoading(false);
    }, 450);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="px-4 pb-20 pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                ◆ Aether Intelligence
              </span>
              <h1 className="mt-4 text-5xl font-bold glow-text">
                LIVE MARKET COMMAND
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-foreground/70">
                Live crypto market signals paired with an AI copilot for fast,
                explainable reads.
              </p>
            </div>
            <Button
              onClick={() => void loadMarketData()}
              disabled={isLoading}
              variant="outline"
              className="w-fit border-accent/50 text-accent"
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
              />
              Refresh feed
            </Button>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-foreground/60">
            <span className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-accent" /> CoinGecko keyless
              feed
            </span>
            {lastUpdated && (
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" /> Updated{" "}
                {lastUpdated.toLocaleTimeString()}
              </span>
            )}
            {marketSummary && (
              <span className="text-accent">{marketSummary}</span>
            )}
          </div>

          {error && (
            <div className="mb-8 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          <section className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {assets.map(asset => {
              const change = asset.price_change_percentage_24h ?? 0;
              const positive = change >= 0;
              return (
                <article
                  key={asset.id}
                  className="glass-effect rounded-lg border border-accent/20 p-5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={asset.image}
                        alt=""
                        className="h-9 w-9 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{asset.name}</p>
                        <p className="font-mono text-xs uppercase text-foreground/50">
                          {asset.symbol}
                        </p>
                      </div>
                    </div>
                    {positive ? (
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-rose-400" />
                    )}
                  </div>
                  <p className="text-2xl font-bold">
                    {formatMarketPrice(asset.current_price)}
                  </p>
                  <p
                    className={`mt-2 text-sm ${positive ? "text-emerald-400" : "text-rose-400"}`}
                  >
                    {positive ? "+" : ""}
                    {change.toFixed(2)}% / 24h
                  </p>
                  <div className="mt-4 flex justify-between text-xs text-foreground/50">
                    <span>Market cap</span>
                    <span>{formatMarketValue(asset.market_cap)}</span>
                  </div>
                </article>
              );
            })}
            {isLoading &&
              !assets.length &&
              [1, 2, 3, 4].map(item => (
                <div
                  key={item}
                  className="h-40 animate-pulse rounded-lg border border-accent/10 bg-accent/5"
                />
              ))}
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-effect rounded-lg border border-accent/20 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-accent/10 p-2">
                  <Bot className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Aether Copilot</h2>
                  <p className="text-sm text-foreground/60">
                    Ask about the current live snapshot
                  </p>
                </div>
              </div>
              <AIChatBox
                messages={messages}
                onSendMessage={handleSendMessage}
                isLoading={isChatLoading}
                height={480}
                suggestedPrompts={[
                  "Summarize the current market",
                  "What is the Bitcoin signal?",
                  "Where are the main risks?",
                ]}
                emptyStateMessage="Ask Aether to interpret the live feed"
                className="border-accent/20 bg-background/40"
              />
            </div>
            <div className="glass-effect rounded-lg border border-accent/20 p-6">
              <h2 className="mb-2 text-xl font-semibold text-accent">
                Data provenance
              </h2>
              <p className="mb-6 text-sm leading-6 text-foreground/70">
                Prices are fetched in the browser from CoinGecko’s keyless
                public API. The dashboard refreshes every 60 seconds and labels
                the timestamp of the latest successful response.
              </p>
              <div className="space-y-4 text-sm text-foreground/70">
                <p>
                  <span className="font-mono text-accent">SOURCE</span>
                  <br />
                  CoinGecko market endpoint
                </p>
                <p>
                  <span className="font-mono text-accent">SCOPE</span>
                  <br />
                  Bitcoin, Ethereum, Solana, Chainlink
                </p>
                <p>
                  <span className="font-mono text-accent">GUARDRAIL</span>
                  <br />
                  Market data is informational and not financial advice.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
