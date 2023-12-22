// DataFormatterActivity.js
class DataFormatterActivity {
  static formatSessions(dataJSON) {
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

export default DataFormatterActivity;
