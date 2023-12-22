// formatageData.js

class DataFormatterKind {
  static formatPerformanceData(JSON) {
    const performanceData = JSON.data.data || [];
    const performanceNames = JSON.data.kind || [];
    const formattedData = performanceData.map((session) => ({
      value: session.value,
      kind: performanceNames[session.kind],
    }));

    return formattedData;
  }
}

class DataFormatterActivity {
  static formatActivity(dataJSON) {
    return dataJSON.data.sessions.map((session) => ({
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

  static formatSessions(dataJSON) {
    return dataJSON.data.sessions.map((session) => ({
      day: DataFormatterSessions.formatDayLabel(session.day),
      sessionLength: session.sessionLength,
    }));
  }
}

// DataFormatterName.jsx
class DataFormatterName {
  static formatUserData(userData) {
    const { firstName } = userData.data.userInfos;
    return firstName;
  }
}

// DataFormatterNutrition.jsx
class DataFormatterNutrition {
  static formatNutritionData(userData) {
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
      userData.data.keyData;

    return {
      caloriesCount: `${calorieCount} KCal`,
      proteinCount: `${proteinCount} g`,
      carbohydrateCount: `${carbohydrateCount} g`,
      lipidCount: `${lipidCount} g`,
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
