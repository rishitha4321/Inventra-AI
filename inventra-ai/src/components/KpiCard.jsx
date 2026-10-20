import { motion } from "framer-motion";

function KpiCard({ title, value, change }) {
  const positive = change.startsWith("+");

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      style={{
        background: "rgba(30,41,59,0.85)",
        borderRadius: "20px",
        padding: "24px",
        color: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        {value}
      </h2>

      <span
        style={{
          color: positive ? "#22c55e" : "#ef4444",
          fontWeight: "600",
        }}
      >
        {change}
      </span>
    </motion.div>
  );
}

export default KpiCard;