import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.setItem("inventraUser", JSON.stringify(form));

    alert("Registration Successful! Please login.");
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🤖 Inventra AI</h1>

        <p>Create your account</p>

        <div className="input-box">
          <User size={20} color="#555" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <Mail size={20} color="#555" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <Lock size={20} color="#555" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button
          className="login-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="bottom-text">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;