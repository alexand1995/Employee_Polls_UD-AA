import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";

function NewQuestion({ dispatch, id }) {
  const navigate = useNavigate();

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
    setIsButtonDisabled(e.target.value === "" || input2 === "");
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
    setIsButtonDisabled(e.target.value === "" || input1 === "");
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(input1, input2));

    setInput1("");
    setInput2("");

    if (!id) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login">
      <Menu />
      <div className="login-container">
        <h1>Would You Rather</h1>
        <h3>Create Your Own Poll</h3>

        <div className="login-form">
          <h3>First Option</h3>

          <input
            className="new-question-input"
            type="text"
            placeholder="Option One"
            value={input1}
            onChange={handleInput1Change}
          />
          <br />
          <h3>Second Option</h3>
          <input
            className="new-question-input"
            type="text"
            placeholder="Option Two"
            value={input2}
            onChange={handleInput2Change}
          />
          <br />
          <button
            className="new-questionBtn"
            onClick={handleButtonClick}
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect()(NewQuestion);
