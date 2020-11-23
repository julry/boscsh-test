import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {screens} from "../screens.config";
import {preloadImage} from "../utils/preloadImage";
import { ProgressProvider } from '../context/ProgressContext.js';
import {getAnswerById} from "../utils/getAnswerById";
import {background, iphone} from "../constants/images";


const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -2;
    overflow: hidden;
`
const Background = styled.img`
    width: 100%;
    height: 100%;
`

const Image = styled.img`
  display: none;
  @media screen and (min-width: 640px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    height: 770px;
    max-height: 100%;
    width: 400px;
    max-width: 51.948%;
    display: block;
    z-index: 100;
    pointer-events: none;
  }
`;
const ComponentWrapper = styled.div`
  
  @media screen and (min-width: 640px) {
    width: 45vh;
    max-height: 695px;
    height: 90vh;
    max-width: 375px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
    @media (max-height: 750px){
        width: 50vw;
    }
  }
`;

export function ScreenWrapper() {
    //
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    //
    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const [answers, setAnswers] = useState([]);

    const setNext = () => {
        const canSet = currentScreenIndex < screens.length - 1;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex + 1);
        }
    };

    const setAnswer = (questionId, answerId) => {
        setAnswers(answers => ({ ...answers, [questionId]: answerId }));
        const answer = getAnswerById(questionId, answerId);
        const { type } = answer;
    };

    const { component,preloadImages, ...screen } = screens[currentScreenIndex] || {};

    const Component = component || (() => null);

    useEffect(() => {
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [preloadImages]);

    const progressProviderValue = {
        screen,
        answers,
        setAnswer,
        setNext,
    };

    return (
        <div>
            <ProgressProvider value={progressProviderValue}>
                <Image src={iphone} />
                <ComponentWrapper>
                    <Component />
                    {currentScreenIndex!==0 && <BackgroundWrapper>
                            <Background src={background} />
                    </BackgroundWrapper>
                    }
                </ComponentWrapper>
            </ProgressProvider>
        </div>
    );
}
