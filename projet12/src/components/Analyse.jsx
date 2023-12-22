// Analyse.jsx

import React from "react";
// import "../styles/Home.css";
import "../styles/Analyse.css";
import { useNutritionData } from "../fichierService/ficheService";
import { useUser } from "../userID/userID";
import cal from "../assets/calories-icon.png";
import carbs from "../assets/carbs-icon.png";
import fat from "../assets/fat-icon.png";
import prot from "../assets/protein-icon.png";

function Analyse() {
  // États pour stocker les informations de l'utilisateur
  const { userId } = useUser();

  // Utilisez les hooks personnalisés pour récupérer les données
  const { caloriesCount, proteinCount, carbohydrateCount, lipidCount } =
    useNutritionData(userId);

  return (
    <>
      <div className="card">
        {" "}
        <img src={cal} alt="Calories" />
        <div className="cardstyle">
          <div className="cardstyle1">
            <p>{caloriesCount}</p>
          </div>
          <div className="cardstyle2">
            <p>Calories</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={prot} alt="Proteines" />
        <div className="cardstyle">
          <div className="cardstyle1">
            <p>{proteinCount}</p>
          </div>
          <div className="cardstyle2">
            <p>Proteines</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={carbs} alt="Glucides" />
        <div className="cardstyle">
          <div className="cardstyle1">
            <p>{carbohydrateCount}</p>
          </div>
          <div className="cardstyle2">
            <p>Glucides</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={fat} alt="Lipides" />
        <div className="cardstyle">
          <div className="cardstyle1">
            <p>{lipidCount}</p>
          </div>
          <div className="cardstyle2">
            <p>Lipides</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analyse;
