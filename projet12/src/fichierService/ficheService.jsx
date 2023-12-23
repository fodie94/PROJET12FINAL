import { useEffect, useState } from "react";
import {
  DataFormatterKind,
  DataFormatterScore,
  DataFormatterSessions,
  DataFormatterActivity,
  DataFormatterName,
  DataFormatterNutrition,
} from "../formatage/formatageData";

// ficheService.jsx

const useUserActivity = (userId) => {
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userDataActivity;

        const responseActivity = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        );
        userDataActivity = await responseActivity.json();

        console.log(userDataActivity);
        const ActivityData =
          DataFormatterActivity.formatActivity(userDataActivity);
        setUserActivity(ActivityData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]); // userId est de nouveau une dépendance

  return userActivity;
};

const PerformanceKindService = (userId) => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userDataPerformance;

        const responsePerformance = await fetch(
          `http://localhost:3000/user/${userId}/performance`
        );
        userDataPerformance = await responsePerformance.json();

        // Ajoutez des logs pour vérifier les données récupérées
        console.log("Raw Performance Data:", userDataPerformance);

        const formattedData =
          DataFormatterKind.formatPerformanceData(userDataPerformance);

        // Ajoutez des logs pour vérifier les données formatées
        console.log("Formatted Performance Data:", formattedData);

        setPerformanceData(formattedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return performanceData;
};

// ScoreService
const useScoreData = (userId) => {
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userDataScore;

        // Si userId est fourni, récupérez les données du serveur
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        userDataScore = await response.json();

        const formattedScoreData =
          DataFormatterScore.formatScore(userDataScore);
        setScoreData(formattedScoreData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [userId]);

  return scoreData;
};

// SessionsService
const SessionsService = (userId) => {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userDataSessions;

        // Si userId est fourni, récupérez les données du serveur
        const responseSessions = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        );
        userDataSessions = await responseSessions.json();
        console.log(userDataSessions);

        const sessionsData =
          DataFormatterSessions.formatSessions(userDataSessions);
        //     console.log(sessionsData);
        setUserSessions(sessionsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return userSessions;
};

// serviceName.jsx
const useUserDataName = (userId) => {
  const [userFirstName, setUserFirstName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userData;

        // Si userId est fourni, récupérez les données du serveur
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        userData = await response.json();

        const formattedFirstName = DataFormatterName.formatUserData(userData);

        setUserFirstName(formattedFirstName);

        //  console.log("Données de l'utilisateur :", userData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return userFirstName;
};

// Ajout de useNutritionData
const useNutritionData = (userId) => {
  const [nutritionData, setNutritionData] = useState({
    caloriesCount: "",
    proteinCount: "",
    carbohydrateCount: "",
    lipidCount: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userDataNutrition;

        // Si userId est fourni, récupérez les données du serveur
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        userDataNutrition = await response.json();
        const formattedNutritionData =
          DataFormatterNutrition.formatNutritionData(userDataNutrition);

        setNutritionData(formattedNutritionData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return nutritionData;
};

export {
  PerformanceKindService,
  useScoreData,
  SessionsService,
  useUserActivity,
  useUserDataName,
  useNutritionData,
};
