// formatageData.js
import USER_ACTIVITY from "../data/USER_ACTIVITY.json";
import USER_AVERAGE_SESSIONS from "../data/USER_AVERAGE_SESSIONS.json";
import USER_MAIN_DATA from "../data/USER_MAIN_DATA.json";
import USER_PERFORMANCE from "../data/USER_PERFORMANCE.json";
import userId from "../userID/userID"; // Ajustez le chemin en conséquence
// Définissez une variable globale pour déterminer l'utilisation des données du serveur ou locales
//let useServerData = true; // Mettez la valeur par défaut ici
let useServerData = false;

let userDataIndex = userId === 12 ? 0 : userId === 18 ? 1 : 0; // Choisissez l'index en fonction de userId
console.log(userDataIndex);

// Exportez une fonction pour mettre à jour la variable useServerData
function setUseServerData(value) {
  useServerData = value;
}

// Exportez une fonction pour mettre à jour l'index de performanceData
function setDataIndex(index) {
  userDataIndex = index;
}

class DataFormatterKind {
  static formatPerformanceData(JSON, dataIndex = userDataIndex) {
    const performanceDataLocal = USER_PERFORMANCE[dataIndex].data;
    const performanceNamesLocal = USER_PERFORMANCE[dataIndex].kind;
    console.log(performanceDataLocal);
    console.log(performanceNamesLocal);

    if (useServerData) {
      console.log("Utilisation API");
      const performanceData = JSON.data.data || [];
      const performanceNames = JSON.data.kind || [];

      const formattedData = performanceData.map((session) => ({
        value: session.value,
        kind: performanceNames[session.kind],
      }));

      return formattedData;
    } else {
      console.log("Utilisation LOCAL");
      const formattedData = performanceDataLocal.map((session) => ({
        value: session.value,
        kind: performanceNamesLocal[session.kind],
      }));

      return formattedData;
    }
  }
}

class DataFormatterActivity {
  static formatActivity(dataJSON, dataIndex = userDataIndex) {
    const activityDataLocal = USER_ACTIVITY[dataIndex];
    console.log(activityDataLocal);

    if (useServerData) {
      console.log("Utilisation API");
      return dataJSON.data.sessions.map((session) => ({
        kilogram: session.kilogram,
        calories: session.calories,
      }));
    } else {
      console.log("Utilisation LOCAL");
      const data = activityDataLocal || {};
      console.log(data);
      return data.sessions.map((session) => ({
        kilogram: session.kilogram,
        calories: session.calories,
      }));
    }
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
  static formatScore(userData, dataIndex = userDataIndex) {
    const scoreDataLocal = USER_MAIN_DATA[dataIndex];
    console.log(scoreDataLocal);

    if (useServerData) {
      console.log("Utilisation API");
      const todayScore = userData.data.todayScore || userData.data.score;
      console.log(todayScore);
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
    } else {
      console.log("Utilisation LOCAL");
      const data = scoreDataLocal || {};
      console.log(data);

      const todayScore = data.todayScore || data.score;
      console.log(todayScore);

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
}

class DataFormatterSessions {
  static formatDayLabel(day) {
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

  static formatSessions(dataJSON, dataIndex = userDataIndex) {
    if (useServerData) {
      console.log("Utilisation API");
      return dataJSON.data.sessions.map((session) => ({
        day: DataFormatterSessions.formatDayLabel(session.day),
        sessionLength: session.sessionLength,
      }));
    } else {
      console.log("Utilisation LOCAL");
      const UserSessions = USER_AVERAGE_SESSIONS[dataIndex];
      console.log(UserSessions);
      return UserSessions.sessions.map((session) => ({
        day: DataFormatterSessions.formatDayLabel(session.day),
        sessionLength: session.sessionLength,
      }));
    }
  }
}

class DataFormatterName {
  static formatUserData(userData, dataIndex = userDataIndex) {
    if (useServerData) {
      console.log("Utilisation API");
      const { firstName } = userData.data.userInfos;
      return firstName;
    } else {
      console.log("Utilisation LOCAL");
      const Name = USER_MAIN_DATA[dataIndex];
      console.log(Name);
      const firstName = Name.userInfos.firstName;
      console.log(firstName);
      return firstName;
    }
  }
}

class DataFormatterNutrition {
  static formatNutritionData(userData, dataIndex = userDataIndex) {
    if (useServerData) {
      console.log("Utilisation API");
      const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
        userData.data.keyData;

      return {
        caloriesCount: `${calorieCount} KCal`,
        proteinCount: `${proteinCount} g`,
        carbohydrateCount: `${carbohydrateCount} g`,
        lipidCount: `${lipidCount} g`,
      };
    } else {
      console.log("Utilisation LOCAL");
      const data = USER_MAIN_DATA[dataIndex];
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
}

export {
  DataFormatterKind,
  DataFormatterActivity,
  DataFormatterScore,
  DataFormatterSessions,
  DataFormatterName,
  DataFormatterNutrition,
  setUseServerData,
  setDataIndex,
};
