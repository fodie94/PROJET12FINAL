// DataFormatterScore.js
class DataFormatterScore {
  static formatScore(userData) {
    const todayScore = userData.data.todayScore;
    const remainingScore = 0.12 - (todayScore || 0);

    return [
      {
        name: "score",
        value: todayScore || 0,
      },
      {
        name: "restant",
        value: remainingScore,
      },
    ];
  }
}

export default DataFormatterScore;
