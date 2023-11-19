import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Menu(props) {
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogout = (e) => {
    navigate("/");
  };

  return (
    <div className="top-menu">
      <div className="menu-items">
        <Link
          to="/dashboard"
          className={`menu-item ${
            location.pathname === "/dashboard" ? "selected" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/leaderboard"
          className={`menu-item ${
            location.pathname === "/leaderboard" ? "selected" : ""
          }`}
        >
          Leaderboard
        </Link>
        <Link
          to="/newQuestion"
          className={`menu-item ${
            location.pathname === "/newQuestion" ? "selected" : ""
          }`}
        >
          New Question
        </Link>
      </div>
      <div className="user-info">
        <div className="menu-item">User</div>
        <button className="menu-item" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Menu;
