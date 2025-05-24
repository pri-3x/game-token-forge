
import { Game, Token } from "./types";

export const dummyGames: Game[] = [
  {
    id: "1",
    name: "Crypto Racers",
    imageUrl: "https://www.svgrepo.com/show/376353/racing.svg",
    players: 1245,
    liquidity: 75,
    createdAt: new Date("2023-09-15"),
    tokenAddress: "0x1234567890abcdef1234567890abcdef12345678",
  },
  {
    id: "2",
    name: "NFT Heroes",
    imageUrl: "https://www.svgrepo.com/show/406821/crossed-swords.svg",
    players: 876,
    liquidity: 62,
    createdAt: new Date("2023-10-02"),
    tokenAddress: "0x2345678901abcdef2345678901abcdef23456789",
  },
  {
    id: "3",
    name: "Meta Defenders",
    imageUrl: "https://www.svgrepo.com/show/376298/shield.svg",
    players: 2531,
    liquidity: 81,
    createdAt: new Date("2023-08-22"),
    tokenAddress: "0x3456789012abcdef3456789012abcdef34567890",
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
    tokenAddress: "0x1234567890abcdef1234567890abcdef12345678",
    initialPrice: 0.0001,
    priceIncrement: 0.00001,
    protocolFee: 200,
    creatorFee: 300,
    creatorAddress: "0xbADE878A9289e9568359C83E2EB051fbA9E2863b",
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
    tokenAddress: "0x2345678901abcdef2345678901abcdef23456789",
    initialPrice: 0.0001,
    priceIncrement: 0.00001,
    protocolFee: 200,
    creatorFee: 250,
    creatorAddress: "0xbADE878A9289e9568359C83E2EB051fbA9E2863b",
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
    tokenAddress: "0x3456789012abcdef3456789012abcdef34567890",
    initialPrice: 0.0001,
    priceIncrement: 0.00001,
    protocolFee: 200,
    creatorFee: 400,
    creatorAddress: "0xbADE878A9289e9568359C83E2EB051fbA9E2863b",
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
    tokenAddress: "0x4567890123abcdef4567890123abcdef45678901",
    initialPrice: 0.0001,
    priceIncrement: 0.00001,
    protocolFee: 200,
    creatorFee: 350,
    creatorAddress: "0xbADE878A9289e9568359C83E2EB051fbA9E2863b",
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
    tokenAddress: "0x5678901234abcdef5678901234abcdef56789012",
    initialPrice: 0.0001,
    priceIncrement: 0.00001,
    protocolFee: 200,
    creatorFee: 275,
    creatorAddress: "0xbADE878A9289e9568359C83E2EB051fbA9E2863b",
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
    tokenAddress: "0x6789012345abcdef6789012345abcdef67890123",
    initialPrice: 0.0001,
    priceIncrement: 0.00001,
    protocolFee: 200,
    creatorFee: 320,
    creatorAddress: "0xbADE878A9289e9568359C83E2EB051fbA9E2863b",
  },
];
