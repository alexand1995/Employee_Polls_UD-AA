import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { startLoading, stopLoading } from "./loading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(startLoading);
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(stopLoading);
    });
  };
}
