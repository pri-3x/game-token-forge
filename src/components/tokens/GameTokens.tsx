
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Token } from "@/lib/types";
import BondingCurveSmall from "@/components/charts/BondingCurveSmall";

interface GameTokensProps {
  tokens: Token[];
  onSelectToken: (tokenId: string) => void;
}

const GameTokens = ({ tokens, onSelectToken }: GameTokensProps) => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tokens.map((token) => (
        <Card 
          key={token.id}
          className="bg-crypto-dark-700 border-crypto-dark-600 hover:border-crypto-purple transition-colors cursor-pointer"
          onClick={() => onSelectToken(token.id)}
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-crypto-blue to-crypto-purple flex items-center justify-center text-sm font-bold mr-2">
                  {token.symbol.substring(0, 2)}
                </div>
                <CardTitle className="text-lg">{token.name}</CardTitle>
              </div>
              <div className="text-sm bg-crypto-dark-600 px-2 py-1 rounded">
                {token.symbol}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-24 mb-4">
              <BondingCurveSmall
                data={token.priceHistory}
                positive={token.priceChange >= 0}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-400">Price</p>
                <p className="text-lg font-bold">${token.price.toFixed(4)}</p>
                <p className={`text-xs ${token.priceChange >= 0 ? 'text-crypto-green' : 'text-crypto-pink'}`}>
                  {token.priceChange >= 0 ? '+' : ''}{token.priceChange.toFixed(2)}%
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Supply</p>
                <p className="text-lg font-bold">{token.supply.toLocaleString()}</p>
                <p className="text-xs text-gray-400">
                  {token.holders} holders
                </p>
              </div>
            </div>
            
            <div className="flex justify-between mt-4">
              <button className="py-1.5 px-3 text-sm rounded-md bg-crypto-dark-600 hover:bg-crypto-dark-500 transition-colors">
                Buy
              </button>
              <button className="py-1.5 px-3 text-sm rounded-md border border-crypto-dark-600 hover:border-crypto-purple transition-colors">
                View Details
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GameTokens;
