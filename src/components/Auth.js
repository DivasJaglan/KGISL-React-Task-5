// Auth.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email) {
      setError("User already registered. Please log in.");
    } else if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Registration successful!");
      setEmail("");
      setPassword("");
      setIsRegister(false);
    } else {
      setError("Please enter all fields.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const toggleAuthMode = () => {
    setIsRegister(!isRegister);
    setError("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={isRegister ? handleRegister : handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <button onClick={toggleAuthMode} className="toggle-button">
        {isRegister
          ? "Already have an account? Log in"
          : "Don't have an account? Register"}
      </button>
    </div>
  );
}

export default Auth;
