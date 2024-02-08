import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

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
        <div className={`avatar-container small`}>
          {props.users[props.authedUser].avatarURL !== undefined ? (
            <img
              className="avatar-image"
              src={props.users[props.authedUser].avatarURL}
              alt={props.authedUser}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="menu-item">{props.authedUser}</div>
        <button className="menu-item-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Menu);
