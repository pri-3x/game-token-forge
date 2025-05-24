
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Dashboard from "@/components/dashboard/Dashboard";
import GameTokens from "@/components/tokens/GameTokens";
import TokenView from "@/components/tokens/TokenView";
import GameCreationForm from "@/components/forms/GameCreationForm";
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
            <button 
              onClick={() => setActiveTab("create")}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
            >
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
              Create Game
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
            <GameCreationForm />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
