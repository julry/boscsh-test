import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question2} from "../../../constants/images";

const Question2 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('2')}
            image={question2}
            {...props}
        />
    )
}

export default Question2;