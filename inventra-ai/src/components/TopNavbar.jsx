import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function TopNavbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "34px",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Welcome back to Inventra AI
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
          color: "white",
          fontSize: "22px",
        }}
      >
        <FaSearch />
        <FaBell />
        <FaUserCircle size={34} />
      </div>
    </div>
  );
}

export default TopNavbar;