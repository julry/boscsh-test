import  Intro  from './components/screens/Intro';
import  Question1  from './components/screens/questions/Question1';
import  Question2  from './components/screens/questions/Question2';
import  Question3  from './components/screens/questions/Question3';
import  Question4  from './components/screens/questions/Question4';
import  Question5  from './components/screens/questions/Question5';
import  Question6  from './components/screens/questions/Question6';
import  Question7  from './components/screens/questions/Question7';
import  Question8  from './components/screens/questions/Question8';
import  Question9  from './components/screens/questions/Question9';
import  Question10  from './components/screens/questions/Question10';
import  Final  from './components/screens/Final';
import {
    background,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
} from "./constants/images";

export const ScreenType = {
    Intro: 'intro',
    Question: 'question',
    Final: 'final',
};


export const screens = [
    {
        name: 'intro',
        component: Intro,
        type: ScreenType.Intro,
        preloadImages: [question1, background],
    },
    {
        name: 'question-1',
        component: Question1,
        type: ScreenType.Question,
        preloadImages: [question2],
        image: question1,
    },
    {
        name: 'question-2',
        component: Question2,
        type: ScreenType.Question,
        preloadImages: [question3],
        image: question2,
    },
    {
        name: 'question-3',
        component: Question3,
        type: ScreenType.Question,
        preloadImages: [question4],
        image: question3,
    },
    {
        name: 'question-4',
        component: Question4,
        type: ScreenType.Question,
        preloadImages: [question5],
        image: question4,
    },
    {
        name: 'question-5',
        component: Question5,
        type: ScreenType.Question,
        preloadImages: [question6],
        image: question5,
    },
    {
        name: 'question-6',
        component: Question6,
        type: ScreenType.Question,
        preloadImages: [question7],
        image: question6,
    },
    {
        name: 'question-7',
        component: Question7,
        type: ScreenType.Question,
        preloadImages: [question8],
        image: question7,
    },
    {
        name: 'question-8',
        component: Question8,
        type: ScreenType.Question,
        preloadImages: [question9],
        image: question8,
    },
    {
        name: 'question-9',
        component: Question9,
        type: ScreenType.Question,
        preloadImages: [question10],
        image: question9,
    },
    {
        name: 'question-10',
        component: Question10,
        type: ScreenType.Question,
        preloadImages: '',
        image: question10,
    },
    {
        name: 'final',
        component: Final,
        type: ScreenType.Final,
    },
];