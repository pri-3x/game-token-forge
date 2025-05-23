
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Wallet, Settings, Users, BarChart3 } from "lucide-react";
import { Token } from "@/lib/types";
import BondingCurveChart from "@/components/charts/BondingCurveChart";

interface TokenViewProps {
  token: Token;
  onBack: () => void;
}

const TokenView = ({ token, onBack }: TokenViewProps) => {
  const [buyAmount, setBuyAmount] = useState<string>("");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Tokens
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-crypto-blue to-crypto-purple flex items-center justify-center text-sm font-bold">
            {token.symbol.substring(0, 2)}
          </div>
          <div>
            <h2 className="text-lg font-bold">{token.name}</h2>
            <p className="text-sm text-gray-400">{token.symbol}</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 rounded-md bg-crypto-dark-600 hover:bg-crypto-dark-500 transition-colors">
            <Wallet size={18} />
          </button>
          <button className="p-2 rounded-md bg-crypto-dark-600 hover:bg-crypto-dark-500 transition-colors">
            <Settings size={18} />
          </button>
        </div>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="bg-crypto-dark-700 border-crypto-dark-600">
            <CardContent className="p-0">
              <div className="h-96">
                <BondingCurveChart />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-crypto-dark-700 border-crypto-dark-600">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Buy {token.symbol}</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm">Amount (ETH)</label>
                    <span className="text-xs text-gray-400">Balance: 4.28 ETH</span>
                  </div>
                  <div className="flex">
                    <input 
                      type="text" 
                      value={buyAmount}
                      onChange={(e) => setBuyAmount(e.target.value)}
                      placeholder="0.0" 
                      className="flex-grow px-4 py-2 rounded-l-md bg-crypto-dark-800 border border-crypto-dark-600 focus:ring-1 focus:ring-crypto-purple outline-none"
                    />
                    <button className="px-4 py-2 bg-crypto-dark-600 rounded-r-md border border-l-0 border-crypto-dark-600 hover:bg-crypto-dark-500 transition-colors text-sm font-medium">
                      MAX
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm">You'll Receive (Estimate)</label>
                  <div className="px-4 py-3 rounded-md bg-crypto-dark-800 border border-crypto-dark-600 flex justify-between">
                    <span className="font-medium">
                      {buyAmount ? (Number(buyAmount) / token.price).toFixed(2) : '0.00'} {token.symbol}
                    </span>
                    <span className="text-sm text-gray-400">
                      @ ${token.price.toFixed(4)} per {token.symbol}
                    </span>
                  </div>
                </div>
                
                <button 
                  className="w-full py-3 rounded-md bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity font-medium"
                >
                  Connect Wallet
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-crypto-dark-700 border-crypto-dark-600 overflow-hidden">
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-crypto-dark-800 rounded-none">
                <TabsTrigger 
                  value="info" 
                  className="data-[state=active]:bg-crypto-dark-600 data-[state=active]:shadow-none rounded-none"
                >
                  Info
                </TabsTrigger>
                <TabsTrigger 
                  value="holders" 
                  className="data-[state=active]:bg-crypto-dark-600 data-[state=active]:shadow-none rounded-none"
                >
                  <Users size={16} className="mr-2" />
                  Holders
                </TabsTrigger>
                <TabsTrigger 
                  value="trades" 
                  className="data-[state=active]:bg-crypto-dark-600 data-[state=active]:shadow-none rounded-none"
                >
                  <BarChart3 size={16} className="mr-2" />
                  Trades
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="m-0">
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Token Address</span>
                      <span className="font-mono text-sm">0x7a...3d1f</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Creator</span>
                      <span className="font-mono text-sm">0x4b...8e2c</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Total Supply</span>
                      <span>{token.supply.toLocaleString()} {token.symbol}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Market Cap</span>
                      <span>${(token.supply * token.price).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Curve Type</span>
                      <span>Exponential</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-400">Creator Fee</span>
                      <span>2.5%</span>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
              
              <TabsContent value="holders" className="m-0">
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex justify-between py-2">
                        <div className="flex items-center">
                          <span className="w-6 text-center text-sm text-gray-400">{i}</span>
                          <span className="ml-2 font-mono text-sm">0x{Math.random().toString(16).substring(2, 6)}...{Math.random().toString(16).substring(2, 6)}</span>
                        </div>
                        <span>{(token.supply * (0.5 / i)).toFixed(0)} {token.symbol}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </TabsContent>
              
              <TabsContent value="trades" className="m-0">
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex justify-between py-2">
                        <div>
                          <span className={i % 2 === 0 ? "text-crypto-green" : "text-crypto-pink"}>
                            {i % 2 === 0 ? "Buy" : "Sell"}
                          </span>
                          <span className="text-sm text-gray-400 ml-2">
                            {30 - i * 7}m ago
                          </span>
                        </div>
                        <span>
                          {(Math.random() * 100 + 50).toFixed(2)} {token.symbol}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
      
      <Card className="bg-crypto-dark-700 border-crypto-dark-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-4">In-Game Token Utility</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            <div className="p-4 rounded-lg bg-crypto-dark-600 border border-crypto-dark-500">
              <h4 className="font-medium mb-2">Premium Features</h4>
              <p className="text-sm text-gray-300">
                Token holders gain access to exclusive game features and content
              </p>
            </div>
            <div className="p-4 rounded-lg bg-crypto-dark-600 border border-crypto-dark-500">
              <h4 className="font-medium mb-2">Governance Rights</h4>
              <p className="text-sm text-gray-300">
                Influence future game updates with your voting power
              </p>
            </div>
            <div className="p-4 rounded-lg bg-crypto-dark-600 border border-crypto-dark-500">
              <h4 className="font-medium mb-2">Revenue Share</h4>
              <p className="text-sm text-gray-300">
                Earn a portion of game revenue based on token holdings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TokenView;
