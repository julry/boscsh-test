import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question3} from "../../../constants/images";

const Question3 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('3')}
            image={question3}
            {...props}
        />
    )
}

export default Question3;