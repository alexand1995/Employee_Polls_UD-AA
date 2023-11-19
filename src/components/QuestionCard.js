import React from "react";
import { useNavigate } from "react-router-dom";

function QuestionCard(props) {
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate(`/question/1`);
  };

  return (
    <div className="card" onClick={handleQuestionClick}>
      <div className="card-title">{props.author}</div>
      <div className="card-timestamp">{props.timestamp}</div>

      <div className="divider"></div>
      <button className="card-button">Show</button>
    </div>
  );
}

export default QuestionCard;
