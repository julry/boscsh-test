import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question6} from "../../../constants/images";

const Question6 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('6')}
            image={question6}
            {...props}
        />
    )
}
export default Question6;