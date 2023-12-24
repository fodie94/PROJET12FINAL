import React from "react";
import "../styles/Home.css";
import "../styles/ProfilName.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import pointNoir from "../assets/pointNoir.svg";
import pointRouge from "../assets/pointRouge.svg";
import Activity from "./Activity"; // Import du composant Activity
import Analyse from "./Analyse"; // Import du composant Analyse
// import Sessions from "./Sessions";
// import data from "../data/data.json";
import PerformanceKind from "./PerformanceKind";
import Score from "./Score";
import Sessions from "./Sessions";
import { useUserDataName } from "../fichierService/ficheService";
import userId from "../userID/userID"; // Ajustez le chemin en conséquence

function HomeTest() {
  const userFirstName = useUserDataName(userId);
  return (
    <>
      <section className="Home">
        <div className="HomeLeft">
          <div className="Logos">
            <div className="Logo1">
              <img src={icon1} alt="Logo1" />
            </div>
            <div className="Logo2">
              <img src={icon2} alt="Logo2" />
            </div>
            <div className="Logo3">
              <img src={icon3} alt="Logo3" />
            </div>
            <div className="Logo4">
              <img src={icon4} alt="Logo4" />
            </div>
          </div>
          <div className="Copyright">Copiryght, SportSee 2020</div>
        </div>
        <div className="HomeRight">
          <div className="Profil">
            <div className="ProfilName">
              <h1>Bonjour</h1>
              <p>{userFirstName}</p>
            </div>
            <div className="ProfilNameText">
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
          </div>
          <div className="Analyse">
            <div className="AnalyseLeft">
              <div className="AnalyseLeftTop">
                <div className="AnalyseLeftTopText">
                  <p>Activité quotidienne</p>
                  <div className="AnalyseLeftTopTextPoidCal">
                    <div className="AnalyseLeftTopTextPoid">
                      <div className="pointNoirRouge">
                        <img src={pointNoir} alt="pointNoir" />
                      </div>
                      <p>Poids (kg)</p>
                    </div>
                    <div className="AnalyseLeftTopTextCal">
                      <div className="pointNoirRouge">
                        <img src={pointRouge} alt="pointRouge" />
                      </div>
                      <p>Calories brûlées (kCal)</p>
                    </div>
                  </div>
                </div>
                <Activity />
              </div>
              <div className="AnalyseLeftBottom">
                <div className="cubePerformance">
                  <div className="cubePerformanceName">
                    Durée moyenne des sessions
                  </div>
                  <Sessions />
                </div>
                <div className="cubeKind">
                  {" "}
                  <PerformanceKind />
                </div>
                <div className="cubeScore">
                  <div className="ScoreName">Score</div>
                  <div className="Score">
                    <Score />
                  </div>
                </div>
              </div>
            </div>
            <div className="AnalyseRight">
              {/* Intégration du composant Analyse */}
              <Analyse />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeTest;
