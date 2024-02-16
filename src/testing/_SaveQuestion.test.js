import { _saveQuestion,_getQuestions } from "../utils/_DATA";

describe("_saveQuestion function", () => {
  test("rejects when required fields are missing", async () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "",
      author: "user123",
    };

    await expect(_saveQuestion(question)).rejects.toMatch(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  test("resolves with formatted question after saving", async () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "user123",
    };

    const savedQuestion = await _saveQuestion(question);

    expect(savedQuestion).toHaveProperty("id");
    expect(savedQuestion.optionOne.text).toEqual(question.optionOneText);
    expect(savedQuestion.optionTwo.text).toEqual(question.optionTwoText);
    expect(savedQuestion.author).toEqual(question.author);
  });

  test("updates questions object with the saved question", async () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "user123",
    };

    const savedQuestion = await _saveQuestion(question);

    const updatedQuestions = await _getQuestions();
    expect(updatedQuestions).toHaveProperty(savedQuestion.id);
    expect(updatedQuestions[savedQuestion.id]).toEqual(savedQuestion);
  });

  test("increments the number of questions in the questions object", async () => {
    const initialQuestionsCount = Object.keys(await _getQuestions()).length;
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "user123",
    };

    await _saveQuestion(question);

    const updatedQuestionsCount = Object.keys(await _getQuestions()).length;
    expect(updatedQuestionsCount).toEqual(initialQuestionsCount + 1);
  });
});
