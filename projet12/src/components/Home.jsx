import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import cal from "../assets/calories-icon.png";
import carbs from "../assets/carbs-icon.png";
import fat from "../assets/fat-icon.png";
import prot from "../assets/protein-icon.png";

function Home() {
  // États pour stocker les informations de l'utilisateur
  const [userFirstName, setUserFirstName] = useState("");
  const [caloriesCount, setCaloriesCount] = useState("");
  const [proteinCount, setProteinCount] = useState("");
  const [carbohydrateCount, setCarbohydrateCount] = useState("");
  const [lipidCount, setLipidCount] = useState("");
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12;

        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const userData = await response.json();

        const { firstName } = userData.data.userInfos;
        const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
          userData.data.keyData;

        setUserFirstName(firstName);
        setCaloriesCount(calorieCount);
        setProteinCount(proteinCount);
        setCarbohydrateCount(carbohydrateCount);
        setLipidCount(lipidCount);

        console.log("Données de l'utilisateur :", userData);

        const responseActivity = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        );
        const userDataActivity = await responseActivity.json();

        console.log("Données de l'utilisateur Activity :", userDataActivity);

        const sessionsData = userDataActivity.data.sessions || [];
        const extractedSessions = sessionsData.map((session) => ({
          day: session.day,
          kilogram: session.kilogram,
          calories: session.calories,
        }));
        console.log("Données de l'utilisateur Activity :", sessionsData);
        console.log("Données de l'utilisateur Activity :", extractedSessions);
        setUserSessions(extractedSessions);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, []);

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
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="Analyse">
            <div className="AnalyseLeft">
              <div className="AnalyseLeftTop">
                {/* Afficher les résultats de l'activité ici */}
                {userSessions.map((session, index) => (
                  <div key={index}>
                    <div className="statActivity">
                      {/* <p>{session.day}</p> */}
                      <p>{session.kilogram} kg</p>
                      <p>{session.calories} calories</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="AnalyseLeftBottom">
                <div className="cube">gfgf</div>
                <div className="cube">gfgf</div>
                <div className="cube">ggf</div>
              </div>
            </div>
            <div className="AnalyseRight">
              {/* Utilisez les états pour afficher les données */}
              <div className="card">
                {" "}
                <img src={cal} alt="Calories" />
                <div className="cardstyle">
                  <div className="cardstyle1">
                    <p>{caloriesCount}kCal</p>
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
                    <p>{proteinCount}g</p>
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
                    <p>{carbohydrateCount}g</p>
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
                    <p>{lipidCount}g</p>
                  </div>
                  <div className="cardstyle2">
                    <p>Lipides</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
