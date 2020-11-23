import React, { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import { getAnswerById } from '../utils/getAnswerById';
import { AnswerType, answerTypes } from '../answerTypes.config';

const DEFAULT_RESULT = AnswerType[4];

export const useResult = () => {
    const { answers } = useContext(ProgressContext);

    const resultPoints = Object.keys(answers).reduce((res, questionId) => {
        const answerId = answers[questionId];
        if (!answerId) return res;

        const answer = getAnswerById(questionId, answerId);
        const { type } = answer;
        return { ...type.reduce((result, t) => ({...result, [t]: (result[t] || 0) + 1 }), {...res}) };
    }, {});

    const maxPoints = Math.max(...Object.keys(resultPoints).map(key => resultPoints[key]));
    const resultType = Object.keys(resultPoints).find(key => resultPoints[key] === maxPoints);


    return answerTypes[resultType || DEFAULT_RESULT];
};