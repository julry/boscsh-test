import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question5} from "../../../constants/images";

const Question5 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('5')}
            image={question5}
            {...props}
        />
    )
}

export default Question5;