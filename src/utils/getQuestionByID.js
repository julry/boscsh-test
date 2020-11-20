import { questions } from "../questions.config";

export const getQuestionByID = (id) => {
    return questions.find(question => question.id === id);
};