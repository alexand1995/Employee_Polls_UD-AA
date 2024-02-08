import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const QuestionCard = (props) => {
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate(`/question/${props.question.id}`);
  };

  return (
    <div className="card" onClick={handleQuestionClick}>
      <div className="card-title">{props.question.author}</div>
      <div className="card-timestamp">{formatDate(props.question.timestamp)}</div>

      <div className="divider"></div>
      <button className="card-button">Show</button>
    </div>
  );
};

const mapStateToProps = ({ questions }, { qid }) => {
  const question = questions[qid];
  return {
    question,
  };
};

export default connect(mapStateToProps)(QuestionCard);
