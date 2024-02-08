import React, { useState } from "react";
import Menu from "./Menu";
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import authedUser from "../reducers/authedUser";

const Dashboard = (props) => {
  const navigate = useNavigate();

  const handleSelectQuestion = (e) => {
    e.preventDefault();
  };

  const answeredQ = Object.keys(props.answers);
  const unansweredQ = Object.keys(props.questions).filter(
    (id) => !answeredQ.includes(id)
  );
  return (
    <div className="dashboard">
      <Menu />
      <div className="questions">
        <div className="questions-container">
          <div className="qc-title">New Questions</div>

          <div className="divider"></div>
          <div className="card-container">
            {unansweredQ.map((qid) => (
              <div key={qid}>
                <QuestionCard qid={qid} />
              </div>
            ))}
          </div>
        </div>
        <div className="questions-container">
          <div className="qc-title">Done</div>

          <div className="divider"></div>
          <div className="card-container">
            {answeredQ.map((qid) => (
              <div key={qid}>
                <QuestionCard qid={qid} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const answers = users[authedUser].answers;
  return {
    answers,
    users,
    questions,
  };
};

export default connect(mapStateToProps)(Dashboard);
