import { useEffect, useState } from "react";
import {
  DataFormatterKind,
  DataFormatterScore,
  DataFormatterSessions,
  DataFormatterActivity,
  DataFormatterName,
  DataFormatterNutrition,
} from "../formatage/formatageData";
import USER_ACTIVITY from "../data/USER_ACTIVITY.json";
import USER_AVERAGE_SESSIONS from "../data/USER_AVERAGE_SESSIONS.json";
import USER_MAIN_DATA from "../data/USER_MAIN_DATA.json";
import USER_PERFORMANCE from "../data/USER_PERFORMANCE.json";

// ficheService.jsx

const useUserActivity = (userId) => {
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userDataActivity;

        // Utiliser true si userId est fourni, sinon false
        const useServerData = userId ? true : false;

        // Utiliser false pour toujours utiliser les données locales
        //const useServerData = false;

        if (useServerData) {
          // Si userId est fourni, récupérez les données du serveur
          const responseActivity = await fetch(
            `http://localhost:3000/user/${userId}/activity`
          );
          userDataActivity = await responseActivity.json();
        } else {
          // Sinon, utilisez le JSON local
          userDataActivity = USER_ACTIVITY.filter(
            (data) => data.userId === userId
          );
        }

        const ActivityData = DataFormatterActivity.formatActivity(
          userDataActivity,
          useServerData
        );
        //  console.log(ActivityData);
        setUserActivity(ActivityData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]); // userId est de nouveau une dépendance

  return userActivity;
};

// PerformanceKindService
// const PerformanceKindService = (userId) => {
//   const [performanceData, setPerformanceData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         let userDataPerformance;

//         // Utiliser true si userId est fourni, sinon false
//         const useServerData = userId ? true : false;

//         // Utiliser false pour toujours utiliser les données locales
//         //const useServerData = false;

//         if (useServerData) {
//           // Si userId est fourni, récupérez les données du serveur
//           const responsePerformance = await fetch(
//             `http://localhost:3000/user/${userId}/performance`
//           );
//           userDataPerformance = await responsePerformance.json();
//         } else {
//           // Sinon, utilisez le JSON local
//           userDataPerformance = USER_PERFORMANCE.filter(
//             (data) => data.userId === userId
//           );
//         }

//         // Ajoutez des logs pour vérifier les données récupérées
//         console.log("Raw Performance Data:", userDataPerformance);

//         const formattedData =
//           DataFormatterKind.formatPerformanceData(userDataPerformance);

//         // Ajoutez des logs pour vérifier les données formatées
//         console.log("Formatted Performance Data:", formattedData);

//         setPerformanceData(formattedData);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des données :", error);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   return performanceData;
// };

const PerformanceKindService = (userId) => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userDataPerformance;

        // Utiliser true si userId est fourni, sinon false
        const useServerData = userId ? true : false;

        // Utiliser false pour toujours utiliser les données locales
        //  const useServerData = false;

        if (useServerData) {
          // Si userId est fourni, récupérez les données du serveur
          const responsePerformance = await fetch(
            `http://localhost:3000/user/${userId}/performance`
          );
          userDataPerformance = await responsePerformance.json();
        } else {
          // Sinon, utilisez le JSON local
          userDataPerformance = USER_PERFORMANCE.filter(
            (data) => data.userId === userId
          );
        }

        // Ajoutez des logs pour vérifier les données récupérées
        console.log("Raw Performance Data:", userDataPerformance);

        const formattedData = DataFormatterKind.formatPerformanceData(
          userDataPerformance,
          useServerData
        );

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

        // Utiliser true si userId est fourni, sinon false
        const useServerData = userId ? true : false;

        // Utiliser false pour toujours utiliser les données locales
        // const useServerData = false;

        if (useServerData) {
          // Si userId est fourni, récupérez les données du serveur
          const response = await fetch(`http://localhost:3000/user/${userId}`);
          userDataScore = await response.json();
        } else {
          // Sinon, utilisez le JSON local
          userDataScore = USER_MAIN_DATA.filter(
            (data) => data.userId === userId
          );
        }

        const formattedScoreData =
          DataFormatterScore.formatScore(userDataScore);
        setScoreData(formattedScoreData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [userId]);
  // let infos = USER_MAIN_DATA;
  // console.log(infos);
  return scoreData;
};

// SessionsService
const SessionsService = (userId) => {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userDataSessions;

        // Utiliser true si userId est fourni, sinon false
        const useServerData = userId ? true : false;

        // Utiliser false pour toujours utiliser les données locales
        //const useServerData = false;
        if (useServerData) {
          // Si userId est fourni, récupérez les données du serveur
          const responseSessions = await fetch(
            `http://localhost:3000/user/${userId}/average-sessions`
          );
          userDataSessions = await responseSessions.json();
          console.log(userDataSessions);
        } else {
          // Sinon, utilisez le JSON local
          userDataSessions = USER_AVERAGE_SESSIONS;
        }

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
  // let infos = USER_AVERAGE_SESSIONS;
  // console.log(infos);
  return userSessions;
};

// serviceName.jsx
const useUserDataName = (userId) => {
  const [userFirstName, setUserFirstName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userData;
        // Utiliser true si userId est fourni, sinon false
        const useServerData = userId ? true : false;

        // Utiliser false pour toujours utiliser les données locales
        //const useServerData = false;
        if (useServerData) {
          // Si userId est fourni, récupérez les données du serveur
          const response = await fetch(`http://localhost:3000/user/${userId}`);
          userData = await response.json();
        } else {
          // Sinon, utilisez le JSON local
          userData = USER_MAIN_DATA;
        }

        const formattedFirstName = DataFormatterName.formatUserData(userData);

        setUserFirstName(formattedFirstName);

        //  console.log("Données de l'utilisateur :", userData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]);
  // let infos = USER_MAIN_DATA;
  // console.log(infos);
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
        // Utiliser true si userId est fourni, sinon false
        const useServerData = userId ? true : false;

        // Utiliser false pour toujours utiliser les données locales
        //const useServerData = false;
        if (useServerData) {
          // Si userId est fourni, récupérez les données du serveur
          const response = await fetch(`http://localhost:3000/user/${userId}`);
          userDataNutrition = await response.json();
        } else {
          // Sinon, utilisez le JSON local
          userDataNutrition = USER_MAIN_DATA;
        }

        const formattedNutritionData =
          DataFormatterNutrition.formatNutritionData(userDataNutrition);

        setNutritionData(formattedNutritionData);

        //     console.log(
        //       "Données nutritionnelles de l'utilisateur :",
        //       userDataNutrition
        //    );
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]);
  //  let infos = USER_MAIN_DATA;
  // console.log(infos);
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
