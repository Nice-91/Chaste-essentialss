import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api"; // ✅ correct axios instance
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("login/", {
        username,
        password,
      });
      

      //  Save token
      localStorage.setItem("adminToken", response.data.token);

      // Redirect
      navigate("/admin");
    } catch (err) {
      console.error("Login error:", err.response || err);

      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Invalid username or password.");
      }
    } finally {
      setLoading(false); // ✅ IMPORTANT
    }
  };

  return (
    <div className="admin-login-container">
      {/* Background decorations */}
      <div className="login-background">
        <div className="gold-circle circle-1"></div>
        <div className="gold-circle circle-2"></div>
        <div className="gold-circle circle-3"></div>
      </div>

      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1>Admin Login</h1>
          <p>Chaste Essentials</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Username */}
          <div className="form-group">
            <label>Username</label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <div className="error-message">{error}</div>}

          {/* Submit */}
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-footer">
          <p>Secure Admin Access</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
