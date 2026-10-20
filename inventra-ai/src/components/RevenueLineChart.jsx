import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "../data/analyticsData";

function RevenueLineChart() {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "18px",
      }}
    >
      <h3 style={{ color: "white", marginBottom: "20px" }}>
        Revenue Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#22c55e"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueLineChart;