import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question7} from "../../../constants/images";

const Question7 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('7')}
            image={question7}
            {...props}
        />
    )
}
export default Question7;