import { _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestionAnswer function", () => {
  test("rejects when required fields are missing", async () => {
    const invalidInput = {
      authedUser: "user123",
      qid: "",
      answer: "optionOne",
    };

    await expect(_saveQuestionAnswer(invalidInput)).rejects.toMatch(
      "Please provide authedUser, qid, and answer"
    );
  });

  test("rejects when required fields are missing", async () => {
    const invalidInput = {
      authedUser: "",
      qid: "qid",
      answer: "optionOne",
    };

    await expect(_saveQuestionAnswer(invalidInput)).rejects.toMatch(
      "Please provide authedUser, qid, and answer"
    );
  });
});
