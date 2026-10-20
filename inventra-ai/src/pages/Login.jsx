import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter Email and Password.");
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("inventraUser")
    );

    if (!savedUser) {
      alert("No account found. Please register first.");
      navigate("/register");
      return;
    }

    if (
      email !== savedUser.email ||
      password !== savedUser.password
    ) {
      alert("Incorrect email or password.");
      return;
    }

    localStorage.setItem("inventraLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🤖 Inventra AI</h1>

        <p>AI Powered Inventory Intelligence</p>

        <div className="input-box">
          <User size={20} color="#555" />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="input-box">
          <Lock size={20} color="#555" />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="bottom-text">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;