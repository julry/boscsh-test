import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question9} from "../../../constants/images";

const Question9 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('9')}
            image={question9}
            {...props}
        />
    )
}

export default Question9;