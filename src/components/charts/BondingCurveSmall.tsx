
import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface BondingCurveSmallProps {
  data: { time: string; value: number }[];
  positive: boolean;
}

const BondingCurveSmall = ({ data, positive }: BondingCurveSmallProps) => {
  const strokeColor = positive ? "#00FFA3" : "#FF3E9A";
  const gradientId = positive ? "positiveGradient" : "negativeGradient";
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop 
              offset="5%" 
              stopColor={strokeColor} 
              stopOpacity={0.3} 
            />
            <stop 
              offset="95%" 
              stopColor={strokeColor} 
              stopOpacity={0} 
            />
          </linearGradient>
        </defs>
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke={strokeColor} 
          strokeWidth={2}
          fill={`url(#${gradientId})`} 
          animationDuration={1500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BondingCurveSmall;
