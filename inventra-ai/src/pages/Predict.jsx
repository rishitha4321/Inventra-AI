import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";

import { predictDemand } from "../utils/api";

function Predict() {
  const [result, setResult] = useState(null);

  const handlePredict = async (formData) => {
    try {
      const response = await predictDemand(formData);

      const prediction = Number(response.prediction);

      setResult({
        prediction: prediction,
      });

      localStorage.setItem(
        "latestPrediction",
        JSON.stringify({
          prediction: prediction,
          store: formData.store,
          item: formData.item,
          year: formData.year,
          month: formData.month,
          day: formData.day,
          dayofweek: formData.dayofweek,
        })
      );
    } catch (error) {
      console.error(error);
      alert("Prediction failed. Make sure the Flask server is running.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "260px",
          padding: "30px",
        }}
      >
        <TopNavbar />

        <h1
          style={{
            color: "white",
            marginBottom: "10px",
          }}
        >
          AI Demand Prediction
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Enter inventory details to forecast future demand.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
          }}
        >
          <PredictionForm onPredict={handlePredict} />

          <PredictionResult result={result} />
        </div>
      </div>
    </div>
  );
}

export default Predict;