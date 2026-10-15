export type MarketAsset = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number | null;
  last_updated: string;
};

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,chainlink&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h";

export async function fetchMarketAssets(signal?: AbortSignal) {
  const response = await fetch(API_URL, { signal });
  if (!response.ok) {
    throw new Error(`Market data request failed (${response.status})`);
  }

  return (await response.json()) as MarketAsset[];
}

export function formatMarketValue(value: number) {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

export function formatMarketPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
}
