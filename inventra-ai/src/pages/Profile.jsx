import {
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

function Profile() {
  const savedUser = JSON.parse(
    localStorage.getItem("inventraUser")
  );

  const name = savedUser?.name || "User";
  const email = savedUser?.email || "No email available";

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
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "8px",
        }}
      >
        My Profile
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Manage your Inventra AI profile information.
      </p>

      <div
        style={{
          maxWidth: "800px",
          background: "#1e293b",
          borderRadius: "20px",
          padding: "30px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
            }}
          >
            <FaUser />
          </div>

          <div>
            <h2>{name}</h2>

            <p style={{ color: "#94a3b8" }}>
              AI Inventory Analyst
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <FaUser />

            <p
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Full Name
            </p>

            <h3>{name}</h3>
          </div>

          <div
            style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <FaEnvelope />

            <p
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Email
            </p>

            <h3>{email}</h3>
          </div>

          <div
            style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <FaGraduationCap />

            <p
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Role
            </p>

            <h3>AI Inventory Analyst</h3>
          </div>

          <div
            style={{
              background: "#0f172a",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <FaBriefcase />

            <p
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Department
            </p>

            <h3>Inventory Management</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;