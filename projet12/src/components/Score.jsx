// Score.jsx
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
// import "../styles/Home.css";
import "../styles/Score.css";
import { useScoreData } from "../fichierService/ficheService"; // Assurez-vous de fournir le bon chemin
import userId from "../userID/userID"; // Ajustez le chemin en conséquence
function Score() {
  // const COLORS = ["#FF0000", "green"];

  // return (
  //   <PieChart width={170} height={170}>
  //     <Pie
  //       data={scoreData}
  //       dataKey="value"
  //       cx={80}
  //       cy={80}
  //       innerRadius={50}
  //       // outerRadius={90}
  //       fill="#8884d8"
  //       paddingAngle={230}
  //       startAngle={-230} // Ajout de la rotation de 30 degrés
  //       //  background={{ fill: "white" }} // Ajout de background color white
  //       color="transparant"
  //     >
  //       {/* {scoreData.length > 0 &&
  //         Array.isArray(scoreData) &&
  //         scoreData.map((entry, index) => (
  //           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  //         ))} */}

  //       <Cell fill="red" />
  //     </Pie>
  //     {/* <text
  //       fontWeight="700"
  //       fontSize={26}
  //       fill="#282D30"
  //       x="50%"
  //       y="48%"
  //       textAnchor="middle"
  //       background="#00FF00" // Ajout du fond vert
  //     >
  //       {scoreData.length > 0 && `${scoreData[0].value * 100}%`}
  //     </text>
  //     <text
  //       fontSize="16"
  //       fontWeight="500"
  //       fill="#74798C"
  //       x="50%"
  //       y="60%"
  //       textAnchor="middle"
  //       background="#00FF00" // Ajout du fond vert
  //     >
  //       de votre objectif
  //     </text> */}
  //   </PieChart>
  // );
  const scoreData = useScoreData(userId);
  return (
    <PieChart width={170} height={170}>
      <Pie
        data={scoreData}
        dataKey="value"
        cx={80}
        cy={80}
        innerRadius={55}
        paddingAngle={250}
        startAngle={-270} // Ajout de la rotation de 30 degrés
        color="transparant"
      >
        <Cell fill="red" />
      </Pie>
      <Pie
        data={scoreData}
        dataKey="value"
        cx={80}
        cy={80}
        // innerRadius={55}
        outerRadius={50}
        fill="white"
        // paddingAngle={300}
        // startAngle={-230} // Ajout de la rotation de 30 degrés
        color="transparant"
      ></Pie>
      <text
        fontWeight="700"
        fontSize={26}
        fill="#282D30"
        x="50%"
        y="48%"
        textAnchor="middle"
        background="#00FF00" // Ajout du fond vert
      >
        {scoreData.length > 0 && `${scoreData[0].value * 100}%`}
      </text>
      <text
        fontSize="12"
        fontWeight="500"
        fill="#74798C"
        x="50%"
        y="60%"
        textAnchor="middle"
        background="#00FF00" // Ajout du fond vert
      >
        de votre
      </text>
      <text
        fontSize="12"
        fontWeight="500"
        fill="#74798C"
        x="50%"
        y="70%"
        textAnchor="middle"
        background="#00FF00" // Ajout du fond vert
      >
        objectif
      </text>
    </PieChart>
  );
}

export default Score;
