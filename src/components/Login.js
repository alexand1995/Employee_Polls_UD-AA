import React, { useState } from "react";
import loginImage from "../images/log_in.png";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogin } from "../actions/authedUser";

const Login = (props) => {
  const [selectedUser, setSelectedUser] = useState("");
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleLoginButton = (e) => {
    e.preventDefault();
    props.dispatch(handleLogin(selectedUser));
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Employees Polls</h1>
        <img src={loginImage} className="login-image" alt="Login-Image" />

        <div className="login-form">
          <h2>Log In</h2>
          <h3>User</h3>

          <div className="login-input-group" data-testid="username_dropdown">
            <select value={selectedUser} onChange={handleUserChange} data-testid="select-user">
              <option value="">Select User</option>
              {Object.keys(props.users).map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <button
            className="loginBtn"
            onClick={handleLoginButton}
            disabled={!selectedUser}
            data-testid="login_button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);
