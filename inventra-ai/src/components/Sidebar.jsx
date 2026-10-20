import {
  FaChartPie,
  FaRobot,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaFileAlt,
} from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "25px",
        position: "fixed",
        left: 0,
        top: 0,
        borderRight: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "45px",
        }}
      >
        🤖 Inventra AI
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <MenuItem
          icon={<FaChartPie />}
          text="Dashboard"
          active={location.pathname === "/dashboard"}
          onClick={() => navigate("/dashboard")}
        />

        <MenuItem
          icon={<FaChartLine />}
          text="Analytics"
          active={location.pathname === "/analytics"}
          onClick={() => navigate("/analytics")}
        />

        <MenuItem
          icon={<FaRobot />}
          text="AI Copilot"
          active={location.pathname === "/predict"}
          onClick={() => navigate("/predict")}
        />

        <MenuItem
          icon={<FaFileAlt />}
          text="Reports"
          active={location.pathname === "/reports"}
          onClick={() => navigate("/reports")}
        />

        <MenuItem
          icon={<FaUser />}
          text="Profile"
          active={location.pathname === "/profile"}
          onClick={() => navigate("/profile")}
        />

        <MenuItem
          icon={<FaCog />}
          text="Settings"
          active={location.pathname === "/settings"}
          onClick={() => navigate("/settings")}
        />

        <MenuItem
          icon={<FaSignOutAlt />}
          text="Logout"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}

function MenuItem({ icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "14px",
        borderRadius: "12px",
        cursor: "pointer",
        transition: "0.3s",
        fontSize: "18px",
        background: active ? "#2563eb" : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = "#1e40af";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = "transparent";
        }
      }}
    >
      {icon}
      {text}
    </div>
  );
}

export default Sidebar;