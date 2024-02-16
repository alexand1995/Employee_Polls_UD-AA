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
                    )}
                    {props.users[uid].name}
                  </td>
                  <td>{props.questionsByUser[uid]?.answered || 0}</td>
                  <td>{props.questionsByUser[uid]?.created || 0}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users, questions }) => {
  const questionsByUser = Object.values(questions).reduce((acc, question) => {
    const author = question.author;
    if (acc[author]) {
      acc[author].created += 1;
    } else {
      acc[author] = { created: 1, answered: 0 };
    }
    return acc;
  }, {});

  Object.values(users).forEach((user) => {
    const answered = Object.keys(user.answers).length;
    if (questionsByUser[user.id]) {
      questionsByUser[user.id].answered = answered;
    } else {
      questionsByUser[user.id] = { created: 0, answered };
    }
  });

  return {
    users,
    questionsByUser,
  };
};

export default connect(mapStateToProps)(Leaderboard);
