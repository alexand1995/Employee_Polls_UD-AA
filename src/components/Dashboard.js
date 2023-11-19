import React from "react";
import Menu from "./Menu";
import QuestionCard from "./QuestionCard";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <Menu />
      <div className="questions">
        <div className="questions-container">
          <div className="qc-title">New Questions</div>

          <div className="divider"></div>
          <div className="card-container">
            <QuestionCard author="mtsamis" timestamp="4:11 PM ! 11/23/2021" />
            <QuestionCard author="mtsamis" timestamp="4:11 PM ! 11/23/2021" />
            <QuestionCard author="mtsamis" timestamp="4:11 PM ! 11/23/2021" />
            <QuestionCard author="mtsamis" timestamp="4:11 PM ! 11/23/2021" />
            <QuestionCard author="mtsamis" timestamp="4:11 PM ! 11/23/2021" />
          </div>
        </div>
        <div className="questions-container">
          <div className="qc-title">Done</div>

          <div className="divider"></div>
          <div className="card-container">
            <QuestionCard author="mtsamis" timestamp="4:11 PM ! 11/23/2021" />
            <QuestionCard author="mtsamis" timestamp="4:11 PM ! 11/23/2021" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
