import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
// import "../styles/Home.css";
import "../styles/Activity.css";
import { useUserActivity } from "../fichierService/ficheService";
import { DataFormatterActivity } from "../formatage/formatageData";
import { useUser } from "../userID/userID";

function Activity() {
  const { userId } = useUser();
  const userActivity = useUserActivity(userId);
  const data = DataFormatterActivity.formatChartData(userActivity);

  console.log(data);

  return (
    <ResponsiveContainer width="100%" height="57%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barCategoryGap={0} // Ajoutez cette ligne pour définir l'espace entre les barres
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis
          scale="point"
          padding={{ left: 10, right: 10 }}
          dataKey="name"
          tickLine={false}
          stroke="#9B9EAC"
          strokeWidth={2}
          tickMargin={16}
        />

        <YAxis
          yAxisId="kilogram"
          orientation="right"
          tickLine={false}
          axisLine={false}
          margin={{
            right: 30,
          }}
        />
        {/* Ajoutez axisLine={false} pour masquer les barres de graduation et gardez les chiffres à droite */}
        {/* Ajoutez tick={false} pour masquer les chiffres de l'axe "calories" */}
        <YAxis
          yAxisId="calories"
          orientation="left"
          tickLine={false}
          tick={false}
          axisLine={false}
        />
        {/* <Tooltip /> */}
        <Tooltip
          content={({ label, payload, active }) => {
            if (active) {
              return (
                <div className="custom-tooltip-Activity">
                  <p>{`${payload[0].value}kg`}</p>
                  <p>{`${payload[1].value}Kcal`}</p>
                </div>
              );
            }
          }}
          position={{ y: -40 }}
          cursor={{ stroke: "transparent", strokeWidth: 2 }}
        />

        <Bar
          dataKey="kilogram"
          fill="black"
          barSize={7}
          radius={[10, 10, 0, 0]}
          margin={{ top: 10, bottom: 50 }}
          yAxisId="kilogram"
          activeShape={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="calories"
          fill="red"
          barSize={7}
          radius={[10, 10, 0, 0]}
          yAxisId="calories"
          activeShape={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Activity;
