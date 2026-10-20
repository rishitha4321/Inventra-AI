import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { forecastData } from "../data/dashboardData";

function ForecastChart() {
  return (
    <div
      style={{
        background: "rgba(30,41,59,0.85)",
        borderRadius: "20px",
        padding: "25px",
        color: "white",
        height: "380px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        📈 Sales Forecast
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={forecastData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

          <XAxis dataKey="day" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={4}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ForecastChart;