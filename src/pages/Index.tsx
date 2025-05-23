
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Dashboard from "@/components/dashboard/Dashboard";
import GameTokens from "@/components/tokens/GameTokens";
import TokenView from "@/components/tokens/TokenView";
import { dummyGames, dummyTokens } from "@/lib/dummy-data";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      <Navbar />
      
      <main className="container py-8 animate-slide-up">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-crypto-purple to-crypto-blue bg-clip-text text-transparent">
            GameTerminal
          </h1>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-md bg-crypto-dark-600 hover:bg-crypto-dark-500 transition-colors">
              Connect Wallet
            </button>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
              Create Game
            </button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-crypto-dark-700 rounded-lg mb-6">
            <TabsTrigger 
              value="dashboard" 
              className="data-[state=active]:bg-crypto-dark-600 data-[state=active]:text-white rounded-md"
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="tokens" 
              className="data-[state=active]:bg-crypto-dark-600 data-[state=active]:text-white rounded-md"
            >
              Game Tokens
            </TabsTrigger>
            <TabsTrigger 
              value="create" 
              className="data-[state=active]:bg-crypto-dark-600 data-[state=active]:text-white rounded-md"
            >
              Create
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-0">
            <Dashboard games={dummyGames} tokens={dummyTokens} />
          </TabsContent>
          
          <TabsContent value="tokens" className="mt-0">
            {selectedToken ? (
              <TokenView 
                token={dummyTokens.find(t => t.id === selectedToken)!} 
                onBack={() => setSelectedToken(null)}
              />
            ) : (
              <GameTokens tokens={dummyTokens} onSelectToken={setSelectedToken} />
            )}
          </TabsContent>
          
          <TabsContent value="create" className="mt-0">
            <div className="grid gap-8 grid-cols-1">
              <div className="p-6 rounded-lg bg-crypto-dark-700 crypto-gradient-border">
                <h2 className="text-2xl font-bold mb-4">Create Game & Token</h2>
                <p className="text-muted-foreground mb-6">
                  Launch your game with its own bonding curve token for in-game utility and player investment
                </p>
                
                <form className="space-y-4">
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Game Name</label>
                      <input 
                        type="text" 
                        placeholder="CryptoRacer"
                        className="w-full px-4 py-2 rounded-md bg-crypto-dark-800 border border-crypto-dark-600 focus:ring-1 focus:ring-crypto-purple outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Token Symbol</label>
                      <input 
                        type="text" 
                        placeholder="RACE"
                        className="w-full px-4 py-2 rounded-md bg-crypto-dark-800 border border-crypto-dark-600 focus:ring-1 focus:ring-crypto-purple outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Curve Type</label>
                      <select 
                        className="w-full px-4 py-2 rounded-md bg-crypto-dark-800 border border-crypto-dark-600 focus:ring-1 focus:ring-crypto-purple outline-none"
                      >
                        <option value="linear">Linear</option>
                        <option value="exponential">Exponential</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Creator Fee (%)</label>
                      <input 
                        type="number" 
                        placeholder="2.5"
                        min="0"
                        max="10"
                        step="0.1"
                        className="w-full px-4 py-2 rounded-md bg-crypto-dark-800 border border-crypto-dark-600 focus:ring-1 focus:ring-crypto-purple outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="button"
                      className="w-full py-3 rounded-md bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity font-medium"
                    >
                      Deploy Game & Token
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
