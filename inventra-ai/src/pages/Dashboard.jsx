import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import KpiCard from "../components/KpiCard";
import ForecastChart from "../components/ForecastChart";
import AIInsightCard from "../components/AIInsightCard";

import { kpiData } from "../data/dashboardData";

function Dashboard() {
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
          marginLeft: "260px",
          flex: 1,
          padding: "30px",
        }}
      >
        <TopNavbar />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {kpiData.map((item, index) => (
            <KpiCard
              key={index}
              title={item.title}
              value={item.value}
              change={item.change}
            />
          ))}
        </div>

        <div
          style={{
            background: "#1e293b",
            borderRadius: "18px",
            padding: "25px",
            marginBottom: "30px",
            color: "white",
          }}
        >
          <h2
            style={{
              marginBottom: "10px",
            }}
          >
            🤖 Latest AI Forecast
          </h2>

          {!latestPrediction ? (
            <p
              style={{
                color: "#94a3b8",
              }}
            >
              No prediction available yet. Go to AI Copilot and make a
              prediction.
            </p>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Predicted Demand
                </p>

                <h1
                  style={{
                    fontSize: "42px",
                    color: "#22c55e",
                    margin: 0,
                  }}
                >
                  {Number(latestPrediction.prediction).toFixed(2)}
                </h1>

                <p
                  style={{
                    color: "#94a3b8",
                    marginTop: "5px",
                  }}
                >
                  expected sales
                </p>
              </div>

              <div
                style={{
                  background: "#0f172a",
                  padding: "20px 30px",
                  borderRadius: "14px",
                }}
              >
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Store
                </p>

                <h3>{latestPrediction.store}</h3>
              </div>

              <div
                style={{
                  background: "#0f172a",
                  padding: "20px 30px",
                  borderRadius: "14px",
                }}
              >
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Item
                </p>

                <h3>{latestPrediction.item}</h3>
              </div>

              <div
                style={{
                  background: "#0f172a",
                  padding: "20px 30px",
                  borderRadius: "14px",
                }}
              >
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Forecast Date
                </p>

                <h3>
                  {latestPrediction.day}/
                  {latestPrediction.month}/
                  {latestPrediction.year}
                </h3>
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
          }}
        >
          <ForecastChart />

          <AIInsightCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
