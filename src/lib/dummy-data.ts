
import { Game, Token } from "./types";

export const dummyGames: Game[] = [
  {
    id: "1",
    name: "Crypto Racers",
    imageUrl: "https://www.svgrepo.com/show/376353/racing.svg",
    players: 1245,
    liquidity: 75,
    createdAt: new Date("2023-09-15"),
  },
  {
    id: "2",
    name: "NFT Heroes",
    imageUrl: "https://www.svgrepo.com/show/406821/crossed-swords.svg",
    players: 876,
    liquidity: 62,
    createdAt: new Date("2023-10-02"),
  },
  {
    id: "3",
    name: "Meta Defenders",
    imageUrl: "https://www.svgrepo.com/show/376298/shield.svg",
    players: 2531,
    liquidity: 81,
    createdAt: new Date("2023-08-22"),
  },
];

const generatePriceHistory = (startPrice: number, volatility: number, isPositive: boolean, points = 30) => {
  const data = [];
  let price = startPrice;
  
  for (let i = 0; i < points; i++) {
    const change = price * volatility * (Math.random() - (isPositive ? 0.4 : 0.6));
    price += change;
    if (price < 0.01) price = 0.01;
    
    data.push({
      time: `${i}h`,
      value: price,
    });
  }
  
  return data;
};

export const dummyTokens: Token[] = [
  {
    id: "1",
    name: "Crypto Racers",
    symbol: "RACE",
    price: 0.2458,
    priceChange: 12.3,
    supply: 150000,
    holders: 874,
    createdAt: new Date("2023-09-15"),
    gameId: "1",
    priceHistory: generatePriceHistory(0.2, 0.05, true),
  },
  {
    id: "2",
    name: "NFT Heroes",
    symbol: "HERO",
    price: 0.1562,
    priceChange: -4.2,
    supply: 320000,
    holders: 1256,
    createdAt: new Date("2023-10-02"),
    gameId: "2",
    priceHistory: generatePriceHistory(0.16, 0.03, false),
  },
  {
    id: "3",
    name: "Meta Defenders",
    symbol: "DFND",
    price: 0.3814,
    priceChange: 5.7,
    supply: 220000,
    holders: 1632,
    createdAt: new Date("2023-08-22"),
    gameId: "3",
    priceHistory: generatePriceHistory(0.35, 0.04, true),
  },
  {
    id: "4",
    name: "Pixel Worlds",
    symbol: "PIXEL",
    price: 0.0921,
    priceChange: 3.2,
    supply: 500000,
    holders: 2145,
    createdAt: new Date("2023-11-05"),
    gameId: "4", 
    priceHistory: generatePriceHistory(0.08, 0.06, true),
  },
  {
    id: "5",
    name: "Blockchain Battles",
    symbol: "BATTLE",
    price: 0.2751,
    priceChange: -1.8,
    supply: 180000,
    holders: 923,
    createdAt: new Date("2023-10-18"),
    gameId: "5",
    priceHistory: generatePriceHistory(0.28, 0.04, false),
  },
  {
    id: "6",
    name: "Crypto Kingdoms",
    symbol: "KING",
    price: 0.4215,
    priceChange: 8.1,
    supply: 120000,
    holders: 765,
    createdAt: new Date("2023-09-29"),
    gameId: "6",
    priceHistory: generatePriceHistory(0.38, 0.05, true),
  },
];
