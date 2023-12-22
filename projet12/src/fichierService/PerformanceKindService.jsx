// PerformanceKindService.jsx
import { useEffect, useState } from "react";
import DataFormatterKind from "../formatage/DataFormatterKind";

const PerformanceKindService = (userId) => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const responsePerformance = await fetch(
          `http://localhost:3000/user/${userId}/performance`
        );
        const userDataPerformance = await responsePerformance.json();
        console.log(userDataPerformance);

        const formattedData =
          DataFormatterKind.formatPerformanceData(userDataPerformance);

        setPerformanceData(formattedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return performanceData;
};

export default PerformanceKindService;
