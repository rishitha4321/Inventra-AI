import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

function Reports() {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const savedPrediction = localStorage.getItem("latestPrediction");

    if (savedPrediction) {
      setPrediction(JSON.parse(savedPrediction));
    }
  }, []);

  const handlePrint = () => {
    window.print();
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
          color: "white",
        }}
      >
        <TopNavbar />

        <h1
          style={{
            fontSize: "32px",
            marginBottom: "8px",
          }}
        >
          Reports
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Inventory and AI demand forecasting report.
        </p>

        <div
          style={{
            background: "#1e293b",
            borderRadius: "20px",
            padding: "30px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div>
              <h2>🤖 Inventra AI Report</h2>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "8px",
                }}
              >
                AI-powered inventory demand analysis
              </p>
            </div>

            <button
              onClick={handlePrint}
              style={{
                padding: "12px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🖨 Print Report
            </button>
          </div>

          {!prediction ? (
            <div
              style={{
                background: "#0f172a",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <h3>No prediction available</h3>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "10px",
                }}
              >
                Go to AI Copilot and generate a demand prediction first.
              </p>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "15px",
                  marginBottom: "25px",
                }}
              >
                <div
                  style={{
                    background: "#0f172a",
                    padding: "20px",
                    borderRadius: "14px",
                  }}
                >
                  <p style={{ color: "#94a3b8" }}>
                    Predicted Demand
                  </p>

                  <h1
                    style={{
                      color: "#22c55e",
                      marginTop: "8px",
                    }}
                  >
                    {Number(prediction.prediction).toFixed(2)}
                  </h1>
                </div>

                <div
                  style={{
                    background: "#0f172a",
                    padding: "20px",
                    borderRadius: "14px",
                  }}
                >
                  <p style={{ color: "#94a3b8" }}>
                    Store ID
                  </p>

                  <h2 style={{ marginTop: "8px" }}>
                    {prediction.store}
                  </h2>
                </div>

                <div
                  style={{
                    background: "#0f172a",
                    padding: "20px",
                    borderRadius: "14px",
                  }}
                >
                  <p style={{ color: "#94a3b8" }}>
                    Item ID
                  </p>

                  <h2 style={{ marginTop: "8px" }}>
                    {prediction.item}
                  </h2>
                </div>
              </div>

              <div
                style={{
                  background: "#0f172a",
                  padding: "25px",
                  borderRadius: "15px",
                }}
              >
                <h2 style={{ marginBottom: "20px" }}>
                  Forecast Details
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div>
                    <p style={{ color: "#94a3b8" }}>
                      Forecast Year
                    </p>

                    <h3>{prediction.year}</h3>
                  </div>

                  <div>
                    <p style={{ color: "#94a3b8" }}>
                      Forecast Month
                    </p>

                    <h3>{prediction.month}</h3>
                  </div>

                  <div>
                    <p style={{ color: "#94a3b8" }}>
                      Forecast Day
                    </p>

                    <h3>{prediction.day}</h3>
                  </div>

                  <div>
                    <p style={{ color: "#94a3b8" }}>
                      Day of Week
                    </p>

                    <h3>{prediction.dayofweek}</h3>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "25px",
                  padding: "25px",
                  background: "#0f172a",
                  borderRadius: "15px",
                }}
              >
                <h2>🤖 AI Summary</h2>

                <p
                  style={{
                    color: "#cbd5e1",
                    marginTop: "15px",
                    lineHeight: "1.7",
                  }}
                >
                  The AI model forecasts approximately{" "}
                  <strong>
                    {Number(prediction.prediction).toFixed(2)}
                  </strong>{" "}
                  units of demand for Item{" "}
                  <strong>{prediction.item}</strong> at Store{" "}
                  <strong>{prediction.store}</strong>.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;