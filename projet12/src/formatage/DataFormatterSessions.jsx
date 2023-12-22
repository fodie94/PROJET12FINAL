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

  static formatChartDataSessions(sessions) {
    return sessions.map((session) => ({
      day: DataFormatterSessions.formatDayLabel(session.day),
      uv: session.sessionLength,
    }));
  }
}

export default DataFormatterSessions;
