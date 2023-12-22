// useUserDataEffect.js
import { useEffect, useState } from "react";
import DataFormatterSessions from "../formatage/DataFormatterSessions";

const SessionsService = (userId) => {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const responseSessions = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        );
        const userDataSessions = await responseSessions.json();
        console.log(userDataSessions);

        const SessionsData =
          DataFormatterSessions.formatSessions(userDataSessions);

        setUserSessions(SessionsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return userSessions;
};

export default SessionsService;
