import React from "react";
import Menu from "./Menu";
import { connect } from "react-redux";

function Leaderboard(props) {
  return (
    <div>
      <Menu />
      <div className="excel-table-container">
        <div className="table-wrapper">
          <table className="excel-table">
            <thead>
              <tr>
                <th>Users</th>
                <th>Answered</th>
                <th>Created</th>
              </tr>
            </thead>
            {Object.keys(props.users).map((uid) => (
              <tbody key={uid}>
                <tr>
                  <td>
                    {props.users[uid].avatarURL !== undefined ? (
                      <img
                        className="avatar-image small"
                        src={props.users[uid].avatarURL}
                        alt={props.users[uid].id}
                      />
                    ) : (
                      <></>
                    )}{props.users[uid].name}
                  </td>
                  <td>{Object.keys(props.users[uid].answers).length}</td>
                  <td>{props.users[uid].questions.length}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  const sortedUsers = Object.values(users).sort((a, b) => {
    const calculateTotal = (user) =>
      Object.keys(user.answers).length + user.questions.length;
    const aTotal = calculateTotal(a);
    const bTotal = calculateTotal(b);
    return bTotal - aTotal;
  });

  return {
    users: sortedUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);
