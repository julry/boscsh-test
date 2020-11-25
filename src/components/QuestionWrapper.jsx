import React, {useCallback, useContext, useState} from "react";
import {questions} from "../questions.config";
import {ProgressContext} from '../context/ProgressContext';
import {RadioButton} from "./RadioButton";
import styled from 'styled-components';

const QuestionWrapperStyled = styled.div`
    padding: 26px 33px 0 23px;
    @media screen and (min-width: 640px) {
      padding: 43px 38px 0;
    }
`;

const QuestionLabel = styled.p`
  font-size: 12px;
  font-weight: 400;
  @media screen and (max-height: 700px){
    font-size: 9px;
  }
  @media screen and (min-width: 640px) {
      font-size: 11px;
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
        font-size: 8px;
    }
`

const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    @media screen and (max-height: 600px){
        top: 90px;
    } 
   
    
    @media screen and (max-height: 640px) and (orientation: landscape){
        background-color: white;
        opacity: 0.5;
    }
`
const Background = styled.img`
    width: 100%;
    height: 100%;
`


const Question = styled.p`
  margin: 10px 0;
  font-size: 14px;
  font-weight: 600;
  @media screen and (max-width: 360px){
    font-size: 10px;
    margin: 6px 0;
  }
  @media screen and (min-width: 640px) {
      font-size: 12px;
      @media screen and (max-height: 750px){
        font-size:11px;
      }
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
        font-size: 10px;
    }
`

const Answer = styled.div`
  font-weight: 500;
  font-size: 12px;
  @media screen and (max-height: 700px){
    font-size: 8px;
  }
  @media screen and (min-width: 640px) {
      font-size: 11px;
      @media screen and (max-height: 750px){
          font-size:10px;
      }
  }
  @media screen and (max-height: 640px) and (orientation: landscape){
        font-size: 8px;
    }
`
export const QuestionWrapper = props => {
    const { question, image } = props;
    const [questionAnswers, setQuestionAnswers] = useState(question.answers);
    const { answers, setAnswer, setNext } = useContext(ProgressContext);

    const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    const questionsCount = questions.length;


    const onNext = () => {
        setNext();
    };

    const handleAnswerChange = useCallback((answerId) => {
        setAnswer(question.id, answerId);
        onNext();
    }, [question, setAnswer]);

    return (
        <QuestionWrapperStyled>
            <QuestionLabel> Вопрос {questionNumber} / {questionsCount} </QuestionLabel>
            <div>
                <Question>{question.text}</Question>
                <Answer>
                    {questionAnswers.map(answer => (
                        <RadioButton
                            key={answer.id}
                            name={question.id}
                            value={answer.id}
                            checked={answers[question.id] === answer.id}
                            onChange={handleAnswerChange}
                        >
                            {answer.text}
                        </RadioButton>
                    ))}
                </Answer>
            </div>
            <BackgroundWrapper>
                <Background src={image}/>
            </BackgroundWrapper>
        </QuestionWrapperStyled>
    );
};