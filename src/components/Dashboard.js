import React, { useState } from "react";
import Menu from "./Menu";
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("unanswered");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const answeredQ = Object.keys(props.answers);
  const unansweredQ = Object.keys(props.questions).filter(
    (id) => !answeredQ.includes(id)
  );

  return (
    <div className="dashboard">
      <Menu />
      <div className="tabs">
        <div
          className={`tab ${activeTab === "unanswered" ? "active" : ""}`}
          onClick={() => handleTabChange("unanswered")}
        >
          Unanswered
        </div>
        <div
          className={`tab ${activeTab === "answered" ? "active" : ""}`}
          onClick={() => handleTabChange("answered")}
        >
          Answered
        </div>
      </div>
      <div className="questions">
        <div className="questions-container">
          <div className="qc-title">
            {activeTab === "unanswered" ? "Unanswered Questions" : "Answered Questions"}
          </div>
          <div className="divider"></div>
          <div className="card-container">
            {activeTab === "unanswered"
              ? unansweredQ.map((qid) => (
                  <div key={qid}>
                    <QuestionCard qid={qid} />
                  </div>
                ))
              : answeredQ.map((qid) => (
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
