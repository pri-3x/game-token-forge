
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Game, Token } from "@/lib/types";
import BondingCurveChart from "@/components/charts/BondingCurveChart";

interface DashboardProps {
  games: Game[];
  tokens: Token[];
}

const Dashboard = ({ games, tokens }: DashboardProps) => {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <Card className="bg-crypto-dark-700 border-crypto-dark-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Token Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <BondingCurveChart />
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <MetricCard 
            title="Total Value" 
            value="$24,827" 
            change="+12.5%" 
            isPositive={true}
          />
          <MetricCard 
            title="Creator Fees" 
            value="$1,583" 
            change="+8.3%" 
            isPositive={true}
          />
          <MetricCard 
            title="Total Supply" 
            value="247,920" 
            change="-2.1%" 
            isPositive={false}
          />
        </div>
        
        <Card className="bg-crypto-dark-700 border-crypto-dark-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Latest Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${i % 2 === 0 ? 'bg-crypto-green' : 'bg-crypto-pink'}`}></div>
                    <div>
                      <p className="font-medium">
                        {i % 2 === 0 ? 'Buy' : 'Sell'} Transaction
                      </p>
                      <p className="text-sm text-gray-400">
                        {i % 2 === 0 ? '0x7a...3d1f' : '0x4b...8e2c'} • {30 - i * 7}m ago
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${i % 2 === 0 ? 'text-crypto-green' : 'text-crypto-pink'}`}>
                      {i % 2 === 0 ? '+' : '-'}132.5 RCE
                    </p>
                    <p className="text-sm text-gray-400">
                      {i % 2 === 0 ? '+' : '-'}$215.80
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="bg-crypto-dark-700 border-crypto-dark-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Game Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tokens.slice(0, 4).map((token, index) => (
                <div key={token.id} className="group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-crypto-blue to-crypto-purple flex items-center justify-center text-sm font-bold mr-3">
                        {token.symbol.substring(0, 2)}
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-crypto-purple transition-colors">{token.name}</p>
                        <p className="text-sm text-gray-400">{token.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${token.price.toFixed(4)}</p>
                      <p className={`text-sm ${token.priceChange >= 0 ? 'text-crypto-green' : 'text-crypto-pink'}`}>
                        {token.priceChange >= 0 ? '+' : ''}{token.priceChange.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                  
                  {index < tokens.length - 1 && (
                    <Separator className="my-4 bg-crypto-dark-600" />
                  )}
                </div>
              ))}
              
              <button className="w-full py-2 mt-2 text-sm font-medium text-crypto-purple hover:text-crypto-blue transition-colors">
                View All Tokens
              </button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-crypto-dark-700 border-crypto-dark-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Your Games</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {games.slice(0, 3).map((game, index) => (
                <div key={game.id} className="group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-md bg-crypto-dark-800 flex items-center justify-center mr-3">
                        <img 
                          src={game.imageUrl} 
                          alt={game.name}
                          className="w-6 h-6" 
                        />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-crypto-purple transition-colors">
                          {game.name}
                        </p>
                        <div className="flex items-center space-x-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-crypto-green"></span>
                          <span className="text-xs text-gray-400">Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{game.players} players</p>
                      <div className="flex items-center justify-end space-x-1">
                        <span className="text-xs text-gray-400">Liquidity</span>
                        <span className="text-xs font-medium">{game.liquidity}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <Progress 
                      value={game.liquidity} 
                      className="h-1 bg-crypto-dark-600" 
                    />
                  </div>
                  
                  {index < games.length - 1 && (
                    <Separator className="my-4 bg-crypto-dark-600" />
                  )}
                </div>
              ))}
              
              <button className="w-full py-2 mt-2 text-sm font-medium text-crypto-purple hover:text-crypto-blue transition-colors">
                Create New Game
              </button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-crypto-dark-700 to-crypto-dark-800 border-crypto-dark-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-crypto-purple opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <CardContent className="pt-6 pb-6 relative z-10">
            <h3 className="text-lg font-bold mb-2">Ready to Deploy?</h3>
            <p className="text-sm text-gray-300 mb-4">
              Launch your game and its token will auto-deploy with bonding curve
            </p>
            <button className="w-full py-2.5 rounded-md bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity text-sm font-medium">
              Create New Game
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const MetricCard = ({
  title,
  value,
  change,
  isPositive,
}: {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}) => (
  <Card className="bg-crypto-dark-700 border-crypto-dark-600">
    <CardContent className="pt-6">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <p className={`text-sm mt-1 flex items-center ${isPositive ? 'text-crypto-green' : 'text-crypto-pink'}`}>
        <span className="mr-1">{isPositive ? '▲' : '▼'}</span>
        {change}
      </p>
    </CardContent>
  </Card>
);

export default Dashboard;
