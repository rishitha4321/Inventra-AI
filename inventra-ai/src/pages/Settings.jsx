import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  const handleSave = () => {
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("emailAlerts", emailAlerts);

    alert("Settings saved successfully!");
  };

  const handleReset = () => {
    setNotifications(true);
    setEmailAlerts(true);

    localStorage.setItem("notifications", true);
    localStorage.setItem("emailAlerts", true);

    alert("Settings reset successfully!");
  };

  return (
    <div
      style={{
        marginLeft: "260px",
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
        Settings
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Manage your Inventra AI preferences.
      </p>

      <div
        style={{
          maxWidth: "800px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>
          Preferences
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#0f172a",
            padding: "20px",
            borderRadius: "14px",
            marginBottom: "20px",
          }}
        >
          <div>
            <h3>🔔 Notifications</h3>

            <p style={{ color: "#94a3b8", marginTop: "5px" }}>
              Receive inventory alerts and prediction notifications.
            </p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#0f172a",
            padding: "20px",
            borderRadius: "14px",
            marginBottom: "30px",
          }}
        >
          <div>
            <h3>📧 Email Alerts</h3>

            <p style={{ color: "#94a3b8", marginTop: "5px" }}>
              Receive important inventory updates by email.
            </p>
          </div>

          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={(e) => setEmailAlerts(e.target.checked)}
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <button
            onClick={handleSave}
            style={{
              padding: "14px 25px",
              border: "none",
              borderRadius: "10px",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Save Settings
          </button>

          <button
            onClick={handleReset}
            style={{
              padding: "14px 25px",
              border: "1px solid #475569",
              borderRadius: "10px",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Reset
          </button>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #334155",
            margin: "35px 0",
          }}
        />

        <h2 style={{ marginBottom: "15px" }}>
          Account
        </h2>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "14px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#dc2626",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;