// Sessions.js
import React from "react";
// import "../styles/Home.css";
import "../styles/Sessions.css";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Tooltip,
} from "recharts";

import { SessionsService } from "../fichierService/ficheService"; // Import du nouveau fichier
import { useUser } from "../userID/userID";

function Sessions() {
  const { userId } = useUser();
  const userSessions = SessionsService(userId);
  //  console.log(userSessions);
  return (
    <ResponsiveContainer
      id="performance-container"
      className="performance-container"
    >
      <LineChart data={userSessions}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          opacity={0.5}
          style={{
            transform: "scaleX(0.9)",
            transformOrigin: "bottom",
            fontSize: "12px",
            stroke: "white",
          }}
          padding={{ right: -3 }}
        />
        <Line
          dataKey="sessionLength"
          type="natural"
          stroke="white"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "red",
            strokeOpacity: 0.7,
            strokeWidth: 6,
            r: 8,
          }}
        />
        <YAxis
          hide={true}
          padding={{ top: 50, bottom: 0 }}
          domain={["dataMin - 20", "dataMax + 20"]}
          dataKey="sessionLength"
        />
        <Tooltip
          content={({ label, payload, active }) => {
            if (active) {
              return (
                <div className="custom-tooltip">
                  <p>{`${payload[0].value}min`}</p>
                </div>
              );
            }
          }}
          position={{ y: 40 }}
          cursor={{ stroke: "transparent", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Sessions;
