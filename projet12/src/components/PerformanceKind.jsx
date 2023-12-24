// PerformanceKind.jsx
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
// import "../styles/Home.css";
import "../styles/PerformanceKind.css";
import { PerformanceKindService } from "../fichierService/ficheService"; // Assurez-vous de fournir le bon chemin
import userId from "../userID/userID"; // Ajustez le chemin en conséquence

function PerformanceKind() {
  const performanceData = PerformanceKindService(userId) || [];

  return (
    <>
      <ResponsiveContainer>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={performanceData}
          margin={{ left: 30, top: 30, right: 30, bottom: 30 }}
          radius={[5, 5, 5, 5]}
          startAngle={30}
          endAngle={-330}
        >
          <PolarGrid stroke="white" gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFF"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "white", fontSize: "12px", padding: "5px" }}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            name="kind"
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

export default PerformanceKind;
