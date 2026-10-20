function PredictionResult({ result }) {
  if (!result) {
    return (
      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "18px",
          color: "white",
        }}
      >
        <h2>Prediction Result</h2>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "20px",
          }}
        >
          Enter the inventory details and click Predict Demand.
        </p>
      </div>
    );
  }

  const prediction = Number(result.prediction);

  let demandLevel;
  let recommendation;

  if (prediction >= 100) {
    demandLevel = "High";
    recommendation = "Increase stock to avoid potential shortages.";
  } else if (prediction >= 50) {
    demandLevel = "Medium";
    recommendation = "Maintain sufficient stock and monitor demand.";
  } else {
    demandLevel = "Low";
    recommendation = "Current demand appears low. Avoid overstocking.";
  }

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "18px",
        color: "white",
      }}
    >
      <h2>Prediction Result</h2>

      <div
        style={{
          marginTop: "25px",
          padding: "20px",
          background: "#0f172a",
          borderRadius: "15px",
        }}
      >
        <p style={{ color: "#94a3b8" }}>
          Predicted Demand
        </p>

        <h1
          style={{
            color: "#22c55e",
            fontSize: "44px",
            marginTop: "8px",
          }}
        >
          {prediction.toFixed(2)}
        </h1>

        <p style={{ color: "#94a3b8" }}>
          expected sales
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#0f172a",
          borderRadius: "15px",
        }}
      >
        <p style={{ color: "#94a3b8" }}>
          Demand Level
        </p>

        <h2 style={{ marginTop: "8px" }}>
          {demandLevel}
        </h2>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#0f172a",
          borderRadius: "15px",
        }}
      >
        <p style={{ color: "#94a3b8" }}>
          AI Recommendation
        </p>

        <p
          style={{
            marginTop: "10px",
            lineHeight: "1.6",
          }}
        >
          🤖 {recommendation}
        </p>
      </div>
    </div>
  );
}

export default PredictionResult;