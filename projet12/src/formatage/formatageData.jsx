// formatageData.js
import USER_ACTIVITY from "../data/USER_ACTIVITY.json";
import USER_AVERAGE_SESSIONS from "../data/USER_AVERAGE_SESSIONS.json";
import USER_MAIN_DATA from "../data/USER_MAIN_DATA.json";
import USER_PERFORMANCE from "../data/USER_PERFORMANCE.json";

class DataFormatterKind {
  // static formatPerformanceData(JSON, useServerData) {
  //   Vérifier si JSON est défini et a les propriétés attendues
  //   const performanceDataLocal = USER_PERFORMANCE[0].data;
  //   const performanceNamesLocal = USER_PERFORMANCE[0].kind;
  //   console.log(performanceDataLocal);
  //   console.log(performanceNamesLocal);
  //   const performanceData = JSON.data.data || [];
  //   const performanceNames = JSON.data.kind || [];

  //   const formattedData = performanceData.map((session) => ({
  //     value: session.value,
  //     kind: performanceNames[session.kind],
  //   }));
  //   return formattedData;
  // }
  static formatPerformanceData() {
    const performanceDataLocal = USER_PERFORMANCE[0].data;
    const performanceNamesLocal = USER_PERFORMANCE[0].kind;
    console.log(performanceDataLocal);
    console.log(performanceNamesLocal);
    const formattedData = performanceDataLocal.map((session) => ({
      value: session.value,
      kind: performanceNamesLocal[session.kind],
    }));
    return formattedData;
  }
}

// class DataFormatterActivity {
//   static formatActivity(dataJSON, useServerData) {
//     // Vérifier si dataJSON est un objet avec une propriété 'data' et un tableau de sessions valide
//     if (
//       !dataJSON || // Vérifie si dataJSON est falsifié
//       (useServerData && !dataJSON.data) || // Vérifie si on utilise les données du serveur et que la propriété 'data' est manquante
//       (useServerData && !Array.isArray(dataJSON.data.sessions)) // Vérifie si on utilise les données du serveur et que 'sessions' n'est pas un tableau
//     ) {
//       console.error("Données invalides :", dataJSON);
//       return [];
//     }

//     if (useServerData) {
//       // Si on utilise les données du serveur, mapper le tableau de sessions
//       return dataJSON.data.sessions.map((session) => ({
//         kilogram: session.kilogram,
//         calories: session.calories,
//       }));
//     } else {
//       // Si on utilise des données locales, extraire sessionsArray et le mapper
//       const sessionsArray = dataJSON.length === 1 ? dataJSON[0].sessions : [];
//       return sessionsArray.map((session) => ({
//         kilogram: session.kilogram,
//         calories: session.calories,
//       }));
//     }
//   }

//   static formatChartData(sessions) {
//     // Mapper les sessions pour obtenir un format adapté aux données du graphique
//     return sessions.map((session, index) => ({
//       name: index + 1,
//       kilogram: session.kilogram,
//       calories: session.calories,
//     }));
//   }
// }

class DataFormatterActivity {
  // static formatActivity(dataJSON) {
  //   return dataJSON.data.sessions.map((session) => ({
  //     kilogram: session.kilogram,
  //     calories: session.calories,
  //   }));
  // }

  static formatActivity() {
    const data = USER_ACTIVITY[0];
    console.log(data);
    return data.sessions.map((session) => ({
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }

  static formatChartData(sessions) {
    return sessions.map((session, index) => ({
      name: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}

class DataFormatterScore {
  static formatScore(userData) {
    const todayScore = userData.data.todayScore || userData.data.score;
    console.log(todayScore);
    // const remainingScore = 1 - (todayScore || 0);

    return [
      {
        name: "score",
        value: todayScore || 0,
      },
      {
        name: "restant",
        // value: remainingScore,
      },
    ];
  }
}

class DataFormatterSessions {
  static formatDayLabel(day) {
    // Si day est un nombre, mappez-le à la correspondance appropriée
    const numericDayMapping = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };

    if (typeof day === "number" && numericDayMapping.hasOwnProperty(day)) {
      return numericDayMapping[day];
    }

    return day;
  }

  // static formatSessions(dataJSON) {
  //   return dataJSON.data.sessions.map((session) => ({
  //     day: DataFormatterSessions.formatDayLabel(session.day),
  //     sessionLength: session.sessionLength,
  //   }));
  // }

  //  Forme LOCAL//
  static formatSessions() {
    const UserSessions = USER_AVERAGE_SESSIONS[0];
    console.log(UserSessions);
    return UserSessions.sessions.map((session) => ({
      day: DataFormatterSessions.formatDayLabel(session.day),
      sessionLength: session.sessionLength,
    }));
  }
}

// DataFormatterName.jsx
class DataFormatterName {
  // static formatUserData(userData) {
  //   const { firstName } = userData.data.userInfos;
  //   return firstName;
  // }

  //  Forme LOCAL//
  static formatUserData() {
    const Name = USER_MAIN_DATA[0];
    console.log(Name);
    const firstName = Name.userInfos.firstName;
    console.log(firstName);
    return firstName;
  }
}

// DataFormatterNutrition.jsx
class DataFormatterNutrition {
  // static formatNutritionData(userData) {
  //   const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
  //     userData.data.keyData;

  //   return {
  //     caloriesCount: `${calorieCount} KCal`,
  //     proteinCount: `${proteinCount} g`,
  //     carbohydrateCount: `${carbohydrateCount} g`,
  //     lipidCount: `${lipidCount} g`,
  //   };
  // }

  static formatNutritionData() {
    const data = USER_MAIN_DATA[0];
    console.log(data);
    const Nutrition = data.keyData;
    console.log(Nutrition);

    return {
      caloriesCount: `${Nutrition.calorieCount} KCal`,
      proteinCount: `${Nutrition.proteinCount} g`,
      carbohydrateCount: `${Nutrition.carbohydrateCount} g`,
      lipidCount: `${Nutrition.lipidCount} g`,
    };
  }
}

export {
  DataFormatterKind,
  DataFormatterActivity,
  DataFormatterScore,
  DataFormatterSessions,
  DataFormatterName,
  DataFormatterNutrition,
};
