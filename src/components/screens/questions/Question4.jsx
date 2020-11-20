import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question4} from "../../../constants/images";

const Question4 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('4')}
            image={question4}
            {...props}
        />
    )
}
export default Question4;