import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question10} from "../../../constants/images";

const Question10 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('10')}
            image={question10}
            {...props}
        />
    )
}

export default Question10;