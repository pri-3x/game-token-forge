
export interface Game {
  id: string;
  name: string;
  imageUrl: string;
  players: number;
  liquidity: number;
  createdAt: Date;
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
}
