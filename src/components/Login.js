import React, { useState } from "react";
import loginImage from "../images/log_in.png";
import { useNavigate } from "react-router-dom";

function Login() {
  // Dummy user data for the dropdown user-list
  const users = [
    { id: 1, name: "Alexandros" },
    { id: 2, name: "Stavros" },
    { id: 3, name: "Lena" },
  ];

  const [selectedUser, setSelectedUser] = useState("");
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
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

          <div className="login-input-group">
            <select value={selectedUser} onChange={handleUserChange}>
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <button
            className="loginBtn"
            onClick={handleLogin}
            disabled={!selectedUser}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
