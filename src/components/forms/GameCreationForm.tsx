
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BondingCurveConfig } from "@/lib/types";

const GameCreationForm = () => {
  const [formData, setFormData] = useState({
    gameName: "",
    gameDescription: "",
    gameImageUrl: "",
    tokenSymbol: "",
    initialPrice: "0.0001",
    priceIncrement: "0.00001",
    protocolFee: 200,
    creatorFee: 300,
    curveType: "linear" as "linear" | "exponential",
  });

  const [isDeploying, setIsDeploying] = useState(false);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateGame = async () => {
    setIsDeploying(true);
    
    // Simulate game creation and token deployment
    console.log("Creating game with bonding curve config:", {
      name: formData.gameName,
      symbol: formData.tokenSymbol,
      initialPrice: formData.initialPrice,
      priceIncrement: formData.priceIncrement,
      protocolFee: formData.protocolFee,
      creatorFee: formData.creatorFee,
      creatorAddress: "0xbADE878A9289e9568359C83E2EB051fbA9E2863b", // This would come from connected wallet
    });

    // Simulate deployment delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsDeploying(false);
    alert("Game created successfully! Token deployed with bonding curve.");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-crypto-dark-700 border-crypto-dark-600">
        <CardHeader>
          <CardTitle className="text-2xl">Create Game & Deploy Token</CardTitle>
          <p className="text-muted-foreground">
            Create your game and automatically deploy a bonding curve token for in-game utility and trading
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Game Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Game Information</h3>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="gameName">Game Name</Label>
                <Input
                  id="gameName"
                  value={formData.gameName}
                  onChange={(e) => handleInputChange("gameName", e.target.value)}
                  placeholder="CryptoRacer"
                  className="bg-crypto-dark-800 border-crypto-dark-600 focus:ring-crypto-purple"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tokenSymbol">Token Symbol</Label>
                <Input
                  id="tokenSymbol"
                  value={formData.tokenSymbol}
                  onChange={(e) => handleInputChange("tokenSymbol", e.target.value)}
                  placeholder="RACE"
                  className="bg-crypto-dark-800 border-crypto-dark-600 focus:ring-crypto-purple"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gameDescription">Game Description</Label>
              <textarea
                id="gameDescription"
                value={formData.gameDescription}
                onChange={(e) => handleInputChange("gameDescription", e.target.value)}
                placeholder="An exciting crypto racing game..."
                className="w-full px-3 py-2 rounded-md bg-crypto-dark-800 border border-crypto-dark-600 focus:ring-1 focus:ring-crypto-purple outline-none resize-none h-24"
              />
            </div>
          </div>

          {/* Token Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Token & Bonding Curve Configuration</h3>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="initialPrice">Initial Price (ETH)</Label>
                <Input
                  id="initialPrice"
                  type="number"
                  step="0.0001"
                  value={formData.initialPrice}
                  onChange={(e) => handleInputChange("initialPrice", e.target.value)}
                  className="bg-crypto-dark-800 border-crypto-dark-600 focus:ring-crypto-purple"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priceIncrement">Price Increment (ETH)</Label>
                <Input
                  id="priceIncrement"
                  type="number"
                  step="0.00001"
                  value={formData.priceIncrement}
                  onChange={(e) => handleInputChange("priceIncrement", e.target.value)}
                  className="bg-crypto-dark-800 border-crypto-dark-600 focus:ring-crypto-purple"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="protocolFee">Protocol Fee (basis points)</Label>
                <Input
                  id="protocolFee"
                  type="number"
                  value={formData.protocolFee}
                  onChange={(e) => handleInputChange("protocolFee", parseInt(e.target.value))}
                  className="bg-crypto-dark-800 border-crypto-dark-600 focus:ring-crypto-purple"
                />
                <p className="text-xs text-gray-400">{formData.protocolFee / 100}%</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="creatorFee">Creator Fee (basis points)</Label>
                <Input
                  id="creatorFee"
                  type="number"
                  value={formData.creatorFee}
                  onChange={(e) => handleInputChange("creatorFee", parseInt(e.target.value))}
                  className="bg-crypto-dark-800 border-crypto-dark-600 focus:ring-crypto-purple"
                />
                <p className="text-xs text-gray-400">{formData.creatorFee / 100}%</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="curveType">Curve Type</Label>
              <select
                id="curveType"
                value={formData.curveType}
                onChange={(e) => handleInputChange("curveType", e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-crypto-dark-800 border border-crypto-dark-600 focus:ring-1 focus:ring-crypto-purple outline-none"
              >
                <option value="linear">Linear</option>
                <option value="exponential">Exponential</option>
              </select>
            </div>
          </div>

          {/* Preview */}
          <div className="p-4 rounded-lg bg-crypto-dark-800 border border-crypto-dark-600">
            <h4 className="font-semibold mb-2">Deployment Preview</h4>
            <div className="text-sm space-y-1 text-gray-300">
              <p><span className="text-gray-400">Game:</span> {formData.gameName || "Untitled Game"}</p>
              <p><span className="text-gray-400">Token:</span> {formData.tokenSymbol || "TOKEN"}</p>
              <p><span className="text-gray-400">Initial Price:</span> {formData.initialPrice} ETH</p>
              <p><span className="text-gray-400">Total Fees:</span> {(formData.protocolFee + formData.creatorFee) / 100}%</p>
            </div>
          </div>

          <button
            onClick={handleCreateGame}
            disabled={isDeploying || !formData.gameName || !formData.tokenSymbol}
            className="w-full py-3 rounded-md bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDeploying ? "Deploying Game & Token..." : "Create Game & Deploy Token"}
          </button>
          
          {isDeploying && (
            <div className="text-center text-sm text-gray-400">
              <p>Deploying smart contracts and setting up bonding curve...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GameCreationForm;
