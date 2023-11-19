import React from "react";
import Menu from "./Menu";

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
            <tbody>
              <tr>
                <td>Alexandros</td>
                <td>2</td>
                <td>2</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Alexandros</td>
                <td>2</td>
                <td>2</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Alexandros</td>
                <td>2</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
