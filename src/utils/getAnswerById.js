import {getQuestionByID} from "./getQuestionByID";

export const getAnswerById = (questionId, answerId) => {
    return getQuestionByID(questionId).answers.find(answer => answer.id === answerId);
};