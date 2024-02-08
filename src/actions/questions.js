import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { startLoading, stopLoading } from "./loading";
import { addAnswerUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(input1, input2) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(startLoading());

    return saveQuestion({
      optionOneText: input1,
      optionTwoText: input2,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(stopLoading()));
  };
}

function addAnswerQuestion(author, qid, answer) {
  return {
    type: ADD_ANSWER_QUESTION,
    author,
    qid,
    answer,
  };
}

export function handleAddAnswer(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    console.log(answer)
    return saveQuestionAnswer(authedUser, questionId, answer).then(() => {
      dispatch(addAnswerQuestion(authedUser, questionId, answer));
      dispatch(addAnswerUser(authedUser, questionId, answer));
    });
  };
}
