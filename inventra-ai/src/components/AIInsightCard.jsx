import { useEffect, useState } from "react";

function AIInsightCard() {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("latestPrediction");
    if (saved) {
      setPrediction(JSON.parse(saved));
    }
  }, []);

  let level = "No Data";
  let color = "#94a3b8";
  let message = "Generate a prediction to receive AI insights.";

  if (prediction) {
    const value = Number(prediction.prediction);

    if (value >= 100) {
      level = "High Demand";
      color = "#ef4444";
      message =
        "Demand is expected to be very high. Increase inventory and prepare for restocking.";
    } else if (value >= 50) {
      level = "Medium Demand";
      color = "#f59e0b";
      message =
        "Demand is stable. Maintain sufficient inventory and monitor sales.";
    } else {
      level = "Low Demand";
      color = "#22c55e";
      message =
        "Demand is currently low. Avoid overstocking and optimize warehouse space.";
    }
  }

  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "18px",
        padding: "25px",
        color: "white",
      }}
    >
      <h2>🤖 AI Recommendation</h2>

      <div
        style={{
          marginTop: "20px",
          background: "#0f172a",
          padding: "20px",
          borderRadius: "14px",
        }}
      >
        <p style={{ color: "#94a3b8" }}>Demand Status</p>

        <h2 style={{ color, marginTop: "10px" }}>{level}</h2>

        <p
          style={{
            marginTop: "15px",
            lineHeight: "1.7",
            color: "#e5e7eb",
          }}
        >
          {message}
        </p>
      </div>

      {prediction && (
        <div
          style={{
            marginTop: "18px",
            padding: "15px",
            background: "#0f172a",
            borderRadius: "12px",
          }}
        >
          <p style={{ color: "#94a3b8" }}>Latest Forecast</p>

          <h3 style={{ marginTop: "8px" }}>
            {Number(prediction.prediction).toFixed(2)} units
          </h3>
        </div>
      )}
    </div>
  );
}

export default AIInsightCard;