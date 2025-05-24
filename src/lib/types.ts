
export interface Game {
  id: string;
  name: string;
  imageUrl: string;
  players: number;
  liquidity: number;
  createdAt: Date;
  tokenAddress?: string; // Added for bonding curve integration
}

export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  priceChange: number;
  supply: number;
  holders: number;
  createdAt: Date;
  gameId: string;
  priceHistory: { time: string; value: number }[];
  tokenAddress: string;
  initialPrice: number;
  priceIncrement: number;
  protocolFee: number; // in basis points (e.g., 200 = 2%)
  creatorFee: number; // in basis points (e.g., 300 = 3%)
  creatorAddress: string;
}

export interface BondingCurveConfig {
  name: string;
  symbol: string;
  initialPrice: string;
  priceIncrement: string;
  protocolFee: number;
  creatorFee: number;
  creatorAddress: string;
  curveType: 'linear' | 'exponential';
}
