// Registration.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store the error message
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if a user with the same email already exists
    if (storedUser && storedUser.email === email) {
      setError("User already registered. Please log in.");
    } else if (email && password) {
      // Register the user if no match is found
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page after successful registration
    } else {
      setError("Please enter all fields.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
