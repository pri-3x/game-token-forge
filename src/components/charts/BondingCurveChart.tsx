
import React, { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const generateCurveData = (type: "linear" | "exponential", points = 50) => {
  const data = [];
  
  if (type === "linear") {
    for (let i = 0; i < points; i++) {
      const supply = i * (1000 / points);
      const price = 0.1 + i * (0.9 / points);
      data.push({
        supply,
        price,
        value: supply * price
      });
    }
  } else {
    for (let i = 0; i < points; i++) {
      const supply = i * (1000 / points);
      const price = 0.1 * Math.pow(1.05, i);
      data.push({
        supply,
        price,
        value: supply * price
      });
    }
  }
  
  return data;
};

const BondingCurveChart = () => {
  const [curveType, setCurveType] = useState<"linear" | "exponential">("exponential");
  const [data, setData] = useState<any[]>([]);
  const [currentSupply, setCurrentSupply] = useState<number>(400);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setData(generateCurveData(curveType));
    
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [curveType]);

  // Find the current price based on the supply
  const currentPrice = data.find((point) => Math.round(point.supply) === currentSupply)?.price || 0;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-crypto-dark-600 p-3 rounded-md border border-crypto-dark-500 shadow-lg">
          <p className="text-sm font-medium">Supply: {payload[0].payload.supply.toFixed(0)}</p>
          <p className="text-sm font-medium">Price: ${payload[0].payload.price.toFixed(4)}</p>
          <p className="text-sm font-medium">Value: ${payload[0].payload.value.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full relative bond-curve-grid rounded-lg p-4 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold">Bonding Curve</h3>
          <p className="text-sm text-muted-foreground">Token price vs. Supply</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setCurveType("linear")}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              curveType === "linear" 
                ? "bg-crypto-dark-600 text-white" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            Linear
          </button>
          <button 
            onClick={() => setCurveType("exponential")}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              curveType === "exponential" 
                ? "bg-crypto-dark-600 text-white" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            Exponential
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-0 right-0 flex justify-between px-6">
        <div className="text-center">
          <p className="text-xs text-gray-400">Current Supply</p>
          <p className="text-xl font-bold">{currentSupply.toLocaleString()}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400">Current Price</p>
          <p className="text-xl font-bold text-crypto-green">${currentPrice.toFixed(4)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400">Market Cap</p>
          <p className="text-xl font-bold">${(currentSupply * currentPrice).toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
        </div>
      </div>
      
      <div className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 40 }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9F2DFE" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#9F2DFE" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="supply"
              stroke="#4A4A6A"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toFixed(0)}
              tick={{ fill: '#6C6C8C', fontSize: 12 }}
            />
            <YAxis 
              stroke="#4A4A6A"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              tick={{ fill: '#6C6C8C', fontSize: 12 }}
              domain={[0, 'auto']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#9F2DFE" 
              strokeWidth={2}
              fill="url(#colorPrice)" 
              className={animated ? "chart-path animate-chart-line" : "chart-path"}
            />
            
            {/* Current supply marker */}
            {currentSupply && (
              <line
                x1={currentSupply / 1000 * 100}
                y1="0%"
                x2={currentSupply / 1000 * 100}
                y2="100%"
                stroke="#FF3E9A"
                strokeWidth={1.5}
                strokeDasharray="5 5"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 px-6">
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={currentSupply}
          onChange={(e) => setCurrentSupply(Number(e.target.value))}
          className="w-full h-2 bg-crypto-dark-600 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #9F2DFE 0%, #9F2DFE ${currentSupply / 10}%, #312F45 ${currentSupply / 10}%, #312F45 100%)`
          }}
        />
      </div>
    </div>
  );
};

export default BondingCurveChart;
