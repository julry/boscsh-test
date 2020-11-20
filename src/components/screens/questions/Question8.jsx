import React from "react";
import {getQuestionByID} from "../../../utils/getQuestionByID";
import {QuestionWrapper} from "../../QuestionWrapper";
import {question8} from "../../../constants/images";

const Question8 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionByID('8')}
            image={question8}
            {...props}
        />
    )
}

export default Question8;