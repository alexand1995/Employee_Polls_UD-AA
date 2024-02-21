import React from "react";
import { connect } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Menu from "./Menu";
import { handleAddAnswer } from "../actions/questions";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Question = (props) => {
  const navigate = useNavigate();
  if (!props.question) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('redirectTo','login');
    return <Navigate to="/*" />;
  }

  const { question, hasAnswered, optionAnswer, users, authedUser } = props;
  const { optionOne, optionTwo } = question;
  const selectedOption = hasAnswered ? optionAnswer : null;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercentage = (
    (optionOne.votes.length / totalVotes) *
    100
  ).toFixed(2);
  const optionTwoPercentage = (
    (optionTwo.votes.length / totalVotes) *
    100
  ).toFixed(2);

  const handleClick = (e) => {
    e.preventDefault();
    const answer = e.target.value;
    props.dispatch(handleAddAnswer(props.question.id, answer));

    navigate("/dashboard");
    if (question === null) {
      return <p>This Question doesn't exist</p>;
    }
  };

  return (
    <div>
      <Menu />
      <h1 style={{ textAlign: "center" }}>Poll by {question.author}</h1>

      <img
        src={users[question.author].avatarURL}
        alt="Author"
        style={{
          width: "150px",
          height: "150px",
          display: "block",
          margin: "0 auto",
        }}
      />

      <h2 style={{ textAlign: "center" }}>Would you rather</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="option">
              <div>{question.optionOne.text}</div>
              <div className="break-line"></div>
              <div
                className={
                  hasAnswered && selectedOption === "optionOne"
                    ? "optionButtonSelected"
                    : "optionButton button1 text"
                }
              >
                <button
                  value="optionOne"
                  onClick={(e) => handleClick(e, question.id)}
                >
                  {hasAnswered && selectedOption === "optionOne"
                    ? "Selected"
                    : "Click"}
                </button>
              </div>
              {hasAnswered ? (
                <p>
                  {optionOnePercentage}% | {optionOne.votes.length} OUT OF{" "}
                  {totalVotes} VOTES
                </p>
              ) : (
                <></>
              )}
            </div>

            <div className="option">
              <div>{question.optionTwo.text}</div>

              <div className="break-line"></div>

              <div
                className={
                  hasAnswered && selectedOption === "optionTwo"
                    ? "optionButtonSelected"
                    : "optionButton button1 text"
                }
              >
                <button
                  value="optionTwo"
                  onClick={(e) => handleClick(e, question.id)}
                >
                  {hasAnswered && selectedOption === "optionTwo"
                    ? "Selected"
                    : "Click"}
                </button>
              </div>
              {hasAnswered ? (
                <p>
                  {optionTwoPercentage}% | {optionTwo.votes.length} OUT OF{" "}
                  {totalVotes} VOTES
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];

  const hasAnswered = authedUser
    ? Object.keys(users[authedUser].answers).includes(id)
    : false;

  const optionAnswer = users[authedUser].answers[id]
    ? users[authedUser].answers[id]
    : null;

  return {
    question,
    hasAnswered,
    optionAnswer,
    users,
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(Question));
