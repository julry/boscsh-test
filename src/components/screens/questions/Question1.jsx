import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question1} from "../../../constants/images";

const Question1 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('1')}
            image={question1}
            {...props}
        />
    )
}

export default Question1;