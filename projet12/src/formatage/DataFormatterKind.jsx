// DataFormatterKind.jsx
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

export default DataFormatterKind;
