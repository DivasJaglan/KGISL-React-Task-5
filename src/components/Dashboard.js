// Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1 className="logo">MyApp</h1>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div className="content">
        <h2>Welcome to the Dashboard</h2>
        <p>
          This is your main dashboard area. Here you can access various sections
          of the app, manage your profile, and update settings.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
