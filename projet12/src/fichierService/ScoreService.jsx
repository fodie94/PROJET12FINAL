// ScoreService.jsx
import { useEffect, useState } from "react";
import DataFormatterScore from "../formatage/DataFormatterScore";

const useScoreData = (userId) => {
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const userData = await response.json();
        const formattedScoreData = DataFormatterScore.formatScore(userData);
        setScoreData(formattedScoreData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [userId]);

  return scoreData;
};

export default useScoreData;
