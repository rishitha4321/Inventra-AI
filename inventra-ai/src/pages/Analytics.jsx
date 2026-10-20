import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import SalesBarChart from "../components/SalesBarChart";
import RevenueLineChart from "../components/RevenueLineChart";
import InventoryPieChart from "../components/InventoryPieChart";

function Analytics() {
  const [latestPrediction, setLatestPrediction] = useState(null);

  useEffect(() => {
    const savedPrediction = localStorage.getItem("latestPrediction");

    if (savedPrediction) {
      setLatestPrediction(JSON.parse(savedPrediction));
    }
  }, []);

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
          Analytics
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Business performance and AI demand insights
        </p>

        {/* Latest AI Forecast */}
        <div
          style={{
            background: "#1e293b",
            borderRadius: "18px",
            padding: "25px",
            marginBottom: "25px",
            color: "white",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            🤖 Latest AI Forecast
          </h2>

          {!latestPrediction ? (
            <p style={{ color: "#94a3b8" }}>
              No prediction available yet. Go to AI Copilot and make a
              prediction.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "15px",
              }}
            >
              <div
                style={{
                  background: "#0f172a",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <p style={{ color: "#94a3b8" }}>
                  Predicted Demand
                </p>

                <h2
                  style={{
                    color: "#22c55e",
                    marginTop: "8px",
                  }}
                >
                  {Number(latestPrediction.prediction).toFixed(2)}
                </h2>
              </div>

              <div
                style={{
                  background: "#0f172a",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <p style={{ color: "#94a3b8" }}>
                  Store
                </p>

                <h2 style={{ marginTop: "8px" }}>
                  {latestPrediction.store}
                </h2>
              </div>

              <div
                style={{
                  background: "#0f172a",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <p style={{ color: "#94a3b8" }}>
                  Item
                </p>

                <h2 style={{ marginTop: "8px" }}>
                  {latestPrediction.item}
                </h2>
              </div>

              <div
                style={{
                  background: "#0f172a",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <p style={{ color: "#94a3b8" }}>
                  Forecast Date
                </p>

                <h3 style={{ marginTop: "8px" }}>
                  {latestPrediction.day}/
                  {latestPrediction.month}/
                  {latestPrediction.year}
                </h3>
              </div>
            </div>
          )}
        </div>

        {/* Charts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <SalesBarChart />

          <RevenueLineChart />
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <InventoryPieChart />
        </div>
      </div>
    </div>
  );
}

export default Analytics;