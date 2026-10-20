import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { inventoryData } from "../data/analyticsData";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

function InventoryPieChart() {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "18px",
      }}
    >
      <h3 style={{ color: "white", marginBottom: "20px" }}>
        Inventory Distribution
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={inventoryData}
            dataKey="value"
            outerRadius={100}
            label
          >
            {inventoryData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default InventoryPieChart;